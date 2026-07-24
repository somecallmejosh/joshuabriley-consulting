# Logatot — Wireframes & User Flows

Retrospective design documentation for Logatot, a voice-driven activity logging and
management platform for home-based child care providers.

These are lo-fi greyscale artifacts: structure, hierarchy, and states, with the
reasoning behind each decision annotated in the right margin of the sheet, joined
to the artwork by leader lines. Colour is used only for annotation markers and
decision nodes. Same standard as `../../ivfcryo/wires-and-flows/`.

Each callout states the reasoning, not the contents — something a reviewer could
disagree with rather than a caption.

## Wireframes

| # | File | Screen |
|---|------|--------|
| 01 | `01-voiceboard.png` | **Voiceboard** — the signature screen. Live attendance tiles, reminder strips, and the child × event-type grid fed by voice capture. |
| 02 | `02-children-roster.png` | **Children** — roster across two independent axes: enrolment lifecycle and today's attendance. |
| 03 | `03-child-form.png` | **Child record** — tabbed create/edit form with inline caregiver creation, and the phonetic-alias field that feeds the parser. |
| 04 | `04-logged-events.png` | **Logged events** — reviewing and repairing voice captures the parser could not resolve. |
| 05 | `05-checkin-kiosk.png` | **Check-in kiosk** — parent-facing tablet: PIN, child selection, signature, on a torn-down session. |
| 06 | `06-parent-portal.png` | **Parent portal** — daily activity timeline, desktop and mobile. |
| 07 | `07-cacfp-menu.png` | **Food program** — CACFP menu planner with per-meal compliance checking at plan time. |
| 08 | `08-calendar.png` | **Calendar** — events, recurrence, and compliance drills as their own task type. |
| 09 | `09-reports.png` | **Reports** — print-first compliance documents. |
| 10 | `10-dashboard-lat5.png` | **Dashboard** — manual-entry home screen for the tier without voice. |

## User flows

| # | File | Flow |
|---|------|------|
| 11 | `11-flow-voice-logging.png` | **Voice event logging** — utterance to structured event, including the failure and repair path. |
| 12 | `12-flow-onboarding.png` | **Provider onboarding** — first visit through to a populated, working board. |
| 13 | `13-flow-checkin.png` | **Check in / out** — handing the tablet to a parent and taking it back. |
| 14 | `14-flow-parent-access.png` | **Parent access** — passwordless entry and the daily engagement loop. |
| 15 | `15-flow-food-program.png` | **Food program** — plan a compliant menu, serve it, claim it. |

## Regenerating

Source HTML lives in `_src/`, sharing one stylesheet (`_src/sheet.css`), a
callout/leader-line layer (`_src/sheet.js`) and a flow-diagram engine
(`_src/flow.js`). Sheets are authored at 1600px and rendered by headless
Chromium at 2× (3200px wide), matching the IVFCRYO renders.

Run from the **project root**, so `playwright` resolves:

```bash
node src/assets/projects/logatot/wires-and-flows/render.mjs            # all sheets
node src/assets/projects/logatot/wires-and-flows/render.mjs 07-cacfp   # matching only
```

The renderer exits non-zero if a sheet declares a callout with no matching
anchor, so a silently unattached leader line cannot ship.

**Read `_src/AUTHORING.md` before writing or editing a sheet.** It documents the
layout contract, the wireframe and flow vocabularies, and the anchoring gotchas
that only show up at render time.

## The three fidelities

Four screens — `01`, `04`, `05`, `06` — also exist as a crude sketch and a clean
wireframe, so the case study can show each across the three artifacts it passed
through. Those two passes are SVG and live in
`public/images/projects/logatot/wires-and-flows/`, since they need no build
processing. `logatot.astro` mounts all three through `FidelityPlate.astro`.

The sketch is **generated from the wireframe**, not drawn separately — a sketch
that disagrees with its wireframe reads as two unrelated pictures:

```bash
node src/assets/projects/logatot/wires-and-flows/sketchify.mjs            # all
node src/assets/projects/logatot/wires-and-flows/sketchify.mjs 04-logged  # one
```

Its jitter is seeded from each element's own geometry, so re-running produces a
byte-identical file rather than churning the whole SVG in git for no visual
change.

Because of that derivation, a hand-authored wireframe SVG must stay inside the
subset the generator understands: flat `<rect>` / `<line>` / `<circle>` /
`<text>` only, one element per line, no groups, transforms, paths or CSS. Read
`01-voiceboard.svg` before adding another. Things worth knowing:

- A `#e8e8e8` bar under 14px tall is treated as greeked copy and re-drawn as a
  scribbled stroke rather than an outlined box.
- Dark fills stay solid and light text on them stays light, so an active or
  selected state survives into the sketch.
- `stroke-dasharray` carries through, so a dashed placeholder still reads dashed.
- `rx` does not — everything comes out hand-cornered, which is the point.

To eyeball an SVG at either fidelity:

```bash
node src/assets/projects/logatot/wires-and-flows/svgshot.mjs \
  public/images/projects/logatot/wires-and-flows/04-logged-events.svg /tmp/out.png 1400
```

## Notes

These are reconstructions of the delivered product, drawn after the fact to
document the design reasoning — not the original working files. The case study
says so in as many words, and these sheets should not imply otherwise.
