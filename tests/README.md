# Tests

## Vitest (unit)

```bash
npm test
```

Covers pure-TS helpers in `src/lib/` (`cx`, `tones`). Component-level Astro
rendering is delegated to Playwright e2e — `astro/container` was unstable
against this Astro 5.x release at scaffolding time, and Playwright already
gives us per-variant axe coverage via the `/component-inventory/` showcase.

## Playwright (e2e + axe)

```bash
npx playwright install   # one-time
npm run test:e2e
```

Runs against `npm run preview` (built site).

What's covered:
- `tests/e2e/keyboard.spec.ts`
  - axe-core scan of `/` and `/component-inventory/` (WCAG 2.1 AA, zero violations).
  - Skip-link tab → activate → focus on `#main`.
  - Mobile menu open / Escape close / focus restored.

Because the inventory page exercises every component variant, the page-level
axe run effectively validates each component's accessibility contract. To
add a new variant to the test surface, add it to the inventory page.
