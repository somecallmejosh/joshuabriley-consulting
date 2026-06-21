# Brand spec — the technical-proof register

A positioning + design-system supplement that answers `tasks/research.md`. It does **not**
replace the brand; it adds a second voice to it.

---

## 1. The strategic argument

Your research graded the site **~65% aligned** for $175K+ remote UX-engineering roles and
named the gap precisely: *"your site says you fix systems, but it does not yet show enough
receipts… the highest-value fix is not visual. It is evidence."*

The instinct that follows — "make the brand more serious / more engineer-y" — is the wrong
read. **Your brand is not the liability. It is under-leveraged proof.**

- The scrapbook system is built from a handful of accessibility-first primitives, where one
  `<Card>` drives every card variant and one `<Field>` wires every label/hint/error. That **is**
  staff-level design-system thinking, demonstrated rather than claimed.
- The style-guide page is, functionally, a live component library with a token layer, semantic
  primitives, and accessibility wired into the API. It's the exact artifact TeamSnap and Veeva
  describe wanting someone to *build*.
- A distinctive, tasteful, accessible brand is itself a differentiator for a UX engineer. Most
  candidates ship a default template. You shipped a system.

So the move is **additive, not corrective**. Keep the warm voice (it proves taste and craft);
add an **engineering register** the warm components can't speak — one that carries code,
stacks, tested behaviour, and measured outcomes.

> **Dual register:** *warm* says "a careful person made this." *technical* says "and they can
> architect, type, test, and measure it." Staff-level hiring needs to hear both.

---

## 2. What shipped in this pass

Five new components (`src/components/patterns/`), all dependency-free, all reusing the existing
token system, `cx`, `Icon`, and `tones.ts`:

| Component | Role | Maps to research gap |
|---|---|---|
| `CodeBlock` | Framed, copyable code window (filename tab, lang pill, copy) | React/TS depth (was "Weak") |
| `WindowFrame` | Browser/terminal chrome around any artifact | Storybook/docs, testing/CI (was "Weak") |
| `Metric` | One measured outcome; supports before→after + trend | Performance/outcomes (was "Weak") |
| `TechStack` | Labelled row of monospace keyword chips | "recruiters scan for exact terms" |
| `ProofPanel` | "Skills proven / Stack / Quality / Outcomes" receipts block | "show the receipts" |

Wired in:
- **Style guide** → new navy **"Technical proof"** section showcasing all five (`/style-guide/#technical`).
- **America's Test Kitchen case study** → `ProofPanel` under the hero, `CodeBlock` in the
  architecture section, honest `Metric` row in the scale section.

A small `tone="onDark"` option was added to `CopyButton` so copy buttons read correctly on the
new dark surfaces.

---

## 3. The honesty rule (non-negotiable)

Staff-level screening is *adversarial about evidence*. A fabricated Lighthouse score, an
invented "−42% bundle", or a stack chip for a tool you didn't use is the fastest way to fail a
technical interview that references your own site.

Rules baked into the components and the ATK example:
- **Metrics use only real, defensible numbers.** The ATK figures (`3 brands`, `0 brand-fork
  props`, `1 a11y baseline`) are all asserted by the case study's own narrative. No performance
  numbers were invented.
- **Stack chips reflect what each study actually describes.** ATK's chips come from its text
  (React, Next.js, Storybook, tokens, ARIA) plus TypeScript. **Action for you:** extend them
  with your real tooling per engagement (exact test stack, TS version, Stencil/Playwright/Jest
  where true).
- Where you don't yet have a number, leave the slot empty rather than guess.

---

## 4. Roadmap — research gap → concrete change

Ordered by hiring impact. ✅ = done this pass.

1. ✅ **Technical-proof component register** (the vocabulary for everything below).
2. **Retrofit the other case studies** with the register, using the ATK page as the pattern:
   - `rudiment-ui` — your design-system / Stencil + Web Components story (research's "Travelers").
     This is your strongest React/TS-adjacent proof; give it `CodeBlock` (a Stencil component +
     its generated React wrapper), a `WindowFrame` (Storybook), `TechStack` (Stencil, TypeScript,
     Storybook, Playwright, Gatsby, Figma Code Connect), and real adoption metrics.
   - `berxi-insurance` — BHSI / Vue + Nuxt, data-heavy portals.
   - The remaining two (`ivfcryo`, `vmspark`) as time allows.
3. **Homepage "Technical proof" strip** — one short `TechStack` + a `ProofPanel`-style row near
   the top: *"Where I'm strongest: design systems, accessible component architecture, semantic
   HTML/CSS, design tokens, Storybook docs, design-to-code workflows."* Then the honest
   transferable-stack line (see §6).
4. **Testing & quality** — a `WindowFrame variant="terminal"` showing a real test run, plus copy:
   *"Storybook, Playwright, Jest, axe-core, and manual keyboard/screen-reader testing to catch UI
   defects before they become product debt."*
5. **Staff-level leverage** — a short section: turning one-off fixes into reusable patterns,
   documented standards, and component-level a11y rules (concrete verbs, not adjectives).
6. **A live Storybook link** (highest-effort, highest-credibility) — even a small public one the
   `WindowFrame`/`CodeBlock` blocks can point at.

---

## 5. Case-study scaffold (the template)

Copy this skeleton for each retrofit. It composes the warm page structure with the technical
register. Drop the receipts high (scannable in 5 seconds), the code where you explain a
decision, and metrics where you describe impact.

```astro
---
import BaseLayout from '~/layouts/BaseLayout.astro';
import Icon from '~/components/primitives/Icon.astro';
import Heading from '~/components/primitives/Heading.astro';
import SquiggleDivider from '~/components/decorative/SquiggleDivider.astro';
import CodeBlock from '~/components/patterns/CodeBlock.astro';
import WindowFrame from '~/components/patterns/WindowFrame.astro';
import Metric from '~/components/patterns/Metric.astro';
import ProofPanel from '~/components/patterns/ProofPanel.astro';

const proof = [
  { label: 'Skills proven', tone: 'plum', items: [/* design systems, a11y APIs, architecture… */] },
  { label: 'Stack',         tone: 'navy', items: [/* REAL tooling only */] },
  { label: 'Quality',       tone: 'sage', items: [/* Playwright, Jest, axe-core, keyboard/SR… */] },
  { label: 'Outcomes',      tone: 'coral', items: [/* adoption, removed duplication… */] },
];

const apiSnippet = `// A real (or faithfully representative) component API.`;
---
<BaseLayout title="…" description="…">
  <div class="corkboard">
    {/* 1. HERO — warm: breadcrumb, recipe-card, title, metadata <dl> */}

    {/* 2. RECEIPTS — technical: scannable proof, placed high */}
    <section class="pb-4 md:pb-8">
      <div class="max-w-4xl mx-auto px-6"><ProofPanel sections={proof} /></div>
    </section>
    <SquiggleDivider />

    {/* 3. PROBLEM — warm narrative (the two failure modes, the thesis) */}

    {/* 4. DECISIONS — warm narrative + a CodeBlock showing the decision in code */}
    <div class="mt-10">
      <CodeBlock filename="Component.tsx" lang="tsx" code={apiSnippet}
                 caption="The decision, in code." />
    </div>

    {/* 5. EVIDENCE — a WindowFrame (Storybook story) and/or a terminal test run */}
    <WindowFrame variant="terminal" title="zsh — ci">{/* <pre> real test output */}</WindowFrame>

    {/* 6. IMPACT — a Metric row of REAL numbers */}
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
      <Metric value="…" label="…" caption="…" tone="plum" />
    </div>

    {/* 7. TESTIMONIAL + CTA — warm: sticky note, navy CTA, back link */}
  </div>
</BaseLayout>
```

---

## 6. Copy blocks (ready to paste, per research.md)

**Technical proof — homepage strip**
> Where I'm strongest: design systems, accessible component architecture, semantic HTML/CSS,
> design tokens, Storybook documentation, frontend quality standards, and design-to-code
> workflows.

**Honest transferable-stack line** (closes the "is he really React/TS?" question without
overclaiming)
> Most of my work is framework-adjacent: component architecture, accessibility, interaction
> patterns, documentation, tokens, and front-end system quality — applied across Stencil Web
> Components, Vue/Nuxt, React/Next, and Rails/ViewComponent, in TypeScript.

**Testing & quality line**
> I use Storybook, Playwright, Jest, accessibility checks, and manual keyboard / screen-reader
> testing to catch UI defects before they become product debt.

**Staff-level leverage line**
> I help teams make fewer repeated UI decisions by turning one-off fixes into reusable patterns,
> documented standards, and component-level accessibility rules.

---

## 7. Component reference (quick)

```astro
<CodeBlock filename="Modal.tsx" lang="tsx" code={snippet} caption="…" />
<WindowFrame variant="browser" title="storybook…/button--primary">…</WindowFrame>
<WindowFrame variant="terminal" title="zsh — ci"><pre>…</pre></WindowFrame>
<Metric value="1" before="6" label="button implementations" tone="sky" />
<TechStack label="Stack" items={['TypeScript', 'React', 'Stencil']} />
<ProofPanel sections={[{ label: 'Stack', items: [...], tone: 'navy' }]} />
```

All accept a `class` passthrough. `Metric.tone`, `TechStack.tone`, and per-section
`ProofPanel` tones use the shared `Tone` set from `src/lib/tones.ts`.
