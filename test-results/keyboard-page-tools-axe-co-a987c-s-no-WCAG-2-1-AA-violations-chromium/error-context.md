# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: keyboard.spec.ts >> page /tools/ >> axe-core scan reports no WCAG 2.1 AA violations
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
+           ".text-\\[0\\.66rem\\]",
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
      - generic [ref=e21]:
        - generic [ref=e22]: Tools
        - generic [ref=e23]: 4 of them, all free
      - generic [ref=e24]:
        - heading "Small instruments for design-system problems." [level=1] [ref=e25]:
          - text: Small instruments for
          - emphasis [ref=e26]: design-system
          - text: problems.
        - paragraph [ref=e27]: Each one answers a question teams keep asking me, and each one runs entirely in your browser. Nothing to install, nothing to sign up for, nothing sent anywhere.
        - list [ref=e28]:
          - listitem [ref=e29]: No signup
          - listitem [ref=e31]: Nothing saved
          - listitem [ref=e33]: Built by hand
    - generic [ref=e37]:
      - link "Self-assessment Grade your design system like a report card Ten minutes, five subjects, thirty-two questions. An honest snapshot of where your design system shines and where it is quietly burning your team out. Ten minutes No signup Results live in the URL Take the assessment" [ref=e38] [cursor=pointer]:
        - /url: /tools/scorecard/
        - generic [ref=e39]:
          - img [ref=e41]
          - generic [ref=e45]: Self-assessment
        - heading "Grade your design system like a report card" [level=2] [ref=e46]
        - paragraph [ref=e47]: Ten minutes, five subjects, thirty-two questions. An honest snapshot of where your design system shines and where it is quietly burning your team out.
        - list [ref=e48]:
          - listitem [ref=e49]: Ten minutes
          - listitem [ref=e51]: No signup
          - listitem [ref=e53]: Results live in the URL
        - generic [ref=e55]:
          - text: Take the assessment
          - img [ref=e57]
      - link "Calculator What inconsistency actually costs Price the drift your team already lives with, in hours and dollars. Run your numbers" [ref=e59] [cursor=pointer]:
        - /url: /tools/roi-calculator/
        - generic [ref=e60]:
          - img [ref=e62]
          - generic [ref=e66]: Calculator
        - heading "What inconsistency actually costs" [level=2] [ref=e67]
        - paragraph [ref=e68]: Price the drift your team already lives with, in hours and dollars.
        - generic [ref=e69]:
          - text: Run your numbers
          - img [ref=e71]
      - link "Playground What a design token actually does Move one primitive and watch it propagate through every component. Move a token" [ref=e73] [cursor=pointer]:
        - /url: /tools/token-playground/
        - generic [ref=e74]:
          - img [ref=e76]
          - generic [ref=e80]: Playground
        - heading "What a design token actually does" [level=2] [ref=e81]
        - paragraph [ref=e82]: Move one primitive and watch it propagate through every component.
        - generic [ref=e83]:
          - text: Move a token
          - img [ref=e85]
      - link "Inspector What an audit actually finds Inspect a real specimen and read the findings the way an audit ranks them. Inspect a specimen" [ref=e87] [cursor=pointer]:
        - /url: /tools/audit-findings/
        - generic [ref=e88]:
          - img [ref=e90]
          - generic [ref=e94]: Inspector
        - heading "What an audit actually finds" [level=2] [ref=e95]
        - paragraph [ref=e96]: Inspect a real specimen and read the findings the way an audit ranks them.
        - generic [ref=e97]:
          - text: Inspect a specimen
          - img [ref=e99]
    - generic [ref=e103]:
      - generic [ref=e104]:
        - paragraph [ref=e105]: Why these are here
        - heading "Every one of these is also a work sample." [level=2] [ref=e106]
      - generic [ref=e108]:
        - paragraph [ref=e109]: "They are built the way I build production work: accessible controls, live state, no frameworks under the hood, the same tokens as the rest of this site."
        - paragraph [ref=e110]: "The scorecard uses real radio groups, so tab through it and the keyboard path is genuinely there. The results radar is hand-drawn SVG rather than a charting library. The calculator shows every assumption behind its total instead of hiding the math. That is the point: a tool that argues for careful interface work should survive being inspected as one."
        - paragraph [ref=e111]:
          - text: If you would rather read than click, the same thinking runs through the
          - link "writing" [ref=e112] [cursor=pointer]:
            - /url: /blog/
          - text: .
  - contentinfo [ref=e113]:
    - generic [ref=e114]:
      - generic [ref=e115]:
        - generic [ref=e116]:
          - img "Joshua Briley" [ref=e117]:
            - generic [ref=e118]: JB
            - generic [ref=e119]:
              - text: Joshua Briley
              - generic [ref=e120]: .
          - paragraph [ref=e121]: "Design- and front-end-focused product design engineer. The interface is where I bring the most value: design-grade, accessible UI, finished to the last detail."
          - paragraph [ref=e122]: Open to product design engineering roles
        - generic [ref=e124]:
          - navigation "Site" [ref=e125]:
            - heading "Site" [level=2] [ref=e126]
            - list [ref=e127]:
              - listitem [ref=e128]:
                - link "About" [ref=e129] [cursor=pointer]:
                  - /url: /about/
              - listitem [ref=e130]:
                - link "Projects" [ref=e131] [cursor=pointer]:
                  - /url: /projects/
              - listitem [ref=e132]:
                - link "Résumé" [ref=e133] [cursor=pointer]:
                  - /url: /resume/
              - listitem [ref=e134]:
                - link "Contact" [ref=e135] [cursor=pointer]:
                  - /url: /contact/
          - navigation "More" [ref=e136]:
            - heading "More" [level=2] [ref=e137]
            - list [ref=e138]:
              - listitem [ref=e139]:
                - link "Personal Projects" [ref=e140] [cursor=pointer]:
                  - /url: /personal-projects/
              - listitem [ref=e141]:
                - link "Testimonials" [ref=e142] [cursor=pointer]:
                  - /url: /testimonials/
              - listitem [ref=e143]:
                - link "Blog" [ref=e144] [cursor=pointer]:
                  - /url: /blog/
              - listitem [ref=e145]:
                - link "Tools" [ref=e146] [cursor=pointer]:
                  - /url: /tools/
              - listitem [ref=e147]:
                - link "Style Guide" [ref=e148] [cursor=pointer]:
                  - /url: /style-guide/
      - generic [ref=e149]:
        - generic [ref=e150]:
          - generic [ref=e151]: © 2026 Joshua Briley
          - link "Privacy" [ref=e152] [cursor=pointer]:
            - /url: /privacy/
          - link "Terms" [ref=e153] [cursor=pointer]:
            - /url: /terms/
        - generic [ref=e154]:
          - link "LinkedIn" [ref=e155] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/joshuabriley/
            - text: LinkedIn
            - img [ref=e157]
          - link "GitHub" [ref=e159] [cursor=pointer]:
            - /url: https://github.com/somecallmejosh
            - text: GitHub
            - img [ref=e161]
      - paragraph [ref=e163]: Designed by me, Joshua Briley, and built with my favorite static site generator, Astro.
  - generic [ref=e166]:
    - button "Menu" [ref=e167]:
      - img [ref=e169]
      - generic: Menu
    - button "Inspect" [ref=e173]:
      - img [ref=e175]
      - generic: Inspect
    - button "Audit" [ref=e177]:
      - img [ref=e179]
      - generic: Audit
    - button "Settings" [ref=e182]:
      - img [ref=e184]
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