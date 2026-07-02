# Social / brand image render recipe

How the OG card and social covers in `public/images/` are generated. All of them
are rendered from the **site's own self-hosted fonts** (not Google `<link>`s or
guesses), so they match the live brand exactly.

## Assets

| File | Dimensions | Where it's used | Wired in code? |
|---|---|---|---|
| `og/<slug>.png` (27 of them) | 1200x630 | Per-page Open Graph / X summary_large_image / LinkedIn unfurl | Yes: auto-selected by pathname (see "Per-page OG" below) |
| `social/og-image-2026.png` | 1200x630 | Fallback OG for any route with no dedicated card | Yes: `DEFAULT_OG_IMAGE` in `src/layouts/BaseLayout.astro` |
| `social/linkedin-cover-2026.png` | 1584x396 | LinkedIn personal profile cover (background image) | No: manual upload |
| `social/x-cover-2026.png` | 1500x500 | X / Twitter profile header | No: manual upload |
| `social/github-banner-2026.png` | 1280x320 | GitHub profile README top banner | No: manual upload |

## Per-page OG (the whole-site set)

Every page gets its own OG card in the same style, generated from a manifest.

- **Manifest / single source of truth:** `src/lib/og-pages.mjs` (`OG_PAGES` = one
  entry per page: `slug`, `path`, `eyebrow`, `headline`, optional `wink` word set
  in navy italic). Same file exports `ogImageForPath(pathname)`.
- **Wiring:** `src/layouts/BaseLayout.astro` computes
  `image = imageProp ?? ogImageForPath(pathname) ?? DEFAULT_OG_IMAGE`. So a page's
  OG is chosen automatically by its route; an explicit `image` prop still wins;
  unmapped routes fall back to `social/og-image-2026.png` (never a broken link).
- **Renderer:** `src/pages/og-render/[slug].astro` renders one card per manifest
  slug. `getStaticPaths` only emits during `astro dev` (returns `[]` in prod), so
  the internal renderer never ships. noindex + excluded from the sitemap.
- **Generate:** start `astro dev`, then `npm run og:generate`
  (`scripts/generate-og.mjs`). It screenshots each `/og-render/<slug>/` at 2x and
  writes `public/images/og/<slug>.png`.
- **Headline auto-sizing:** the renderer scales font-size by headline length
  (92px for short names down to 50px for long lines), so titles fill the card
  without overflowing.

**Adding / editing a static page's OG:** edit the entry in `src/lib/og-pages.mjs`,
run `npm run og:generate`. A brand-new route with no entry keeps the default until
you add one.

**Blog posts are automatic.** They are NOT in the manifest. Each non-draft post is
derived from its frontmatter via `postToOgEntry()` in `src/lib/og-pages.mjs`
(eyebrow = `category`, headline = `title`, wink = last word of the title). All
three consumers use it:
- render route (`getStaticPaths`) reads the posts collection via `astro:content`
- generator (`scripts/generate-og.mjs`) parses post frontmatter directly
- `ogImageForPath()` maps any `/blog/<slug>/` → `og/blog-<slug>.png` by pattern
So publishing a post is: write the `.mdx`, run `npm run og:generate`. No manifest
edit. (Until you regenerate, the post's `og:image` points at a not-yet-created
file, so run the script as part of publishing.)

Note: no separate 1200x628 "X card" is needed. X reads the `og:image`
(`social/og-image-2026.png`) for its large summary card automatically, so a second file
would be a near-duplicate that nothing references.

## Brand tokens (hardcoded in each render so it never depends on surface classes)

- Paper `#fafbfc`, ink `#1a1b1e`, muted `#565760`, hairline `#e5e7eb`
- Accent: denim navy `#2e5c8a` (the site's light-surface `--accent`)
- Fonts via the site's CSS vars: `--font-hanken` (Hanken Grotesk, wordmark/body),
  `--font-fraunces` (actually **Newsreader**, italic display), `--font-geist-mono`
  (eyebrow/labels)
- Shared motifs: faint 60-66px grid, JB monogram, Geist Mono eyebrow
  `PRODUCT ENGINEER · DESIGN & FRONT-END`, a Newsreader-italic pitch line with one
  navy "wink" word, and an oversized faint italic `&` watermark echoing the site's
  `.hero-index` chapter numeral.
- Pitch line: `Design-grade, accessible UI, finished to the last detail.` with
  `detail` in navy italic (the OG uses the homepage hero line instead:
  `My best work lives at the interface, down to the last detail.`).

## The render method

1. Create a temporary route under `src/pages/` (must NOT start with `_` or Astro
   drops it from routing, e.g. `covers-render-temp.astro`). It uses
   `BaseLayout` with `bare={true} noindex={true}` so the header/footer are gone but
   the `<Font>` tags + `site.css` still load the real fonts. Put the card markup +
   scoped `<style>` inside, sized to the exact target dimensions.
2. Start the dev server (Netlify adapter: use `astro dev`, NOT `npm run preview`):
   `lsof -ti:4321 | xargs kill -9; npx astro dev --port 4321`
3. Screenshot each card element at 2x with Playwright (already a dev dep). Remove
   the Astro dev toolbar first or it bleeds into the element screenshot:
   ```js
   import { chromium } from 'playwright';
   const b = await chromium.launch();
   const p = await b.newPage({ viewport: { width: 1600, height: 1400 }, deviceScaleFactor: 2 });
   await p.goto('http://localhost:4321/covers-render-temp/', { waitUntil: 'networkidle' });
   await p.evaluate(() => document.querySelector('astro-dev-toolbar')?.remove());
   await p.evaluate(() => document.fonts.ready);
   await p.waitForTimeout(500);
   await (await p.$('.cover--li')).screenshot({ path: '/tmp/cover-li.png' });
   await b.close();
   ```
4. Supersample-downscale the 2x shot to exact dimensions (sharper text than a 1x
   render): `magick /tmp/cover-li.png -resize 1584x396 -strip -quality 92 public/images/social/linkedin-cover-2026.png`
5. Delete the temp route, kill the dev server, remove temp PNGs.

## Automatic regeneration (pre-commit hook)

A git pre-commit hook regenerates the per-page cards when their inputs change, so
you rarely run `npm run og:generate` by hand.

- **Hook:** `.githooks/pre-commit`. Enabled via `core.hooksPath`, which the
  `prepare` npm script sets on `npm install` (so fresh clones get it too).
- **Smart trigger:** it only runs when a staged file matches
  `src/lib/og-pages.mjs`, `src/pages/og-render/`, or `src/content/posts/`.
  Ordinary commits skip it in ~50ms. When it does fire it boots a throwaway
  `astro dev` on port 4399, runs the generator against it, and `git add`s
  `public/images/og/` into the commit (~30-45s).
- **Requires:** the toolchain the generator needs (Node, Playwright's chromium,
  ImageMagick's `magick`). If the dev server can't start, the hook blocks the
  commit with a message; bypass once with `git commit --no-verify`.
- **Not covered:** the hook regenerates existing cards but does not delete the
  card for a *removed* post. Delete `public/images/og/blog-<slug>.png` by hand if
  you unpublish a post. It also does not fire for pure font/CSS token changes
  (rare); run `npm run og:generate` manually after a brand refresh.

## Safe zones (why the covers are not just cropped OG cards)

- **LinkedIn cover (1584x396):** avatar sits bottom-left and your name/headline
  overlay the bottom band. Keep content upper-right, wordmark top-left.
- **X header (1500x500):** avatar sits bottom-left corner; name/bio render below the
  banner. Keep content vertically-centered on the left, watermark bottom-right.
- **GitHub banner (1280x320):** no avatar overlay, full canvas usable. Eyebrow +
  headline top-left, wordmark as a bottom-left signature.

## When positioning or brand changes

Re-run the recipe. If the accent moves again, the single source of truth is
`--accent-rgb` in `src/styles/site.css`; update the hardcoded `#2e5c8a` in each
render route to match before regenerating.
