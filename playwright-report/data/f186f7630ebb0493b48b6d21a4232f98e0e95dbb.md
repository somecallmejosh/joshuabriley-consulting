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
      - paragraph [ref=e21]:
        - generic [ref=e22]: My role is
        - text: Product Design Engineer ·
        - generic [ref=e23]: I focus on
        - text: Design & front-end
      - generic [ref=e25]:
        - heading "My best work lives at the interface, down to the last detail." [level=1] [ref=e26]:
          - text: My best work lives at the
          - emphasis [ref=e27]: interface
          - text: ", down to the last detail."
        - paragraph [ref=e28]: "I'm a design- and front-end-focused product design engineer with 20 years in production UI. The interface is where I bring the most value: design-grade, accessible, and finished to the last detail."
        - generic [ref=e29]:
          - link "See the work" [ref=e30] [cursor=pointer]:
            - /url: /projects/
            - text: See the work
            - img [ref=e32]
          - link "Read how I work" [ref=e34] [cursor=pointer]:
            - /url: /about/
    - list [ref=e38]:
      - listitem [ref=e39]: Design-grade front-end
      - listitem [ref=e41]: React · TypeScript
      - listitem [ref=e43]: Accessibility built in
      - listitem [ref=e45]: Design systems
    - generic [ref=e48]:
      - generic [ref=e49]:
        - heading "Why my products feel finished." [level=2] [ref=e50]
        - paragraph [ref=e51]: Most engineers treat design and accessibility as someone else's job, or the first thing cut when a deadline closes in. I build them in. That's why the things I ship work for everyone, not just the average user on a fast laptop, and why they hold up after launch.
      - generic [ref=e52]:
        - generic [ref=e53]:
          - generic [ref=e54]: Where the value is
          - heading "The UI is where I bring the most value" [level=3] [ref=e55]
          - paragraph [ref=e56]: "Twenty years in design systems taught me where interfaces break: type, spacing, motion, the empty and error states most engineers leave blank. I build it myself, design-grade, instead of handing a spec to someone who will approximate it."
        - generic [ref=e57]:
          - heading "Accessible by construction" [level=3] [ref=e58]
          - paragraph [ref=e59]: Keyboard paths, focus management, and screen-reader behavior built in from the start. Accessibility is the mechanism that makes a product work for everyone, not a checkbox.
        - generic [ref=e60]:
          - heading "I sweat the last 10%" [level=3] [ref=e61]
          - paragraph [ref=e62]: Empty states, recoverable forms, the screen that shows when there is nothing to show yet. Those are the parts that decide whether a product feels finished, and whether it holds up after launch.
        - generic [ref=e63]:
          - heading "I bring the system, not just the screen" [level=3] [ref=e64]
          - paragraph [ref=e65]: "When a product needs a real design system, I build that too: one library, one accessibility floor, every brand held to the same standard. It is how the UI stays consistent as the team and the surface area grow."
    - generic [ref=e67]:
      - generic [ref=e68]:
        - generic [ref=e69]:
          - paragraph [ref=e70]: Selected work
          - heading "Products where I owned the interface." [level=2] [ref=e71]
        - generic [ref=e72]:
          - generic [ref=e73]:
            - paragraph [ref=e74]: 75%
            - paragraph [ref=e75]: fewer support calls
            - paragraph [ref=e76]: "IVFCRYO: a readiness gate before scheduling"
          - generic [ref=e77]:
            - paragraph [ref=e78]: Zero
            - paragraph [ref=e79]: pipeline regressions
            - paragraph [ref=e80]: "VMSpark: four phases, no feature flags"
          - generic [ref=e81]:
            - paragraph [ref=e82]: 2+ hrs
            - paragraph [ref=e83]: a day of data entry removed
            - paragraph [ref=e84]: "Logatot: hands-free capture in the moment"
      - list [ref=e85]:
        - listitem [ref=e86]:
          - link "Logistics platform IVFCRYO A self-service platform for cryogenic fertility shipments, where the hard part was getting five parties provably ready before a specimen moved." [ref=e87] [cursor=pointer]:
            - /url: /projects/ivfcryo/
            - generic [ref=e89]: Logistics platform
            - generic [ref=e90]:
              - text: IVFCRYO
              - generic [ref=e91]: A self-service platform for cryogenic fertility shipments, where the hard part was getting five parties provably ready before a specimen moved.
            - img [ref=e94]
        - listitem [ref=e96]:
          - 'link "Admin platform VMSpark A multi-tenant admin platform rebuilt and shipped in four phases: the operator-facing UI and workflows, delivered with zero pipeline regressions." [ref=e97] [cursor=pointer]':
            - /url: /projects/vmspark/
            - generic [ref=e99]: Admin platform
            - generic [ref=e100]:
              - text: VMSpark
              - generic [ref=e101]: "A multi-tenant admin platform rebuilt and shipped in four phases: the operator-facing UI and workflows, delivered with zero pipeline regressions."
            - img [ref=e104]
        - listitem [ref=e106]:
          - link "Voice platform Logatot A voice-controlled operations platform for home-based child care, built for a user whose hands are already full." [ref=e107] [cursor=pointer]:
            - /url: /projects/logatot/
            - generic [ref=e109]: Voice platform
            - generic [ref=e110]:
              - text: Logatot
              - generic [ref=e111]: A voice-controlled operations platform for home-based child care, built for a user whose hands are already full.
            - img [ref=e114]
      - link "View all projects" [ref=e117] [cursor=pointer]:
        - /url: /projects/
        - text: View all projects
        - img [ref=e119]
      - generic [ref=e121]:
        - generic [ref=e122]:
          - generic [ref=e123]:
            - paragraph [ref=e124]: Tools
            - heading "And things you can actually use." [level=2] [ref=e125]
          - paragraph [ref=e127]: Four working instruments for design-system teams. Each runs in your browser. No signup, nothing saved, nothing sent anywhere.
        - list [ref=e128]:
          - listitem [ref=e129]:
            - link "Self-assessment Grade your design system like a report card Score your system across the five subjects a healthy one is graded on." [ref=e130] [cursor=pointer]:
              - /url: /tools/scorecard/
              - generic [ref=e132]: Self-assessment
              - generic [ref=e133]:
                - text: Grade your design system like a report card
                - generic [ref=e134]: Score your system across the five subjects a healthy one is graded on.
              - img [ref=e137]
          - listitem [ref=e139]:
            - link "Calculator What inconsistency actually costs Price the drift your team already lives with, in hours and dollars." [ref=e140] [cursor=pointer]:
              - /url: /tools/roi-calculator/
              - generic [ref=e142]: Calculator
              - generic [ref=e143]:
                - text: What inconsistency actually costs
                - generic [ref=e144]: Price the drift your team already lives with, in hours and dollars.
              - img [ref=e147]
          - listitem [ref=e149]:
            - link "Playground What a design token actually does Move one primitive and watch it propagate through every component." [ref=e150] [cursor=pointer]:
              - /url: /tools/token-playground/
              - generic [ref=e152]: Playground
              - generic [ref=e153]:
                - text: What a design token actually does
                - generic [ref=e154]: Move one primitive and watch it propagate through every component.
              - img [ref=e157]
          - listitem [ref=e159]:
            - link "Inspector What an audit actually finds Inspect a real specimen and read the findings the way an audit ranks them." [ref=e160] [cursor=pointer]:
              - /url: /tools/audit-findings/
              - generic [ref=e162]: Inspector
              - generic [ref=e163]:
                - text: What an audit actually finds
                - generic [ref=e164]: Inspect a real specimen and read the findings the way an audit ranks them.
              - img [ref=e167]
        - link "View all tools" [ref=e170] [cursor=pointer]:
          - /url: /tools/
          - text: View all tools
          - img [ref=e172]
    - generic [ref=e176]:
      - img "Joshua Briley, product design engineer" [ref=e180]
      - generic [ref=e181]:
        - heading "Designer by origin. Engineer by practice." [level=2] [ref=e182]
        - generic [ref=e183]:
          - paragraph [ref=e184]: "I started in design and moved into engineering because I wanted to build the things I drew, not hand them off. Twenty years later, the front end is where I do my best work: design-grade, accessible UI with the judgment most engineering teams have to hire a separate designer to get."
          - paragraph [ref=e185]: I build by feel, fast, and I sweat the finish. Away from the screen, I play bass and gig regularly, which is its own lesson in getting the details right in real time.
        - link "Read more about how I work" [ref=e187] [cursor=pointer]:
          - /url: /about/
          - text: Read more about how I work
          - img [ref=e189]
    - generic [ref=e193]:
      - generic [ref=e194]:
        - heading "Looking for a team that cares about the finish." [level=2] [ref=e195]
        - paragraph [ref=e196]: I want to build complete, accessible products on a team that treats the last 10% as the point, not the afterthought. If that's the work, let's talk.
        - generic [ref=e197]:
          - link "Get in touch" [ref=e198] [cursor=pointer]:
            - /url: /contact/
            - text: Get in touch
            - img [ref=e200]
          - link "Résumé" [ref=e202] [cursor=pointer]:
            - /url: /resume/
            - text: Résumé
            - img [ref=e204]
      - generic [ref=e206]:
        - paragraph [ref=e207]: Latest writing
        - heading "Notes on building complete products." [level=3] [ref=e208]
        - paragraph [ref=e209]: Accessible interfaces, the details that make software feel finished, AI-assisted development, and the changing shape of the front-end engineer.
        - link "Read the blog" [ref=e211] [cursor=pointer]:
          - /url: /blog/
          - text: Read the blog
          - img [ref=e213]
  - contentinfo [ref=e215]:
    - generic [ref=e216]:
      - generic [ref=e217]:
        - generic [ref=e218]:
          - img "Joshua Briley" [ref=e219]:
            - generic [ref=e220]: JB
            - generic [ref=e221]:
              - text: Joshua Briley
              - generic [ref=e222]: .
          - paragraph [ref=e223]: "Design- and front-end-focused product design engineer. The interface is where I bring the most value: design-grade, accessible UI, finished to the last detail."
          - paragraph [ref=e224]: Open to product design engineering roles
        - generic [ref=e226]:
          - navigation "Site" [ref=e227]:
            - heading "Site" [level=2] [ref=e228]
            - list [ref=e229]:
              - listitem [ref=e230]:
                - link "About" [ref=e231] [cursor=pointer]:
                  - /url: /about/
              - listitem [ref=e232]:
                - link "Projects" [ref=e233] [cursor=pointer]:
                  - /url: /projects/
              - listitem [ref=e234]:
                - link "Résumé" [ref=e235] [cursor=pointer]:
                  - /url: /resume/
              - listitem [ref=e236]:
                - link "Contact" [ref=e237] [cursor=pointer]:
                  - /url: /contact/
          - navigation "More" [ref=e238]:
            - heading "More" [level=2] [ref=e239]
            - list [ref=e240]:
              - listitem [ref=e241]:
                - link "Personal Projects" [ref=e242] [cursor=pointer]:
                  - /url: /personal-projects/
              - listitem [ref=e243]:
                - link "Testimonials" [ref=e244] [cursor=pointer]:
                  - /url: /testimonials/
              - listitem [ref=e245]:
                - link "Blog" [ref=e246] [cursor=pointer]:
                  - /url: /blog/
              - listitem [ref=e247]:
                - link "Tools" [ref=e248] [cursor=pointer]:
                  - /url: /tools/
              - listitem [ref=e249]:
                - link "Style Guide" [ref=e250] [cursor=pointer]:
                  - /url: /style-guide/
      - generic [ref=e251]:
        - generic [ref=e252]:
          - generic [ref=e253]: © 2026 Joshua Briley
          - link "Privacy" [ref=e254] [cursor=pointer]:
            - /url: /privacy/
          - link "Terms" [ref=e255] [cursor=pointer]:
            - /url: /terms/
        - generic [ref=e256]:
          - link "LinkedIn" [ref=e257] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/joshuabriley/
            - text: LinkedIn
            - img [ref=e259]
          - link "GitHub" [ref=e261] [cursor=pointer]:
            - /url: https://github.com/somecallmejosh
            - text: GitHub
            - img [ref=e263]
      - paragraph [ref=e265]: Designed by me, Joshua Briley, and built with my favorite static site generator, Astro.
  - generic [ref=e268]:
    - button "Menu" [ref=e269]:
      - img [ref=e271]
      - generic: Menu
    - button "Inspect" [ref=e275]:
      - img [ref=e277]
      - generic: Inspect
    - button "Audit" [ref=e279]:
      - generic [ref=e280]:
        - img [ref=e281]
        - img [ref=e284]
      - generic: Audit
    - button "Settings" [ref=e287]:
      - img [ref=e289]
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