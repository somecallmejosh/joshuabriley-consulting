# Design System ROI / UI-Debt Calculator

New interactive tool at `/tools/roi-calculator/`. Matches existing Astro + vanilla JS + CSS-var
island pattern. No framework, no email gate — CTA flows to scorecard/contact.

## Tasks

- [x] `src/lib/roi.ts` — pure calc module: input model, defaults, `computeRoi()`, URL encode/decode
- [x] `src/components/islands/RoiCalculator.astro` — controls + live result panel, copy-link, reset, a11y
- [x] `src/pages/tools/roi-calculator/index.astro` — page shell (Hero, island, assumptions, CTA)
- [x] `src/pages/tools/index.astro` — add 4th tool card, fix grid for 4, update meta description
- [x] Verify: build compiles, keyboard/focus works, math sane at boundaries

## Review

**Shipped:** ROI / UI-debt calculator at `/tools/roi-calculator/`. Astro page + vanilla-JS
island + pure `roi.ts` calc lib (single-sourced formulas, imported by both the no-flash
initial render and the client script). Shareable `?i=` URL, copy-link, reset, no email gate.
4th card added to the tools index (grid → 2×2, meta + hero copy updated to "Four").

**Verified:** `npm run build` clean. Math hand-checked at defaults (8 ppl / 3 surfaces / $95 /
4h / medium → $61,560 recoverable, $139,840 → $78,280) and matches rendered HTML. axe-core
scan of the page passed (controls AA-compliant after bumping muted text navy/0.55 → 0.70);
keyboard skip-link test passed. Unit tests green.

## Site-wide accessibility remediation (user opted in: "everything now")

Adding the ROI page to the axe sweep + emulating reduced-motion exposed a pre-existing,
site-wide WCAG AA color-contrast problem the old test missed (scroll-reveal held elements at
`opacity:0` during the scan). Full audit found **202 failing nodes across 22 pages** in 4
categories: brand colors as small text, white-on-solid-brand badges, plum/charcoal opacity
tints, and raw-rgba muted grays in island `<style>` blocks.

**Fixed → 0 contrast failures across all 24 routes.** Approach:
- Central component maps: `tones.ts`, `Badge`, `Heading`, `Text`, `CardNumber`, `ProjectPolaroid`,
  form required-asterisks, nav active link (`site.css`), `.step-num`/logo gradients.
- Deterministic global swaps: brand opacity tints → `-deep`; `text-plum/NN` → `text-plum`;
  `text-charcoal/50|60` → `/70`.
- Surgical per-page/island fixes (5 parallel subagents, disjoint file ownership) for inline
  eyebrows, white-on-brand badges, and raw-rgba grays (raised alpha to ~0.8).
- Bonus: gave the ServiceFitQuiz `role="progressbar"` an accessible name (pre-existing non-
  contrast bug surfaced by the expanded sweep).

**Known oddity:** the newly-added named token `coral-deep` (Tailwind `text-/bg-coral-deep`)
silently failed to apply on some routes under this project's per-route CSS splitting, while the
pre-existing `-deep` tokens were unaffected — root cause not isolated. Worked around with the
explicit arbitrary value `text-[#C13A22]` / `bg-[#C13A22]` (verified to render correctly), and
the broken named token was removed from `tailwind.config.mjs` to avoid a landmine. Raw nav hex
in `site.css` uses `#c13a22` directly.

**Permanent coverage:** `tests/e2e/keyboard.spec.ts` now scans 12 representative pages with
reduced-motion (was 2). Full suite: 25 e2e + 4 unit tests green; `npm run build` clean.
