# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: keyboard.spec.ts >> page /tools/scorecard/ >> axe-core scan reports no WCAG 2.1 AA violations
- Location: tests/e2e/keyboard.spec.ts:21:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 128

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
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.79,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#9a9aa1",
+               "fontSize": "45.0pt (60px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.79 (foreground color: #9a9aa1, background color: #ffffff, font size: 45.0pt (60px), font weight: normal). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"rounded-lg border border-line p-6 md:p-7 mb-12 bg-white\" data-scorecard-totals=\"\" data-astro-cid-wfxqyqrw=\"\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/islands/ScorecardEngine.astro\" data-astro-source-loc=\"30:2\">",
+                 "target": Array [
+                   ".md\\:p-7",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.79 (foreground color: #9a9aa1, background color: #ffffff, font size: 45.0pt (60px), font weight: normal). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-ink-faint\" data-astro-cid-wfxqyqrw=\"\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/islands/ScorecardEngine.astro\" data-astro-source-loc=\"35:69\">/64</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "span[data-astro-source-loc=\"35:69\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.79,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a9aa1",
+               "fontSize": "15.0pt (20px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.79 (foreground color: #9a9aa1, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"rounded-lg border border-line p-6 md:p-7 mb-12 bg-white\" data-scorecard-totals=\"\" data-astro-cid-wfxqyqrw=\"\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/islands/ScorecardEngine.astro\" data-astro-source-loc=\"30:2\">",
+                 "target": Array [
+                   ".md\\:p-7",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.79 (foreground color: #9a9aa1, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-ink-faint\" data-astro-cid-wfxqyqrw=\"\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/islands/ScorecardEngine.astro\" data-astro-source-loc=\"41:66\">/32</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "span[data-astro-source-loc=\"41:66\"]",
+         ],
+       },
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
        - generic [ref=e22]:
          - link "Tools" [ref=e23] [cursor=pointer]:
            - /url: /tools/
          - text: / Self-assessment
        - generic [ref=e24]: Free to use
      - generic [ref=e25]:
        - heading "Grade your design system like a report card" [level=1] [ref=e26]
        - paragraph [ref=e27]: Ten minutes, five subjects, thirty-two questions. An honest snapshot of where your design system shines and where it is quietly burning your team out.
        - list [ref=e28]:
          - listitem [ref=e29]: Ten minutes
          - listitem [ref=e31]: No signup
          - listitem [ref=e33]: Results live in the URL
    - generic [ref=e37]:
      - paragraph [ref=e38]: "For each prompt, pick No, Partial, or Yes. Nobody is grading you, so answer honestly: a flattering score helps no one. Subject grades appear live and the running total tracks as you go. Finish every row and a full report appears with where you stand and where to start."
      - generic [ref=e39]:
        - generic [ref=e41]:
          - generic [ref=e42]:
            - paragraph [ref=e43]: Total score so far
            - paragraph [ref=e44]: 0/64
          - generic [ref=e45]:
            - paragraph [ref=e46]: Questions answered
            - paragraph [ref=e47]: 0/32
        - generic [ref=e49]:
          - article [ref=e50]:
            - generic [ref=e51]:
              - generic [ref=e52]:
                - generic [ref=e53]:
                  - paragraph [ref=e54]: Subject 01
                  - heading "Component consistency" [level=3] [ref=e55]
                  - paragraph [ref=e56]: Are the pieces of your UI actually the same pieces, or are there six buttons wearing the same trench coat?
                - generic [ref=e57]: "-"
              - generic [ref=e58]:
                - generic [ref=e59]:
                  - paragraph [ref=e60]:
                    - generic [ref=e61]: "01."
                    - text: Similar UI patterns (buttons, inputs, modals) are built as shared components, not duplicated across the codebase.
                  - radiogroup "Question 1" [ref=e62]:
                    - generic [ref=e63] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e64] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e65] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e66]:
                  - paragraph [ref=e67]:
                    - generic [ref=e68]: "02."
                    - text: Component APIs (props, slots, events) follow a consistent naming convention across the library.
                  - radiogroup "Question 2" [ref=e69]:
                    - generic [ref=e70] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e71] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e72] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e73]:
                  - paragraph [ref=e74]:
                    - generic [ref=e75]: "03."
                    - text: Visual decisions (spacing, color, border radius) reference tokens, not hardcoded values inside components.
                  - radiogroup "Question 3" [ref=e76]:
                    - generic [ref=e77] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e78] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e79] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e80]:
                  - paragraph [ref=e81]:
                    - generic [ref=e82]: "04."
                    - text: Components render consistently across the browsers and viewports your product supports.
                  - radiogroup "Question 4" [ref=e83]:
                    - generic [ref=e84] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e85] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e86] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e87]:
                  - paragraph [ref=e88]:
                    - generic [ref=e89]: "05."
                    - text: One-off components that duplicate an existing shared component don’t exist in the codebase.
                  - radiogroup "Question 5" [ref=e90]:
                    - generic [ref=e91] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e92] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e93] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e94]:
                  - paragraph [ref=e95]:
                    - generic [ref=e96]: "06."
                    - text: Deprecated components have a documented migration path and are not mixed with current components in production.
                  - radiogroup "Question 6" [ref=e97]:
                    - generic [ref=e98] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e99] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e100] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
          - article [ref=e101]:
            - generic [ref=e102]:
              - generic [ref=e103]:
                - generic [ref=e104]:
                  - paragraph [ref=e105]: Subject 02
                  - heading "Accessibility" [level=3] [ref=e106]
                  - paragraph [ref=e107]: Not a feature, not a checklist. The subject that tells you whether your system is architecture or wallpaper.
                - generic [ref=e108]: "-"
              - generic [ref=e109]:
                - generic [ref=e110]:
                  - paragraph [ref=e111]:
                    - generic [ref=e112]: "01."
                    - text: Every interactive component (buttons, links, form controls) is fully operable with a keyboard alone.
                  - radiogroup "Question 1" [ref=e113]:
                    - generic [ref=e114] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e115] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e116] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e117]:
                  - paragraph [ref=e118]:
                    - generic [ref=e119]: "02."
                    - text: All form inputs have visible, programmatically associated labels.
                  - radiogroup "Question 2" [ref=e120]:
                    - generic [ref=e121] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e122] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e123] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e124]:
                  - paragraph [ref=e125]:
                    - generic [ref=e126]: "03."
                    - text: Focusable elements have a clearly visible focus indicator that meets WCAG 2.1 AA contrast requirements.
                  - radiogroup "Question 3" [ref=e127]:
                    - generic [ref=e128] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e129] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e130] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e131]:
                  - paragraph [ref=e132]:
                    - generic [ref=e133]: "04."
                    - text: Color is never used as the only means of conveying information (errors, statuses, required fields).
                  - radiogroup "Question 4" [ref=e134]:
                    - generic [ref=e135] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e136] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e137] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e138]:
                  - paragraph [ref=e139]:
                    - generic [ref=e140]: "05."
                    - text: Components that control visibility (modals, drawers, tooltips) trap focus correctly and return focus on close.
                  - radiogroup "Question 5" [ref=e141]:
                    - generic [ref=e142] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e143] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e144] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e145]:
                  - paragraph [ref=e146]:
                    - generic [ref=e147]: "06."
                    - text: Informative images and icons have descriptive alt text, and purely decorative elements are hidden from assistive technology.
                  - radiogroup "Question 6" [ref=e148]:
                    - generic [ref=e149] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e150] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e151] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e152]:
                  - paragraph [ref=e153]:
                    - generic [ref=e154]: "07."
                    - text: Text and interactive elements meet WCAG 2.1 AA contrast ratios (4.5:1 for text, 3:1 for UI components).
                  - radiogroup "Question 7" [ref=e155]:
                    - generic [ref=e156] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e157] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e158] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e159]:
                  - paragraph [ref=e160]:
                    - generic [ref=e161]: "08."
                    - text: Dynamic content updates (alerts, notifications, loading states) are announced to screen readers.
                  - radiogroup "Question 8" [ref=e162]:
                    - generic [ref=e163] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e164] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e165] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
          - article [ref=e166]:
            - generic [ref=e167]:
              - generic [ref=e168]:
                - generic [ref=e169]:
                  - paragraph [ref=e170]: Subject 03
                  - heading "Token architecture" [level=3] [ref=e171]
                  - paragraph [ref=e172]: The quiet plumbing underneath everything. Good tokens make redesigns a rename, not a rewrite.
                - generic [ref=e173]: "-"
              - generic [ref=e174]:
                - generic [ref=e175]:
                  - paragraph [ref=e176]:
                    - generic [ref=e177]: "01."
                    - text: Tokens are defined in a single source of truth (design tool, JSON file, or equivalent) and synced to code.
                  - radiogroup "Question 1" [ref=e178]:
                    - generic [ref=e179] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e180] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e181] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e182]:
                  - paragraph [ref=e183]:
                    - generic [ref=e184]: "02."
                    - text: "Token names follow a consistent, predictable pattern (for example: category/property/variant) with no abbreviations or ambiguity."
                  - radiogroup "Question 2" [ref=e185]:
                    - generic [ref=e186] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e187] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e188] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e189]:
                  - paragraph [ref=e190]:
                    - generic [ref=e191]: "03."
                    - text: "Semantic tokens (for example: color.text.primary) reference primitive tokens (for example: color.gray.900), not raw values."
                  - radiogroup "Question 3" [ref=e192]:
                    - generic [ref=e193] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e194] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e195] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e196]:
                  - paragraph [ref=e197]:
                    - generic [ref=e198]: "04."
                    - text: Token names describe intent, not value. For example, color.brand-primary rather than color.blue.
                  - radiogroup "Question 4" [ref=e199]:
                    - generic [ref=e200] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e201] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e202] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e203]:
                  - paragraph [ref=e204]:
                    - generic [ref=e205]: "05."
                    - text: Tokens cover every design decision that varies across themes, modes, or brands.
                  - radiogroup "Question 5" [ref=e206]:
                    - generic [ref=e207] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e208] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e209] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e210]:
                  - paragraph [ref=e211]:
                    - generic [ref=e212]: "06."
                    - text: Every component references tokens rather than redefining their values.
                  - radiogroup "Question 6" [ref=e213]:
                    - generic [ref=e214] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e215] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e216] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
          - article [ref=e217]:
            - generic [ref=e218]:
              - generic [ref=e219]:
                - generic [ref=e220]:
                  - paragraph [ref=e221]: Subject 04
                  - heading "Documentation" [level=3] [ref=e222]
                  - paragraph [ref=e223]: The delivery, not the afterthought. If it isn’t documented, it doesn’t really exist for the next engineer.
                - generic [ref=e224]: "-"
              - generic [ref=e225]:
                - generic [ref=e226]:
                  - paragraph [ref=e227]:
                    - generic [ref=e228]: "01."
                    - text: Every component has a working example showing its most common use case.
                  - radiogroup "Question 1" [ref=e229]:
                    - generic [ref=e230] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e231] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e232] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e233]:
                  - paragraph [ref=e234]:
                    - generic [ref=e235]: "02."
                    - text: Props, slots, and events are documented with types and plain-language descriptions.
                  - radiogroup "Question 2" [ref=e236]:
                    - generic [ref=e237] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e238] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e239] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e240]:
                  - paragraph [ref=e241]:
                    - generic [ref=e242]: "03."
                    - text: Components with common misuse patterns or non-obvious behavior have explicit do/don’t guidance.
                  - radiogroup "Question 3" [ref=e243]:
                    - generic [ref=e244] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e245] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e246] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e247]:
                  - paragraph [ref=e248]:
                    - generic [ref=e249]: "04."
                    - text: Documentation is updated as part of the development workflow, not added retroactively.
                  - radiogroup "Question 4" [ref=e250]:
                    - generic [ref=e251] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e252] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e253] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e254]:
                  - paragraph [ref=e255]:
                    - generic [ref=e256]: "05."
                    - text: A getting-started guide lets a new developer install and use the library without asking anyone for help.
                  - radiogroup "Question 5" [ref=e257]:
                    - generic [ref=e258] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e259] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e260] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e261]:
                  - paragraph [ref=e262]:
                    - generic [ref=e263]: "06."
                    - text: Keyboard interactions, ARIA attributes, and screen reader behavior are documented per component.
                  - radiogroup "Question 6" [ref=e264]:
                    - generic [ref=e265] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e266] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e267] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
          - article [ref=e268]:
            - generic [ref=e269]:
              - generic [ref=e270]:
                - generic [ref=e271]:
                  - paragraph [ref=e272]: Subject 05
                  - heading "Handoff process" [level=3] [ref=e273]
                  - paragraph [ref=e274]: The seam between design and code. When it’s working, nobody talks about it. When it isn’t, nobody talks about anything else.
                - generic [ref=e275]: "-"
              - generic [ref=e276]:
                - generic [ref=e277]:
                  - paragraph [ref=e278]:
                    - generic [ref=e279]: "01."
                    - text: Design files use components from the shared library, not custom one-offs that don’t exist in code.
                  - radiogroup "Question 1" [ref=e280]:
                    - generic [ref=e281] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e282] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e283] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e284]:
                  - paragraph [ref=e285]:
                    - generic [ref=e286]: "02."
                    - text: Designers and developers use the same token names to describe design decisions.
                  - radiogroup "Question 2" [ref=e287]:
                    - generic [ref=e288] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e289] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e290] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e291]:
                  - paragraph [ref=e292]:
                    - generic [ref=e293]: "03."
                    - text: New components follow a documented process from design to code.
                  - radiogroup "Question 3" [ref=e294]:
                    - generic [ref=e295] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e296] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e297] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e298]:
                  - paragraph [ref=e299]:
                    - generic [ref=e300]: "04."
                    - text: Developers don’t rebuild components that already exist in the library.
                  - radiogroup "Question 4" [ref=e301]:
                    - generic [ref=e302] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e303] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e304] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e305]:
                  - paragraph [ref=e306]:
                    - generic [ref=e307]: "05."
                    - text: A clear owner (team or individual) is responsible for maintaining and evolving the design system.
                  - radiogroup "Question 5" [ref=e308]:
                    - generic [ref=e309] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e310] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e311] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e312]:
                  - paragraph [ref=e313]:
                    - generic [ref=e314]: "06."
                    - text: The design system has a versioning and changelog process so consumers know what changed between releases.
                  - radiogroup "Question 6" [ref=e315]:
                    - generic [ref=e316] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e317] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e318] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
        - generic [ref=e319]:
          - button "Reset the card" [ref=e320] [cursor=pointer]:
            - img [ref=e322]
            - text: Reset the card
          - paragraph [ref=e326]: Your final report is below
        - generic [ref=e329]:
          - paragraph [ref=e330]: Teacher's report
          - heading "Keep going. Answer every question to see your report." [level=3] [ref=e331]
          - generic [ref=e332]:
            - generic [ref=e333]:
              - paragraph [ref=e334]: Overall grade
              - paragraph [ref=e335]: "-"
            - generic [ref=e336]:
              - paragraph [ref=e337]: Final score
              - paragraph [ref=e338]: 0/64
          - paragraph [ref=e339]: You're 0 of 32 questions in. A personalized writeup appears here once you've scored every row.
          - generic [ref=e340]:
            - link "See your detailed results" [ref=e341] [cursor=pointer]:
              - /url: /tools/scorecard/results/
              - img [ref=e343]
              - text: See your detailed results
            - link "Talk through your results" [ref=e347] [cursor=pointer]:
              - /url: /contact/
              - img [ref=e349]
              - text: Talk through your results
    - generic [ref=e355]:
      - article [ref=e356]:
        - paragraph
        - paragraph [ref=e357]: "Most teams know their design system has problems. What they usually lack is a way to say where, and how bad, without turning it into a six-week audit first. This is that shortcut: a structured self-assessment across the five subjects a healthy system is actually graded on, scored as you go."
        - paragraph
        - paragraph [ref=e358]: "It covers the same five dimensions I use when I review a real system: component consistency, accessibility, token architecture, documentation, and the handoff process. Answer thirty-two short prompts and a written report tells you what to tackle first, and what to leave alone."
        - heading "What the score is really measuring" [level=2] [ref=e359]
        - paragraph [ref=e360]: The five subjects are not arbitrary. Component consistency is what users feel and what reviewers argue about. Accessibility is the floor the whole thing stands on. Token architecture decides whether a change lands once or thirty times. Documentation determines whether anyone but you can use the system. And the handoff process is what keeps all of the above from quietly rotting the month after launch.
        - paragraph [ref=e361]: A low grade in one subject is not a crisis. A low grade you did not know about is. The point of a snapshot is to turn a vague unease into a specific, rankable list you can bring to a planning conversation.
        - heading "This scorecard is also a work sample" [level=2] [ref=e362]
        - paragraph [ref=e363]:
          - text: "It is built the way I build production work: accessible radio groups, live scoring, no frameworks under the hood, the same tokens as the rest of this site. Tab through it; the keyboard path is real. If the snapshot surfaces something worth fixing properly, a full"
          - link "design system audit" [ref=e364] [cursor=pointer]:
            - /url: /tools/audit-findings/
          - text: replaces the self-assessment with specifics, ranked by severity and paired with the order to fix them in.
      - generic [ref=e365]:
        - generic [ref=e366]: Share
        - generic [ref=e367]:
          - link "Share on X" [ref=e368] [cursor=pointer]:
            - /url: https://twitter.com/intent/tweet?text=Grade%20your%20design%20system%20like%20a%20report%20card&url=https%3A%2F%2Fjoshuabriley.com%2Ftools%2Fscorecard%2F
            - img [ref=e370]
          - link "Share on LinkedIn" [ref=e372] [cursor=pointer]:
            - /url: https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fjoshuabriley.com%2Ftools%2Fscorecard%2F
            - img [ref=e374]
          - button "Copy link" [ref=e376] [cursor=pointer]:
            - img [ref=e378]
    - generic [ref=e381]:
      - paragraph [ref=e382]: The rest of the set
      - heading "Other things you can run right now." [level=2] [ref=e383]
      - list [ref=e384]:
        - listitem [ref=e385]:
          - link "Calculator What inconsistency actually costs Price the drift your team already lives with, in hours and dollars." [ref=e386] [cursor=pointer]:
            - /url: /tools/roi-calculator/
            - generic [ref=e387]: Calculator
            - generic [ref=e388]:
              - text: What inconsistency actually costs
              - generic [ref=e389]: Price the drift your team already lives with, in hours and dollars.
            - img [ref=e392]
        - listitem [ref=e394]:
          - link "Playground What a design token actually does Move one primitive and watch it propagate through every component." [ref=e395] [cursor=pointer]:
            - /url: /tools/token-playground/
            - generic [ref=e396]: Playground
            - generic [ref=e397]:
              - text: What a design token actually does
              - generic [ref=e398]: Move one primitive and watch it propagate through every component.
            - img [ref=e401]
        - listitem [ref=e403]:
          - link "Inspector What an audit actually finds Inspect a real specimen and read the findings the way an audit ranks them." [ref=e404] [cursor=pointer]:
            - /url: /tools/audit-findings/
            - generic [ref=e405]: Inspector
            - generic [ref=e406]:
              - text: What an audit actually finds
              - generic [ref=e407]: Inspect a real specimen and read the findings the way an audit ranks them.
            - img [ref=e410]
    - generic [ref=e413]:
      - heading "Built the way I build production work." [level=2] [ref=e414]
      - paragraph [ref=e415]: Accessible controls, live state, no framework underneath, and the same tokens as the rest of this site. It should hold up to being inspected as production work. The case studies show the same standard at full product scale.
      - generic [ref=e416]:
        - link "Get in touch" [ref=e417] [cursor=pointer]:
          - /url: /contact/
          - text: Get in touch
          - img [ref=e419]
        - link "See the work" [ref=e421] [cursor=pointer]:
          - /url: /projects/
  - contentinfo [ref=e422]:
    - generic [ref=e423]:
      - generic [ref=e424]:
        - generic [ref=e425]:
          - img "Joshua Briley" [ref=e426]:
            - generic [ref=e427]: JB
            - generic [ref=e428]:
              - text: Joshua Briley
              - generic [ref=e429]: .
          - paragraph [ref=e430]: "Design- and front-end-focused product design engineer. The interface is where I bring the most value: design-grade, accessible UI, finished to the last detail."
          - paragraph [ref=e431]: Open to product design engineering roles
        - generic [ref=e433]:
          - navigation "Site" [ref=e434]:
            - heading "Site" [level=2] [ref=e435]
            - list [ref=e436]:
              - listitem [ref=e437]:
                - link "About" [ref=e438] [cursor=pointer]:
                  - /url: /about/
              - listitem [ref=e439]:
                - link "Projects" [ref=e440] [cursor=pointer]:
                  - /url: /projects/
              - listitem [ref=e441]:
                - link "Résumé" [ref=e442] [cursor=pointer]:
                  - /url: /resume/
              - listitem [ref=e443]:
                - link "Contact" [ref=e444] [cursor=pointer]:
                  - /url: /contact/
          - navigation "More" [ref=e445]:
            - heading "More" [level=2] [ref=e446]
            - list [ref=e447]:
              - listitem [ref=e448]:
                - link "Personal Projects" [ref=e449] [cursor=pointer]:
                  - /url: /personal-projects/
              - listitem [ref=e450]:
                - link "Testimonials" [ref=e451] [cursor=pointer]:
                  - /url: /testimonials/
              - listitem [ref=e452]:
                - link "Blog" [ref=e453] [cursor=pointer]:
                  - /url: /blog/
              - listitem [ref=e454]:
                - link "Tools" [ref=e455] [cursor=pointer]:
                  - /url: /tools/
              - listitem [ref=e456]:
                - link "Style Guide" [ref=e457] [cursor=pointer]:
                  - /url: /style-guide/
      - generic [ref=e458]:
        - generic [ref=e459]:
          - generic [ref=e460]: © 2026 Joshua Briley
          - link "Privacy" [ref=e461] [cursor=pointer]:
            - /url: /privacy/
          - link "Terms" [ref=e462] [cursor=pointer]:
            - /url: /terms/
        - generic [ref=e463]:
          - link "LinkedIn" [ref=e464] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/joshuabriley/
            - text: LinkedIn
            - img [ref=e466]
          - link "GitHub" [ref=e468] [cursor=pointer]:
            - /url: https://github.com/somecallmejosh
            - text: GitHub
            - img [ref=e470]
      - paragraph [ref=e472]: Designed by me, Joshua Briley, and built with my favorite static site generator, Astro.
  - generic [ref=e473]:
    - generic [ref=e474]: "0"
    - generic [ref=e475]:
      - paragraph [ref=e476]: So far
      - paragraph [ref=e477]: 0 of 32 answered
  - generic [ref=e480]:
    - button "Menu" [ref=e481]:
      - img [ref=e483]
      - generic: Menu
    - button "Inspect" [ref=e487]:
      - img [ref=e489]
      - generic: Inspect
    - button "Audit" [ref=e491]:
      - img [ref=e493]
      - generic: Audit
    - button "Settings" [ref=e496]:
      - img [ref=e498]
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