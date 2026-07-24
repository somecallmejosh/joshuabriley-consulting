// Derives a hand-drawn "crude sketch" SVG from a clean wireframe SVG.
//
//   node src/assets/wireframe-kit/sketchify.mjs logatot
//   node src/assets/wireframe-kit/sketchify.mjs logatot 01-voiceboard
//
// Reads  public/images/projects/<project>/wires-and-flows/NN-name.svg
// Writes public/images/projects/<project>/wires-and-flows/NN-name-sketch.svg
//
// The two artifacts in a FidelityPlate have to be the same drawing at two
// fidelities — a sketch that disagrees with its wireframe reads as two unrelated
// pictures. So the sketch is generated from the wireframe rather than drawn
// separately: every rect, line and circle is re-struck as a wobbling polyline at
// 0.8 scale, and labels are re-set in a marker face.
//
// The jitter is seeded from each element's own geometry, so re-running produces
// a byte-identical file. Without that, every regeneration would churn the whole
// SVG in git for no visual change.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const [project, ...only] = process.argv.slice(2);
if (!project) {
  console.error('usage: sketchify.mjs <project> [filter...]');
  process.exit(1);
}
const DIR = path.resolve(
  HERE,
  '../../../public/images/projects',
  project,
  'wires-and-flows',
);

const SCALE = 0.8;
const INK = '#3a3a3a';
const FAINT = '#9a9a9a';
const HAND = 'Comic Sans MS, Chalkboard SE, Bradley Hand, cursive';

// A small deterministic PRNG. Seeded per-element from its coordinates so the
// same input always wobbles the same way.
function rng(seed) {
  let s = Math.imul(seed ^ 0x9e3779b9, 0x85ebca6b) >>> 0;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

const num = (v, d = 0) => (v === undefined || v === '' ? d : parseFloat(v));
const r2 = (n) => Math.round(n * 10) / 10;

// One hand-struck stroke between two points: a few intermediate samples pushed
// off the true line, plus a slight overshoot at each end the way a pen does.
function stroke(x1, y1, x2, y2, seed, amp = 1.3) {
  const rand = rng(seed);
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  if (len < 0.5) return '';
  const nx = -dy / len;
  const ny = dx / len;
  const steps = Math.max(2, Math.min(9, Math.round(len / 60) + 1));
  const over = 0.004 + rand() * 0.006;
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    // Extend a touch past both ends, so corners overshoot like a real sketch.
    const tt = -over + t * (1 + over * 2);
    const off = i === 0 || i === steps ? (rand() - 0.5) * amp * 0.8 : (rand() - 0.5) * amp * 2;
    pts.push([r2(x1 + dx * tt + nx * off), r2(y1 + dy * tt + ny * off)]);
  }
  return `M ${pts.map((p) => p.join(' ')).join(' L ')}`;
}

// A dash pattern survives into the sketch: dashed borders carry meaning in these
// wireframes (a placeholder, an optional control), and a pen can draw a dashed
// line perfectly well.
function penPath(d, w, dash) {
  const da = dash ? ` stroke-dasharray="7 5"` : '';
  return `<path d="${d}" fill="none" stroke="${INK}" stroke-width="${w}" stroke-linecap="round"${da}/>`;
}

// Dark fills are worth keeping — a pen can block something in solid, and it is
// often the only thing marking an element as active or selected.
const isDark = (f) => /^#([0-3][0-9a-f]){3}$/i.test(f || '') || f === '#333333';

// Attribute reader for the flat, hand-authored SVGs this runs on.
function attrs(tag) {
  const out = {};
  for (const m of tag.matchAll(/([\w:-]+)="([^"]*)"/g)) out[m[1]] = m[2];
  return out;
}

function convert(src) {
  const head = src.match(/<svg[^>]*>/)[0];
  const a = attrs(head);
  const W = num(a.width) * SCALE;
  const H = num(a.height) * SCALE;

  const out = [];
  out.push(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${r2(W)}" height="${r2(H)}" viewBox="0 0 ${r2(W)} ${r2(H)}">`,
  );
  out.push(`<rect x="0" y="0" width="${r2(W)}" height="${r2(H)}" fill="#ffffff"/>`);

  const s = (v) => num(v) * SCALE;
  let seed = 1;

  // Shapes are self-closing; <text> has a body. Matching both in one pattern
  // needs a lazy body group, which happily matches nothing and truncates every
  // label to its first character — so they are matched separately.
  const els = [];
  for (const m of src.matchAll(/<(rect|line|circle)\b([^>]*?)\/?>/g)) {
    els.push({ tag: m[1], rest: m[2], inner: '', at: m.index });
  }
  for (const m of src.matchAll(/<text\b([^>]*?)>([\s\S]*?)<\/text>/g)) {
    els.push({ tag: 'text', rest: m[1], inner: m[2], at: m.index });
  }
  // Keep document order so later elements still draw on top.
  els.sort((a, b) => a.at - b.at);

  for (const { tag, rest, inner } of els) {
    const p = attrs(rest);
    seed += 977;

    // The full-bleed white backing plate is not something a pen draws.
    if (tag === 'rect' && num(p.width) >= num(a.width) - 1) continue;

    if (tag === 'rect') {
      const x = s(p.x), y = s(p.y), w = s(p.width), h = s(p.height);

      // A greeked copy bar is standing in for text, and nobody sketches text as
      // a hollow box — they scribble a line. Drawing it as a stroke instead of
      // an outlined rect is the single thing that makes these read as sketches.
      if (h <= 14 && w > 20 && p.fill === '#e8e8e8' && !p.stroke) {
        const my = y + h / 2;
        out.push(
          `<path d="${stroke(x + 1, my, x + w - 1, my, seed + 5, 1.6)}" fill="none" stroke="#8e8e8e" stroke-width="${r2(Math.max(2.5, h * 0.62))}" stroke-linecap="round"/>`,
        );
        continue;
      }

      // Weight follows the wireframe's own hierarchy: heavier borders stay
      // heavier in the sketch.
      const lw = num(p['stroke-width'], 1) >= 1.5 ? 1.8 : 1.4;
      const d = [
        stroke(x, y, x + w, y, seed + 1),
        stroke(x + w, y, x + w, y + h, seed + 2),
        stroke(x + w, y + h, x, y + h, seed + 3),
        stroke(x, y + h, x, y, seed + 4),
      ];
      // An opaque panel paints its own ground first. Without this the sketch
      // has no occlusion at all, so anything drawn behind an overlay — grid
      // rows, chips, greeked bars — ghosts straight through it. A pen sketch
      // occludes by simply not drawing what is covered; this is the equivalent.
      if (p.fill === '#ffffff' && p.stroke && p.stroke !== 'none' && w > 40 && h > 40) {
        out.push(
          `<rect x="${r2(x)}" y="${r2(y)}" width="${r2(w)}" height="${r2(h)}" fill="#ffffff"/>`,
        );
      }

      // A solid dark panel stays solid — it is carrying "active" or "selected".
      if (isDark(p.fill)) {
        out.push(
          `<rect x="${r2(x + 1)}" y="${r2(y + 1)}" width="${r2(Math.max(0, w - 2))}" height="${r2(Math.max(0, h - 2))}" rx="3" fill="#4a4a4a"/>`,
        );
      }
      // Any other filled panel gets a scribbled wash rather than a flat fill —
      // but only if it is small enough to be a control. Washing a large panel
      // drags hatching underneath everything sitting on top of it, and a real
      // sketch would leave that area empty anyway.
      else if (
        p.fill &&
        p.fill !== 'none' &&
        p.fill !== '#ffffff' &&
        h > 6 &&
        w * h < 26000
      ) {
        const rand = rng(seed + 9);
        const lines = Math.max(1, Math.min(4, Math.floor(h / 16)));
        for (let i = 1; i <= lines; i++) {
          const yy = y + (h * i) / (lines + 1);
          const inset = 4 + rand() * 7;
          out.push(
            `<path d="${stroke(x + inset, yy, x + w - inset, yy, seed + 20 + i, 1.4)}" fill="none" stroke="#e6e6e6" stroke-width="1.5" stroke-linecap="round"/>`,
          );
        }
      }
      out.push(penPath(d.filter(Boolean).join(' '), lw, p['stroke-dasharray']));
    } else if (tag === 'line') {
      const lw = num(p['stroke-width'], 1) >= 1.5 ? 1.8 : 1.4;
      out.push(penPath(stroke(s(p.x1), s(p.y1), s(p.x2), s(p.y2), seed), lw, p['stroke-dasharray']));
    } else if (tag === 'circle') {
      const cx = s(p.cx), cy = s(p.cy), rr = s(p.r);
      const rand = rng(seed);
      const pts = [];
      const start = rand() * Math.PI * 2;
      // Slightly over one full turn, so the ends cross like a drawn loop.
      for (let i = 0; i <= 14; i++) {
        const th = start + (i / 14) * Math.PI * 2.12;
        const rj = rr + (rand() - 0.5) * 1.5;
        pts.push([r2(cx + Math.cos(th) * rj), r2(cy + Math.sin(th) * rj)]);
      }
      if (isDark(p.fill)) out.push(`<circle cx="${r2(cx)}" cy="${r2(cy)}" r="${r2(rr)}" fill="#4a4a4a"/>`);
      out.push(penPath(`M ${pts.map((q) => q.join(' ')).join(' L ')}`, 1.4, p['stroke-dasharray']));
    } else if (tag === 'text') {
      const txt = (inner || '').trim();
      if (!txt) continue;
      const fs = Math.max(9, num(p['font-size'], 12) * SCALE);
      const bold = p['font-weight'] === 'bold' ? ' font-weight="bold"' : '';
      // Light text stays light: it is sitting on a panel that is still blocked
      // in solid, so converting it to ink would bury it.
      const fill = /^#(f|e)/i.test(p.fill || '')
        ? '#ffffff'
        : p.fill === '#666666' || p.fill === '#999999'
          ? FAINT
          : INK;
      const anchor = p['text-anchor'] || 'start';
      out.push(
        `<text x="${r2(s(p.x))}" y="${r2(s(p.y))}" font-family="${HAND}" font-size="${r2(fs)}" fill="${fill}" text-anchor="${anchor}"${bold}>${txt}</text>`,
      );
    }
  }

  out.push('</svg>');
  return out.join('');
}

let files = fs
  .readdirSync(DIR)
  .filter((f) => f.endsWith('.svg') && !f.endsWith('-sketch.svg'))
  .sort();
if (only.length) files = files.filter((f) => only.some((o) => f.includes(o)));

if (!files.length) {
  console.error(`No wireframe SVGs matched in ${DIR}`);
  process.exit(1);
}

for (const f of files) {
  const src = fs.readFileSync(path.join(DIR, f), 'utf8');
  const out = f.replace(/\.svg$/, '-sketch.svg');
  fs.writeFileSync(path.join(DIR, out), convert(src));
  const kb = (fs.statSync(path.join(DIR, out)).size / 1024).toFixed(0);
  console.log(`✓ ${out.padEnd(34)} ${kb.padStart(3)}kb`);
}
