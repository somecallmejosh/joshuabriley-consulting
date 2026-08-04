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
        - generic [ref=e22]: Open to product design engineering roles
        - generic [ref=e24]: Contact
      - generic [ref=e25]:
        - generic [ref=e26]:
          - heading "Let's talk about the work." [level=1] [ref=e27]:
            - text: Let's talk about
            - emphasis [ref=e28]: the work
            - text: .
          - paragraph [ref=e29]: If you're hiring a design- and front-end-focused product design engineer, someone who brings the most value at the UI and sweats the finish, send a note about the role and the team. I read everything and reply personally, usually the same day.
        - list [ref=e31]:
          - listitem [ref=e32]: ~2 minutes
          - listitem [ref=e34]: No spam, ever
          - listitem [ref=e36]: Personal reply
    - generic [ref=e40]:
      - generic [ref=e41]:
        - heading "Tell me about the role." [level=2] [ref=e42]
        - generic [ref=e44]:
          - generic [ref=e45]:
            - generic [ref=e46]:
              - generic [ref=e47]: First name *
              - textbox "First name" [ref=e48]
            - generic [ref=e49]:
              - generic [ref=e50]: Last name *
              - textbox "Last name" [ref=e51]
          - generic [ref=e52]:
            - generic [ref=e53]: Email *
            - textbox "Email" [ref=e54]
            - paragraph [ref=e55]: I'll only use this to reply.
          - generic [ref=e56]:
            - generic [ref=e57]: Phone (optional)
            - textbox "Phone (optional)" [ref=e58]
          - generic [ref=e59]:
            - generic [ref=e60]: What's this about? *
            - generic [ref=e61]:
              - combobox "What's this about?" [ref=e62]:
                - option "Pick one" [disabled] [selected]
                - option "Product design engineer role"
                - option "Front-end / UI engineer role"
                - option "Contract / fractional role"
                - option "Recruiting / talent"
                - option "Something else"
              - generic:
                - generic:
                  - img
          - generic [ref=e63]:
            - generic [ref=e64]: Notes *
            - textbox "Notes" [ref=e65]
            - paragraph [ref=e66]: A few sentences about the role is plenty.
          - button "Send message" [ref=e67] [cursor=pointer]:
            - generic [ref=e68]: Send message
            - img [ref=e71]
      - complementary [ref=e73]:
        - paragraph [ref=e74]: What happens next
        - heading "A simple, no-pressure path forward." [level=2] [ref=e75]
        - list [ref=e76]:
          - listitem [ref=e77]:
            - generic [ref=e78]: "01"
            - generic [ref=e79]:
              - paragraph [ref=e80]: You send a message
              - paragraph [ref=e81]: Takes about two minutes. Tell me about the role and the team.
          - listitem [ref=e82]:
            - generic [ref=e83]: "02"
            - generic [ref=e84]:
              - paragraph [ref=e85]: I reply personally
              - paragraph [ref=e86]: Usually the same day. No templates, no autoresponders.
          - listitem [ref=e87]:
            - generic [ref=e88]: "03"
            - generic [ref=e89]:
              - paragraph [ref=e90]: We talk
              - paragraph [ref=e91]: A real conversation about the work, the product you're building, and whether I'm the right fit.
          - listitem [ref=e92]:
            - generic [ref=e93]: "04"
            - generic [ref=e94]:
              - paragraph [ref=e95]: A clear next step
              - paragraph [ref=e96]: If we're a fit, we keep going. If not, I'll tell you honestly, and probably point you to someone who is.
    - generic [ref=e98]:
      - heading "What people say about working with me." [level=2] [ref=e100]
      - generic [ref=e101]:
        - figure "Rebecca Cachia, PMP Rebecca Cachia, PMP Web Product & Project Manager · Publicis Sapient" [ref=e102]:
          - blockquote [ref=e103]:
            - paragraph [ref=e104]: Josh's ability to foresee challenges and simplify implementation was invaluable. He creates seamless designs ensuring performance and accessibility.
          - generic [ref=e105]:
            - img "Rebecca Cachia, PMP" [ref=e106]
            - generic [ref=e107]:
              - paragraph [ref=e108]: Rebecca Cachia, PMP
              - paragraph [ref=e109]: Web Product & Project Manager · Publicis Sapient
        - figure "Gabriel Bressi Gabriel Bressi QA Lead · Kopius, Inc." [ref=e110]:
          - blockquote [ref=e111]:
            - paragraph [ref=e112]: Josh delivered assignments as planned, and his work quality allowed him bandwidth for additional responsibilities.
          - generic [ref=e113]:
            - img "Gabriel Bressi" [ref=e114]
            - generic [ref=e115]:
              - paragraph [ref=e116]: Gabriel Bressi
              - paragraph [ref=e117]: QA Lead · Kopius, Inc.
    - generic [ref=e120]:
      - generic [ref=e121]:
        - paragraph [ref=e122]: Prefer to skip the form
        - heading "Email me, or say hi on LinkedIn." [level=2] [ref=e123]
        - paragraph [ref=e124]: However you reach out, it comes straight to me. I read everything.
      - generic [ref=e126]:
        - link "Email me" [ref=e127] [cursor=pointer]:
          - /url: mailto:josh@thebrileys.com
          - text: Email me
          - img [ref=e129]
        - link "Connect on LinkedIn" [ref=e131] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/joshuabriley/
          - text: Connect on LinkedIn
          - img [ref=e133]
  - contentinfo [ref=e135]:
    - generic [ref=e136]:
      - generic [ref=e137]:
        - generic [ref=e138]:
          - img "Joshua Briley" [ref=e139]:
            - generic [ref=e140]: JB
            - generic [ref=e141]:
              - text: Joshua Briley
              - generic [ref=e142]: .
          - paragraph [ref=e143]: "Design- and front-end-focused product design engineer. The interface is where I bring the most value: design-grade, accessible UI, finished to the last detail."
          - paragraph [ref=e144]: Open to product design engineering roles
        - generic [ref=e146]:
          - navigation "Site" [ref=e147]:
            - heading "Site" [level=2] [ref=e148]
            - list [ref=e149]:
              - listitem [ref=e150]:
                - link "About" [ref=e151] [cursor=pointer]:
                  - /url: /about/
              - listitem [ref=e152]:
                - link "Projects" [ref=e153] [cursor=pointer]:
                  - /url: /projects/
              - listitem [ref=e154]:
                - link "Résumé" [ref=e155] [cursor=pointer]:
                  - /url: /resume/
              - listitem [ref=e156]:
                - link "Contact" [ref=e157] [cursor=pointer]:
                  - /url: /contact/
          - navigation "More" [ref=e158]:
            - heading "More" [level=2] [ref=e159]
            - list [ref=e160]:
              - listitem [ref=e161]:
                - link "Personal Projects" [ref=e162] [cursor=pointer]:
                  - /url: /personal-projects/
              - listitem [ref=e163]:
                - link "Testimonials" [ref=e164] [cursor=pointer]:
                  - /url: /testimonials/
              - listitem [ref=e165]:
                - link "Blog" [ref=e166] [cursor=pointer]:
                  - /url: /blog/
              - listitem [ref=e167]:
                - link "Tools" [ref=e168] [cursor=pointer]:
                  - /url: /tools/
              - listitem [ref=e169]:
                - link "Style Guide" [ref=e170] [cursor=pointer]:
                  - /url: /style-guide/
      - generic [ref=e171]:
        - generic [ref=e172]:
          - generic [ref=e173]: © 2026 Joshua Briley
          - link "Privacy" [ref=e174] [cursor=pointer]:
            - /url: /privacy/
          - link "Terms" [ref=e175] [cursor=pointer]:
            - /url: /terms/
        - generic [ref=e176]:
          - link "LinkedIn" [ref=e177] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/joshuabriley/
            - text: LinkedIn
            - img [ref=e179]
          - link "GitHub" [ref=e181] [cursor=pointer]:
            - /url: https://github.com/somecallmejosh
            - text: GitHub
            - img [ref=e183]
      - paragraph [ref=e185]: Designed by me, Joshua Briley, and built with my favorite static site generator, Astro.
  - generic [ref=e188]:
    - button "Menu" [ref=e189]:
      - img [ref=e191]
      - generic: Menu
    - button "Inspect" [ref=e195]:
      - img [ref=e197]
      - generic: Inspect
    - button "Audit" [ref=e199]:
      - img [ref=e201]
      - generic: Audit
    - button "Settings" [ref=e204]:
      - img [ref=e206]
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