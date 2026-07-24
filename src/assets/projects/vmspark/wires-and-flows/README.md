# VMSpark — Screens & User Flows

Annotated design sheets for VMSpark, a multi-tenant VMS-to-ATS pipeline. Eleven
screens and five user flows, with the reasoning behind each decision written in
the right margin and joined to the artwork by leader lines.

Built with the shared kit in `src/assets/wireframe-kit/` — see its `README.md`
and `AUTHORING.md`. Project-specific conventions are in
`_src/AUTHORING-vmspark.md`; the palette and vocabulary are in `_src/theme.css`.

## Why this set renders in colour

IVFCRYO and Logatot are lo-fi greyscale, because those sheets document
*reasoning* and greyscale keeps the argument in the annotations.

VMSpark's case study is about visual-system work — eight competing button
styles, ten form-element styles, six table conventions, ~40 views bypassing an
existing token system. A greyscale wireframe would delete the evidence the
argument rests on. So the artwork stays high-fidelity and **only the annotation
layer is standardised**: callout discs and leader lines keep the kit's rust,
never VMSpark blue, so commentary never reads as part of the product.

Colour is load-bearing rather than decorative. Blue is the primary action,
active nav, selected row, focused field. Green is a resolved terminal state.
Amber is failure and impersonation. Everything else is neutral.

## Screens

| File | Screen |
|---|---|
| `01-app-shell.png` | **App shell** — one shell applied everywhere, replacing per-view improvisation |
| `02-job-listings.png` | **Job listings** — the primary triage surface: filter, inspect, reprocess |
| `03-inspector.png` | **Inspector** — why one listing ended up in the state it did |
| `04-data-mapping.png` | **Data mapping** — resolving inbound VMS values to their ATS counterparts |
| `05-custom-rules.png` | **Custom rules** — the per-account escape hatch that keeps the pipeline generic |
| `06-candidate-profiles.png` | **Candidate profiles** — credentials, availability, match history |
| `07-applications-matches.png` | **Applications & matches** — where candidates meet requisitions |
| `08-settings.png` | **Settings** — where multi-tenancy becomes concrete |
| `09-candidate-portal.png` | **Candidate portal** — the only surface a non-employee sees |
| `10-ai-usage.png` | **AI usage** — per-account spend, and the case study's clearest before/after |
| `11-design-system.png` | **Design system** — the component and token inventory that replaced the sprawl |

## User flows

| File | Flow |
|---|---|
| `flow-01-ingestion.png` | **Ingestion** — VMS to VMSpark to ATS, and the pipeline the redesign could not touch |
| `flow-02-mapping-resolution.png` | **Mapping resolution & fan-out** — clearing mapping debt, and what one save costs downstream |
| `flow-03-rule-engine.png` | **Rule engine** — how per-account rules evaluate against a listing |
| `flow-04-candidate-match.png` | **Candidate matching** — the system proposes, a recruiter disposes |
| `flow-05-journeys.png` | **User journeys** — the distinct people using this, and what each comes to do |

## Regenerating

From the repo root:

```bash
node src/assets/wireframe-kit/render.mjs vmspark             # all sheets
node src/assets/wireframe-kit/render.mjs vmspark 04-data     # matching only
```

The renderer exits non-zero if a sheet declares a callout with no matching
anchor, so an unattached leader line cannot ship.

## The three fidelities

Four screens — `01`, `02`, `03`, `04` — also exist as a crude sketch and a
lo-fi greyscale wireframe, so the case study can show each across the three
artifacts it passed through. Those live in
`public/images/projects/vmspark/wires-and-flows/` and are mounted through
`FidelityPlate.astro`.

Note the ladder here runs sketch → **greyscale wireframe** → **colour
annotated**, where Logatot's third pass is still greyscale. That is the point:
the colour pass is the payoff, because arriving at one coherent visual language
is what the project was.

The sketch is generated from the wireframe, never drawn separately:

```bash
node src/assets/wireframe-kit/sketchify.mjs vmspark
```

## Notes

These are reconstructions, drawn after the fact to document the design
reasoning — not the original working files.
