#!/usr/bin/env node
/**
 * Live WCAG contrast audit of the /style-guide/ page.
 *
 * Unlike a hardcoded token list, this drives the REAL rendered page with a
 * headless browser and checks the computed colour of every visible text node
 * against its actual (composited) background. It reads the DOM, so it never
 * goes stale as the page evolves.
 *
 * It reuses a dev server already running on :4321 if there is one; otherwise it
 * boots a throwaway `astro dev` on port 4398 and tears it down afterwards.
 * Override the target with AUDIT_BASE_URL (e.g. a preview deploy).
 *
 * Run: `node scripts/audit-style-guide.mjs`  (or `npm run audit:style-guide`)
 * Exit code: 1 if any text node fails WCAG 2.1 AA.
 */
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { execFileSync } from 'node:child_process';

const PAGE_PATH = '/style-guide/';
const DEFAULT_BASE = 'http://localhost:4321';
const BOOT_PORT = 4398;

/* ─── locate or boot a dev server ─── */

async function reachable(base) {
  try {
    const res = await fetch(`${base}${PAGE_PATH}`, { method: 'HEAD' });
    return res.ok || res.status === 404 ? true : res.status < 500;
  } catch {
    return false;
  }
}

async function ensureServer() {
  const preferred = process.env.AUDIT_BASE_URL ?? DEFAULT_BASE;
  if (await reachable(preferred)) {
    console.log(`[audit] using running server at ${preferred}`);
    return { base: preferred, stop: () => {} };
  }
  if (process.env.AUDIT_BASE_URL) {
    throw new Error(`AUDIT_BASE_URL=${preferred} is not reachable`);
  }

  const base = `http://localhost:${BOOT_PORT}`;
  console.log(`[audit] no server on :4321 — booting throwaway dev server on :${BOOT_PORT}...`);
  try { execFileSync('bash', ['-c', `lsof -ti:${BOOT_PORT} | xargs kill -9`], { stdio: 'ignore' }); } catch {}
  const child = spawn('npx', ['astro', 'dev', '--port', String(BOOT_PORT)], { stdio: 'ignore' });
  const stop = () => {
    try { child.kill('SIGTERM'); } catch {}
    try { execFileSync('bash', ['-c', `lsof -ti:${BOOT_PORT} | xargs kill -9`], { stdio: 'ignore' }); } catch {}
  };
  process.on('exit', stop);

  for (let i = 0; i < 60; i++) {
    if (await reachable(base)) return { base, stop };
    await new Promise((r) => setTimeout(r, 500));
  }
  stop();
  throw new Error('dev server did not start within 30s');
}

/* ─── colour math ─── */

const chan = (c) => {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
};
const lum = ({ r, g, b }) => 0.2126 * chan(r) + 0.7152 * chan(g) + 0.0722 * chan(b);
const contrast = (a, b) => {
  const [hi, lo] = lum(a) > lum(b) ? [lum(a), lum(b)] : [lum(b), lum(a)];
  return (hi + 0.05) / (lo + 0.05);
};
const hex = ({ r, g, b }) => '#' + [r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('').toUpperCase();
// WCAG large text: >=18.66px bold (>=700), else >=24px.
const isLarge = (px, weight) => (weight >= 700 ? px >= 18.66 : px >= 24);

/* ─── in-page collector (runs in the browser) ─── */

function collectInPage() {
  const parse = (str) => {
    const m = str.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const p = m[1].split(',').map((v) => parseFloat(v.trim()));
    return { r: p[0], g: p[1], b: p[2], a: p[3] == null ? 1 : p[3] };
  };
  const over = (top, bot) => ({
    r: Math.round(top.r * top.a + bot.r * (1 - top.a)),
    g: Math.round(top.g * top.a + bot.g * (1 - top.a)),
    b: Math.round(top.b * top.a + bot.b * (1 - top.a)),
  });

  // Effective background: walk ancestors, compositing translucent layers until
  // an opaque colour is hit. Bail (image:true) if a gradient/image is in the way.
  const effBg = (start) => {
    const layers = [];
    let node = start;
    while (node && node.nodeType === 1) {
      const cs = getComputedStyle(node);
      if (cs.backgroundImage && cs.backgroundImage !== 'none') return { image: true };
      const c = parse(cs.backgroundColor);
      if (c && c.a > 0) {
        if (c.a >= 0.999) {
          let base = { r: c.r, g: c.g, b: c.b };
          for (let i = layers.length - 1; i >= 0; i--) base = over(layers[i], base);
          return base;
        }
        layers.push(c);
      }
      node = node.parentElement;
    }
    let base = { r: 255, g: 255, b: 255 };
    for (let i = layers.length - 1; i >= 0; i--) base = over(layers[i], base);
    return base;
  };

  const visible = (el) => {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || parseFloat(cs.opacity) === 0) return false;
    if (el.closest('[aria-hidden="true"]')) return false;
    return el.getClientRects().length > 0;
  };

  // Short, human-readable locator: nearest ancestor id (a section anchor) plus
  // the element's tag and first couple of classes.
  const locate = (el) => {
    const section = el.closest('[id]');
    const anchor = section ? `#${section.id} ` : '';
    const cls = (el.getAttribute('class') || '').split(/\s+/).filter(Boolean).slice(0, 2).join('.');
    return `${anchor}${el.tagName.toLowerCase()}${cls ? '.' + cls : ''}`;
  };

  const out = [];
  for (const el of document.querySelectorAll('body *')) {
    // Only elements with their OWN visible text (not just descendants').
    const own = Array.from(el.childNodes)
      .filter((n) => n.nodeType === 3 && n.textContent.trim().length > 0)
      .map((n) => n.textContent.trim())
      .join(' ')
      .trim();
    if (!own || !visible(el)) continue;

    const cs = getComputedStyle(el);
    const fg = parse(cs.color);
    if (!fg) continue;
    const bg = effBg(el);
    if (bg.image) {
      out.push({ sample: own.slice(0, 48), image: true });
      continue;
    }
    const fgSolid = fg.a >= 0.999 ? { r: fg.r, g: fg.g, b: fg.b } : over(fg, bg);
    out.push({
      sample: own.slice(0, 48),
      path: locate(el),
      fg: fgSolid,
      bg,
      px: parseFloat(cs.fontSize),
      weight: parseInt(cs.fontWeight, 10) || 400,
    });
  }
  return out;
}

/* ─── run ─── */

const RESET = '\x1b[0m', RED = '\x1b[31m', YEL = '\x1b[33m', GRN = '\x1b[32m', DIM = '\x1b[2m';
const pad = (s, n) => (String(s) + ' '.repeat(n)).slice(0, n);

const { base, stop } = await ensureServer();
const browser = await chromium.launch();
let failures = 0;
try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 2400 }, deviceScaleFactor: 1 });
  await page.goto(`${base}${PAGE_PATH}`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);
  const raw = await page.evaluate(collectInPage);

  // Dedup by (fg, bg, size-class); keep one example + a count.
  const seen = new Map();
  const skipped = [];
  for (const r of raw) {
    if (r.image) { skipped.push(r.sample); continue; }
    const large = isLarge(r.px, r.weight);
    const key = `${hex(r.fg)}|${hex(r.bg)}|${large ? 'L' : 'N'}`;
    if (!seen.has(key)) {
      seen.set(key, { ...r, large, ratio: contrast(r.fg, r.bg), count: 1 });
    } else {
      seen.get(key).count++;
    }
  }

  const rows = [...seen.values()].map((r) => {
    const floor = r.large ? 3.0 : 4.5;
    const aaa = r.large ? 4.5 : 7.0;
    let status, color;
    if (r.ratio >= aaa) { status = 'PASS AAA'; color = GRN; }
    else if (r.ratio >= floor) { status = 'PASS AA'; color = YEL; }
    else { status = 'FAIL'; color = RED; failures++; }
    return { ...r, status, color, floor };
  });
  // Fails first, then by ratio ascending (closest-to-edge on top).
  rows.sort((a, b) => (a.status === 'FAIL' ? -1 : b.status === 'FAIL' ? 1 : a.ratio - b.ratio));

  const H = ['Example text', 'Text', 'Surface', 'Size', 'Ratio', 'Status'];
  const W = [40, 9, 9, 12, 8, 10];
  console.log();
  console.log(H.map((h, i) => pad(h, W[i])).join(' '));
  console.log(W.map((w) => '-'.repeat(w)).join(' '));
  for (const r of rows) {
    console.log([
      pad(r.sample, W[0]),
      pad(hex(r.fg), W[1]),
      pad(hex(r.bg), W[2]),
      pad(`${Math.round(r.px)}px/${r.weight}${r.large ? ' lg' : ''}`, W[3]),
      pad(`${r.ratio.toFixed(2)}:1`, W[4]),
      `${r.color}${pad(r.status + (r.count > 1 ? ` x${r.count}` : ''), W[5])}${RESET}`,
    ].join(' '));
  }

  const failRows = rows.filter((r) => r.status === 'FAIL');
  if (failRows.length) {
    console.log();
    console.log(`${RED}Failures (fix these):${RESET}`);
    for (const r of failRows) {
      const need = r.large ? '3.0' : '4.5';
      console.log(`  ${RED}${r.ratio.toFixed(2)}:1${RESET} (need ${need})  ${hex(r.fg)} on ${hex(r.bg)}  ${Math.round(r.px)}px/${r.weight}`);
      console.log(`  ${DIM}${r.path}${RESET}`);
      console.log(`  ${DIM}"${r.sample}"${RESET}`);
    }
  }

  console.log();
  const fails = failRows.length;
  console.log(`${DIM}${rows.length} unique text/surface pairs (${raw.length - skipped.length} nodes)${RESET}`);
  console.log(
    `${GRN}${rows.filter((r) => r.status === 'PASS AAA').length} AAA${RESET}, ` +
    `${YEL}${rows.filter((r) => r.status === 'PASS AA').length} AA${RESET}, ` +
    `${fails ? RED : GRN}${fails} fail${RESET}` +
    (skipped.length ? `${DIM}, ${skipped.length} skipped (image/gradient bg)${RESET}` : ''),
  );
  console.log();
} finally {
  await browser.close();
  stop();
}

process.exit(failures > 0 ? 1 : 0);
