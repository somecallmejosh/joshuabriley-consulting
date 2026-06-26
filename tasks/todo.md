# Redesign the Tools to better fit the existing design (`/high-end-visual-design`, 2026-06-26)

**Scope:** interactive widgets + results-page rebuild (the four page shells already match `tools/index.astro`). **Ambition:** elevated craft, on-brand — editorial-flat (hairline rules, mono-labels, surface-aware clay, NO drop shadows / glassy bezels).

## Finding
Drift lives in (a) the islands carrying generic "tool-widget" tells — mac-window browser-dot chrome, hardcoded `rgba(168,65,42,X)` accent literals that DON'T brighten on ink surfaces, scattered radii — and (b) the underbuilt `scorecard/results.astro` (stub hero + hand-rolled inline buttons).

## Shared "tool craft" conventions
- [ ] Token discipline: hardcoded `rgba(168,65,42,X)` → `rgb(var(--accent-rgb) / X)` (follows surface).
- [ ] Kill mac-window chrome (`.tp-preview-dots`, `.dx-chrome` dots, `.rc-result-dots`) → mono-label + hairline `.rule` editorial header.
- [ ] Radius rhythm (outer 14 / inner 10 / pill 999); leave Diagnostic's intentional "broken" radii.
- [ ] Unify chip shape; keep spring pops. Subtle inset on tracks — no shadows.

## Per-target
- [ ] **results.astro** — rebuild: enrich hero to sibling standard; replace hand-rolled JS buttons with canonical Button class language; editorial radar heading; tokenize consequence box.
- [ ] **ScorecardEngine** — token sheen, choice-pill polish, grade-stamp framing.
- [ ] **RoiCalculator** — token copy-pulse, editorial result header (drop dots), bar tactility.
- [ ] **TokenPlayground + TokenChain** — drop preview dots → mono header, token flow-glow, unify chip radius.
- [ ] **Diagnostic** — token scan/issue-hot washes, soften chrome dots, keep intentional defects.

## Verify
- [ ] build/check passes; screenshot each tool on :4321; confirm ink-surface accent brightens; all JS anchors preserved.

## Review — DONE ✅
**Key finding:** the four tool page *shells* were already on-brand (rebranded on `rauno`), so the redesign concentrated where drift actually lived. Resisted churning working, on-brand islands — the brand is deliberately editorial-flat, so heavy bezels/shadows were the wrong move.

**Shipped:**
- `scorecard/results.astro` (primary target): enriched the stub hero with feature pills to match its siblings; renamed the literal "Radar chart" heading to "How you scored, by dimension."; replaced ALL hand-rolled inline JS buttons with the canonical Button class language (`BTN_BASE/LG/MD` + variant consts mirroring `Button.astro`) so share/retake/CTA actions match every other button on the site; tokenized the "If ignored" consequence wash → now brightens correctly on the ink card.
- `RoiCalculator` + `TokenPlayground`: replaced the decorative `•••` mac-window dots with the site's accent-square "• live" motif (clay / plum-primary respectively); tokenized ROI copy-pulse.
- `Diagnostic`: tokenized scan-sweep gradient + issue-hot wash (kept the browser chrome — it's semantically the "shipped specimen"). `TokenChain` (project page): tokenized flow-glow.
- Token discipline: every hardcoded `rgba(168,65,42,X)` in scope → `rgb(var(--accent-rgb) / X)` so washes follow the surface. Verified: 0 stray literals remain in the tools.

**Verified:** `npm run build` clean (all tool pages emitted); pages serve 200; before/after Playwright screenshots on :4321; all JS anchors (data-*, ids, `shareBtn`/`shareBtnText`) preserved. (`astro check` crashes in compiler WASM on unrelated `FAQ.astro` — pre-existing.)

**Not done (deliberate):** ScorecardEngine had no accent-literal bug and reads well — left as-is. Did not re-cut the page shells (already strong). Did not add bezels/shadows (brand forbids).

---

## Round 2 — DRAMATIC elevation ("wow factor, no tchotchkes") ✅
Direction: lean into the brand's own latent drama (Fraunces display serif at billboard scale, dark "moment" bands, cinematic motion, surface-aware clay) instead of importing generic glassmorphism. Every billboard number is *content*, never decoration.

**Flagship — `scorecard/results.astro` rebuilt into a cinematic report:**
- New **VERDICT band** (ink): billboard Fraunces letter grade (clamp 7–15.5rem) that blur-draws in, status-colored (clay when the system needs investment); Fraunces score that counts up; meter; clay-flagged weakest area; navy/secondary actions.
- **BREAKDOWN** (paper): radar chart now **draws in** (scales from centre via a `.radar-data` group) + per-dimension rows with **staggered** fade-up + bar fills.
- Motion choreography: rAF reveal for the verdict, IntersectionObserver for radar/breakdown — hardened so content can never get stuck invisible (reveal-if-onscreen + reduced-motion path + 2.5s safety net). Page rhythm now paper→ink→paper→ink→paper.

**Billboard figures across the other tools (consistent wow language):**
- `ScorecardEngine`: Fraunces running total (text-5xl/6xl) + billboard Fraunces grade in the final reveal (clamp 4.5–7rem), pairing with the results verdict.
- `RoiCalculator`: "recoverable per year" → giant Fraunces (clamp 2.9–4.75rem) clay figure — the panel centerpiece.
- `TokenPlayground`: live stat numbers (1/7/0) → Fraunces display (clamp 2.1–2.7rem) in the active primitive color.
- `Diagnostic` (audit): left its scan-and-reveal interaction as the wow (already cinematic) — deliberately did NOT bolt a billboard number into the sidebar (that's the tchotchke trap).

**Verified:** `npm run build` clean; Playwright screenshots (desktop + mobile) of verdict/breakdown/recommendation/scorecard-reveal/ROI/tokens; recommendation card measured rendered (1213px, opacity 1) — the blank in fullPage captures is a Playwright stitching artifact, not a real bug. All JS anchors preserved; reduced-motion respected.

---

# Whimsy notch-up — "tailored suit + sneakers" (`/high-end-visual-design`, 2026-06-26)

**Brief:** Take whimsy up one deliberate notch — professional in a tailored suit, but wearing
sneakers / artsy glasses. Extend the existing voice (dry technical wit + precise typographic
signatures), NOT the kitsch the rebrand removed. User locked: Living details · One magnetic
moment · Playful edges, at a *tasteful notch up*.

## Plan
- [ ] Living details — `.brand-dot` (load draw-in + gentle breathe), `.ink-wink` (draw-in
      underline), clay `caret-color` in site.css; dot + monogram wired in Logo; ink-wink on hero italic
- [ ] One magnetic moment — `scripts/whimsy.ts` magnetic follow (pointer-fine + reduced-motion
      gated, icon parallax, press squish); `.js-magnetic` on hero CTA + JB monogram only; import in BaseLayout
- [ ] Playful edges — blurred-tab title wink (whimsy.ts), one extra console line, 404 watermark + diff aside
- [ ] Verify on :4321 (astro dev) — home + 404 screenshots, reduced-motion, no console errors

## Review — DONE ✅
Shipped six surgical moves, all in the existing voice (no kitsch reintroduced):
- **`.brand-dot`** (site.css + Logo): the accent period after "Joshua Briley." draws in on
  load (scale overshoot) then breathes 1→0.5 opacity over 5s — the wordmark's heartbeat.
- **`.ink-wink`** (site.css + index hero): clay underline draws in from the left when you
  hover the italic "pull their weight" (or the headline it sits in). Verified via screenshot.
- **Clay `caret-color`** (site.css): surface-aware text caret in every editable field.
- **Magnetic moment** (`scripts/whimsy.ts` + `.js-magnetic` on hero CTA + JB monogram ONLY):
  pointer-fine + reduced-motion gated; element leans toward cursor (clamped 10px), trailing
  arrow drifts at half-strength parallax, 0.96 squish on press. Used in exactly 2 spots.
- **Blurred-tab wink** (whimsy.ts): title → "↖ you drifted — come back", restores on return.
- **Console**: one extra brand-voice line about the breathing dot.
- **404**: oversized outlined italic "404" watermark (matches project-hero numerals) + a
  git-diff aside (`- removed … / + added …`) — the design-systems voice having a laugh.

Verified: `astro dev` :4321 — / = 200, bogus route = 404 (custom page renders), all markers
present, Playwright run shows **0 page/JS errors** (only the expected 404-document response).
Reduced-motion (global block collapses animations to static) and touch (magnetism skipped) safe.
Note: `astro check` crashes with a pre-existing WASM compiler panic on FAQ.astro — unrelated to
this change; the dev server compiles every touched route fine.

Dials if you want to tune: brand-dot breathe amplitude/speed (site.css), magnet STRENGTH/MAX
(whimsy.ts), blurred-tab copy (whimsy.ts).

## Follow-up — Berxi + ATK full-page ScrollShots (2026-06-26) ✅
User: capture FULL pages of berxi.com + americastestkitchen.com and apply the VMSpark overflow-scroll
treatment (replace the above-fold SiteShot on those 2 case studies).
- Full-page captures via Playwright fullPage (dismiss cookie/newsletter, auto-scroll for lazy load) →
  overwrote `berxi-live.webp` (1600×6266, 537KB) and `atk-live.webp` (re-encoded q72/1500w → 1500×7417,
  ~870KB; trimmed from 1.1MB).
- Enhanced `ScrollShot` with an optional `href` → label becomes a linked "domain ↗" (so public sites
  stay visitable; VMSpark's stay link-less). Component still backwards-compatible.
- Swapped SiteShot→ScrollShot on ATK + Berxi (import + usage); full-width in the wide container
  (frames 1232×620). SiteShot still used by vmspark.com marketing shot + rudiment guide (untouched).
- Verified: both routes 200, no SiteShot leftovers, assets 200, linked label + scroll hint render,
  0 page errors. Dev server :4321.

## Follow-up — VMSpark admin "after" gallery (2026-06-26) ✅
User wanted full-page caps of 4 local admin UI-playground pages (localhost:3000), main content
only (no left sidebar). Pages are auth-gated (Devise) — user gave dev creds; Playwright signs in.
- Capture gotchas solved: (1) `<main>` is a height-locked flex scroller, so element/fullPage shots
  clipped to 1000px → fixed by measuring main.scrollHeight and growing the VIEWPORT to match so the
  locked main expands, then element-screenshotting `<main>` (excludes the off-canvas sidebar at
  x=-267). (2) tables page is 11,451px — raised cap to 13000 so it's complete.
- 4 webps → `public/images/projects/vmspark/playground-{overview,primitives,tables,buttons}.webp`
  (87KB–944KB; tables is the big one, lazy-loaded).
- New `ScrollShot` pattern (`src/components/patterns/ScrollShot.astro`): full-page screenshot in a
  fixed-height browser frame that scrolls internally (no outbound link — these are localhost admin).
  Keyboard-focusable stage, overscroll-contain, editorial chrome + "FULL PAGE · SCROLL ↕" hint.
- Placement: new "What it looks like now" 2×2 gallery placed right after the "before" sprawl grid +
  the fix paragraph — completes the before→after story; captions map to the prose (buttons→one set,
  primitives→shared, tables→standardized). Marketing vmspark.com SiteShot left in place (additive).
- Verified: route 200, all 4 assets 200, 4 frames render, internal scroll works (tables mid-scroll),
  0 page errors. Dev server :4321.
- FOLLOW-UP: user found 2-col too cramped → switched the after gallery to single-column full-width
  (`grid md:grid-cols-2` → `space-y-12`) and bumped ScrollShot default maxH 460px→620px. Frames now
  ~1104×620 within the default container; verified full-width + legible, 0 page errors.

## Follow-up — Rudiment field guide SiteShot (2026-06-26) ✅
Added the Rudiment guide (rudiment-guide.netlify.app) to the rudiment page. Chose SiteShot
(screenshot frame + visit) over a live embed: the guide is 13 chapters of *reading*, best on its
own site — keeps the App Shell's live-embed treatment meaningful (that one's an interactive demo).
- Captured guide → `public/images/projects/rudiment-guide.webp` (47KB).
- New "Live site / Field Guide" SiteShot section placed right after the App Shell embed, so the two
  flagship artifacts (app shell live + guide visit) sit together up top. Existing "See it served"
  guide/storybook cards section left as the detailed CTA deeper down.
- Verified: route 200, both artifacts present (data-live-embed + guide SiteShot), 0 page errors,
  screenshot confirms the frame + hover pill. Dev server :4321.

## Follow-up — Rudiment app-shell live embed (2026-06-26) ✅
User asked to add the Rudiment UI "App Shell" Storybook story to the rudiment page; chose a
LIVE interactive embed (not a screenshot) with lazy-load.
- New `LiveEmbed` pattern (`src/components/patterns/LiveEmbed.astro`): poster screenshot in the
  editorial browser-frame → swaps to a real `<iframe>` on "Load live demo" click. KEY: iframe is
  pre-rendered with NO src (data-src only), so 0 network until clicked AND Astro scoped styles
  still apply (runtime-injected nodes would miss them — the documented gotcha). Click sets src +
  flips data-loaded; CSS fades poster out / story in. Reduced-motion safe.
- Captured the story canvas via the clean iframe URL (id=examples-app-shell--app-shell) →
  `public/images/projects/rudiment-app-shell.webp` (36KB poster).
- Inserted a "Live story / App Shell" section after the rudiment hero (eyebrow + h2 + lede + embed).
- Verified: route 200; before click iframe src=null + 0 Storybook requests (truly lazy); after
  click src set, data-loaded=true, story loads (87 reqs), 0 page errors; poster & loaded states
  both look right. Removed one inert CSS selector. Dev server still :4321.

## Follow-up — ink case studies + live screenshots (2026-06-26) ✅
- **Inked all 5 case-study headlines**: converted each hero's `<span class="text-accent">` word/period
  into the ink-wink italic — atk "no fragmenting", berxi "platform", vmspark "rebuilt for 2026",
  ivfcryo "accessibility", rudiment "understood". Verified hero ink-wink = 1 on every case study.
- **New `SiteShot` pattern** (`src/components/patterns/SiteShot.astro`): a live screenshot in a quiet
  browser-window frame — hairline dots, centered mono URL rail, pulsing ● LIVE tick, soft ambient
  lift, "Visit site ↗" pill on hover; whole frame links out (new tab). Reduced-motion safe.
- **Live captures** via Playwright + sharp → optimized webp in `public/images/projects/`:
  atk-live.webp (cookie banner + newsletter modal dismissed), berxi-live.webp, vmspark-live.webp
  (~60–170KB each, 1600px). Wired a `<SiteShot>` section right after the hero on those 3 pages.
- **ivfcryo**: site is DOWN per user → no screenshot added (page still gets the inked headline +
  all global whimsy). Offered to capture once it's back. rudiment-ui: component library, no live
  marketing site → no shot (intentional).
- Verified: all 5 /projects/* routes HTTP 200, 0 Playwright page errors, screenshots confirm the
  framed shots (light & dark sites) sit well on paper. Note: the orphan pre-existing
  projects/*.webp files were unused; left untouched.

## Follow-up — spread site-wide (2026-06-26) ✅
User approved the balance and asked to spread it. Global pieces (brand-dot, caret, tab-wink,
console, magnetic JB monogram) were already on every page via chrome. Spread the two per-page
signatures via 4 parallel subagents (grouped by dir, deterministic phrase map, no discretion):
- **ink-wink headline italic** added to 15 hero headlines (about, contact, faqs, projects,
  services, testimonials, blog, tools×6, services×3). Phrase pre-chosen per page (e.g. about
  "quiet parts", services "shipping faster", audit "actually broken").
- **magnetic CTA** added to ONE signature CTA on 19 pages (hero primary, or the single closing
  CTA where there's no hero button). Restraint kept: one magnetic moment per page, never all buttons.
- **Project case studies (5)**: magnetic CTA only — NO ink-wink, because their heroes already
  use a `text-accent` word/period as the wink; stacking ink-wink would clash. rudiment-ui has no
  Button → skipped magnetic (still gets all global whimsy).

Verified independently: all 22 routes HTTP 200 (+ bogus route 404); hero ink-wink = exactly 1 on
all 16 wink pages, 0 on case studies (intentional); magnetic CTA = exactly 1 interactive element
per page on all 19 CTA pages, 0 on blog/rudiment (intentional). Playwright: 0 page errors;
screenshots confirm winks sit well in display-xl Fraunces. Dev server still on :4321.

---

# Add character without going over the top (`/high-end-visual-design`)

**Brief:** Site is well-built but reads as a smart Tailwind template. Add personality so it
says "takes his craft seriously AND would be fun to work with." No return of the stripped
scrapbook (Polaroid/Tape/Pin/Squiggle). Whimsy must come from the subject matter — a guy who
builds design systems, with taste + humor.

**Decisions (confirmed):** Fraunces serif display · "Confident" whimsy dial.

**Diagnosis:** Personality currently lives only in the COPY. #1 template-tell: one ubiquitous
grotesk (Hanken) does display + body + numerals. The devices that should delight (tokens demo,
Konami Inspector Mode, View Source) are clinical and undiscoverable.

### Typography — Fraunces (biggest "un-template" lever)
- [ ] astro.config.mjs — add Fraunces (Google), `--font-fraunces`, w400/500/600/700 + italic
- [ ] tailwind.config.mjs — add `serif` family → Fraunces
- [ ] Heading.astro — route display-xl/lg/md + h1 + h2 to `font-serif` (h3/h4 stay grotesk).
      Surgical: do NOT flip the overloaded `font-display` token (20+ small-text uses).
- [ ] site.css — `font-optical-sizing: auto`; Fraunces on .hero-index, .pullquote, display `em`
- [ ] index.astro — big metric numbers → serif; one italic accent word in the hero headline

### Whimsy — "Confident" dial
- [ ] BaseLayout — styled console easter egg for devs (witty, on-brand, hints Konami)
- [ ] Footer — colophon: set-in-Fraunces + "hand-built, not templated" wink + Konami hint
- [ ] Button.astro — springier press physics + a touch more icon travel

### Verify
- [x] Production build passes (exit 0, all pages incl. FAQ/blog/services); Fraunces self-hosted + preloaded
- [x] Screenshots home/about/projects/contact + mobile — serif reads beautifully at every scale
- [x] reduced-motion respected (global transition kill in site.css covers new button lift)
- note: `astro check` crashes on a PRE-EXISTING Astro WASM bug transforming FAQ.astro to TSX
  (unrelated to these changes; the real build compiles FAQ fine)

### Review
**Done.** Personality now comes from the *subject matter*, not decoration:
- Fraunces (display serif) routed through the Heading primitive → every headline on all 27
  pages + the "Receipts/metrics" numbers, case-study openers, blog h2s & pullquotes, and the
  oversized chapter numeral (now italic). Body stays Hanken, labels stay Geist Mono.
- One italic Fraunces flourish in the hero ("*pull their weight*").
- Confident whimsy: dev console easter egg (hints the Konami Inspector Mode), footer colophon
  ("set in Fraunces, Hanken Grotesk & Geist Mono · no templates were harmed"), springier button
  press physics + more icon travel.
- GOTCHA: Astro's `<Font>` API needs an explicit `<Font cssVariable>` tag in the layout head
  per font — defining it in astro.config alone leaves the CSS var empty (which also invalidates
  any `font-family` declaration that uses it via var()).

---

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

---

# REDESIGN — "Editorial Technical" (Rauno register)  ·  2026-06-25

**Brief:** Make the site read as *the* place to hire the best UI Design Engineer.
Extremely professional, restrained, void of AI clichés (no glowing orbs, no rainbow,
no cursive logo, no scrapbook props). Consult Emil Kowalski for motion that *illustrates*.

## Design system (locked)
- **Type:** Hanken Grotesk (everything) + Geist Mono (labels, metadata, indices, code).
  Legacy font tokens remapped onto these; old families retired.
- **Color:** paper `#F5F4F1` · raised `#FFFFFF` · ink `#1B1A17` · muted `#6B6A66`
  · faint `#9A9892` · line `#E5E3DC` · **one accent** clay `#A8412A` (AA on paper).
  Dark sections = ink, not navy.
- **Shape/space:** squared geometry, small radii (2–6px), hairline rules, heavy whitespace.
  No tilts, floats, blobs, tape, pins, squiggles, wavy underlines.
- **Motion (Emil):** restrained, physical. cubic-bezier(0.22,1,0.36,1). Subtle fade+rise
  reveals. One *illustrative* hero motion (token → component propagation). Quiet nav.

## Leverage
Token-driven site → remap the token layer once → every page reflows to monochrome;
then hand-finish chrome + homepage to completion.

## Phase 1 — Vertical slice (REVIEW GATE)  ✅ COMPLETE
- [x] astro.config.mjs — Hanken Grotesk + Geist Mono (replaced 5 old families)
- [x] tailwind.config.mjs — new ink/paper/line/accent tokens; legacy tokens remapped
- [x] site.css — new base/focus/nav/reveal + legacy font-var aliases (top block)
- [x] Primitives — Logo (typographic), Button (ink, square), Badge (mono chip),
      Heading (Hanken tracking), Text, Link (accent underline), Section (ink/paper)
- [x] Header (mono status + Start-a-project) + Footer (colophon, no dup CTA)
- [x] Homepage rebuilt to completion — hero w/ illustrative token→component motion
- [x] `npm run build` clean (all 20+ pages compile); contrast bumped to AA;
      desktop + mobile screenshots verified
- [x] **STOP — review gate**

## Review notes
- A11y (Lighthouse 0.91 → fixed): 2 serious issues, both resolved + re-verified
  with @axe-core/playwright = **0 violations** (wcag2a/2aa/21aa/22aa):
  1. color-contrast — hero widget labels used ink-faint (#9A9892, 2.6–2.9:1);
     moved to ink-muted (#6B6A66 → 4.9:1 paper / 5.4:1 white).
  2. target-size (WCAG 2.2) — footer Privacy/Terms <24px tall; min-h-[24px].
- Lighthouse PERF 0.5 (FCP 5.6s / LCP 7.1s) is the DEV server, not real: bytes are
  Astro dev-toolbar (icons.js 277KB, toolbar 86KB), aria-query 205KB, axe a11y.js
  122KB, unminified @vite/client — none ship in prod. `npm run build` = inlined +
  minified static. Re-measure against the built site, not `astro dev`.
- non-composited-animations (informative): hero widget animates border/background-
  color on 9 tiny (~4px) nodes. Negligible repaint; convert to opacity-only in P2.
- Other pages now inherit new chrome + Hanken + ink palette automatically, but
  their BODIES still use scrapbook props (corkboard, polaroids, tape, pastel
  washes) — transitional until Phase 2. Confirmed on /projects/, /about/.
- site.css lower blocks (report-paper, hero-grid, prose-whimsy, card-sticky,
  blob/pin/tape) still carry literal old hex — to be removed per page in Phase 2.
- Decorative components (Blob/Pin/Tape/Squiggle/WavyUnderline) + ProjectPolaroid
  still exist; retire during propagation.

## Phase 2 — Propagate ✅ COMPLETE
- [x] Neutralize decoratives: Blob/Pin/Tape → no-op; Squiggle → hairline; Wavy → clean accent underline
- [x] Redesign shared patterns: Card (hairline/flat), Metric (ink/mono), CTABanner (framed paper)
- [x] Per-page markup (6 subagents): projects+5, services+3, about, contact, testimonials, blog(+layout), tools+style-guide, faqs, legal, 404
- [x] Shared site.css (me): hero-* / project-logo-tag / prose tables / report-paper / grade-stamp / meter / reveal-card → editorial
- [x] Island internals (1 subagent): all 12 islands restyled to ink/paper/mono; BrandSwitcher/CodeBlock/TokenChain/ServiceFitQuiz contrast fixed
- [x] Darkened ink-muted #6B6A66 → #5C5B55 (~6:1) so secondary text stays AA even mid-reveal-fade
- [x] **Verify: build clean · axe 27/27 pages 0 WCAG A/AA violations · screenshots coherent**
- [x] scorecard RESULTS page (`/tools/scorecard/results`, was missed): template + `<style is:global>` + script-generated HTML + radar colors + STATUS_COLORS → editorial; all score/decode/recommendation/share logic byte-for-byte intact; build clean, 0 axe across all 3 recommendation branches (healthy/audit/workflow)

## Blog longform typography (`.prose-whimsy`) — fixed
- Root cause: no Tailwind Typography plugin + no base prose rules existed (only table rules); the redesign left MDX bodies rendering against the preflight reset → no hierarchy/lists/links.
- Fix (site.css): authored the full Editorial-Technical longform system — h2 (hairline-divided chapters) / h3 / h4, paragraph rhythm, `.lede`, `.num` accent numerals, ink+clay-underline links, strong/em, clay-square bullets + mono ordered markers, accent-rule blockquote, `.pullquote`, inline + fenced code, hr, img, and `.cost-card/.icon-wrap` neutralized. Rules use `:where()` (zero specificity) + `:not(.not-prose *)` so utility-styled in-post components opt out — mirrors the Typography plugin. All 3 posts: build clean, 0 axe.

## Phase 3 — Cleanup ✅ COMPLETE
- Deleted 20 retired components (decorative/ + card/ dirs removed entirely): Blob, Pin, Tape, SquiggleDivider, WavyUnderline, Card, CardNumber, CardQuoteMark, ProjectPolaroid, TestimonialCard, TestimonialPinboard, ShowcaseRow, ShowcaseSwatch, ProofPanel, WindowFrame, CardGrid, TechStack, Hero, Avatar, MissingTokenGame.
- site.css: removed all dead scrapbook blocks (paper-note/corkboard/blob/tape/pin/avatar/rot/float-steam-spin keyframes/etc.) + the stray .squiggle-divider; migrated remaining font-var refs; dropped the 5 legacy font-var aliases.
- Fonts: only Hanken Grotesk + Geist Mono load; 0 raw retired-font-var refs anywhere.
- BrandSwitcher demo made honest (Georgia serif / Hanken sans, not unloaded Fraunces/Space Grotesk).
- Dev overlays (InspectorMode, ViewSource) editorialized to tokens (were missed in Phase 2).
- Cleaned dead inline hex from the MDX `.icon-wrap` blocks.
- Style-guide page rewritten to document the NEW system (tokens/type/primitives/patterns/forms/motion).
- Fixed Logo a11y (role="img" on the non-link span → aria-label valid).
- **Verify: build clean · axe 29/29 pages 0 WCAG A/AA violations.**

## Phase 2 review notes
- Full site now in the Editorial-Technical register; build passes; **0 WCAG A/AA violations across 27 pages** (incl. all interactive tool islands).
- Remaining OPTIONAL cleanup (cosmetic / size, not blocking): dead scrapbook CSS still in site.css (paper-note, corkboard, card-sticky/polaroid/pin, steam, float keyframes, etc.) — unused, safe to delete for bundle size; unused components (TestimonialCard, TestimonialPinboard, ProjectPolaroid, CardNumber) can be removed; style-guide page still *documents* the legacy decorative inventory by design (needs a content rewrite if that inventory is being retired); old font CSS-var aliases can be dropped once no raw var() refs remain; hero-widget color-animation → opacity-only (P1 note).

## Review notes
(filled in as I go)
