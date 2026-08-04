# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: keyboard.spec.ts >> page /about/ >> axe-core scan reports no WCAG 2.1 AA violations
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
      - generic [ref=e17]: About · Product Design Engineer
      - generic [ref=e18]:
        - generic [ref=e19]:
          - heading "I build the whole product, and I sweat the parts most engineers skip." [level=1] [ref=e20]:
            - text: I build the whole product, and I sweat the parts most engineers
            - emphasis [ref=e21]: skip
            - text: .
          - paragraph [ref=e22]: "I'm a design- and front-end-focused product design engineer with 20 years in production UI. The interface is where I bring the most value: design-grade, accessible, with the judgment most teams have to hire a separate designer to get."
          - paragraph [ref=e23]:
            - text: I work across the whole product, from the stakeholder interviews that decide what to build through to the
            - emphasis [ref=e24]: data model the interface has to keep its promises against
            - text: . But the surface is where I do my best work, and where I hold the highest standard.
          - generic [ref=e25]:
            - link "Get in touch" [ref=e26] [cursor=pointer]:
              - /url: /contact/
              - text: Get in touch
              - img [ref=e28]
            - link "See the work" [ref=e30] [cursor=pointer]:
              - /url: /projects/
          - list [ref=e31]:
            - listitem [ref=e32]: Design-grade front-end
            - listitem [ref=e34]: React · TypeScript
            - listitem [ref=e36]: Accessibility built in
            - listitem [ref=e38]: Design systems
        - figure [ref=e41]:
          - img "Joshua Briley, product design engineer" [ref=e43]
    - generic [ref=e45]:
      - paragraph [ref=e46]: The standard
      - blockquote [ref=e47]:
        - paragraph [ref=e48]: Most engineers ship the screen. I ship the empty state, the keyboard path, and the screen that shows when there's nothing to show yet.
      - paragraph [ref=e49]: The last 10% is the point
    - generic [ref=e51]:
      - generic [ref=e52]:
        - paragraph [ref=e53]: How I work
        - heading "Three things I hold on to." [level=2] [ref=e54]
      - generic [ref=e55]:
        - generic [ref=e56]:
          - generic [ref=e57]:
            - generic [ref=e58]: "01"
            - heading "The UI is where the value is" [level=3] [ref=e59]
          - paragraph [ref=e60]: "The interface is my strongest work: type, spacing, motion, the empty and error states most engineers leave blank. I build it design-grade myself, instead of handing a spec to someone who will approximate it."
        - generic [ref=e61]:
          - generic [ref=e62]:
            - generic [ref=e63]: "02"
            - heading "Design and accessibility, built in" [level=3] [ref=e64]
          - paragraph [ref=e65]: Not an audit at the end. Not a ticket for later. The keyboard paths, focus states, and empty screens are part of how I build, which is why the things I ship work for everyone and feel finished.
        - generic [ref=e66]:
          - generic [ref=e67]:
            - generic [ref=e68]: "03"
            - heading "Directness over diplomacy" [level=3] [ref=e69]
          - paragraph [ref=e70]: If a product is in trouble, I'll tell you exactly where and why. Kindly, but without hedging. Then we'll map the shortest honest path forward. You're hiring me for the truth, not the comfort.
    - generic [ref=e73]:
      - generic [ref=e74]:
        - paragraph [ref=e75]: Always learning
        - heading "Twenty years in, still reading the spec drafts." [level=2] [ref=e76]
        - generic [ref=e77]:
          - paragraph [ref=e78]: "I stay close to the sources: WAI-ARIA working drafts, the Design Tokens Community Group, CSS Working Group proposals. The platform moves. The best systems move with it."
          - paragraph [ref=e79]: I also maintain Rudiment UI, an open-source React component library where I sharpen ideas in public before they land in production systems.
      - generic [ref=e80]:
        - paragraph [ref=e81]: What I follow
        - list [ref=e82]:
          - listitem [ref=e83]:
            - generic [ref=e84]: "01"
            - generic [ref=e85]:
              - paragraph [ref=e86]: WAI-ARIA & APG
              - paragraph [ref=e87]: Authoring practices for patterns that truly work for assistive tech.
          - listitem [ref=e88]:
            - generic [ref=e89]: "02"
            - generic [ref=e90]:
              - paragraph [ref=e91]: Design Tokens CG
              - paragraph [ref=e92]: The emerging standard for portable, multi-platform design decisions.
          - listitem [ref=e93]:
            - generic [ref=e94]: "03"
            - generic [ref=e95]:
              - paragraph [ref=e96]: CSS Working Group
              - paragraph [ref=e97]: Container queries, anchor positioning, cascade layers (the good stuff).
          - listitem [ref=e98]:
            - generic [ref=e99]: "04"
            - generic [ref=e100]:
              - paragraph [ref=e101]: Rudiment UI
              - paragraph [ref=e102]: My open-source React component library, built with the reasoning left in.
    - generic [ref=e105]:
      - generic [ref=e106]:
        - heading "Think we'd work well together?" [level=2] [ref=e107]
        - paragraph [ref=e108]: If you're hiring a product design engineer who builds the whole thing and sweats the finish, send a note. I'll tell you honestly whether I'm the right fit, and if not, I probably know who is.
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
      - generic [ref=e184]:
        - img [ref=e185]
        - img [ref=e188]
      - generic: Audit
    - button "Settings" [ref=e191]:
      - img [ref=e193]
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