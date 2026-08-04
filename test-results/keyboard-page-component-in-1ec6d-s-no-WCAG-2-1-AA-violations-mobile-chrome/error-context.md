# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: keyboard.spec.ts >> page /component-inventory/ >> axe-core scan reports no WCAG 2.1 AA violations
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
      - generic [ref=e16]:
        - generic: "404"
        - generic [ref=e17]:
          - paragraph [ref=e18]: 404 / Not found
          - heading "This page took an unplanned detour." [level=1] [ref=e19]
          - paragraph [ref=e20]: Maybe it was renamed, maybe it's a typo, or maybe it drifted out of the system and nobody wrote it down. Either way, here are a few good places to land.
          - generic [ref=e21]:
            - generic [ref=e22]: "- removed the page you wanted"
            - generic [ref=e23]: + added three worth landing on
      - list [ref=e24]:
        - listitem [ref=e25]:
          - link "Home" [ref=e26] [cursor=pointer]:
            - /url: /
            - generic [ref=e27]: Home
            - img [ref=e29]
        - listitem [ref=e31]:
          - link "Selected work" [ref=e32] [cursor=pointer]:
            - /url: /projects/
            - generic [ref=e33]: Selected work
            - img [ref=e35]
        - listitem [ref=e37]:
          - link "Contact" [ref=e38] [cursor=pointer]:
            - /url: /contact/
            - generic [ref=e39]: Contact
            - img [ref=e41]
      - paragraph [ref=e43]:
        - text: Broken link?
        - link "Let me know" [ref=e44] [cursor=pointer]:
          - /url: /contact/
        - text: .
  - contentinfo [ref=e45]:
    - generic [ref=e46]:
      - generic [ref=e47]:
        - generic [ref=e48]:
          - img "Joshua Briley" [ref=e49]:
            - generic [ref=e50]: JB
            - generic [ref=e51]:
              - text: Joshua Briley
              - generic [ref=e52]: .
          - paragraph [ref=e53]: "Design- and front-end-focused product design engineer. The interface is where I bring the most value: design-grade, accessible UI, finished to the last detail."
          - paragraph [ref=e54]: Open to product design engineering roles
        - generic [ref=e56]:
          - navigation "Site" [ref=e57]:
            - heading "Site" [level=2] [ref=e58]
            - list [ref=e59]:
              - listitem [ref=e60]:
                - link "About" [ref=e61] [cursor=pointer]:
                  - /url: /about/
              - listitem [ref=e62]:
                - link "Projects" [ref=e63] [cursor=pointer]:
                  - /url: /projects/
              - listitem [ref=e64]:
                - link "Résumé" [ref=e65] [cursor=pointer]:
                  - /url: /resume/
              - listitem [ref=e66]:
                - link "Contact" [ref=e67] [cursor=pointer]:
                  - /url: /contact/
          - navigation "More" [ref=e68]:
            - heading "More" [level=2] [ref=e69]
            - list [ref=e70]:
              - listitem [ref=e71]:
                - link "Personal Projects" [ref=e72] [cursor=pointer]:
                  - /url: /personal-projects/
              - listitem [ref=e73]:
                - link "Testimonials" [ref=e74] [cursor=pointer]:
                  - /url: /testimonials/
              - listitem [ref=e75]:
                - link "Blog" [ref=e76] [cursor=pointer]:
                  - /url: /blog/
              - listitem [ref=e77]:
                - link "Tools" [ref=e78] [cursor=pointer]:
                  - /url: /tools/
              - listitem [ref=e79]:
                - link "Style Guide" [ref=e80] [cursor=pointer]:
                  - /url: /style-guide/
      - generic [ref=e81]:
        - generic [ref=e82]:
          - generic [ref=e83]: © 2026 Joshua Briley
          - link "Privacy" [ref=e84] [cursor=pointer]:
            - /url: /privacy/
          - link "Terms" [ref=e85] [cursor=pointer]:
            - /url: /terms/
        - generic [ref=e86]:
          - link "LinkedIn" [ref=e87] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/joshuabriley/
            - text: LinkedIn
            - img [ref=e89]
          - link "GitHub" [ref=e91] [cursor=pointer]:
            - /url: https://github.com/somecallmejosh
            - text: GitHub
            - img [ref=e93]
      - paragraph [ref=e95]: Designed by me, Joshua Briley, and built with my favorite static site generator, Astro.
  - generic [ref=e98]:
    - button "Menu" [ref=e99]:
      - img [ref=e101]
      - generic: Menu
    - button "Inspect" [ref=e105]:
      - img [ref=e107]
      - generic: Inspect
    - button "Audit" [ref=e109]:
      - img [ref=e111]
      - generic: Audit
    - button "Settings" [ref=e114]:
      - img [ref=e116]
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