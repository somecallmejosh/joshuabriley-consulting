# Scorecard tool redesign — editorial-technical consistency

Goal: bring the design-system-scorecard tool in line with the current de-card
editorial design. Drop white raised cards + large (12px) rounded corners +
floating colored subject tabs + scrapbook stamp rotation. Sophisticated but
approachable: paper surfaces, hairline structure, 8px/4px radii, one clay accent.

## Plan

- [ ] site.css — shared scorecard styles
  - [ ] `.report-paper`: de-card (paper, not white), radius 12/10 → 8px
  - [ ] `.reveal-card`: keep ink anchor, radius 12 → 8px
  - [ ] `.grade-stamp`: remove rotation, static (not absolute), refine size
  - [ ] `stamp-in` keyframes: drop the -18deg/-6deg rotation
  - [ ] `.meter-track`/`.meter-fill`: thinner, drop heavy border
- [ ] ScorecardEngine.astro
  - [ ] Totals header: de-card hairline panel, kill rounded-xl + bg-raised + legacy navy/plum
  - [ ] Subject cards: paper + hairline, radius → 8px; replace floating colored
        `.subject-tab` with inline mono section index header + grade chip in a flex row
  - [ ] Segmented choice control: full-pill → site radius (8px container / 5px segments)
  - [ ] Reset button: drop `!bg-white !border-charcoal` overrides → ghost variant
  - [ ] `.score-float`: white rounded-12px → hairline paper, radius 8px, calmer
  - [ ] Remove dead `subjectTabTone` color array
- [ ] results.astro: verify it inherits the site.css changes cleanly (radar card,
      reveal-card, mini-bars) — adjust any inline radii that drift
- [ ] Verify: astro dev on :4321, screenshot blog post tool + results page

## Review

Done. All scorecard surfaces brought onto the editorial-technical de-card system.

Files changed:
- `src/styles/site.css` (shared scorecard block): `.report-paper` de-carded
  (transparent paper, 8px); `.reveal-card` 12px → 8px; `.grade-stamp` made a
  static inline ink disc (no absolute float, no scrapbook rotation) + hairline
  empty/progress states; `stamp-in` rotation removed; `.meter-track` thinner,
  border dropped.
- `src/components/islands/ScorecardEngine.astro`: totals header de-carded
  (rounded-lg hairline, no white, mono/serif numerals); subject cards →
  transparent + hairline, 8px, inline `Subject NN` mono eyebrow + Fraunces
  title + grade chip header (floating colored tab removed); segmented control
  full-pill → 7px/5px; reset button overrides removed (plain ghost); reveal-card
  headline → Fraunces, paper-toned body; floating badge → compact ink chip with
  paper score disc, 8px, soft tinted shadow; dead `subjectTabTone` array removed.
- `src/pages/tools/scorecard/results.astro`: two display-scale reveal-card
  headings aligned to Fraunces (inherits the site.css panel/radius changes).

Verified:
- `npm run build` passes.
- Playwright screenshots at 1280px: empty tool, prefilled subject card (grade
  chip), ink report, results page (verdict + radar + breakdown + recommendation),
  float chip — all consistent with the site.

Caught + fixed via screenshot: the engine's primary report CTA was
`variant="primary"` (ink fill) on the ink card → invisible background. Switched
to `variant="navy"` (paper fill) to match results.astro and pass the button
contrast check.

Left intentionally untouched: `CTABanner` (site-wide pattern, out of scope) and
the pre-existing unrelated edits to LiveEmbed / rudiment-ui / west-baton-rouge.
