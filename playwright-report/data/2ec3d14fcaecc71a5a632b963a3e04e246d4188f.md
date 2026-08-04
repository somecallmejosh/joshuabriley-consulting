# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: keyboard.spec.ts >> page /projects/ >> axe-core scan reports no WCAG 2.1 AA violations
- Location: tests/e2e/keyboard.spec.ts:21:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 58

- Array []
+ Array [
+   Object {
+     "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
+     "help": "Elements must meet minimum color contrast ratio thresholds",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright",
+     "id": "color-contrast",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#1a1b1e",
+               "contrastRatio": 3.13,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#68696c",
+               "fontSize": "7.9pt (10.56px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.13 (foreground color: #68696c, background color: #1a1b1e, font size: 7.9pt (10.56px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<footer class=\"bg-ink text-paper/60 border-t border-paper/10\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/chrome/Footer.astro\" data-astro-source-loc=\"16:80\">",
+                 "target": Array [
+                   "footer",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.13 (foreground color: #68696c, background color: #1a1b1e, font size: 7.9pt (10.56px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"mt-8 font-mono text-[0.66rem] leading-relaxed tracking-[0.1em] text-paper/35\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/chrome/Footer.astro\" data-astro-source-loc=\"74:93\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".mt-8",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.color",
+       "wcag2aa",
+       "wcag143",
+       "TTv5",
+       "TT13.c",
+       "EN-301-549",
+       "EN-9.1.4.3",
+       "ACT",
+       "RGAAv4",
+       "RGAA-3.2.1",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to main content" [ref=e2] [cursor=pointer]:
    - /url: "#main"
  - banner [ref=e3]:
    - generic [ref=e4]:
      - link "Joshua Briley" [ref=e5] [cursor=pointer]:
        - /url: /
        - generic [ref=e6]: JB
        - generic [ref=e7]:
          - text: Joshua Briley
          - generic [ref=e8]: .
      - navigation "Primary" [ref=e9]:
        - link "About" [ref=e10] [cursor=pointer]:
          - /url: /about/
        - link "Projects" [ref=e11] [cursor=pointer]:
          - /url: /projects/
        - link "Testimonials" [ref=e12] [cursor=pointer]:
          - /url: /testimonials/
        - link "Blog" [ref=e13] [cursor=pointer]:
          - /url: /blog/
        - link "Tools" [ref=e14] [cursor=pointer]:
          - /url: /tools/
      - generic [ref=e15]:
        - link "Résumé" [ref=e16] [cursor=pointer]:
          - /url: /resume/
        - link "Get in touch" [ref=e17] [cursor=pointer]:
          - /url: /contact/
  - main [ref=e18]:
    - generic [ref=e20]:
      - paragraph [ref=e21]: Selected work · Case studies
      - generic [ref=e22]:
        - heading "Products where I owned the interface." [level=1] [ref=e23]:
          - text: Products where I owned the
          - emphasis [ref=e24]: interface
          - text: .
        - paragraph [ref=e25]: "Three products in production, built for teams with real constraints: messy timelines, mixed stacks, and people depending on the result. Each case study shows the reasoning, not just the outcome."
    - list [ref=e28]:
      - listitem [ref=e29]:
        - link "01 IVFCRYO Logistics platform Shipping something irreplaceable, self-service A self-service platform for cryogenic fertility shipments, replacing a paper process where a single mistake is unrecoverable. I led the design and owned the front end, then partnered with engineering on the Rails domain model and the carrier, telemetry, and alerting services underneath it. 75% fewer support calls" [ref=e30] [cursor=pointer]:
          - /url: /projects/ivfcryo/
          - generic [ref=e32]: "01"
          - generic [ref=e33]:
            - text: IVFCRYO
            - generic [ref=e34]: Logistics platform
          - generic [ref=e35]:
            - text: Shipping something irreplaceable, self-service
            - generic [ref=e36]: A self-service platform for cryogenic fertility shipments, replacing a paper process where a single mistake is unrecoverable. I led the design and owned the front end, then partnered with engineering on the Rails domain model and the carrier, telemetry, and alerting services underneath it.
            - generic [ref=e37]: 75% fewer support calls
          - img [ref=e41]
      - listitem [ref=e43]:
        - link "02 VMSpark Admin platform A multi-tenant Rails admin app, rebuilt in place An audit of 350 ERB templates turned into a four-phase rebuild of the operator-facing app, shipped with no feature flags onto a live pipeline. I owned the inventory, the design direction, and the engineering. Zero pipeline regressions" [ref=e44] [cursor=pointer]:
          - /url: /projects/vmspark/
          - generic [ref=e46]: "02"
          - generic [ref=e47]:
            - text: VMSpark
            - generic [ref=e48]: Admin platform
          - generic [ref=e49]:
            - text: A multi-tenant Rails admin app, rebuilt in place
            - generic [ref=e50]: An audit of 350 ERB templates turned into a four-phase rebuild of the operator-facing app, shipped with no feature flags onto a live pipeline. I owned the inventory, the design direction, and the engineering.
            - generic [ref=e51]: Zero pipeline regressions
          - img [ref=e55]
      - listitem [ref=e57]:
        - link "03 Logatot Voice platform An interface that works when nobody can look at it A voice-controlled operations platform for home-based child care, where the user is holding a toddler and answers to three regulatory regimes. I led the front end on a three-developer team and built much of the Rails domain. ~1,100 of 1,939 commits" [ref=e58] [cursor=pointer]:
          - /url: /projects/logatot/
          - generic [ref=e60]: "03"
          - generic [ref=e61]:
            - text: Logatot
            - generic [ref=e62]: Voice platform
          - generic [ref=e63]:
            - text: An interface that works when nobody can look at it
            - generic [ref=e64]: A voice-controlled operations platform for home-based child care, where the user is holding a toddler and answers to three regulatory regimes. I led the front end on a three-developer team and built much of the Rails domain.
            - generic [ref=e65]: ~1,100 of 1,939 commits
          - img [ref=e69]
    - generic [ref=e72]:
      - generic [ref=e73]:
        - generic [ref=e74]:
          - heading "Personal projects" [level=2] [ref=e75]
          - paragraph [ref=e76]: What I build when no one is asking, from open-source component primitives to a playable teaching tool for the W3C design-tokens spec. Same finish as the client work.
        - link "All personal projects" [ref=e77] [cursor=pointer]:
          - /url: /personal-projects/
          - text: All personal projects
          - img [ref=e79]
      - list [ref=e81]:
        - listitem [ref=e82]:
          - link "Rudiment UI" [ref=e83] [cursor=pointer]:
            - /url: /personal-projects/rudiment-ui/
            - text: Rudiment UI
            - img [ref=e85]
        - listitem [ref=e87]:
          - link "Token Adventure" [ref=e88] [cursor=pointer]:
            - /url: /personal-projects/token-galaga/
            - text: Token Adventure
            - img [ref=e90]
        - listitem [ref=e92]:
          - link "West Baton Rouge Presbyterian" [ref=e93] [cursor=pointer]:
            - /url: /personal-projects/west-baton-rouge-presbyterian/
            - text: West Baton Rouge Presbyterian
            - img [ref=e95]
    - generic [ref=e99]:
      - generic [ref=e100]:
        - paragraph [ref=e101]: The through-line
        - heading "The stack changes. The core work doesn't." [level=2] [ref=e102]
      - generic [ref=e104]:
        - paragraph [ref=e105]: "Every project comes back to the same instinct: the interface is the product, so make it feel finished."
        - paragraph [ref=e106]: "The stack changes (React, TypeScript, whatever the product runs on) but the core work stays the same: build the UI design-grade and accessible, and sweat the details most teams skip. If that sounds like the engineer you need, let's talk."
    - generic [ref=e109]:
      - generic [ref=e110]:
        - paragraph [ref=e111]: Open to roles
        - heading "Every case study doubles as a work sample." [level=2] [ref=e112]
        - paragraph [ref=e113]: If you're evaluating me for a product design engineering role, this is the level of craft and finish to expect at the interface. Questions about any of it, send a note.
      - generic [ref=e115]:
        - link "Get in touch" [ref=e116] [cursor=pointer]:
          - /url: /contact/
          - text: Get in touch
          - img [ref=e118]
        - link "Résumé" [ref=e120] [cursor=pointer]:
          - /url: /resume/
          - text: Résumé
          - img [ref=e122]
  - contentinfo [ref=e124]:
    - generic [ref=e125]:
      - generic [ref=e126]:
        - generic [ref=e127]:
          - img "Joshua Briley" [ref=e128]:
            - generic [ref=e129]: JB
            - generic [ref=e130]:
              - text: Joshua Briley
              - generic [ref=e131]: .
          - paragraph [ref=e132]: "Design- and front-end-focused product design engineer. The interface is where I bring the most value: design-grade, accessible UI, finished to the last detail."
          - paragraph [ref=e133]: Open to product design engineering roles
        - generic [ref=e135]:
          - navigation "Site" [ref=e136]:
            - heading "Site" [level=2] [ref=e137]
            - list [ref=e138]:
              - listitem [ref=e139]:
                - link "About" [ref=e140] [cursor=pointer]:
                  - /url: /about/
              - listitem [ref=e141]:
                - link "Projects" [ref=e142] [cursor=pointer]:
                  - /url: /projects/
              - listitem [ref=e143]:
                - link "Résumé" [ref=e144] [cursor=pointer]:
                  - /url: /resume/
              - listitem [ref=e145]:
                - link "Contact" [ref=e146] [cursor=pointer]:
                  - /url: /contact/
          - navigation "More" [ref=e147]:
            - heading "More" [level=2] [ref=e148]
            - list [ref=e149]:
              - listitem [ref=e150]:
                - link "Personal Projects" [ref=e151] [cursor=pointer]:
                  - /url: /personal-projects/
              - listitem [ref=e152]:
                - link "Testimonials" [ref=e153] [cursor=pointer]:
                  - /url: /testimonials/
              - listitem [ref=e154]:
                - link "Blog" [ref=e155] [cursor=pointer]:
                  - /url: /blog/
              - listitem [ref=e156]:
                - link "Tools" [ref=e157] [cursor=pointer]:
                  - /url: /tools/
              - listitem [ref=e158]:
                - link "Style Guide" [ref=e159] [cursor=pointer]:
                  - /url: /style-guide/
      - generic [ref=e160]:
        - generic [ref=e161]:
          - generic [ref=e162]: © 2026 Joshua Briley
          - link "Privacy" [ref=e163] [cursor=pointer]:
            - /url: /privacy/
          - link "Terms" [ref=e164] [cursor=pointer]:
            - /url: /terms/
        - generic [ref=e165]:
          - link "LinkedIn" [ref=e166] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/joshuabriley/
            - text: LinkedIn
            - img [ref=e168]
          - link "GitHub" [ref=e170] [cursor=pointer]:
            - /url: https://github.com/somecallmejosh
            - text: GitHub
            - img [ref=e172]
      - paragraph [ref=e174]: Designed by me, Joshua Briley, and built with my favorite static site generator, Astro.
  - generic [ref=e177]:
    - button "Menu" [ref=e178]:
      - img [ref=e180]
      - generic: Menu
    - button "Inspect" [ref=e184]:
      - img [ref=e186]
      - generic: Inspect
    - button "Audit" [ref=e188]:
      - img [ref=e190]
      - generic: Audit
    - button "Settings" [ref=e193]:
      - img [ref=e195]
      - generic: Settings
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import AxeBuilder from '@axe-core/playwright';
  3  | 
  4  | const PAGES = [
  5  |   '/',
  6  |   '/about/',
  7  |   '/services/',
  8  |   '/services/starter/',
  9  |   '/projects/',
  10 |   '/projects/vmspark/',
  11 |   '/faqs/',
  12 |   '/contact/',
  13 |   '/component-inventory/',
  14 |   '/tools/',
  15 |   '/tools/scorecard/',
  16 |   '/tools/roi-calculator/',
  17 | ];
  18 | 
  19 | for (const path of PAGES) {
  20 |   test.describe(`page ${path}`, () => {
  21 |     test('axe-core scan reports no WCAG 2.1 AA violations', async ({ page }) => {
  22 |       // Scan the resting state: scroll-reveal fades content in from opacity 0, and
  23 |       // an unscrolled full-DOM scan would otherwise catch sections mid-fade (real
  24 |       // text blended over the background reads as a false low-contrast hit). Under
  25 |       // reduced-motion the reveal is skipped, so this is also what those users see.
  26 |       await page.emulateMedia({ reducedMotion: 'reduce' });
  27 |       await page.goto(path);
  28 |       const results = await new AxeBuilder({ page })
  29 |         .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
  30 |         .analyze();
> 31 |       expect(results.violations).toEqual([]);
     |                                  ^ Error: expect(received).toEqual(expected) // deep equality
  32 |     });
  33 | 
  34 |     test('skip link moves focus to main', async ({ page }) => {
  35 |       await page.goto(path);
  36 |       await page.keyboard.press('Tab');
  37 |       await expect(page.getByRole('link', { name: 'Skip to main content' })).toBeFocused();
  38 |       await page.keyboard.press('Enter');
  39 |       await expect(page.locator('#main')).toBeVisible();
  40 |     });
  41 |   });
  42 | }
  43 | 
  44 | test('mobile menu opens, traps focus on first item, closes on Escape', async ({ page }) => {
  45 |   await page.setViewportSize({ width: 375, height: 800 });
  46 |   await page.goto('/');
  47 |   const toggle = page.locator('#mobile-menu-toggle');
  48 |   await toggle.click();
  49 |   await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  50 |   await page.keyboard.press('Escape');
  51 |   await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  52 |   await expect(toggle).toBeFocused();
  53 | });
  54 | 
```