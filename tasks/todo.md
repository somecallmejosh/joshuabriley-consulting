# VMSpark design artifacts → shared standard

## Plan
- [x] Extract the shared machinery into `src/assets/wireframe-kit/`
- [x] Verify Logatot's 15 sheets still render byte-identical after the extraction
- [x] Write a VMSpark `theme.css` (high-fidelity colour) + authoring note
- [x] Prove one screen sheet and one flow sheet before fanning out
- [x] Rebuild the remaining 14 sheets against the template
- [x] Sketch + lo-fi wireframe SVGs for the 4 key screens
- [x] Add a "Screens and flows" section to `vmspark.astro` (it had none)
- [x] Remove the stale `public/` duplicates and dead `render.sh`

## The call that shaped this
VMSpark's sheets were **high-fidelity colour**; IVFCRYO and Logatot are lo-fi
greyscale. Converting would have deleted the evidence this case study rests on —
it is specifically about visual-system work (8+ button styles, 10+ form-element
styles, 6+ table conventions, ~40 views bypassing the token system).

So only the **annotation layer** was standardised: white sheet, brand/kind mark,
prose callouts in a right gutter on dashed rust leader lines. The artwork keeps
the product's own language, and callout discs stay rust rather than VMSpark blue
so commentary never reads as part of the thing it describes.

That gives VMSpark a better fidelity ladder than Logatot's: sketch → lo-fi
greyscale wireframe → **annotated colour**, where the colour pass is the payoff.

## Why a shared kit
`sheet.js`, `flow.js`, `sketchify.mjs` and `render.mjs` are entirely
project-agnostic and had already absorbed six bug fixes during the Logatot work.
Copying them into VMSpark would have meant fixing everything twice. They now
live in `src/assets/wireframe-kit/`; each project supplies only a `theme.css`.
Logatot's 15 sheets were rewired and re-render byte-identical.

## Kit improvements this round drove
Each was reported independently by two or more sheet authors, which is the bar
used for promoting anything:

- `flow.js` gained an `offset` option — a loop-back edge leaving and re-entering
  the same side of a column turned at the midpoint of two identical x values,
  i.e. exactly on the column border, through the left vertex of every diamond it
  passed.
- `sketchify.mjs` gained occlusion — it dropped rect fills, so an overlay panel
  did not cover what was behind it and grid rows ghosted through the inspector's
  JSON column.
- `flow.js` layout now positions `.lane` / `.band`, for flows split into an
  operator band and a system band.
- `AUTHORING.md` documents three traps found only by rendering: branch diamonds
  cap at ~200px of label, an edge between two column-1 nodes that skips rows
  draws through whatever sits between, and sheet-local class names must be
  prefixed (a bare `.kind` reaches up into the title band; `.ph` collided with
  the theme's placeholder modifier).

## Review
All 16 VMSpark sheets render at 3200px, renderer exits 0. Four sketch/wireframe
pairs generate clean. Logatot's 15 still render identically. `astro build`
passes and the plate was verified in-browser.

One real bug caught at build inspection: the five flow diagrams were mounted
through `ScrollShot`, which takes a string path and therefore bypasses Astro's
image pipeline — that served five full-size PNGs with no `srcset` and no webp.
Replaced with a local `.flow-sheet` mount using `<Image>`; all 16 images now go
through the CDN transform, matching Logatot.

Not done, deliberately: sketch/wireframe passes cover the 4 mounted screens
only. Sheet-local CSS that only one sheet needed (overlay dialog, resolution
card, stepper, month grid) stayed scoped rather than being promoted.

---

# Logatot design artifacts → IVFCRYO standard

## Plan
- [x] Establish the IVFCRYO standard precisely (sample palette, measure geometry)
- [x] Build a shared sheet template: stylesheet, callout/leader-line layer, renderer
- [x] Build a flow-diagram engine (5 of the 15 sheets are flows)
- [x] Prove both templates on one screen sheet and one flow sheet before fanning out
- [x] Rebuild the remaining 13 sheets against the template
- [x] Author clean wireframe SVGs for the 4 key screens
- [x] Derive the sketch SVGs from those wireframes
- [x] Mount the 4 key screens in `FidelityPlate` on `logatot.astro`
- [x] Document the pipeline (README, `_src/AUTHORING.md`)

## What the gap actually was
The two standards differed in more than styling. IVFCRYO puts annotations in a
right-hand gutter on dashed rust leader lines, white sheet, brand/kind mark.
Logatot had them in a two-column block *below* the artwork, warm grey, amber
markers, page-numbered footer — and no sketch/wireframe passes at all, so the
page used a bespoke `sheet-plate` where IVFCRYO used `FidelityPlate`.

Both projects' `_src/` HTML had been deleted; only rendered PNGs survived, and
`render.js` pointed at a `_src` that no longer existed and wanted `puppeteer-core`
(not installed — the project has Playwright). So the 15 sheets were re-authored
rather than restyled, and the renderer was ported.

Callout copy moved from bold lead-in labels to IVFCRYO's plain prose. Flows were
converted from swimlanes to the top-down chart idiom.

## Decisions
- **Geometry is derived, not authored.** Callout placement, de-overlap, disc
  numbering and leader routing are computed after layout, so fifteen sheets
  cannot drift. Discs number by vertical position, so they always read 1..n down
  the page regardless of authoring order.
- **The renderer fails loudly** — a callout with no matching anchor exits
  non-zero, so an unattached leader line cannot ship.
- **Sketches are generated from the wireframes.** A sketch that disagrees with
  its wireframe reads as two unrelated pictures. Jitter is seeded from element
  geometry, so re-running is byte-identical and does not churn git.

## Bugs found by rendering and looking
- Gutter positioned in page coords but resolved inside the padded body — whole
  callout column sat 40px right of IVFCRYO's.
- Sketch element regex used a lazy body group that matched empty, truncating
  every label to its first character.
- Flow edge labels drew into the wire layer *behind* the node divs, so an
  overrunning label vanished silently instead of showing a collision.
- Leader elbow could overshoot past its disc on full-bleed artwork; now clamped
  both sides, with `--art-w` reserving the margin the jog needs.
- Sketch derivation dropped dashed strokes and solid fills, losing
  placeholder/optional and active/selected state.
- Greeked copy bars came out as hollow boxes; now struck as scribbled strokes,
  which is what actually makes them read as sketches.

## Review
All 15 sheets render at 3200px, renderer exits 0. Four sketch/wireframe pairs
generate clean. `astro build` passes, all eight SVGs ship, and the plate was
verified in-browser (tab rail switches, sketch renders, spec rail updates).

Scoped deliberately: sketch/wireframe passes exist for the 4 mounted screens
only, matching IVFCRYO (which built 12 pairs but mounts 4). The other 11 remain
annotated-only in the rest-of-system grid.

Left alone on purpose: several sheets carry bespoke scoped CSS (timeline rail,
month grid, printed page, audio transport) — genuinely one-sheet things. Only
the primitives three or more sheets reinvented (flow-legend keys for the exit
stadium and dashed system step) were promoted to `sheet.css` with the local
copies removed. Retrofitting the rest meant re-verifying eleven renders for no
visual gain.

---

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

---

# Give the interactive tools their own home at /tools/

Four of seven blog posts were interactive tools wrapped in framing prose. The blog
index never branched on `interactive: true`, so nothing marked them as runnable
software. Moved them to a real `/tools/` section.

- [x] Add a `tools` content collection (`src/content.config.ts`) with `tool`, `kind`,
      `order`, `takeaway`, `props`, `instructions`
- [x] Move the 4 MDX files to `src/content/tools/` at their original slugs
- [x] New `src/layouts/ToolPage.astro` + `src/pages/tools/[...slug].astro`
- [x] New `src/pages/tools/index.astro` (hairline bento, 4 items -> 4 cells)
- [x] Add Tools to `PRIMARY_NAV` + footer (`src/lib/nav.ts`)
- [x] Replace the buried tool mention on the home page with a real ink Tools band
- [x] Reverse the blog-era redirects in `astro.config.mjs`; fix results.astro links
- [x] Blog index pointer to /tools/

## Review

Done. Build green, `npm run test` 3/3 green.

**Reverses an earlier decision.** `astro.config.mjs` had `/tools/* -> /blog/*` redirects
("The interactive tools were repurposed as blog posts"); the four tool entries were
already commented out when this started. Redirects now run the other way, so blog-era
URLs are preserved.

**The `instructions` frontmatter field is the load-bearing bit.** On a tool page the
island leads and the essay follows, which inverts the blog order. Three of the four
essays used deictic copy ("the exhibits below", "the playground below", "each number
on the right"). Pulling the how-to-drive-it paragraph into frontmatter puts it directly
above the island, so no copy points at something the reader already scrolled past. The
remaining prose was edited for the new order.

**Widths match the old embed exactly.** `.tool-stage` is `min(72rem, 94vw)`, the same
breakout `.post-tool` had inside `.prose-interactive` (BlogPost.astro), so the islands
render identically to before the move. Measured at 1152px.

Verified: all 4 tool pages render island + essay; bento is 4 cells with no empty area
(featured 820x656, three stacked 409-wide totalling 654); nav stays one line at 1024 /
1280 / 1536 with `aria-current` correct on child routes; scorecard round-trip works
end to end (32 questions -> 64/64 -> results verdict -> retake with `?r=` prefill ->
32 answered restored); invalid `?r=` bounces to `/tools/scorecard/` not the old blog
URL; blog is 3 rows plus the pointer; zero em-dashes in new files.

Not done, deliberately: the duplicated button-class constants in results.astro:606-615
and the ~1.5KB of scorecard prose living in that page's script tag. Both are real debt
and this was the natural moment, but folding them in would have made the diff
unreviewable. Left `InspectorMode` alone (konami easter egg, not a tool).

`astro check` still crashes on the pre-existing `@astrojs/compiler` wasm error in
FAQ.astro (untouched); `astro build` remains the gate.

### Follow-up: threshold framing on the ROI calculator

A total with no threshold beside it is not actionable. Added a "When the number
starts to matter" section to `src/content/tools/roi-calculator.mdx`, between the
tool and "Defensible beats dramatic".

Every figure in it was computed by running `computeRoi` from `src/lib/roi.ts` at
each team shape, not estimated. The reframe is hours rather than dollars: divide
recovered hours by 40 and you get weeks of one person's time, which is the only
figure comparable against what building the system would cost.

| Shape | Recovered/yr | Source |
| 2 people, 1 surface, 1h/wk, low | 18 hrs (~0.5 wk) | low reclaim 20%, no surface drag |
| 6 people, 2 surfaces, 3h/wk, med | 348 hrs (~8.7 wk) | 42% after 1 surface of drag |
| 12 people, 4 surfaces, 4h/wk, med | 1016 hrs (~25 wk) | 46% |
| 40 people, 8 surfaces, 4h/wk, high | 5962 hrs (~149 wk) | 81%, near the 85% cap |

The section says plainly that at the small end the right answer is to do nothing.
Point being made: enterprise teams end up with design systems and small studios do
not because of arithmetic, not sophistication.

Also fixed: `.tool-stage` was `min(72rem, 94vw)`, copied from `.post-tool`, which
needed viewport units to break out of a narrow prose column with negative margins.
`.tool-stage` already sits in a wide padded container, so 94vw overhung the
container padding by a sub-pixel and gave all four tool pages a 1px horizontal
overflow at 390px. Now `min(72rem, 100%)`. Desktop width still measures 1152px.

### Follow-up: bento hover was too dark, and link text was not descriptive

**Hover.** The `/tools/` bento cells used the site-standard `hover:bg-ink/[0.02]`,
the same class the blog and personal-projects rows use, but rendered visibly darker.
Cause: those rows have no background of their own, so the 2% ink composites over the
section's paper. The bento cells carry an opaque `bg-paper` and sit on a `bg-line`
grid, so the hover class REPLACED the paper and exposed the grey grid gap beneath.

Measured, sampling real pixels:

| Surface | rest | hover (before) | hover (after) |
| ------- | ---- | -------------- | ------------- |
| Blog row | rgb(250,251,252) | rgb(246,247,248) | unchanged |
| Personal-projects row | rgb(250,251,252) | rgb(246,247,248) | unchanged |
| Tools bento cell | rgb(250,251,252) | ~rgb(225,227,231) | rgb(246,247,248) |

Fixed with a scoped `.tool-cell` that keeps the cell opaque and mixes the tint into
paper (`color-mix(in srgb, var(--ink) 2%, var(--paper))`), landing on exactly the
colour the other rows composite to. `color-mix` was already in use in
TokenPlayground.astro, so this is in-system.

Checked the other `gap-px bg-line` grids (about.astro, index.astro, style-guide):
their cells are divs with no hover, so none had the bug. Unique to /tools/ because
it is the only hairline bento whose cells are links.

**Link text.** Three of the four cells said just "Open", which is weak copy and bad
for screen-reader users navigating by link text alone (three identical links).
Added a required `action` field to the tools schema, verb-first and specific:

- scorecard: Take the assessment
- roi-calculator: Run your numbers
- token-playground: Move a token
- audit-findings: Inspect a specimen

Also removed the derived `Open the {kind.toLowerCase()}` string on the featured cell,
which produced the awkward "Open the self-assessment".

Note: changing the collection schema requires a dev-server restart (or `rm -rf .astro`)
before the new field appears in rendered output. The content layer caches parsed
frontmatter and does not re-sync on schema edits alone.
