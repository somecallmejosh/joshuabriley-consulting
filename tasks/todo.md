# Dead-code removal — get tech debt to ~zero

## Plan
- [ ] Delete 4 dead files (hero-motion.ts, BrandSwitcher, StatusAnnouncer, TokenChain)
- [ ] Remove `gsap` dependency (only consumer was hero-motion.ts) + refresh lockfile
- [ ] Delete dead functions: encodeRatings, emptyRatings (scorecard.ts); formatCompactCurrency (roi.ts)
- [ ] Narrow 9 internal-only exports (drop `export`): ScorecardItem, sectionComplete, RoiResult,
      WEEKS_PER_YEAR, RECLAIM_BY_LEVEL, SURFACE_DRAG, SURFACE_DRAG_CAP, normalize, lastWord
- [ ] Delete obsolete tests/components/tones.test.ts (tests removed `toneStyles`)
- [ ] Gate: `npm run build` + `npm run test` green

## Review
Done. ~1,232 lines removed across 10 files; build + `npm run test` (3/3) green.

- Deleted 4 dead files: hero-motion.ts, BrandSwitcher, StatusAnnouncer, TokenChain (never imported).
- Removed `gsap` dependency (its only consumer was hero-motion.ts) + refreshed lockfile.
- Deleted dead functions: encodeRatings, emptyRatings (scorecard.ts); formatCompactCurrency (roi.ts).
- Narrowed 9 internal-only exports to module-private (ScorecardItem, sectionComplete, RoiResult,
  WEEKS_PER_YEAR, RECLAIM_BY_LEVEL, SURFACE_DRAG, SURFACE_DRAG_CAP, normalize, lastWord).
- Deleted obsolete tests/components/tones.test.ts (tested `toneStyles`, deliberately removed earlier;
  this was the failing test in the baseline).

Verified NOT dead (left untouched): all public/ assets — OG images are referenced via computed
paths in og-pages.mjs; social banners + robots.txt are served/linked externally. All other deps,
scripts (scroll-reveal, whimsy, contact-form), and components are in use.

Note: `astro check` crashes with a `@astrojs/compiler` wasm error (unrelated to our code);
`astro build` is the reliable gate and passes.
