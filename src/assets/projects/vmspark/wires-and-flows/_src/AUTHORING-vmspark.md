# Authoring a VMSpark sheet

Read `../../../../wireframe-kit/AUTHORING.md` first — it is the general contract.
This file only covers what is different here.

## VMSpark renders in colour, and that is deliberate

IVFCRYO and Logatot are lo-fi greyscale. VMSpark is high-fidelity: real data,
real product colour, real table and button treatments.

The reason is that VMSpark's case study is *about* visual-system work — eight
competing button styles, six table conventions, forty views bypassing the token
system. A greyscale wireframe would delete the evidence the argument rests on.

So: **the artwork is high fidelity, and only the annotation layer is
standardised.** The callout discs and leader lines stay the kit's rust, never
VMSpark blue, because callouts are commentary *about* the product and must not
read as part of it.

Colour is load-bearing here, so use it accurately rather than decoratively:

- `--accent` blue — the primary action, the active nav item, a selected row,
  a focused field, a sorted column
- `--ok` green — a resolved or processed terminal state
- `--warn` amber — a failed row, a failure chip, the impersonation banner
- everything else stays neutral

If a sheet uses colour anywhere it does not mean one of those four things, it is
decoration and should come out.

## Vocabulary (theme.css)

On top of the kit's classes, this project adds:

- `.rail` with `<i>` / `<i class="on">` — the icon rail left of the nav
- `.workspace` with `.k` / `.v` — the tenant switcher, which belongs on every
  authenticated screen
- `.omnibox` + `.kbd` — the ⌘K search field
- `.tabs` / `.tab` / `.tab.on` — the underlined tab strip
- `.cb` / `.cb.on` — checkbox
- `.chip` variants: `.on` (blue), `.ok` (green), `.warn` (amber, bordered),
  `.sq` (square), `.sm`
- `.btn` variants: `.solid` (blue), `.warn` (amber outline), `.quiet`, `.ghost`,
  `.sm`, `.lg`, `.icon`
- `.field.ph` (placeholder) and `.field.focus` (blue focus ring)
- table rows: `tr.sel` (selected, blue tint), `tr.bad` (failed, amber tint),
  `td.num` (right-aligned tabular), `th.sorted`
- flow nodes: `.commit` (blue), `.good` (green), `.bad` (amber), plus the kit's
  `.entry` / `.exit` / `.terminal` / `.dashed` / `.branch` / `.choice` / `.msg`
- flow lanes: `.lane` (band heading with `.s` subtitle) and `.band` (the rule
  between bands) — both take `data-cell`
- `.node .async` — the ASYNC tag in a node's top-right corner

Do not greek text out with `.bar`. This is a high-fidelity set, so write
plausible healthcare-staffing data: REQ numbers, facility names, professions
(Registered Nurse, Allied), specialties (ICU, Med/Surg, Telemetry), bill rates,
and VMS sources (AMN, Aya, HealthTrust, Medefis).

## Geometry lessons from the two worked sheets

- Set the artwork to `var(--art-w)`, not the full stage:
  `<div class="browser" style="width:var(--art-w)">`.
- With the icon rail (46px) plus a 150px nav, the content pane is about
  **804px**. That is tight for a wide table — `02-job-listings.html` narrows
  `.side` to 150px and pins twelve columns with a `<colgroup>` totalling ~792px
  at `font-size: 10.5px`. Copy that approach rather than rediscovering it.
- A dense table needs `table-layout: fixed`, explicit `<colgroup>` widths,
  `white-space: nowrap` and `overflow: hidden`. Check the render: text clipping
  mid-row reads as a bug, not as a scroll affordance.
- Anchor a callout to the **rightmost** element its claim is about. Anchoring to
  a mid-toolbar button draws the leader straight through the buttons beside it.

## Flows

Several VMSpark flows split into an operator band and a system band — what a
person does, and what their one action costs downstream. That split is usually
the point of the diagram, so keep it: use `.lane` headings and a `.band` rule,
as in `flow-02-mapping-resolution.html`.

Watch for a connector crossing a node: an edge leaving a node in column 1 and
landing further down column 1 will pass straight through anything between them.
Hand off from the last node in the band instead, or route through column 2.
