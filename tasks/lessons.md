# Lessons

## Deep coral (`#C13A22`) is for SMALL text on LIGHT surfaces only — not a blanket "coral text" replacement

**Context:** During the design-consistency pass (2026-06-23) an audit flagged `Logo.astro`'s
surname accent `text-coral` as "should be the AA deep-coral token `text-[#C13A22]`." I applied
it. The axe-core e2e suite then failed color-contrast on **all 12 scanned pages**.

**Why:** The Logo renders in the **navy footer** (`bg-navy #2D2B55`) on every page.
- `#C13A22` (deep coral) on navy = **2.45:1 → FAILS** (needs 3:1 for large text).
- `#E8573D` (base coral) on navy = ~3.4:1 → passes.
- The wordmark is **large display text (30px)**, so its threshold is **3:1, not 4.5:1**. Base
  coral on white is ~3.9:1 → it already passed. The "fix" was unnecessary AND broke the footer.

**Rule for next time:**
1. Deep `-deep` / `#C13A22` variants exist for **small/body text on LIGHT backgrounds**. They
   are *darker*, so on **dark surfaces they have LESS contrast** — use the *brighter* base accent
   (or a light tint) on navy/plum/charcoal.
2. Before swapping an accent to a `-deep` token, check **(a) the text size** (≥24px or ≥19px-bold
   → 3:1 large-text threshold, base accents often already pass) and **(b) every surface the
   component renders on** (shared primitives like Logo/Button appear on both light header and
   dark footer).
3. Treat audit findings as *hypotheses*, not orders — verify the contrast math + usage context
   before applying. An over-cautious "use the AA token" flag can regress a passing element.
4. Run the axe-core e2e suite (`astro dev` on :4321 + `npx playwright test --project=chromium`)
   after any token/color change — it catches exactly this.
