# Wireframe kit

Shared machinery for the annotated design sheets used across the case studies.
One sheet chrome, one callout engine, one flow engine, one renderer — each
project supplies only its own palette and vocabulary.

Extracted from the Logatot set once VMSpark needed the same thing, because the
callout placement, leader routing, flow layout and sketch derivation are
entirely project-agnostic and had already accumulated six bug fixes worth
keeping in one place.

## Files

| File | What it does |
|---|---|
| `sheet.css` | Sheet chrome (title band, gutter geometry) and the base wireframe vocabulary, all driven by custom properties a theme can repoint |
| `sheet.js` | Places callouts, de-overlaps them, numbers the discs by vertical position, draws the dashed leader lines |
| `flow.js` | Flow-diagram grid layout, shapes (diamond, parallelogram, wavy system message), orthogonal connector routing, edge labels |
| `render.mjs` | Renders a project's `_src/*.html` to 2× PNGs |
| `sketchify.mjs` | Derives a hand-drawn sketch SVG from a clean wireframe SVG |
| `svgshot.mjs` | Renders an SVG to PNG so it can be eyeballed while authoring |
| `AUTHORING.md` | **The contract. Read this before writing or editing a sheet.** |

## Usage

Everything runs from the repo root, so `playwright` resolves:

```bash
node src/assets/wireframe-kit/render.mjs logatot            # all sheets
node src/assets/wireframe-kit/render.mjs vmspark 02-job     # matching only
node src/assets/wireframe-kit/sketchify.mjs logatot
node src/assets/wireframe-kit/svgshot.mjs <in.svg> <out.png> [width]
```

`render.mjs <project>` reads `src/assets/projects/<project>/wires-and-flows/_src/*.html`
and writes PNGs one level up, where Astro can optimize them. It exits non-zero
if a sheet declares a callout with no matching anchor, so an unattached leader
line cannot ship.

`sketchify.mjs <project>` reads and writes in
`public/images/projects/<project>/wires-and-flows/`.

## Adding a project

1. Create `src/assets/projects/<project>/wires-and-flows/_src/`.
2. Write a `theme.css` that repoints the kit's custom properties and adds any
   project-specific classes. See `../projects/vmspark/.../theme.css` for a theme
   that shifts the whole set from lo-fi greyscale to high-fidelity colour.
3. Each sheet loads the kit first, then the theme:

   ```html
   <link rel="stylesheet" href="../../../../wireframe-kit/sheet.css">
   <link rel="stylesheet" href="theme.css">
   ```

4. If the project's conventions differ enough to need explaining, add an
   `AUTHORING-<project>.md` beside the sheets rather than forking `AUTHORING.md`.

## The two fidelity ladders

The kit's defaults are lo-fi greyscale, which is right when the sheets are
documenting *reasoning* — IVFCRYO and Logatot both work this way, and their
three passes are sketch → wireframe → annotated wireframe.

VMSpark inverts the top of that ladder: its case study is about visual-system
work, so a greyscale wireframe would delete the evidence. Its passes are
sketch → lo-fi wireframe → **annotated high-fidelity colour**. Only the
annotation layer is standardised; the artwork stays in the product's own
language. Callout discs and leader lines are always the kit's rust, never the
product's accent, so commentary never reads as part of the thing it describes.
