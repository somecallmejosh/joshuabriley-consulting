# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: keyboard.spec.ts >> page /contact/ >> axe-core scan reports no WCAG 2.1 AA violations
- Location: tests/e2e/keyboard.spec.ts:21:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 60

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
+                 "html": "<footer class=\"bg-ink text-paper/60 border-t border-paper/10\">",
+                 "target": Array [
+                   "footer",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.13 (foreground color: #68696c, background color: #1a1b1e, font size: 7.9pt (10.56px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"mt-8 font-mono text-[0.66rem] leading-relaxed tracking-[0.1em] text-paper/35\">
+ Designed by me, Joshua Briley, and built with my favorite static site generator, Astro.
+ </p>",
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
      - generic [ref=e17]: Open to product design engineering roles
      - generic [ref=e19]:
        - generic [ref=e20]:
          - heading "Let's talk about the work." [level=1] [ref=e21]:
            - text: Let's talk about
            - emphasis [ref=e22]: the work
            - text: .
          - paragraph [ref=e23]: If you're hiring a design- and front-end-focused product design engineer, someone who brings the most value at the UI and sweats the finish, send a note about the role and the team. I read everything and reply personally, usually the same day.
        - list [ref=e25]:
          - listitem [ref=e26]: ~2 minutes
          - listitem [ref=e28]: No spam, ever
          - listitem [ref=e30]: Personal reply
    - generic [ref=e34]:
      - generic [ref=e35]:
        - heading "Tell me about the role." [level=2] [ref=e36]
        - generic [ref=e38]:
          - generic [ref=e39]:
            - generic [ref=e40]:
              - generic [ref=e41]: First name *
              - textbox "First name" [ref=e42]
            - generic [ref=e43]:
              - generic [ref=e44]: Last name *
              - textbox "Last name" [ref=e45]
          - generic [ref=e46]:
            - generic [ref=e47]: Email *
            - textbox "Email" [ref=e48]
            - paragraph [ref=e49]: I'll only use this to reply.
          - generic [ref=e50]:
            - generic [ref=e51]: Phone (optional)
            - textbox "Phone (optional)" [ref=e52]
          - generic [ref=e53]:
            - generic [ref=e54]: What's this about? *
            - generic [ref=e55]:
              - combobox "What's this about?" [ref=e56]:
                - option "Pick one" [disabled] [selected]
                - option "Product design engineer role"
                - option "Front-end / UI engineer role"
                - option "Contract / fractional role"
                - option "Recruiting / talent"
                - option "Something else"
              - generic:
                - generic:
                  - img
          - generic [ref=e57]:
            - generic [ref=e58]: Notes *
            - textbox "Notes" [ref=e59]
            - paragraph [ref=e60]: A few sentences about the role is plenty.
          - button "Send message" [ref=e61] [cursor=pointer]:
            - generic [ref=e62]: Send message
            - img [ref=e65]
      - complementary [ref=e67]:
        - paragraph [ref=e68]: What happens next
        - heading "A simple, no-pressure path forward." [level=2] [ref=e69]
        - list [ref=e70]:
          - listitem [ref=e71]:
            - generic [ref=e72]: "01"
            - generic [ref=e73]:
              - paragraph [ref=e74]: You send a message
              - paragraph [ref=e75]: Takes about two minutes. Tell me about the role and the team.
          - listitem [ref=e76]:
            - generic [ref=e77]: "02"
            - generic [ref=e78]:
              - paragraph [ref=e79]: I reply personally
              - paragraph [ref=e80]: Usually the same day. No templates, no autoresponders.
          - listitem [ref=e81]:
            - generic [ref=e82]: "03"
            - generic [ref=e83]:
              - paragraph [ref=e84]: We talk
              - paragraph [ref=e85]: A real conversation about the work, the product you're building, and whether I'm the right fit.
          - listitem [ref=e86]:
            - generic [ref=e87]: "04"
            - generic [ref=e88]:
              - paragraph [ref=e89]: A clear next step
              - paragraph [ref=e90]: If we're a fit, we keep going. If not, I'll tell you honestly, and probably point you to someone who is.
    - generic [ref=e92]:
      - heading "What people say about working with me." [level=2] [ref=e94]
      - generic [ref=e95]:
        - figure "Rebecca Cachia, PMP Rebecca Cachia, PMP Web Product & Project Manager · Publicis Sapient" [ref=e96]:
          - blockquote [ref=e97]:
            - paragraph [ref=e98]: Josh's ability to foresee challenges and simplify implementation was invaluable. He creates seamless designs ensuring performance and accessibility.
          - generic [ref=e99]:
            - img "Rebecca Cachia, PMP" [ref=e100]
            - generic [ref=e101]:
              - paragraph [ref=e102]: Rebecca Cachia, PMP
              - paragraph [ref=e103]: Web Product & Project Manager · Publicis Sapient
        - figure "Gabriel Bressi Gabriel Bressi QA Lead · Kopius, Inc." [ref=e104]:
          - blockquote [ref=e105]:
            - paragraph [ref=e106]: Josh delivered assignments as planned, and his work quality allowed him bandwidth for additional responsibilities.
          - generic [ref=e107]:
            - img "Gabriel Bressi" [ref=e108]
            - generic [ref=e109]:
              - paragraph [ref=e110]: Gabriel Bressi
              - paragraph [ref=e111]: QA Lead · Kopius, Inc.
    - generic [ref=e114]:
      - generic [ref=e115]:
        - paragraph [ref=e116]: Prefer to skip the form
        - heading "Email me, or say hi on LinkedIn." [level=2] [ref=e117]
        - paragraph [ref=e118]: However you reach out, it comes straight to me. I read everything.
      - generic [ref=e120]:
        - link "Email me" [ref=e121] [cursor=pointer]:
          - /url: mailto:josh@thebrileys.com
          - text: Email me
          - img [ref=e123]
        - link "Connect on LinkedIn" [ref=e125] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/joshuabriley/
          - text: Connect on LinkedIn
          - img [ref=e127]
  - contentinfo [ref=e129]:
    - generic [ref=e130]:
      - generic [ref=e131]:
        - generic [ref=e132]:
          - img "Joshua Briley" [ref=e133]:
            - generic [ref=e134]: JB
            - generic [ref=e135]:
              - text: Joshua Briley
              - generic [ref=e136]: .
          - paragraph [ref=e137]: "Design- and front-end-focused product design engineer. The interface is where I bring the most value: design-grade, accessible UI, finished to the last detail."
          - paragraph [ref=e138]: Open to product design engineering roles
        - generic [ref=e140]:
          - navigation "Site" [ref=e141]:
            - heading "Site" [level=2] [ref=e142]
            - list [ref=e143]:
              - listitem [ref=e144]:
                - link "About" [ref=e145] [cursor=pointer]:
                  - /url: /about/
              - listitem [ref=e146]:
                - link "Projects" [ref=e147] [cursor=pointer]:
                  - /url: /projects/
              - listitem [ref=e148]:
                - link "Résumé" [ref=e149] [cursor=pointer]:
                  - /url: /resume/
              - listitem [ref=e150]:
                - link "Contact" [ref=e151] [cursor=pointer]:
                  - /url: /contact/
          - navigation "More" [ref=e152]:
            - heading "More" [level=2] [ref=e153]
            - list [ref=e154]:
              - listitem [ref=e155]:
                - link "Personal Projects" [ref=e156] [cursor=pointer]:
                  - /url: /personal-projects/
              - listitem [ref=e157]:
                - link "Testimonials" [ref=e158] [cursor=pointer]:
                  - /url: /testimonials/
              - listitem [ref=e159]:
                - link "Blog" [ref=e160] [cursor=pointer]:
                  - /url: /blog/
              - listitem [ref=e161]:
                - link "Tools" [ref=e162] [cursor=pointer]:
                  - /url: /tools/
              - listitem [ref=e163]:
                - link "Style Guide" [ref=e164] [cursor=pointer]:
                  - /url: /style-guide/
      - generic [ref=e165]:
        - generic [ref=e166]:
          - generic [ref=e167]: © 2026 Joshua Briley
          - link "Privacy" [ref=e168] [cursor=pointer]:
            - /url: /privacy/
          - link "Terms" [ref=e169] [cursor=pointer]:
            - /url: /terms/
        - generic [ref=e170]:
          - link "LinkedIn" [ref=e171] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/joshuabriley/
            - text: LinkedIn
            - img [ref=e173]
          - link "GitHub" [ref=e175] [cursor=pointer]:
            - /url: https://github.com/somecallmejosh
            - text: GitHub
            - img [ref=e177]
      - paragraph [ref=e179]: Designed by me, Joshua Briley, and built with my favorite static site generator, Astro.
  - generic [ref=e182]:
    - button "Menu" [ref=e183]:
      - img [ref=e185]
      - generic: Menu
    - button "Inspect" [ref=e189]:
      - img [ref=e191]
      - generic: Inspect
    - button "Audit" [ref=e193]:
      - img [ref=e195]
      - generic: Audit
    - button "Settings" [ref=e198]:
      - img [ref=e200]
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