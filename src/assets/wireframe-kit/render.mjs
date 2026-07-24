// Renders each sheet in _src/*.html to a 2x PNG beside this file.
//   node src/assets/wireframe-kit/render.mjs logatot             -> all sheets
//   node src/assets/wireframe-kit/render.mjs logatot 07-cacfp    -> matching only
//
// Renders <project>/wires-and-flows/_src/*.html to 2x PNGs beside the _src dir.
// Run from the repo root so `playwright` resolves.
//
// Sheets are authored at 1600px and shot at deviceScaleFactor 2, matching the
// IVFCRYO renders at 3200px wide.

import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const [project, ...only] = process.argv.slice(2);
if (!project) {
  console.error('usage: render.mjs <project> [filter...]   e.g. render.mjs vmspark 02-job');
  process.exit(1);
}
const OUT_DIR = path.resolve(HERE, '../projects', project, 'wires-and-flows');
const SRC = path.join(OUT_DIR, '_src');
if (!fs.existsSync(SRC)) {
  console.error(`No sheets at ${SRC}`);
  process.exit(1);
}

let files = fs.readdirSync(SRC).filter((f) => f.endsWith('.html')).sort();
if (only.length) files = files.filter((f) => only.some((o) => f.includes(o)));
if (!files.length) {
  console.error('No sheets matched.');
  process.exit(1);
}

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1600, height: 1000 },
  deviceScaleFactor: 2,
});

let failed = 0;
for (const f of files) {
  const warnings = [];
  page.on('console', (m) => m.type() === 'warning' && warnings.push(m.text()));

  await page.goto('file://' + path.join(SRC, f), { waitUntil: 'load' });
  // Callout placement measures text, so it has to happen after the webfont —
  // or here, the system font — has actually settled.
  await page.evaluate(async () => {
    await document.fonts.ready;
    // Flow layout first: callout anchors measure nodes the flow engine places.
    window.__drawFlow?.();
    window.__drawSheet?.();
  });

  const out = path.join(OUT_DIR, f.replace(/\.html$/, '.png'));
  await page.screenshot({ path: out, fullPage: true });

  const { width, height } = await page.evaluate(() => ({
    width: document.documentElement.scrollWidth,
    height: document.documentElement.scrollHeight,
  }));
  const kb = (fs.statSync(out).size / 1024).toFixed(0);
  const flag = warnings.length ? `  ⚠ ${warnings.length} unmatched callout(s)` : '';
  if (warnings.length) failed++;
  console.log(
    `${warnings.length ? '!' : '✓'} ${path.basename(out).padEnd(30)} ${String(width * 2).padStart(4)}×${String(height * 2).padEnd(5)} ${kb.padStart(4)}kb${flag}`,
  );
  page.removeAllListeners('console');
}

await browser.close();
if (failed) process.exit(1);
