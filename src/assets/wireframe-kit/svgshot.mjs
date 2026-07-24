// Renders an SVG to a PNG so it can be eyeballed during authoring.
//
//   node src/assets/projects/logatot/wires-and-flows/svgshot.mjs <in.svg> <out.png> [width]
//
// Loading an .svg directly in a headless browser stalls on the font wait, so the
// markup is inlined into a page and the <svg> element itself is shot.

import { chromium } from 'playwright';
import fs from 'node:fs';

const [src, out, width = '1400'] = process.argv.slice(2);
if (!src || !out) {
  console.error('usage: svgshot.mjs <in.svg> <out.png> [width]');
  process.exit(1);
}

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: +width, height: 600 },
  deviceScaleFactor: 2,
});
await page.setContent(`<body style="margin:0">${fs.readFileSync(src, 'utf8')}</body>`);
await (await page.$('svg')).screenshot({ path: out });
await browser.close();
console.log(`✓ ${out}`);
