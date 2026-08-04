# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: keyboard.spec.ts >> page /tools/roi-calculator/ >> axe-core scan reports no WCAG 2.1 AA violations
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
      - generic [ref=e17]:
        - link "Tools" [ref=e18] [cursor=pointer]:
          - /url: /tools/
        - text: / Calculator
      - generic [ref=e19]:
        - heading "What inconsistency actually costs" [level=1] [ref=e20]
        - paragraph [ref=e21]: "Drift never lands on a single invoice, so it stays invisible: a few hours here, a rebuilt component there, adding up across a team and a year to a real annual figure."
        - list [ref=e22]:
          - listitem [ref=e23]: Five inputs
          - listitem [ref=e25]: Nothing saved
          - listitem [ref=e27]: Every assumption shown
    - generic [ref=e31]:
      - paragraph [ref=e32]: Give it five inputs about your team and the rework you live with, and it shows what a structured system is modelled to reclaim, in hours and dollars, every year.
      - region "What inconsistency costs you." [ref=e34]:
        - generic [ref=e35]:
          - generic [ref=e36]:
            - generic [ref=e37]:
              - text: Your numbers
              - heading "What inconsistency costs you." [level=3] [ref=e38]
              - paragraph [ref=e39]: Five inputs about your team and the drift you live with. The panel on the right updates as you go. No email, nothing saved.
            - generic [ref=e40]:
              - generic [ref=e41]:
                - generic [ref=e42]: People building UI
                - status [ref=e43]: "8"
              - slider "People building UI" [ref=e44] [cursor=pointer]: "8"
              - paragraph [ref=e45]: Designers and front-end engineers who touch UI.
            - generic [ref=e46]:
              - generic [ref=e47]:
                - generic [ref=e48]: Products / surfaces
                - status [ref=e49]: "3"
              - slider "Products / surfaces" [ref=e50] [cursor=pointer]: "3"
              - paragraph [ref=e51]: Distinct apps or surfaces kept in sync.
            - generic [ref=e52]:
              - generic [ref=e53]:
                - generic [ref=e54]: Hours/week lost to UI rework
                - status [ref=e55]: "4.0"
              - slider "Hours/week lost to UI rework" [ref=e56] [cursor=pointer]: "4"
              - paragraph [ref=e57]: "Per person: redoing, reconciling, and chasing drift."
            - generic [ref=e58]:
              - generic [ref=e59]:
                - generic [ref=e60]: Blended hourly cost
                - status [ref=e61]: $95
              - slider "Blended hourly cost" [ref=e62] [cursor=pointer]: "95"
              - paragraph [ref=e63]: Fully-loaded cost per hour, averaged across the team.
            - generic [ref=e64]:
              - generic [ref=e65]: How inconsistent today?
              - radiogroup "How inconsistent today?" [ref=e66]:
                - generic [ref=e67] [cursor=pointer]:
                  - radio "Mostly consistent"
                  - generic [ref=e68]: Mostly consistent
                - generic [ref=e69] [cursor=pointer]:
                  - radio "Noticeably drifting" [checked]
                  - generic [ref=e70]: Noticeably drifting
                - generic [ref=e71] [cursor=pointer]:
                  - radio "Inconsistent"
                  - generic [ref=e72]: Inconsistent
              - paragraph [ref=e73]: Duplicates and one-offs are common
            - generic [ref=e74]:
              - button "Copy shareable link" [ref=e75] [cursor=pointer]:
                - img [ref=e77]
                - generic [ref=e81]: Copy shareable link
              - button "Reset" [ref=e82] [cursor=pointer]:
                - img [ref=e84]
                - text: Reset
          - generic [ref=e88]:
            - generic [ref=e89]:
              - generic [ref=e90]:
                - generic [ref=e91]: your annual UI debt
                - generic [ref=e92]: live
              - paragraph [ref=e94]: Recoverable per year
              - paragraph [ref=e95]: $61,560
              - paragraph [ref=e96]: 648 engineer/designer hours/year, reclaimed by structure.
              - generic [ref=e97]:
                - generic [ref=e98]:
                  - generic [ref=e99]: Today's rework cost
                  - generic [ref=e100]: $139,840
                - generic [ref=e103]:
                  - generic [ref=e104]: With a structured system
                  - generic [ref=e105]: $78,280
              - generic [ref=e108]:
                - text: A structured system is modelled to reclaim
                - strong [ref=e109]: 44%
                - text: of that rework time.
            - paragraph [ref=e110]: Smaller, but it compounds, and it never shows up on one invoice.
    - generic [ref=e113]:
      - article [ref=e114]:
        - paragraph
        - paragraph [ref=e115]: Drift never lands on a single invoice, so it stays invisible. A few hours here, a rebuilt component there, a spacing one-off nobody flags. None of it is big enough to argue about on its own. Add it up across a team and a year, though, and it is a salary. The trick to getting a stakeholder to care is putting that scattered cost in one place, as one figure.
        - paragraph
        - paragraph [ref=e116]: "That is the whole problem with inconsistency: it never arrives as a line item. It hides inside the work, so it reads like the normal cost of building software rather than a tax you chose to keep paying. The way to make it real is to set your own numbers and watch them land on a single total."
        - paragraph [ref=e117]: Nothing in there is a guess pulled from the air. Each number in the results panel traces back to an input you set. The point is not the precision of the total. It is watching the small, ignorable scraps of drift compound into a figure large enough that someone with a budget pays attention.
        - heading "When the number starts to matter" [level=2] [ref=e118]
        - paragraph [ref=e119]: "A total is only useful next to a threshold. The estimate scales with two things that tend to grow together: how many people touch the UI, and how many surfaces they have to keep in sync. That is why the curve bends upward instead of climbing steadily."
        - paragraph [ref=e120]: "The cleanest way to read your own figure is to ignore the dollars for a moment and look at the recovered hours. Divide them by forty. That is roughly how many weeks of one person’s time you would get back in a year, and it is the only number you can honestly compare against what building and maintaining a system would cost you. Here is the same formula run at a few common team shapes:"
        - table [ref=e121]:
          - rowgroup [ref=e122]:
            - row "Two people, one surface, an hour a week each About half a week" [ref=e123]:
              - cell "Two people, one surface, an hour a week each" [ref=e124]
              - cell "About half a week" [ref=e125]
            - row "Six people, two surfaces About nine weeks" [ref=e126]:
              - cell "Six people, two surfaces" [ref=e127]
              - cell "About nine weeks" [ref=e128]
            - row "Twelve people, four surfaces About twenty-five weeks" [ref=e129]:
              - cell "Twelve people, four surfaces" [ref=e130]
              - cell "About twenty-five weeks" [ref=e131]
            - row "Forty people, eight surfaces Roughly three person-years" [ref=e132]:
              - cell "Forty people, eight surfaces" [ref=e133]
              - cell "Roughly three person-years" [ref=e134]
        - paragraph [ref=e135]: At the top of that table, the honest answer is to do nothing. Two people keep a UI consistent by talking to each other, and a couple of thousand dollars of drift a year is cheaper than the overhead of formalising anything. You would spend more building the system than the system gives back.
        - paragraph [ref=e136]: "Somewhere around six to ten people working across more than one surface, talking stops scaling. Nobody can hold every decision in their head anymore, the same button gets built a third time because rebuilding it is faster than finding it, and the recovered figure crosses into the range where a system pays for itself inside a year. Past that it compounds, because every new surface adds reconciliation work on top of an already larger base. That is the real reason enterprise teams end up with design systems and small studios do not: not sophistication, just arithmetic."
        - heading "Defensible beats dramatic" [level=2] [ref=e137]
        - paragraph [ref=e138]: "A number you cannot explain is a number a stakeholder ignores. The moment someone asks “where does that come from” and the answer is a shrug, the whole case evaporates, no matter how big the figure looked. So every assumption behind the estimate is shown: the working weeks, the conservative share of rework a system actually reclaims, the way each extra surface nudges that share up. Nothing is hidden in a black box."
        - paragraph [ref=e139]: The premise underneath all of it (that drift and rework quietly drain real money, and that structure wins a good chunk of it back) is well-trodden ground. You do not have to take my word for it, and you do not need me to invent statistics to make it sound urgent. The pattern is established. What the calculator does is take that established direction and price it against your team instead of someone else’s.
        - heading "Put a real number behind it" [level=2] [ref=e140]
        - paragraph [ref=e141]: "The estimate is the rough shape, not the verdict. It is meant to start the conversation, not end it. A design system audit replaces the estimate with specifics: which patterns are actually drifting, what each one costs you, and the order to fix them in so the cheapest wins come first."
        - paragraph [ref=e142]:
          - text: If you want a faster read before that, the
          - link "design-system scorecard" [ref=e143] [cursor=pointer]:
            - /url: /tools/scorecard/
          - text: covers where your system stands today. Either way, you walk in with a number you can defend rather than a feeling you cannot.
      - generic [ref=e144]:
        - generic [ref=e145]: Share
        - generic [ref=e146]:
          - link "Share on X" [ref=e147] [cursor=pointer]:
            - /url: https://twitter.com/intent/tweet?text=What%20inconsistency%20actually%20costs&url=https%3A%2F%2Fjoshuabriley.com%2Ftools%2Froi-calculator%2F
            - img [ref=e149]
          - link "Share on LinkedIn" [ref=e151] [cursor=pointer]:
            - /url: https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fjoshuabriley.com%2Ftools%2Froi-calculator%2F
            - img [ref=e153]
          - button "Copy link" [ref=e155] [cursor=pointer]:
            - img [ref=e157]
    - generic [ref=e160]:
      - paragraph [ref=e161]: The rest of the set
      - heading "Other things you can run right now." [level=2] [ref=e162]
      - list [ref=e163]:
        - listitem [ref=e164]:
          - link "Self-assessment Grade your design system like a report card Score your system across the five subjects a healthy one is graded on." [ref=e165] [cursor=pointer]:
            - /url: /tools/scorecard/
            - generic [ref=e166]: Self-assessment
            - generic [ref=e167]:
              - text: Grade your design system like a report card
              - generic [ref=e168]: Score your system across the five subjects a healthy one is graded on.
            - img [ref=e171]
        - listitem [ref=e173]:
          - link "Playground What a design token actually does Move one primitive and watch it propagate through every component." [ref=e174] [cursor=pointer]:
            - /url: /tools/token-playground/
            - generic [ref=e175]: Playground
            - generic [ref=e176]:
              - text: What a design token actually does
              - generic [ref=e177]: Move one primitive and watch it propagate through every component.
            - img [ref=e180]
        - listitem [ref=e182]:
          - link "Inspector What an audit actually finds Inspect a real specimen and read the findings the way an audit ranks them." [ref=e183] [cursor=pointer]:
            - /url: /tools/audit-findings/
            - generic [ref=e184]: Inspector
            - generic [ref=e185]:
              - text: What an audit actually finds
              - generic [ref=e186]: Inspect a real specimen and read the findings the way an audit ranks them.
            - img [ref=e189]
    - generic [ref=e192]:
      - heading "Built the way I build production work." [level=2] [ref=e193]
      - paragraph [ref=e194]: Accessible controls, live state, no framework underneath, and the same tokens as the rest of this site. It should hold up to being inspected as production work. The case studies show the same standard at full product scale.
      - generic [ref=e195]:
        - link "Get in touch" [ref=e196] [cursor=pointer]:
          - /url: /contact/
          - text: Get in touch
          - img [ref=e198]
        - link "See the work" [ref=e200] [cursor=pointer]:
          - /url: /projects/
  - contentinfo [ref=e201]:
    - generic [ref=e202]:
      - generic [ref=e203]:
        - generic [ref=e204]:
          - img "Joshua Briley" [ref=e205]:
            - generic [ref=e206]: JB
            - generic [ref=e207]:
              - text: Joshua Briley
              - generic [ref=e208]: .
          - paragraph [ref=e209]: "Design- and front-end-focused product design engineer. The interface is where I bring the most value: design-grade, accessible UI, finished to the last detail."
          - paragraph [ref=e210]: Open to product design engineering roles
        - generic [ref=e212]:
          - navigation "Site" [ref=e213]:
            - heading "Site" [level=2] [ref=e214]
            - list [ref=e215]:
              - listitem [ref=e216]:
                - link "About" [ref=e217] [cursor=pointer]:
                  - /url: /about/
              - listitem [ref=e218]:
                - link "Projects" [ref=e219] [cursor=pointer]:
                  - /url: /projects/
              - listitem [ref=e220]:
                - link "Résumé" [ref=e221] [cursor=pointer]:
                  - /url: /resume/
              - listitem [ref=e222]:
                - link "Contact" [ref=e223] [cursor=pointer]:
                  - /url: /contact/
          - navigation "More" [ref=e224]:
            - heading "More" [level=2] [ref=e225]
            - list [ref=e226]:
              - listitem [ref=e227]:
                - link "Personal Projects" [ref=e228] [cursor=pointer]:
                  - /url: /personal-projects/
              - listitem [ref=e229]:
                - link "Testimonials" [ref=e230] [cursor=pointer]:
                  - /url: /testimonials/
              - listitem [ref=e231]:
                - link "Blog" [ref=e232] [cursor=pointer]:
                  - /url: /blog/
              - listitem [ref=e233]:
                - link "Tools" [ref=e234] [cursor=pointer]:
                  - /url: /tools/
              - listitem [ref=e235]:
                - link "Style Guide" [ref=e236] [cursor=pointer]:
                  - /url: /style-guide/
      - generic [ref=e237]:
        - generic [ref=e238]:
          - generic [ref=e239]: © 2026 Joshua Briley
          - link "Privacy" [ref=e240] [cursor=pointer]:
            - /url: /privacy/
          - link "Terms" [ref=e241] [cursor=pointer]:
            - /url: /terms/
        - generic [ref=e242]:
          - link "LinkedIn" [ref=e243] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/joshuabriley/
            - text: LinkedIn
            - img [ref=e245]
          - link "GitHub" [ref=e247] [cursor=pointer]:
            - /url: https://github.com/somecallmejosh
            - text: GitHub
            - img [ref=e249]
      - paragraph [ref=e251]: Designed by me, Joshua Briley, and built with my favorite static site generator, Astro.
  - generic [ref=e254]:
    - button "Menu" [ref=e255]:
      - img [ref=e257]
      - generic: Menu
    - button "Inspect" [ref=e261]:
      - img [ref=e263]
      - generic: Inspect
    - button "Audit" [ref=e265]:
      - img [ref=e267]
      - generic: Audit
    - button "Settings" [ref=e270]:
      - img [ref=e272]
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