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
      - button "Toggle navigation menu" [ref=e9] [cursor=pointer]:
        - img [ref=e11]
  - main [ref=e13]:
    - generic [ref=e15]:
      - paragraph [ref=e16]: Selected work · Case studies
      - generic [ref=e17]:
        - heading "Products where I owned the interface." [level=1] [ref=e18]:
          - text: Products where I owned the
          - emphasis [ref=e19]: interface
          - text: .
        - paragraph [ref=e20]: "Three products in production, built for teams with real constraints: messy timelines, mixed stacks, and people depending on the result. Each case study shows the reasoning, not just the outcome."
    - list [ref=e23]:
      - listitem [ref=e24]:
        - link "01 IVFCRYO Logistics platform Shipping something irreplaceable, self-service A self-service platform for cryogenic fertility shipments, replacing a paper process where a single mistake is unrecoverable. I led the design and owned the front end, then partnered with engineering on the Rails domain model and the carrier, telemetry, and alerting services underneath it. 75% fewer support calls" [ref=e25] [cursor=pointer]:
          - /url: /projects/ivfcryo/
          - generic [ref=e27]: "01"
          - generic [ref=e28]:
            - text: IVFCRYO
            - generic [ref=e29]: Logistics platform
          - generic [ref=e30]:
            - text: Shipping something irreplaceable, self-service
            - generic [ref=e31]: A self-service platform for cryogenic fertility shipments, replacing a paper process where a single mistake is unrecoverable. I led the design and owned the front end, then partnered with engineering on the Rails domain model and the carrier, telemetry, and alerting services underneath it.
            - generic [ref=e32]: 75% fewer support calls
          - img [ref=e36]
      - listitem [ref=e38]:
        - link "02 VMSpark Admin platform A multi-tenant Rails admin app, rebuilt in place An audit of 350 ERB templates turned into a four-phase rebuild of the operator-facing app, shipped with no feature flags onto a live pipeline. I owned the inventory, the design direction, and the engineering. Zero pipeline regressions" [ref=e39] [cursor=pointer]:
          - /url: /projects/vmspark/
          - generic [ref=e41]: "02"
          - generic [ref=e42]:
            - text: VMSpark
            - generic [ref=e43]: Admin platform
          - generic [ref=e44]:
            - text: A multi-tenant Rails admin app, rebuilt in place
            - generic [ref=e45]: An audit of 350 ERB templates turned into a four-phase rebuild of the operator-facing app, shipped with no feature flags onto a live pipeline. I owned the inventory, the design direction, and the engineering.
            - generic [ref=e46]: Zero pipeline regressions
          - img [ref=e50]
      - listitem [ref=e52]:
        - link "03 Logatot Voice platform An interface that works when nobody can look at it A voice-controlled operations platform for home-based child care, where the user is holding a toddler and answers to three regulatory regimes. I led the front end on a three-developer team and built much of the Rails domain. ~1,100 of 1,939 commits" [ref=e53] [cursor=pointer]:
          - /url: /projects/logatot/
          - generic [ref=e55]: "03"
          - generic [ref=e56]:
            - text: Logatot
            - generic [ref=e57]: Voice platform
          - generic [ref=e58]:
            - text: An interface that works when nobody can look at it
            - generic [ref=e59]: A voice-controlled operations platform for home-based child care, where the user is holding a toddler and answers to three regulatory regimes. I led the front end on a three-developer team and built much of the Rails domain.
            - generic [ref=e60]: ~1,100 of 1,939 commits
          - img [ref=e64]
    - generic [ref=e67]:
      - generic [ref=e68]:
        - generic [ref=e69]:
          - heading "Personal projects" [level=2] [ref=e70]
          - paragraph [ref=e71]: What I build when no one is asking, from open-source component primitives to a playable teaching tool for the W3C design-tokens spec. Same finish as the client work.
        - link "All personal projects" [ref=e72] [cursor=pointer]:
          - /url: /personal-projects/
          - text: All personal projects
          - img [ref=e74]
      - list [ref=e76]:
        - listitem [ref=e77]:
          - link "Rudiment UI" [ref=e78] [cursor=pointer]:
            - /url: /personal-projects/rudiment-ui/
            - text: Rudiment UI
            - img [ref=e80]
        - listitem [ref=e82]:
          - link "Token Adventure" [ref=e83] [cursor=pointer]:
            - /url: /personal-projects/token-galaga/
            - text: Token Adventure
            - img [ref=e85]
        - listitem [ref=e87]:
          - link "West Baton Rouge Presbyterian" [ref=e88] [cursor=pointer]:
            - /url: /personal-projects/west-baton-rouge-presbyterian/
            - text: West Baton Rouge Presbyterian
            - img [ref=e90]
    - generic [ref=e94]:
      - generic [ref=e95]:
        - paragraph [ref=e96]: The through-line
        - heading "The stack changes. The core work doesn't." [level=2] [ref=e97]
      - generic [ref=e99]:
        - paragraph [ref=e100]: "Every project comes back to the same instinct: the interface is the product, so make it feel finished."
        - paragraph [ref=e101]: "The stack changes (React, TypeScript, whatever the product runs on) but the core work stays the same: build the UI design-grade and accessible, and sweat the details most teams skip. If that sounds like the engineer you need, let's talk."
    - generic [ref=e104]:
      - generic [ref=e105]:
        - paragraph [ref=e106]: Open to roles
        - heading "Every case study doubles as a work sample." [level=2] [ref=e107]
        - paragraph [ref=e108]: If you're evaluating me for a product design engineering role, this is the level of craft and finish to expect at the interface. Questions about any of it, send a note.
      - generic [ref=e110]:
        - link "Get in touch" [ref=e111] [cursor=pointer]:
          - /url: /contact/
          - text: Get in touch
          - img [ref=e113]
        - link "Résumé" [ref=e115] [cursor=pointer]:
          - /url: /resume/
          - text: Résumé
          - img [ref=e117]
  - contentinfo [ref=e119]:
    - generic [ref=e120]:
      - generic [ref=e121]:
        - generic [ref=e122]:
          - img "Joshua Briley" [ref=e123]:
            - generic [ref=e124]: JB
            - generic [ref=e125]:
              - text: Joshua Briley
              - generic [ref=e126]: .
          - paragraph [ref=e127]: "Design- and front-end-focused product design engineer. The interface is where I bring the most value: design-grade, accessible UI, finished to the last detail."
          - paragraph [ref=e128]: Open to product design engineering roles
        - generic [ref=e130]:
          - navigation "Site" [ref=e131]:
            - heading "Site" [level=2] [ref=e132]
            - list [ref=e133]:
              - listitem [ref=e134]:
                - link "About" [ref=e135] [cursor=pointer]:
                  - /url: /about/
              - listitem [ref=e136]:
                - link "Projects" [ref=e137] [cursor=pointer]:
                  - /url: /projects/
              - listitem [ref=e138]:
                - link "Résumé" [ref=e139] [cursor=pointer]:
                  - /url: /resume/
              - listitem [ref=e140]:
                - link "Contact" [ref=e141] [cursor=pointer]:
                  - /url: /contact/
          - navigation "More" [ref=e142]:
            - heading "More" [level=2] [ref=e143]
            - list [ref=e144]:
              - listitem [ref=e145]:
                - link "Personal Projects" [ref=e146] [cursor=pointer]:
                  - /url: /personal-projects/
              - listitem [ref=e147]:
                - link "Testimonials" [ref=e148] [cursor=pointer]:
                  - /url: /testimonials/
              - listitem [ref=e149]:
                - link "Blog" [ref=e150] [cursor=pointer]:
                  - /url: /blog/
              - listitem [ref=e151]:
                - link "Tools" [ref=e152] [cursor=pointer]:
                  - /url: /tools/
              - listitem [ref=e153]:
                - link "Style Guide" [ref=e154] [cursor=pointer]:
                  - /url: /style-guide/
      - generic [ref=e155]:
        - generic [ref=e156]:
          - generic [ref=e157]: © 2026 Joshua Briley
          - link "Privacy" [ref=e158] [cursor=pointer]:
            - /url: /privacy/
          - link "Terms" [ref=e159] [cursor=pointer]:
            - /url: /terms/
        - generic [ref=e160]:
          - link "LinkedIn" [ref=e161] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/joshuabriley/
            - text: LinkedIn
            - img [ref=e163]
          - link "GitHub" [ref=e165] [cursor=pointer]:
            - /url: https://github.com/somecallmejosh
            - text: GitHub
            - img [ref=e167]
      - paragraph [ref=e169]: Designed by me, Joshua Briley, and built with my favorite static site generator, Astro.
  - generic [ref=e172]:
    - button "Menu" [ref=e173]:
      - img [ref=e175]
      - generic: Menu
    - button "Inspect" [ref=e179]:
      - img [ref=e181]
      - generic: Inspect
    - button "Audit" [ref=e183]:
      - img [ref=e185]
      - generic: Audit
    - button "Settings" [ref=e188]:
      - img [ref=e190]
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