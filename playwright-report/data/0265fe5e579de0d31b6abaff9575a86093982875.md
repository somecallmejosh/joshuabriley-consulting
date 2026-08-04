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
+               "fontSize": "36.0pt (48px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.79 (foreground color: #9a9aa1, background color: #ffffff, font size: 36.0pt (48px), font weight: normal). Expected contrast ratio of 3:1",
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
+   Element has insufficient color contrast of 2.79 (foreground color: #9a9aa1, background color: #ffffff, font size: 36.0pt (48px), font weight: normal). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-ink-faint\" data-astro-cid-wfxqyqrw=\"\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/islands/ScorecardEngine.astro\" data-astro-source-loc=\"35:69\">/64</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-5xl > .text-ink-faint",
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
+           ".tabular-nums > .text-ink-faint",
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
      - button "Toggle navigation menu" [ref=e9] [cursor=pointer]:
        - img [ref=e11]
  - main [ref=e13]:
    - generic [ref=e15]:
      - generic [ref=e17]:
        - link "Tools" [ref=e18] [cursor=pointer]:
          - /url: /tools/
        - text: / Self-assessment
      - generic [ref=e19]:
        - heading "Grade your design system like a report card" [level=1] [ref=e20]
        - paragraph [ref=e21]: Ten minutes, five subjects, thirty-two questions. An honest snapshot of where your design system shines and where it is quietly burning your team out.
        - list [ref=e22]:
          - listitem [ref=e23]: Ten minutes
          - listitem [ref=e25]: No signup
          - listitem [ref=e27]: Results live in the URL
    - generic [ref=e31]:
      - paragraph [ref=e32]: "For each prompt, pick No, Partial, or Yes. Nobody is grading you, so answer honestly: a flattering score helps no one. Subject grades appear live and the running total tracks as you go. Finish every row and a full report appears with where you stand and where to start."
      - generic [ref=e33]:
        - generic [ref=e35]:
          - generic [ref=e36]:
            - paragraph [ref=e37]: Total score so far
            - paragraph [ref=e38]: 0/64
          - generic [ref=e39]:
            - paragraph [ref=e40]: Questions answered
            - paragraph [ref=e41]: 0/32
        - generic [ref=e43]:
          - article [ref=e44]:
            - generic [ref=e45]:
              - generic [ref=e46]:
                - generic [ref=e47]:
                  - paragraph [ref=e48]: Subject 01
                  - heading "Component consistency" [level=3] [ref=e49]
                  - paragraph [ref=e50]: Are the pieces of your UI actually the same pieces, or are there six buttons wearing the same trench coat?
                - generic [ref=e51]: "-"
              - generic [ref=e52]:
                - generic [ref=e53]:
                  - paragraph [ref=e54]:
                    - generic [ref=e55]: "01."
                    - text: Similar UI patterns (buttons, inputs, modals) are built as shared components, not duplicated across the codebase.
                  - radiogroup "Question 1" [ref=e56]:
                    - generic [ref=e57] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e58] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e59] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e60]:
                  - paragraph [ref=e61]:
                    - generic [ref=e62]: "02."
                    - text: Component APIs (props, slots, events) follow a consistent naming convention across the library.
                  - radiogroup "Question 2" [ref=e63]:
                    - generic [ref=e64] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e65] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e66] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e67]:
                  - paragraph [ref=e68]:
                    - generic [ref=e69]: "03."
                    - text: Visual decisions (spacing, color, border radius) reference tokens, not hardcoded values inside components.
                  - radiogroup "Question 3" [ref=e70]:
                    - generic [ref=e71] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e72] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e73] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e74]:
                  - paragraph [ref=e75]:
                    - generic [ref=e76]: "04."
                    - text: Components render consistently across the browsers and viewports your product supports.
                  - radiogroup "Question 4" [ref=e77]:
                    - generic [ref=e78] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e79] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e80] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e81]:
                  - paragraph [ref=e82]:
                    - generic [ref=e83]: "05."
                    - text: One-off components that duplicate an existing shared component don’t exist in the codebase.
                  - radiogroup "Question 5" [ref=e84]:
                    - generic [ref=e85] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e86] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e87] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e88]:
                  - paragraph [ref=e89]:
                    - generic [ref=e90]: "06."
                    - text: Deprecated components have a documented migration path and are not mixed with current components in production.
                  - radiogroup "Question 6" [ref=e91]:
                    - generic [ref=e92] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e93] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e94] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
          - article [ref=e95]:
            - generic [ref=e96]:
              - generic [ref=e97]:
                - generic [ref=e98]:
                  - paragraph [ref=e99]: Subject 02
                  - heading "Accessibility" [level=3] [ref=e100]
                  - paragraph [ref=e101]: Not a feature, not a checklist. The subject that tells you whether your system is architecture or wallpaper.
                - generic [ref=e102]: "-"
              - generic [ref=e103]:
                - generic [ref=e104]:
                  - paragraph [ref=e105]:
                    - generic [ref=e106]: "01."
                    - text: Every interactive component (buttons, links, form controls) is fully operable with a keyboard alone.
                  - radiogroup "Question 1" [ref=e107]:
                    - generic [ref=e108] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e109] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e110] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e111]:
                  - paragraph [ref=e112]:
                    - generic [ref=e113]: "02."
                    - text: All form inputs have visible, programmatically associated labels.
                  - radiogroup "Question 2" [ref=e114]:
                    - generic [ref=e115] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e116] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e117] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e118]:
                  - paragraph [ref=e119]:
                    - generic [ref=e120]: "03."
                    - text: Focusable elements have a clearly visible focus indicator that meets WCAG 2.1 AA contrast requirements.
                  - radiogroup "Question 3" [ref=e121]:
                    - generic [ref=e122] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e123] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e124] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e125]:
                  - paragraph [ref=e126]:
                    - generic [ref=e127]: "04."
                    - text: Color is never used as the only means of conveying information (errors, statuses, required fields).
                  - radiogroup "Question 4" [ref=e128]:
                    - generic [ref=e129] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e130] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e131] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e132]:
                  - paragraph [ref=e133]:
                    - generic [ref=e134]: "05."
                    - text: Components that control visibility (modals, drawers, tooltips) trap focus correctly and return focus on close.
                  - radiogroup "Question 5" [ref=e135]:
                    - generic [ref=e136] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e137] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e138] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e139]:
                  - paragraph [ref=e140]:
                    - generic [ref=e141]: "06."
                    - text: Informative images and icons have descriptive alt text, and purely decorative elements are hidden from assistive technology.
                  - radiogroup "Question 6" [ref=e142]:
                    - generic [ref=e143] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e144] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e145] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e146]:
                  - paragraph [ref=e147]:
                    - generic [ref=e148]: "07."
                    - text: Text and interactive elements meet WCAG 2.1 AA contrast ratios (4.5:1 for text, 3:1 for UI components).
                  - radiogroup "Question 7" [ref=e149]:
                    - generic [ref=e150] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e151] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e152] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e153]:
                  - paragraph [ref=e154]:
                    - generic [ref=e155]: "08."
                    - text: Dynamic content updates (alerts, notifications, loading states) are announced to screen readers.
                  - radiogroup "Question 8" [ref=e156]:
                    - generic [ref=e157] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e158] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e159] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
          - article [ref=e160]:
            - generic [ref=e161]:
              - generic [ref=e162]:
                - generic [ref=e163]:
                  - paragraph [ref=e164]: Subject 03
                  - heading "Token architecture" [level=3] [ref=e165]
                  - paragraph [ref=e166]: The quiet plumbing underneath everything. Good tokens make redesigns a rename, not a rewrite.
                - generic [ref=e167]: "-"
              - generic [ref=e168]:
                - generic [ref=e169]:
                  - paragraph [ref=e170]:
                    - generic [ref=e171]: "01."
                    - text: Tokens are defined in a single source of truth (design tool, JSON file, or equivalent) and synced to code.
                  - radiogroup "Question 1" [ref=e172]:
                    - generic [ref=e173] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e174] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e175] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e176]:
                  - paragraph [ref=e177]:
                    - generic [ref=e178]: "02."
                    - text: "Token names follow a consistent, predictable pattern (for example: category/property/variant) with no abbreviations or ambiguity."
                  - radiogroup "Question 2" [ref=e179]:
                    - generic [ref=e180] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e181] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e182] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e183]:
                  - paragraph [ref=e184]:
                    - generic [ref=e185]: "03."
                    - text: "Semantic tokens (for example: color.text.primary) reference primitive tokens (for example: color.gray.900), not raw values."
                  - radiogroup "Question 3" [ref=e186]:
                    - generic [ref=e187] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e188] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e189] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e190]:
                  - paragraph [ref=e191]:
                    - generic [ref=e192]: "04."
                    - text: Token names describe intent, not value. For example, color.brand-primary rather than color.blue.
                  - radiogroup "Question 4" [ref=e193]:
                    - generic [ref=e194] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e195] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e196] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e197]:
                  - paragraph [ref=e198]:
                    - generic [ref=e199]: "05."
                    - text: Tokens cover every design decision that varies across themes, modes, or brands.
                  - radiogroup "Question 5" [ref=e200]:
                    - generic [ref=e201] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e202] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e203] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e204]:
                  - paragraph [ref=e205]:
                    - generic [ref=e206]: "06."
                    - text: Every component references tokens rather than redefining their values.
                  - radiogroup "Question 6" [ref=e207]:
                    - generic [ref=e208] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e209] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e210] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
          - article [ref=e211]:
            - generic [ref=e212]:
              - generic [ref=e213]:
                - generic [ref=e214]:
                  - paragraph [ref=e215]: Subject 04
                  - heading "Documentation" [level=3] [ref=e216]
                  - paragraph [ref=e217]: The delivery, not the afterthought. If it isn’t documented, it doesn’t really exist for the next engineer.
                - generic [ref=e218]: "-"
              - generic [ref=e219]:
                - generic [ref=e220]:
                  - paragraph [ref=e221]:
                    - generic [ref=e222]: "01."
                    - text: Every component has a working example showing its most common use case.
                  - radiogroup "Question 1" [ref=e223]:
                    - generic [ref=e224] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e225] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e226] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e227]:
                  - paragraph [ref=e228]:
                    - generic [ref=e229]: "02."
                    - text: Props, slots, and events are documented with types and plain-language descriptions.
                  - radiogroup "Question 2" [ref=e230]:
                    - generic [ref=e231] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e232] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e233] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e234]:
                  - paragraph [ref=e235]:
                    - generic [ref=e236]: "03."
                    - text: Components with common misuse patterns or non-obvious behavior have explicit do/don’t guidance.
                  - radiogroup "Question 3" [ref=e237]:
                    - generic [ref=e238] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e239] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e240] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e241]:
                  - paragraph [ref=e242]:
                    - generic [ref=e243]: "04."
                    - text: Documentation is updated as part of the development workflow, not added retroactively.
                  - radiogroup "Question 4" [ref=e244]:
                    - generic [ref=e245] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e246] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e247] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e248]:
                  - paragraph [ref=e249]:
                    - generic [ref=e250]: "05."
                    - text: A getting-started guide lets a new developer install and use the library without asking anyone for help.
                  - radiogroup "Question 5" [ref=e251]:
                    - generic [ref=e252] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e253] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e254] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e255]:
                  - paragraph [ref=e256]:
                    - generic [ref=e257]: "06."
                    - text: Keyboard interactions, ARIA attributes, and screen reader behavior are documented per component.
                  - radiogroup "Question 6" [ref=e258]:
                    - generic [ref=e259] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e260] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e261] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
          - article [ref=e262]:
            - generic [ref=e263]:
              - generic [ref=e264]:
                - generic [ref=e265]:
                  - paragraph [ref=e266]: Subject 05
                  - heading "Handoff process" [level=3] [ref=e267]
                  - paragraph [ref=e268]: The seam between design and code. When it’s working, nobody talks about it. When it isn’t, nobody talks about anything else.
                - generic [ref=e269]: "-"
              - generic [ref=e270]:
                - generic [ref=e271]:
                  - paragraph [ref=e272]:
                    - generic [ref=e273]: "01."
                    - text: Design files use components from the shared library, not custom one-offs that don’t exist in code.
                  - radiogroup "Question 1" [ref=e274]:
                    - generic [ref=e275] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e276] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e277] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e278]:
                  - paragraph [ref=e279]:
                    - generic [ref=e280]: "02."
                    - text: Designers and developers use the same token names to describe design decisions.
                  - radiogroup "Question 2" [ref=e281]:
                    - generic [ref=e282] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e283] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e284] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e285]:
                  - paragraph [ref=e286]:
                    - generic [ref=e287]: "03."
                    - text: New components follow a documented process from design to code.
                  - radiogroup "Question 3" [ref=e288]:
                    - generic [ref=e289] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e290] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e291] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e292]:
                  - paragraph [ref=e293]:
                    - generic [ref=e294]: "04."
                    - text: Developers don’t rebuild components that already exist in the library.
                  - radiogroup "Question 4" [ref=e295]:
                    - generic [ref=e296] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e297] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e298] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e299]:
                  - paragraph [ref=e300]:
                    - generic [ref=e301]: "05."
                    - text: A clear owner (team or individual) is responsible for maintaining and evolving the design system.
                  - radiogroup "Question 5" [ref=e302]:
                    - generic [ref=e303] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e304] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e305] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
                - generic [ref=e306]:
                  - paragraph [ref=e307]:
                    - generic [ref=e308]: "06."
                    - text: The design system has a versioning and changelog process so consumers know what changed between releases.
                  - radiogroup "Question 6" [ref=e309]:
                    - generic [ref=e310] [cursor=pointer]:
                      - radio "No"
                      - text: "No"
                    - generic [ref=e311] [cursor=pointer]:
                      - radio "Partial"
                      - text: Partial
                    - generic [ref=e312] [cursor=pointer]:
                      - radio "Yes"
                      - text: "Yes"
        - generic [ref=e313]:
          - button "Reset the card" [ref=e314] [cursor=pointer]:
            - img [ref=e316]
            - text: Reset the card
          - paragraph [ref=e320]: Your final report is below
        - generic [ref=e323]:
          - paragraph [ref=e324]: Teacher's report
          - heading "Keep going. Answer every question to see your report." [level=3] [ref=e325]
          - generic [ref=e326]:
            - generic [ref=e327]:
              - paragraph [ref=e328]: Overall grade
              - paragraph [ref=e329]: "-"
            - generic [ref=e330]:
              - paragraph [ref=e331]: Final score
              - paragraph [ref=e332]: 0/64
          - paragraph [ref=e333]: You're 0 of 32 questions in. A personalized writeup appears here once you've scored every row.
          - generic [ref=e334]:
            - link "See your detailed results" [ref=e335] [cursor=pointer]:
              - /url: /tools/scorecard/results/
              - img [ref=e337]
              - text: See your detailed results
            - link "Talk through your results" [ref=e341] [cursor=pointer]:
              - /url: /contact/
              - img [ref=e343]
              - text: Talk through your results
    - generic [ref=e349]:
      - article [ref=e350]:
        - paragraph
        - paragraph [ref=e351]: "Most teams know their design system has problems. What they usually lack is a way to say where, and how bad, without turning it into a six-week audit first. This is that shortcut: a structured self-assessment across the five subjects a healthy system is actually graded on, scored as you go."
        - paragraph
        - paragraph [ref=e352]: "It covers the same five dimensions I use when I review a real system: component consistency, accessibility, token architecture, documentation, and the handoff process. Answer thirty-two short prompts and a written report tells you what to tackle first, and what to leave alone."
        - heading "What the score is really measuring" [level=2] [ref=e353]
        - paragraph [ref=e354]: The five subjects are not arbitrary. Component consistency is what users feel and what reviewers argue about. Accessibility is the floor the whole thing stands on. Token architecture decides whether a change lands once or thirty times. Documentation determines whether anyone but you can use the system. And the handoff process is what keeps all of the above from quietly rotting the month after launch.
        - paragraph [ref=e355]: A low grade in one subject is not a crisis. A low grade you did not know about is. The point of a snapshot is to turn a vague unease into a specific, rankable list you can bring to a planning conversation.
        - heading "This scorecard is also a work sample" [level=2] [ref=e356]
        - paragraph [ref=e357]:
          - text: "It is built the way I build production work: accessible radio groups, live scoring, no frameworks under the hood, the same tokens as the rest of this site. Tab through it; the keyboard path is real. If the snapshot surfaces something worth fixing properly, a full"
          - link "design system audit" [ref=e358] [cursor=pointer]:
            - /url: /tools/audit-findings/
          - text: replaces the self-assessment with specifics, ranked by severity and paired with the order to fix them in.
      - generic [ref=e359]:
        - generic [ref=e360]: Share
        - generic [ref=e361]:
          - link "Share on X" [ref=e362] [cursor=pointer]:
            - /url: https://twitter.com/intent/tweet?text=Grade%20your%20design%20system%20like%20a%20report%20card&url=https%3A%2F%2Fjoshuabriley.com%2Ftools%2Fscorecard%2F
            - img [ref=e364]
          - link "Share on LinkedIn" [ref=e366] [cursor=pointer]:
            - /url: https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fjoshuabriley.com%2Ftools%2Fscorecard%2F
            - img [ref=e368]
          - button "Copy link" [ref=e370] [cursor=pointer]:
            - img [ref=e372]
    - generic [ref=e375]:
      - paragraph [ref=e376]: The rest of the set
      - heading "Other things you can run right now." [level=2] [ref=e377]
      - list [ref=e378]:
        - listitem [ref=e379]:
          - link "Calculator What inconsistency actually costs Price the drift your team already lives with, in hours and dollars." [ref=e380] [cursor=pointer]:
            - /url: /tools/roi-calculator/
            - generic [ref=e381]: Calculator
            - generic [ref=e382]:
              - text: What inconsistency actually costs
              - generic [ref=e383]: Price the drift your team already lives with, in hours and dollars.
            - img [ref=e386]
        - listitem [ref=e388]:
          - link "Playground What a design token actually does Move one primitive and watch it propagate through every component." [ref=e389] [cursor=pointer]:
            - /url: /tools/token-playground/
            - generic [ref=e390]: Playground
            - generic [ref=e391]:
              - text: What a design token actually does
              - generic [ref=e392]: Move one primitive and watch it propagate through every component.
            - img [ref=e395]
        - listitem [ref=e397]:
          - link "Inspector What an audit actually finds Inspect a real specimen and read the findings the way an audit ranks them." [ref=e398] [cursor=pointer]:
            - /url: /tools/audit-findings/
            - generic [ref=e399]: Inspector
            - generic [ref=e400]:
              - text: What an audit actually finds
              - generic [ref=e401]: Inspect a real specimen and read the findings the way an audit ranks them.
            - img [ref=e404]
    - generic [ref=e407]:
      - heading "Built the way I build production work." [level=2] [ref=e408]
      - paragraph [ref=e409]: Accessible controls, live state, no framework underneath, and the same tokens as the rest of this site. It should hold up to being inspected as production work. The case studies show the same standard at full product scale.
      - generic [ref=e410]:
        - link "Get in touch" [ref=e411] [cursor=pointer]:
          - /url: /contact/
          - text: Get in touch
          - img [ref=e413]
        - link "See the work" [ref=e415] [cursor=pointer]:
          - /url: /projects/
  - contentinfo [ref=e416]:
    - generic [ref=e417]:
      - generic [ref=e418]:
        - generic [ref=e419]:
          - img "Joshua Briley" [ref=e420]:
            - generic [ref=e421]: JB
            - generic [ref=e422]:
              - text: Joshua Briley
              - generic [ref=e423]: .
          - paragraph [ref=e424]: "Design- and front-end-focused product design engineer. The interface is where I bring the most value: design-grade, accessible UI, finished to the last detail."
          - paragraph [ref=e425]: Open to product design engineering roles
        - generic [ref=e427]:
          - navigation "Site" [ref=e428]:
            - heading "Site" [level=2] [ref=e429]
            - list [ref=e430]:
              - listitem [ref=e431]:
                - link "About" [ref=e432] [cursor=pointer]:
                  - /url: /about/
              - listitem [ref=e433]:
                - link "Projects" [ref=e434] [cursor=pointer]:
                  - /url: /projects/
              - listitem [ref=e435]:
                - link "Résumé" [ref=e436] [cursor=pointer]:
                  - /url: /resume/
              - listitem [ref=e437]:
                - link "Contact" [ref=e438] [cursor=pointer]:
                  - /url: /contact/
          - navigation "More" [ref=e439]:
            - heading "More" [level=2] [ref=e440]
            - list [ref=e441]:
              - listitem [ref=e442]:
                - link "Personal Projects" [ref=e443] [cursor=pointer]:
                  - /url: /personal-projects/
              - listitem [ref=e444]:
                - link "Testimonials" [ref=e445] [cursor=pointer]:
                  - /url: /testimonials/
              - listitem [ref=e446]:
                - link "Blog" [ref=e447] [cursor=pointer]:
                  - /url: /blog/
              - listitem [ref=e448]:
                - link "Tools" [ref=e449] [cursor=pointer]:
                  - /url: /tools/
              - listitem [ref=e450]:
                - link "Style Guide" [ref=e451] [cursor=pointer]:
                  - /url: /style-guide/
      - generic [ref=e452]:
        - generic [ref=e453]:
          - generic [ref=e454]: © 2026 Joshua Briley
          - link "Privacy" [ref=e455] [cursor=pointer]:
            - /url: /privacy/
          - link "Terms" [ref=e456] [cursor=pointer]:
            - /url: /terms/
        - generic [ref=e457]:
          - link "LinkedIn" [ref=e458] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/joshuabriley/
            - text: LinkedIn
            - img [ref=e460]
          - link "GitHub" [ref=e462] [cursor=pointer]:
            - /url: https://github.com/somecallmejosh
            - text: GitHub
            - img [ref=e464]
      - paragraph [ref=e466]: Designed by me, Joshua Briley, and built with my favorite static site generator, Astro.
  - generic [ref=e467]:
    - generic [ref=e468]: "0"
    - generic [ref=e469]:
      - paragraph [ref=e470]: So far
      - paragraph [ref=e471]: 0 of 32 answered
  - generic [ref=e474]:
    - button "Menu" [ref=e475]:
      - img [ref=e477]
      - generic: Menu
    - button "Inspect" [ref=e481]:
      - img [ref=e483]
      - generic: Inspect
    - button "Audit" [ref=e485]:
      - img [ref=e487]
      - generic: Audit
    - button "Settings" [ref=e490]:
      - img [ref=e492]
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