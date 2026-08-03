/**
 * Print /resume-print/ to public/resume.pdf.
 *
 * Prereq: dev server running on :4321 (Netlify adapter → use `astro dev`,
 * NOT `npm run preview`). Then:  npm run resume:pdf
 *
 * The route is the document; this script only drives Chromium's print path.
 * Margins live in the route's `@page` rule, so `margin: 0` here is deliberate:
 * setting it in both places would compound them.
 *
 * Content for both the route and /resume/ comes from src/lib/resume-data.mjs,
 * which is what keeps the PDF and the page from drifting apart. Re-run this
 * after any edit to that file.
 */
import { chromium } from 'playwright';
import { statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(ROOT, 'public/resume.pdf');
const URL_ = process.env.RESUME_URL ?? 'http://localhost:4321/resume-print/';

const browser = await chromium.launch();
const page = await browser.newPage();

try {
  const res = await page.goto(URL_, { waitUntil: 'networkidle', timeout: 20_000 });
  if (!res?.ok()) throw new Error(`${URL_} returned ${res?.status() ?? 'no response'}`);

  // The document is authored for paper, so render it in print mode rather than
  // screen mode. Without this, screen-only media rules reach the PDF.
  await page.emulateMedia({ media: 'print' });
  // Self-hosted webfonts: printing before they resolve silently ships fallbacks.
  await page.evaluate(() => document.fonts.ready);

  await page.pdf({
    path: OUT,
    format: 'letter',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });

  const kb = (statSync(OUT).size / 1024).toFixed(1);
  console.log(`✓ public/resume.pdf  (${kb} KB)`);
} finally {
  await browser.close();
}
