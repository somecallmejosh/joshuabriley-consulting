# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: keyboard.spec.ts >> page / >> axe-core scan reports no WCAG 2.1 AA violations
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
      - button "Toggle navigation menu" [ref=e9] [cursor=pointer]:
        - img [ref=e11]
  - main [ref=e13]:
    - generic [ref=e15]:
      - paragraph [ref=e16]:
        - generic [ref=e17]: My role is
        - text: Product Design Engineer ·
        - generic [ref=e18]: I focus on
        - text: Design & front-end
      - generic [ref=e20]:
        - heading "My best work lives at the interface, down to the last detail." [level=1] [ref=e21]:
          - text: My best work lives at the
          - emphasis [ref=e22]: interface
          - text: ", down to the last detail."
        - paragraph [ref=e23]: "I'm a design- and front-end-focused product design engineer with 20 years in production UI. The interface is where I bring the most value: design-grade, accessible, and finished to the last detail."
        - generic [ref=e24]:
          - link "See the work" [ref=e25] [cursor=pointer]:
            - /url: /projects/
            - text: See the work
            - img [ref=e27]
          - link "Read how I work" [ref=e29] [cursor=pointer]:
            - /url: /about/
    - list [ref=e33]:
      - listitem [ref=e34]: Design-grade front-end
      - listitem [ref=e36]: React · TypeScript
      - listitem [ref=e38]: Accessibility built in
      - listitem [ref=e40]: Design systems
    - generic [ref=e43]:
      - generic [ref=e44]:
        - heading "Why my products feel finished." [level=2] [ref=e45]
        - paragraph [ref=e46]: Most engineers treat design and accessibility as someone else's job, or the first thing cut when a deadline closes in. I build them in. That's why the things I ship work for everyone, not just the average user on a fast laptop, and why they hold up after launch.
      - generic [ref=e47]:
        - generic [ref=e48]:
          - text: Where the value is
          - heading "The UI is where I bring the most value" [level=3] [ref=e49]
          - paragraph [ref=e50]: "Twenty years in design systems taught me where interfaces break: type, spacing, motion, the empty and error states most engineers leave blank. I build it myself, design-grade, instead of handing a spec to someone who will approximate it."
        - generic [ref=e51]:
          - heading "Accessible by construction" [level=3] [ref=e52]
          - paragraph [ref=e53]: Keyboard paths, focus management, and screen-reader behavior built in from the start. Accessibility is the mechanism that makes a product work for everyone, not a checkbox.
        - generic [ref=e54]:
          - heading "I sweat the last 10%" [level=3] [ref=e55]
          - paragraph [ref=e56]: Empty states, recoverable forms, the screen that shows when there is nothing to show yet. Those are the parts that decide whether a product feels finished, and whether it holds up after launch.
        - generic [ref=e57]:
          - heading "I bring the system, not just the screen" [level=3] [ref=e58]
          - paragraph [ref=e59]: "When a product needs a real design system, I build that too: one library, one accessibility floor, every brand held to the same standard. It is how the UI stays consistent as the team and the surface area grow."
    - generic [ref=e61]:
      - generic [ref=e62]:
        - generic [ref=e63]:
          - paragraph [ref=e64]: Selected work
          - heading "Products where I owned the interface." [level=2] [ref=e65]
        - generic [ref=e66]:
          - generic [ref=e67]:
            - paragraph [ref=e68]: 75%
            - paragraph [ref=e69]: fewer support calls
            - paragraph [ref=e70]: "IVFCRYO: a readiness gate before scheduling"
          - generic [ref=e71]:
            - paragraph [ref=e72]: Zero
            - paragraph [ref=e73]: pipeline regressions
            - paragraph [ref=e74]: "VMSpark: four phases, no feature flags"
          - generic [ref=e75]:
            - paragraph [ref=e76]: 2+ hrs
            - paragraph [ref=e77]: a day of data entry removed
            - paragraph [ref=e78]: "Logatot: hands-free capture in the moment"
      - list [ref=e79]:
        - listitem [ref=e80]:
          - link "Logistics platform IVFCRYO A self-service platform for cryogenic fertility shipments, where the hard part was getting five parties provably ready before a specimen moved." [ref=e81] [cursor=pointer]:
            - /url: /projects/ivfcryo/
            - generic [ref=e83]: Logistics platform
            - generic [ref=e84]:
              - text: IVFCRYO
              - generic [ref=e85]: A self-service platform for cryogenic fertility shipments, where the hard part was getting five parties provably ready before a specimen moved.
        - listitem [ref=e86]:
          - 'link "Admin platform VMSpark A multi-tenant admin platform rebuilt and shipped in four phases: the operator-facing UI and workflows, delivered with zero pipeline regressions." [ref=e87] [cursor=pointer]':
            - /url: /projects/vmspark/
            - generic [ref=e89]: Admin platform
            - generic [ref=e90]:
              - text: VMSpark
              - generic [ref=e91]: "A multi-tenant admin platform rebuilt and shipped in four phases: the operator-facing UI and workflows, delivered with zero pipeline regressions."
        - listitem [ref=e92]:
          - link "Voice platform Logatot A voice-controlled operations platform for home-based child care, built for a user whose hands are already full." [ref=e93] [cursor=pointer]:
            - /url: /projects/logatot/
            - generic [ref=e95]: Voice platform
            - generic [ref=e96]:
              - text: Logatot
              - generic [ref=e97]: A voice-controlled operations platform for home-based child care, built for a user whose hands are already full.
      - link "View all projects" [ref=e99] [cursor=pointer]:
        - /url: /projects/
      - generic [ref=e100]:
        - generic [ref=e101]:
          - generic [ref=e102]:
            - paragraph [ref=e103]: Tools
            - heading "And things you can actually use." [level=2] [ref=e104]
          - paragraph [ref=e106]: Four working instruments for design-system teams. Each runs in your browser. No signup, nothing saved, nothing sent anywhere.
        - list [ref=e107]:
          - listitem [ref=e108]:
            - link "Self-assessment Grade your design system like a report card Score your system across the five subjects a healthy one is graded on." [ref=e109] [cursor=pointer]:
              - /url: /tools/scorecard/
              - generic [ref=e111]: Self-assessment
              - generic [ref=e112]:
                - text: Grade your design system like a report card
                - generic [ref=e113]: Score your system across the five subjects a healthy one is graded on.
          - listitem [ref=e114]:
            - link "Calculator What inconsistency actually costs Price the drift your team already lives with, in hours and dollars." [ref=e115] [cursor=pointer]:
              - /url: /tools/roi-calculator/
              - generic [ref=e117]: Calculator
              - generic [ref=e118]:
                - text: What inconsistency actually costs
                - generic [ref=e119]: Price the drift your team already lives with, in hours and dollars.
          - listitem [ref=e120]:
            - link "Playground What a design token actually does Move one primitive and watch it propagate through every component." [ref=e121] [cursor=pointer]:
              - /url: /tools/token-playground/
              - generic [ref=e123]: Playground
              - generic [ref=e124]:
                - text: What a design token actually does
                - generic [ref=e125]: Move one primitive and watch it propagate through every component.
          - listitem [ref=e126]:
            - link "Inspector What an audit actually finds Inspect a real specimen and read the findings the way an audit ranks them." [ref=e127] [cursor=pointer]:
              - /url: /tools/audit-findings/
              - generic [ref=e129]: Inspector
              - generic [ref=e130]:
                - text: What an audit actually finds
                - generic [ref=e131]: Inspect a real specimen and read the findings the way an audit ranks them.
        - link "View all tools" [ref=e133] [cursor=pointer]:
          - /url: /tools/
    - generic [ref=e136]:
      - img "Joshua Briley, product design engineer" [ref=e140]
      - generic [ref=e141]:
        - heading "Designer by origin. Engineer by practice." [level=2] [ref=e142]
        - generic [ref=e143]:
          - paragraph [ref=e144]: "I started in design and moved into engineering because I wanted to build the things I drew, not hand them off. Twenty years later, the front end is where I do my best work: design-grade, accessible UI with the judgment most engineering teams have to hire a separate designer to get."
          - paragraph [ref=e145]: I build by feel, fast, and I sweat the finish. Away from the screen, I play bass and gig regularly, which is its own lesson in getting the details right in real time.
        - link "Read more about how I work" [ref=e147] [cursor=pointer]:
          - /url: /about/
    - generic [ref=e150]:
      - generic [ref=e151]:
        - heading "Looking for a team that cares about the finish." [level=2] [ref=e152]
        - paragraph [ref=e153]: I want to build complete, accessible products on a team that treats the last 10% as the point, not the afterthought. If that's the work, let's talk.
        - generic [ref=e154]:
          - link "Get in touch" [ref=e155] [cursor=pointer]:
            - /url: /contact/
          - link "Résumé" [ref=e156] [cursor=pointer]:
            - /url: /resume/
      - generic [ref=e157]:
        - paragraph [ref=e158]: Latest writing
        - heading "Notes on building complete products." [level=3] [ref=e159]
        - paragraph [ref=e160]: Accessible interfaces, the details that make software feel finished, AI-assisted development, and the changing shape of the front-end engineer.
        - link "Read the blog" [ref=e162] [cursor=pointer]:
          - /url: /blog/
  - contentinfo [ref=e163]:
    - generic [ref=e164]:
      - generic [ref=e165]:
        - generic [ref=e166]:
          - img "Joshua Briley" [ref=e167]:
            - generic [ref=e168]: JB
            - generic [ref=e169]:
              - text: Joshua Briley
              - generic [ref=e170]: .
          - paragraph [ref=e171]: "Design- and front-end-focused product design engineer. The interface is where I bring the most value: design-grade, accessible UI, finished to the last detail."
          - paragraph [ref=e172]: Open to product design engineering roles
        - generic [ref=e174]:
          - navigation "Site" [ref=e175]:
            - heading "Site" [level=2] [ref=e176]
            - list [ref=e177]:
              - listitem [ref=e178]:
                - link "About" [ref=e179] [cursor=pointer]:
                  - /url: /about/
              - listitem [ref=e180]:
                - link "Projects" [ref=e181] [cursor=pointer]:
                  - /url: /projects/
              - listitem [ref=e182]:
                - link "Résumé" [ref=e183] [cursor=pointer]:
                  - /url: /resume/
              - listitem [ref=e184]:
                - link "Contact" [ref=e185] [cursor=pointer]:
                  - /url: /contact/
          - navigation "More" [ref=e186]:
            - heading "More" [level=2] [ref=e187]
            - list [ref=e188]:
              - listitem [ref=e189]:
                - link "Personal Projects" [ref=e190] [cursor=pointer]:
                  - /url: /personal-projects/
              - listitem [ref=e191]:
                - link "Testimonials" [ref=e192] [cursor=pointer]:
                  - /url: /testimonials/
              - listitem [ref=e193]:
                - link "Blog" [ref=e194] [cursor=pointer]:
                  - /url: /blog/
              - listitem [ref=e195]:
                - link "Tools" [ref=e196] [cursor=pointer]:
                  - /url: /tools/
              - listitem [ref=e197]:
                - link "Style Guide" [ref=e198] [cursor=pointer]:
                  - /url: /style-guide/
      - generic [ref=e199]:
        - generic [ref=e200]:
          - generic [ref=e201]: © 2026 Joshua Briley
          - link "Privacy" [ref=e202] [cursor=pointer]:
            - /url: /privacy/
          - link "Terms" [ref=e203] [cursor=pointer]:
            - /url: /terms/
        - generic [ref=e204]:
          - link "LinkedIn" [ref=e205] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/joshuabriley/
          - link "GitHub" [ref=e206] [cursor=pointer]:
            - /url: https://github.com/somecallmejosh
      - paragraph [ref=e207]: Designed by me, Joshua Briley, and built with my favorite static site generator, Astro.
  - generic [ref=e210]:
    - button "Menu" [ref=e211]:
      - img [ref=e213]
      - generic: Menu
    - button "Inspect" [ref=e217]:
      - img [ref=e219]
      - generic: Inspect
    - button "Audit" [ref=e221]:
      - img [ref=e223]
      - generic: Audit
    - button "Settings" [ref=e226]:
      - img [ref=e228]
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