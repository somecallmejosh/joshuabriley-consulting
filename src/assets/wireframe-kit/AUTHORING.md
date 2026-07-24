# Authoring a Logatot wireframe sheet

Sheets follow the IVFCRYO standard: a white sheet, a title band, the artwork in a
1080px stage on the left, and the design reasoning in a right-hand gutter joined
to the artwork by dashed rust leader lines.

Reference renders to match: `../../ivfcryo/wires-and-flows/*.png`.

## The rule that matters most

**A callout states the reasoning, not the contents.** "Cards, not table rows. The
route is what people scan for, so it gets the largest type" is a callout.
"A list of shipment cards" is a caption, and a caption is wasted ink. Every
callout should be something a reviewer could disagree with.

Callouts are plain prose. No bold lead-in labels.

## Files

- `sheet.css` — all shared styling and the wireframe vocabulary
- `sheet.js` — places callouts and draws leader lines
- `flow.js` — flow-diagram grid layout, shapes and connectors
- `<project>/wires-and-flows/_src/theme.css` — per-project palette and vocabulary
- Worked examples: Logatot `01-voiceboard.html` (screen) and
  `11-flow-voice-logging.html` (flow); VMSpark `02-job-listings.html` (screen)
  and `flow-02-mapping-resolution.html` (flow)

**Do not edit `sheet.css`, `sheet.js` or `flow.js`.** They are shared by every
sheet in every case study. If your sheet needs something they do not provide,
add a scoped `<style>` block in your own file. If the gap is project-wide it
belongs in that project's `theme.css` — say so in your report rather than
editing it yourself while other authors are working.

Each sheet loads the kit first, then its project theme:

```html
<link rel="stylesheet" href="../../../../wireframe-kit/sheet.css">
<link rel="stylesheet" href="theme.css">
```

**Prefix your sheet-local class names.** A scoped `<style>` block is scoped to
the file, not to the artwork, so a bare `.card` or `.kind` also hits the sheet
chrome. The kit's `.mark .kind` only sets `display` and `color`, so a sheet-local
`.kind { font-size: 9px }` silently reaches up into the title band and resizes
the brand mark. Two sheets have also independently claimed `.grip` for different
things. Use a short prefix (`.ins-card`, `.rule-grip`) and the problem cannot
arise.

## Rendering

From the **project root**:

```
node src/assets/wireframe-kit/render.mjs <project> 04-logged
```

Output lands beside `render.mjs` as a 3200px-wide PNG. The renderer exits
non-zero and prints `⚠ unmatched callout` if a `<li data-for="n">` has no
matching `[data-note="n"]` — never ship a sheet that warns.

**Always read your rendered PNG back and check it.** Things to look for:
overflow past the frame edge, text wrapping that breaks a control, leader lines
crossing through nodes rather than open space, callouts colliding.

## Sheet skeleton

```html
<!doctype html>
<meta charset="utf-8">
<title>Screen name — Logatot wireframe</title>
<link rel="stylesheet" href="sheet.css">

<div class="sheet">
  <header class="sheet-head">
    <div>
      <h1>Screen Name</h1>
      <p class="sub">The claim this sheet is making, in one sentence.</p>
    </div>
    <div class="mark">
      <span class="brand">LOGATOT</span>
      <span class="kind">WIREFRAME</span><!-- or USER FLOW -->
    </div>
  </header>

  <div class="sheet-body">
    <svg class="leaders"></svg>
    <div class="stage"> … artwork … </div>
    <ol class="notes">
      <li data-for="1">Reasoning.</li>
    </ol>
  </div>
</div>

<script src="sheet.js"></script>
```

Mark any element in the stage with `data-note="1"` to anchor callout 1 to it.
Optional `data-note-side="top|bottom|left|right"` (default `right`).

Discs are numbered by vertical position automatically, so `data-for` values only
need to be unique — they do not need to be in order. Aim for 4–6 callouts.

## Geometry — do not change

The stage is **1080px** wide and the gutter is fixed. Nothing in the stage may
exceed 1080px or it will run under the callouts. Inside a browser frame with the
standard 210px sidebar, the content pane is about **828px**. Dense tables need
`table-layout: fixed` with an explicit `<colgroup>` — see `01-voiceboard.html`.

Set your artwork to `var(--art-w)` (1036px) rather than the full stage width. A
callout whose disc sits lower than its anchor jogs vertically just left of the
disc; at a full-bleed 1080 that jog lands inside the frame and crosses content.
Full-bleed is only safe when every callout runs dead straight, which you cannot
know until you render.

Two anchoring gotchas, both discovered at render time:

- Anchors are taken from the element's **right edge** at its vertical middle
  (`data-note-side` moves that vertically, not horizontally). So anchoring a
  callout to a mid-table `<td>`, or to anything with content to its right,
  draws the leader straight through that content. Anchor to the row, the panel,
  or the rightmost element instead.
- `data-note-dy="-40"` biases the anchor along that edge. Use it when a
  full-width target — a sidebar, a toolbar — would otherwise anchor at its exact
  middle and send the leader through whatever sits beside it.

For the same reason, prefer **stacked** artwork over side-by-side. Two devices
side by side means every leader from the left one crosses the right one, and
`sheet.js` numbers discs purely by vertical position, so two columns interleave
and the reasoning stops reading in order.

## Screen vocabulary (sheet.css)

- Frames: `.browser` + `.browser-bar` (with `<i>` dots and `.url`), `.device`,
  `.device.dark`
- Shell: `.app`, `.side` + `.logo` / `.group` / `.nav-item` (`.on`, `.locked`,
  `.box`, `.count`), `.main`, `.appbar`, `.pane`
- Type: `.h`, `.h-sm`, `.sub-line`, `.eyebrow`, `.muted`, `.faint`, `.rust`, `.b`
- Layout: `.row`, `.between`, `.grow`, `.stack-8|12|16`, `.rule`
- Greeking: `.bar` (`.sm`, `.dark`), `.avatar` (`.sm`)
- Controls: `.btn` (`.solid`, `.quiet`, `.ghost`, `.sm`, `.lg`), `.pill` (`.on`,
  `.dashed`, `.dot`), `.chip` (`.fill`, `.rust`), `.field` (`.tall`), `.label`
- Containers: `.panel` (`.fill`, `.flat`), `.tile` (`.on`, `.n`, `.k`)
- Tables: `table.wire` with `th` / `td`, `tr.empty`
- Annotation-on-artwork: `.aside` (grey spec box, with `.t` heading) and
  `.design-note` (rust dashed box — use sparingly, for the one claim the sheet
  exists to make)

Use greeked `.bar` elements for names and body copy — real invented names in
every cell make it look like a mockup instead of a wireframe. Real text belongs
on labels, controls, values, and column headings.

## Flow vocabulary (flow.js)

```html
<div class="flow" data-cols="3" data-colw="300" data-gutter="60" data-rowh="92"
     data-edges='[{"from":"n1","to":"n2","label":"yes"}]'>
  <svg class="wires"></svg>
  <div class="node entry" id="n1" data-cell="0,1">
    <span class="t">Title</span><span class="s">Detail</span>
  </div>
</div>
<script src="flow.js"></script>
<script src="sheet.js"></script>   <!-- flow.js must come first -->
```

- `data-cell="row,col"`, `data-span="2"` to widen, `data-dy="20"` to nudge down
  (use `data-dy` to take up slack when a tall node pushes the column out of step)
- Node kinds: `.entry` and `.terminal` (grey stadium), `.exit` (white stadium),
  plain `.node` (step), `.dashed` (system/background step), `.branch` (diamond),
  `.choice` (parallelogram, a user decision), `.msg` (wavy-bottomed, a message
  the system emits)
- Edge options: `label`, `fromSide`/`toSide` (`t|b|l|r`, otherwise inferred),
  `dashed`, `noArrow`, `soft` (grey — for tethering an `.aside` to its node),
  `labelDx`/`labelDy` to nudge a colliding label
- Convention: column 1 is the happy path, column 2 the failure/secondary path,
  column 0 holds `.aside` spec boxes and the `.design-note`
- **Keep branch labels to one short line.** A diamond is only full-width at its
  exact mid-height, so a two-line `.branch` title pushes text into the narrow
  part and the polygon strokes cut through it. Roughly 200px is the ceiling;
  put the detail in the next step's `.s` subtitle instead.
- **An edge between two column-1 nodes that skips rows draws straight through
  whatever sits between them.** Sides are inferred from centre-to-centre delta,
  and there are no waypoints. Either hand off from the last node before the gap,
  route via column 2, or stagger the nodes into different columns.
- `offset` pushes an edge's turning line away from the ports. A loop-back that
  leaves and re-enters the same side of a column turns at the midpoint of two
  identical x values — exactly on the column border, through the left vertex of
  every diamond it passes. `"offset": 34` moves it clear.
- End with a `.flow-legend` listing only the shapes the sheet actually uses

Anchor callouts to **flow nodes**, not to the `.aside` boxes in column 0 — a
leader from column 0 has to cross the whole diagram to reach the gutter. The
asides are artwork labels; tether them to their node with a `soft` dashed edge.

## Voice

British-inflected, plain, concrete. Prefer the specific noun ("a licensor", "at
8pm from memory") to the abstract one ("stakeholders", "later"). State tradeoffs
honestly — the IVFCRYO sheets say when something costs query complexity or was
contained rather than solved. Do not oversell.

The provider is "she" throughout — that is the persona the case study uses.
