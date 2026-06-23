# Technical-proof register — staff-level UX-engineer positioning (`/brandkit`)

Answers `tasks/research.md` (site ~65% aligned for $175K+ remote UX-eng roles; gap is
*evidence*, not visuals). Decision: **additive** — keep the warm scrapbook brand (itself proof
of design-system craft) and grow a second "engineering proof" register the current components
can't speak. No token changes, no redesign.

## Build — new components (`src/components/patterns/`)
- [x] `CodeBlock.astro` — code window (filename tab, lang pill, copy, dark mono body) → proves React/TS
- [x] `WindowFrame.astro` — browser/terminal chrome wrapper → Storybook/docs/CLI evidence
- [x] `Metric.astro` — big-number stat (value, label, before→after, trend) → outcomes
- [x] `TechStack.astro` — labeled row of mono keyword chips → recruiter keyword scanning
- [x] `ProofPanel.astro` — "Skills proven / Stack / Quality / Outcomes" receipts panel (composes TechStack)
- [x] `CopyButton.astro` — added `tone="onDark"` so copy reads on the new navy surfaces

## Wire in
- [x] Style guide: new navy "Technical proof" section + nav chip showcasing all five
- [x] ATK case study (React/Next): ProofPanel under hero, CodeBlock in decisions, honest Metrics
      in scale section. Page-supported facts only (3 brands / 0 brand-fork props / 1 a11y baseline);
      no fabricated perf numbers. Stack chips flagged in the spec for the user to extend.

## Deliver
- [x] `tasks/brand-technical-register.md` — positioning spec: strategy, dual-register system,
      component usage, copy blocks, and a copy-paste case-study scaffold (the "template")

## Verify
- [x] `npm run build` clean (twice; authoritative gate — `astro check` still crashes on FAQ.astro WASM)
- [x] `astro dev` :4321 + Playwright screenshots of `/style-guide/#technical` + ATK blocks.
      Zero console/page errors. Components are static → reduced-motion N/A; on-dark text + tone
      chips use AA-passing token text colours.

## Review

**Shipped:** an additive "technical-proof register" — 5 dependency-free components that give the
warm scrapbook brand a second, engineering voice (code, frames, metrics, stacks, receipts).
Reuses the existing token system / `cx` / `tones.ts`; no token or redesign changes. Showcased in
a new navy style-guide section and applied to the real ATK case study (which previously proved
its architecture eloquently but carried zero engineering receipts — only the words "React,
Next.js"). Plus `tasks/brand-technical-register.md`: the strategy, the dual-register rationale,
a research-gap→change roadmap, ready-to-paste copy, and a case-study scaffold for retrofitting
the other four projects.

**Honesty guardrail:** metrics use only facts each page already asserts; no invented Lighthouse/
bundle numbers (that's precisely what staff-level interviews probe). Stack chips reflect page
text + flagged for the user to extend with real tooling.

**Verified:** `npm run build` clean. Playwright shots of all changed UI at 1280px@2x, zero
console errors. Files: +6 new (5 components + spec), 3 edited (CopyButton, style-guide, ATK).

---

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

---

# Redesign pass (`/redesign-existing-projects`)

Full-site audit (24 routes, 6 parallel read-only agents). Verdict: site already premium —
distinctive type system, single accent family, tinted shadows, textures, Phosphor icons,
focus rings, reduced-motion, custom 404, full meta/JSON-LD. Audit returned few genuine hits;
fixed the agreed set rather than rewriting.

## Applied

- [x] **Button states** (`Button.astro`) — added `active:scale-[0.98] active:translate-y-px`
  pressed feedback + `duration-200 ease-out` (was undurated `transition-all` → 150ms). Site-wide.
- [x] **Staggered reveal** (`scroll-reveal.ts`) — new opt-in `[data-reveal-stagger]`: direct
  children cascade 70ms apart; skips `aria-hidden`. Whole script still gated behind
  `prefers-reduced-motion`, so reduced-motion users unaffected.
- [x] **Homepage layout** (`index.astro`) — broke the two 3-equal-column rows: "What I do"
  pillars → offset/staggered collage (`lg:mt-0/14/6` + stagger); "Tools" → featured-first
  (Scorecard emphasized, col-span-7 + "Start here", other two stacked col-span-5). Dropped
  `CardGrid`/`CardNumber` imports.
- [x] **Housekeeping** — whole-degree floating-card rotations in `services.astro` +
  `starter.astro` → Tailwind `rotate-*` classes (matches homepage-hero convention; the ~75
  sub-degree scrapbook tilts are the site's deliberate inline convention — left as-is). Berxi
  breadcrumb `Berxi.com` → `Berxi`. Footer + Privacy/Terms links → new `/privacy` + `/terms`
  pages (real copy reflecting actual processors: HubSpot form, Calendly, Netlify).

## Pre-existing bug found & fixed (out of original scope, in scope for "audit + fixes")

The full e2e exposed **4 WCAG AA contrast failures already on `main`** (regressed since the
earlier remediation, in untouched decorative/quote elements) — `text-charcoal/40·45·50`
labels and `text-coral` on white in `tools/roi-calculator`, `tools/index`, `services/starter`.
Fixed with the existing pattern (`/70`, `text-[#C13A22]`). Confirmed pre-existing by code
inspection (failing elements were never touched by this pass).

## Verified

`npm run build` clean. Unit 4/4. **e2e 50/50** (the 4 AA tests now pass; were 46/4 on `main`).
New `/privacy` + `/terms` axe-scanned → 0 violations. Homepage rework + legal pages
screenshot-verified at reduced-motion. Diff: 9 files + 2 new pages, +88/−43.

**Gotcha logged:** `astro preview` is unsupported under the Netlify SSR adapter — use
`astro dev` on :4321 for Playwright (config reuses an existing server). A stale dev server
left running silently serves an old in-memory SSR bundle; kill port 4321 before screenshots.

---

# Tools pages — interactive design + animation upgrade (`/gpt-taste`)

Goal: elevate the interactive parts of every /tools page with high-craft, brand-
consistent motion. Vanilla CSS + light JS only (no GSAP). Strict prefers-reduced-motion
fallbacks. Keep all existing functionality + a11y. Motion should feel tactile/handmade,
not neon/techy. Per-island scoped `<style>` keyframes (avoid global churn).

## ScorecardEngine (tools/scorecard)
- [ ] Answer-choice "pop" micro-interaction on select
- [ ] Meter fill: smooth width transition + shimmer while moving
- [ ] Per-subject card celebration pulse when a section completes
- [ ] Result card unlock choreography (slide-up + staggered headline/body/CTA)
- [ ] Float bubble: count-up + gentle bounce on score change

## RoiCalculator (tools/roi-calculator)
- [ ] Animated number count-ups ($, hours, costs) — flagship
- [ ] Slider thumb polish (active rotate+scale)
- [ ] Bar fill pulse on update
- [ ] Chip select pop
- [ ] Callout cross-fade on change
- [ ] Copy-link dashed celebration pulse

## TokenPlayground (tools/token-playground)
- [ ] Preview-card ripple pulse on token change
- [ ] Chip pop + add chips to reduced-motion block (current gap)
- [ ] Palette select glow on badge/stat
- [ ] Callout cross-fade
- [ ] Slider track shows filled portion following thumb
- [ ] Stat count-up on first view

## Diagnostic (tools/audit-findings)
- [ ] Scan-line sweep across frame on "show issues"
- [ ] Staggered findings reveal + badge pop
- [ ] Issue-count count-up
- [ ] Hover finding <-> mark pulse linkage
- [ ] Marks fade out gracefully when hidden
- [ ] Severity color bar on findings

## Verify
- [x] astro dev :4321, screenshot each tool page, confirm no regressions + reduced-motion

## Review

**Shipped:** richer, brand-consistent motion across all four interactive tool islands.
Vanilla CSS keyframes + small rAF helpers (no new deps, no GSAP). Every flourish is
gated behind a `primed` flag (first paint / URL-prefill stays calm) and a `reduceMotion`
check, plus per-island `prefers-reduced-motion` blocks.

- **RoiCalculator** — rAF count-ups on the $ headline / hours / cost figures (easeOutCubic);
  brightness pulse on the "with a system" bar; chip-select pop; callout cross-fade; copy-link
  ring celebration; thumb rotate+scale on grab.
- **TokenPlayground** — ring pulse on the preview card for geometry/spacing changes; color
  "burn" across token-bound elements on palette swap; range tracks now paint their filled
  portion (`--tp-fill`); chip pop (+ closed the existing reduced-motion gap on chips); callout
  cross-fade; stats count up on first scroll-in.
- **Diagnostic** — diagnostic scan-line sweep replays on every reveal; marks now fade/scale in
  staggered (and out gracefully on "fixed") via transparent-outline transitions; issue count
  rolls up; bidirectional finding<->mark spotlight on hover; severity color bar per finding.
- **ScorecardEngine** — answer-choice springy pop; score count-ups (header + float bubble) with
  bubble pop + meter brightness bump; subject card "hop" when a section earns a grade; report
  unlock choreography (sheen sweep + grade stamp pop + staggered CTAs).

**Verified:** `npm run build` clean. Playwright-drove all four pages (1280px): ROI count-ups
land on $159,684 / hours; token fill=75% w/ `--tp-radius:24px`; diagnostic toggle->fixed,
hover lights exactly 1 mark, count=3, tab switch ok; scorecard grades A, meter 18.75%. Zero
console/page errors. Re-ran under emulated reduced-motion — values set instantly, still zero
errors. Screenshots reviewed for each.

**Note on GSAP:** kept everything vanilla on purpose — these are micro-interactions where CSS
+ tiny rAF is lighter than the existing codebase's zero-animation-dep convention and needs no
island hydration changes. GSAP would earn its weight for heavier scroll-timeline choreography;
happy to reach for it there if wanted.

---

# Hero "header illustrations" — rethink all 9 (`/gpt-taste`)

Goal: rethink every hero header illustration on the tools + services pages for clarity and
contextual accuracy, with aggressive-but-tasteful motion and full `prefers-reduced-motion`
fallbacks. User opted into (a) replacing the metaphor where it was generic, and (b) **GSAP**
for the heroes (deliberate override of the prior vanilla-only note above), scoped to hero pages.

## Root problems fixed (shared across the set)
- **Connectors didn't connect.** Lines were hand-placed in fixed SVG `viewBox` coords while the
  cards used `%` positioning, so they floated in the gaps. Now a shared helper measures the live
  card positions and draws each connector anchored to the card borders.
- **Motion was generic ambient float**, never the page's specific idea. Each hero now has one
  signature, on-thesis motion.
- **Three metaphors were generic** and were reworked.

## New shared infra
- [x] `src/scripts/hero-motion.ts` — GSAP + MotionPathPlugin helper. `connect(svg, links)`
  measures anchors via `getBoundingClientRect`, builds connector paths from real card centers
  (clipped to borders), recomputes on resize + `fonts.ready`, and centralizes the reduced-motion
  guard (static connectors, zero pulses). `linkHandle.addPulse()` rides a dot along a path.
- [x] `gsap` added to `package.json` (loaded only via per-hero `<script>`, not site-wide).

## Per-illustration (concept → execution)
- [x] **tools/index** — hub→4 tools: accent pulse travels outward hub→each tool, land-pop.
- [x] **tools/roi-calculator** — 3 rework costs drop down their connectors into the $140k total;
  total + bar pulse on arrival.
- [x] **tools/audit-findings** — magnifying glass drifts across the specimen; findings light up
  High→Med→Low with connectors traced back to the specimen.
- [x] **tools/token-playground** — color cascades primitive→semantic→all 3 components, each
  swatch repainting on arrival (the pilot).
- [x] **tools/scorecard** — gentle looping "grading sweep" down the 5 rows + final-grade stamp;
  stays an honest blank card (no fake grades); reduced-motion = static.
- [x] **services.astro** — REWORK: three peer cards → ascending **progression** Audit→Starter→
  Workflow (rising tiers, increasing size/elevation); pulse travels 01→02→03.
- [x] **services/workflow** — token chip now rides the real Design→Code connector; on arrival the
  `variant="primary"` value flashes + "Spec matches" pops. Removed dead `slide-chip`/`dash-flow`.
- [x] **services/starter** — REWORK: scattered cards → token palette **feeds** the kit; colored
  pulses travel palette→each component.
- [x] **services/audit** — REWORK: glass parked dead-center → **active coverage**, glass drifts
  to inspect each token card in turn, each lighting up as "reviewed."

## Bug found + fixed during verification
Animating `filter: brightness()` via a bare GSAP `.to()` from a base of `none` makes GSAP
interpolate from `brightness(0)` — a black flash. Hit `services.astro` (Workflow card rendered
solid black mid-loop). Fixed with explicit `fromTo(..., {filter:'brightness(1)'}, ...)` +
`immediateRender:false`. Verified the other brightness pops use an explicit base.

## Verified
`npm run build` clean; unit tests 4/4. Playwright sweep of all 9 hero pages at 1340px in BOTH
`prefers-reduced-motion: no-preference` and `reduce`: every connector terminates on its card
(no degenerate paths), pulses present in normal / absent under reduce, **zero console/page
errors on any page in either mode**, and reduced-motion compositions are complete with no
frozen/stray travellers. Each hero screenshot reviewed.

**Note:** `astro check` crashes in the `@astrojs/compiler` WASM while transforming the untouched
`FAQ.astro` (pre-existing/environmental) — `npm run build` is the authoritative type/compile
gate and passes clean. The 4 modified `islands/*.astro` in `git status` are pre-existing
uncommitted work from an earlier session, untouched by this pass.

---

# Case-study longform: woven-in interactive tools (`/gpt-taste`)

**Goal:** make the five `/projects/*` longform pages more visually engaging and tie an interactive
tool into each, as a stand-in for missing project visuals. Honored the gpt-taste *spirit* (break
boring prose, real interactivity, no cheap labels) using the site's own warm design system — not
its literal Satoshi/GSAP/picsum defaults. Hero/nav/fonts/brand untouched; all changes additive
inside existing case-study section bodies.

## Mapping (hybrid: live tool where it fits, bespoke where it doesn't; token treatment varied)
- [x] **VMSpark** (pilot) — live `Diagnostic` in `#inventory` + live `RoiCalculator` as a new
  "What the sprawl was quietly costing" beat before `#outcome` + a real-numbers `Metric` row
  (350 / 8+ / 10+ / ~40, all from the page's own audit narrative).
- [x] **Berxi** — live `TokenPlayground` in `#tokens`, replacing the static "How a token resolves"
  chip diagram (removed the 3 orphaned `.token-*` CSS rules).
- [x] **Rudiment UI** — new `TokenChain` island: change the global token / radius and watch it
  resolve global → semantic → component down to a live button.
- [x] **ATK** — new `BrandSwitcher` island after the existing `CodeBlock`: one card re-skins across
  Cook's Country / Cook's Illustrated / ATK by swapping only tokens (no `brand` prop).
- [x] **IVFCRYO** — new `StatusAnnouncer` island in `#architecture`: advancing a shipment streams
  the spoken `aria-live` announcements into a visible "screen reader output" panel (real live
  region + visible mirror). Plus a `Metric` row promoting the real outcomes (75% / 55%).

## New island components (`src/components/islands/`)
`TokenChain.astro`, `BrandSwitcher.astro`, `StatusAnnouncer.astro` — all matched to the existing
island conventions: CSS-custom-property driven, single `querySelector` hydration, `primed`-gated
flourishes, `prefers-reduced-motion` aware, no new dependencies. Embeds use a `max-w-5xl` wrapper
so each island's ≥880px 2-col layout engages (the prose column is `max-w-4xl`).

## Bug found + fixed during verification
`StatusAnnouncer`'s transcript lines were first injected at runtime via `createElement`/`innerHTML`.
Astro **scopes** component CSS by a `data-astro-cid-*` hash on template-rendered elements; JS-created
nodes don't get that hash, so the scoped `.sa-transcript-line/-text` rules never applied — leaving
navy default text on the navy panel (invisible; confirmed via computed style: `display:list-item`,
`color:rgb(45,43,85)`). Refactored to **pre-render all transcript lines in the template (scoped,
`is-hidden`) and reveal one per advance** — matching how the other islands toggle pre-rendered DOM.
Re-verified: line text now `rgb(241,238,251)`, `display:flex`, 4 lines visible after 4 advances.

## Verified
`npm run build` clean (9s, no errors) — authoritative gate since `astro check` still WASM-panics on
the untouched `FAQ.astro`. All five `dist/projects/*` built with exactly one of each expected island
marker; module scripts bundled. Playwright screenshots at 1280px reviewed for every embed
(VMSpark Metric/Diagnostic/ROI, Berxi TokenPlayground, Rudiment TokenChain, ATK BrandSwitcher,
IVFCRYO StatusAnnouncer) — all 2-col, on-brand, interactive, no console/page errors.

---

# Homepage re-spine around four proofs (`/brandkit` request, content rebrand)

**Goal:** a visitor must leave the homepage *completely understanding* four things — he can (1) make
things **look excellent**, (2) **build them correctly**, (3) **understand systems**, (4) understand
**business surfaces** (conversion, retention, SEO, campaigns). `/brandkit` is an image skill with no
renderer wired here; the real ask was a content/positioning rebrand of `src/pages/index.astro`, so it
was treated as such. User chose the boldest option: **re-spine the page around the four proofs**.

## Changes (all in `src/pages/index.astro`)
- [x] **Meta/SEO** — new `<title>`/`description` asserting the four axes with honest searchable terms
  (eat-our-own-dogfood for goal 4).
- [x] **Hero** — H1 "Interfaces that **look excellent** — and prove it." (tightened from a 6-line
  wall to 3 lines; measured 216px ÷ 72px line-height). Lead now names built-correctly / system /
  business. Trust chips swapped from a11y-only to one per axis. Decorative illo relabelled
  Clarify/Strengthen/Bridge + Usable/Accessible → Excellent / Correct / Systems / Converts / Ranks.
- [x] **Four-proof spine** — replaced the experience-only "Good experiences…" section AND the
  `Clarify/Strengthen/Bridge` pillars with a numbered 2×2 of the four proofs (Craft / Correctness /
  Systems / Business surfaces). Added a 4th accent (`sunset`) to `accentMap`.
- [x] **Receipts `Metric` row** — real numbers only: `75%` fewer support calls + `55%` fewer shipping
  errors (IVFCRYO), `3` brands one library (ATK). Reuses `~/components/patterns/Metric.astro`.
- [x] **Navy section re-aimed** toward performance/business ("the interface is a business surface").
- [x] **New `#business` section** — the missing dimension gets dedicated room: Conversion & retention
  (links VMSpark), Technical SEO (capability), Campaigns & landing (links Berxi).
- [x] **About** nodded to conversion-focused marketing sites; **CTA** broadened beyond hiring to
  product/growth teams.

## Honesty pass (per brand-technical-register §3)
User confirmed only **conversion/retention, SEO, campaigns** are real — NOT acquisition/growth
metrics or A/B testing. Verified: every business claim traces to a real case study (VMSpark "increase
in sales conversion/retention"; Berxi "marketing unblocked"); SEO is capability-only; Metric row uses
only real IVFCRYO/ATK figures. Rendered-HTML grep for forbidden language (A/B test, funnel, paid
growth, invented conversion %/lift) returned **zero matches**.

## Verified
`npm run build` clean (10.6s, no errors). Playwright at 1280px: hero (3-line H1), four-proof spine +
receipts, business beat — all on-brand, no console/page errors. No new components; reused existing
primitives/patterns + `Metric`. Note: the page's old `work` const is now unused dead data (pre-existing,
left untouched to keep the diff focused).

---

# Design Consistency Pass — Review (2026-06-23, `/high-end-visual-design`)

Goal: align all 26 pages + 55 components to the existing design system without losing whimsy.
Driven by a 5-agent audit (~50 findings). Full pass approved; coral chosen as the single focus ring.

## Done
- **Primitives:** added Button `text` (fixes 11 silently-broken `variant="text"` sites) + `navy`
  variants; unified focus ring to coral (Button, SubmitButton, 10 islands); removed Heading
  redundant `text-balance`; fixed Logo label typo; defined missing `.logo-monogram-lg`.
- **Case studies:** removed phantom classes (`hero-editorial`, `animate-wiggle-slow`), defined
  `.hero-main`; VMSpark parity (corkboard wrap, plum underline + step eyebrows); ATK heading-scale
  parity; Berxi/VMSpark raw dividers → `<SquiggleDivider>`; deleted dead `.policy-card`/`.shell-card`
  CSS; IVFCRYO quote-icon color.
- **Shared-pattern adoption:** faqs + scorecard CTAs → `<CTABanner>`; hand-rolled intros →
  `<SectionHeader>` (services/about/contact/workflow/scorecard); deliverable titles → `<Heading>`,
  step circles → `<CardNumber>`; white panels → `<Card>` (blog/404/tools/audit-findings); blog
  card → `<Card>`; BlogPost category pill → `<Badge>`; `!bg-navy` overrides → `variant="navy"`.
- **Prose/tokens:** privacy + terms → `.prose-whimsy`; 404 dots → `<Blob>`; hex casing normalized;
  style-guide: added AA `-deep` swatches + deep-coral rule, nav pills → `<Button>`.

## Verification
- `npm run build` clean; `npm run test` 4/4; **`npx playwright test` 25/25** (axe-core WCAG AA on
  12 pages + keyboard/focus). One regression caught & fixed mid-pass — see below.
- `astro check` crashes on a pre-existing compiler WASM bug in FAQ.astro (unrelated; build is clean).

## Regression caught (logged in tasks/lessons.md)
- Changing Logo surname to deep coral `#C13A22` broke contrast on the navy footer (2.45:1) across
  all pages. Reverted to `text-coral` (large display text passes 3:1 on both light + navy). The
  audit over-flagged it; deep-coral is for SMALL text on LIGHT surfaces only.

## Deliberately deferred (rationale)
- TestimonialCard → Avatar primitive: Avatar has 3 gradients, testimonials use a richer 5-tone
  palette; adopting would *reduce* fidelity. Kept as intentional divergence.
- A few `<WavyUnderline>` flourishes dropped where headings became `<SectionHeader>` string titles
  (uniform headings per directive; could restore via a slot-based title if wanted).
- Island internal pill-buttons (`.sa-btn`, `.mtg-next`) and lined-paper CSS dedup: invasive /
  invisible internal cleanups; focus rings already unified.
- Berxi `<Metric>` band: would require inventing figures (content, not consistency).
- `font-hand`/`'Caveat'`: NOT a bug — `--font-caveat` var doesn't exist; literal matches the token.
