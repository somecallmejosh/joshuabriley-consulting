# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: keyboard.spec.ts >> page /projects/vmspark/ >> axe-core scan reports no WCAG 2.1 AA violations
- Location: tests/e2e/keyboard.spec.ts:21:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 723

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
+               "bgColor": "#fafbfc",
+               "contrastRatio": 2.69,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a9aa1",
+               "fontSize": "8.2pt (10.88px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section data-source=\"Section · tone=paper · padding=default\" class=\"bg-paper text-ink py-20 md:py-28 border-t border-line\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/layout/Section.astro\" data-astro-source-loc=\"49:2\">",
+                 "target": Array [
+                   ".py-20.md\\:py-28:nth-child(7)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"scroll-shot-index\" data-astro-cid-iawqfy72=\"\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/patterns/ScrollShot.astro\" data-astro-source-loc=\"59:34\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".scroll-shot[data-astro-source-loc=\"57:46\"]:nth-child(1) > .scroll-shot-index[data-astro-source-loc=\"59:34\"][data-astro-cid-iawqfy72=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafbfc",
+               "contrastRatio": 2.69,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a9aa1",
+               "fontSize": "8.4pt (11.2px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.4pt (11.2px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section data-source=\"Section · tone=paper · padding=default\" class=\"bg-paper text-ink py-20 md:py-28 border-t border-line\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/layout/Section.astro\" data-astro-source-loc=\"49:2\">",
+                 "target": Array [
+                   ".py-20.md\\:py-28:nth-child(7)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.4pt (11.2px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"scroll-shot-kind\" data-astro-cid-iawqfy72=\"\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/patterns/ScrollShot.astro\" data-astro-source-loc=\"81:38\">Full page</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".scroll-shot[data-astro-source-loc=\"57:46\"]:nth-child(1) > .scroll-shot-cap[data-astro-source-loc=\"79:39\"] > .scroll-shot-rail[data-astro-source-loc=\"80:35\"][data-astro-cid-iawqfy72=\"\"] > .scroll-shot-kind[data-astro-source-loc=\"81:38\"][data-astro-cid-iawqfy72=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafbfc",
+               "contrastRatio": 2.69,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a9aa1",
+               "fontSize": "8.2pt (10.88px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section data-source=\"Section · tone=paper · padding=default\" class=\"bg-paper text-ink py-20 md:py-28 border-t border-line\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/layout/Section.astro\" data-astro-source-loc=\"49:2\">",
+                 "target": Array [
+                   ".py-20.md\\:py-28:nth-child(7)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"scroll-shot-index\" data-astro-cid-iawqfy72=\"\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/patterns/ScrollShot.astro\" data-astro-source-loc=\"59:34\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".scroll-shot[data-astro-source-loc=\"57:46\"]:nth-child(2) > .scroll-shot-index[data-astro-source-loc=\"59:34\"][data-astro-cid-iawqfy72=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafbfc",
+               "contrastRatio": 2.69,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a9aa1",
+               "fontSize": "8.4pt (11.2px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.4pt (11.2px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section data-source=\"Section · tone=paper · padding=default\" class=\"bg-paper text-ink py-20 md:py-28 border-t border-line\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/layout/Section.astro\" data-astro-source-loc=\"49:2\">",
+                 "target": Array [
+                   ".py-20.md\\:py-28:nth-child(7)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.4pt (11.2px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"scroll-shot-kind\" data-astro-cid-iawqfy72=\"\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/patterns/ScrollShot.astro\" data-astro-source-loc=\"81:38\">Full page</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".scroll-shot[data-astro-source-loc=\"57:46\"]:nth-child(2) > .scroll-shot-cap[data-astro-source-loc=\"79:39\"] > .scroll-shot-rail[data-astro-source-loc=\"80:35\"][data-astro-cid-iawqfy72=\"\"] > .scroll-shot-kind[data-astro-source-loc=\"81:38\"][data-astro-cid-iawqfy72=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafbfc",
+               "contrastRatio": 2.69,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a9aa1",
+               "fontSize": "8.2pt (10.88px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section data-source=\"Section · tone=paper · padding=default\" class=\"bg-paper text-ink py-20 md:py-28 border-t border-line\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/layout/Section.astro\" data-astro-source-loc=\"49:2\">",
+                 "target": Array [
+                   ".py-20.md\\:py-28:nth-child(7)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"scroll-shot-index\" data-astro-cid-iawqfy72=\"\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/patterns/ScrollShot.astro\" data-astro-source-loc=\"59:34\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".scroll-shot[data-astro-source-loc=\"57:46\"]:nth-child(3) > .scroll-shot-index[data-astro-source-loc=\"59:34\"][data-astro-cid-iawqfy72=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafbfc",
+               "contrastRatio": 2.69,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a9aa1",
+               "fontSize": "8.4pt (11.2px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.4pt (11.2px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section data-source=\"Section · tone=paper · padding=default\" class=\"bg-paper text-ink py-20 md:py-28 border-t border-line\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/layout/Section.astro\" data-astro-source-loc=\"49:2\">",
+                 "target": Array [
+                   ".py-20.md\\:py-28:nth-child(7)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.4pt (11.2px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"scroll-shot-kind\" data-astro-cid-iawqfy72=\"\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/patterns/ScrollShot.astro\" data-astro-source-loc=\"81:38\">Full page</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".scroll-shot[data-astro-source-loc=\"57:46\"]:nth-child(3) > .scroll-shot-cap[data-astro-source-loc=\"79:39\"] > .scroll-shot-rail[data-astro-source-loc=\"80:35\"][data-astro-cid-iawqfy72=\"\"] > .scroll-shot-kind[data-astro-source-loc=\"81:38\"][data-astro-cid-iawqfy72=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafbfc",
+               "contrastRatio": 2.69,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a9aa1",
+               "fontSize": "8.2pt (10.88px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section data-source=\"Section · tone=paper · padding=default\" class=\"bg-paper text-ink py-20 md:py-28 border-t border-line\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/layout/Section.astro\" data-astro-source-loc=\"49:2\">",
+                 "target": Array [
+                   ".py-20.md\\:py-28:nth-child(7)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"scroll-shot-index\" data-astro-cid-iawqfy72=\"\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/patterns/ScrollShot.astro\" data-astro-source-loc=\"59:34\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".scroll-shot[data-astro-source-loc=\"57:46\"]:nth-child(4) > .scroll-shot-index[data-astro-source-loc=\"59:34\"][data-astro-cid-iawqfy72=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafbfc",
+               "contrastRatio": 2.69,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a9aa1",
+               "fontSize": "8.4pt (11.2px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.4pt (11.2px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section data-source=\"Section · tone=paper · padding=default\" class=\"bg-paper text-ink py-20 md:py-28 border-t border-line\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/layout/Section.astro\" data-astro-source-loc=\"49:2\">",
+                 "target": Array [
+                   ".py-20.md\\:py-28:nth-child(7)",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.4pt (11.2px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"scroll-shot-kind\" data-astro-cid-iawqfy72=\"\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/patterns/ScrollShot.astro\" data-astro-source-loc=\"81:38\">Full page</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".scroll-shot[data-astro-source-loc=\"57:46\"]:nth-child(4) > .scroll-shot-cap[data-astro-source-loc=\"79:39\"] > .scroll-shot-rail[data-astro-source-loc=\"80:35\"][data-astro-cid-iawqfy72=\"\"] > .scroll-shot-kind[data-astro-source-loc=\"81:38\"][data-astro-cid-iawqfy72=\"\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafbfc",
+               "contrastRatio": 2.69,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a9aa1",
+               "fontSize": "8.2pt (10.88px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"sheets\" data-source=\"Section · tone=paper · padding=default\" class=\"bg-paper text-ink py-20 md:py-28 scroll-mt-24 border-t border-line\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/layout/Section.astro\" data-astro-source-loc=\"49:2\">",
+                 "target": Array [
+                   "#sheets",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"plate__index\" data-astro-cid-r35i5vkr=\"\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/patterns/Plate.astro\" data-astro-source-loc=\"87:29\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div[data-astro-source-loc=\"695:31\"] > .plate[data-size=\"band\"][data-plate=\"\"]:nth-child(1) > .plate__index[data-astro-source-loc=\"87:29\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafbfc",
+               "contrastRatio": 2.69,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a9aa1",
+               "fontSize": "8.2pt (10.88px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"sheets\" data-source=\"Section · tone=paper · padding=default\" class=\"bg-paper text-ink py-20 md:py-28 scroll-mt-24 border-t border-line\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/layout/Section.astro\" data-astro-source-loc=\"49:2\">",
+                 "target": Array [
+                   "#sheets",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"plate__index\" data-astro-cid-r35i5vkr=\"\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/patterns/Plate.astro\" data-astro-source-loc=\"87:29\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div[data-astro-source-loc=\"695:31\"] > .plate[data-size=\"band\"][data-plate=\"\"]:nth-child(2) > .plate__index[data-astro-source-loc=\"87:29\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafbfc",
+               "contrastRatio": 2.69,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a9aa1",
+               "fontSize": "8.2pt (10.88px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"sheets\" data-source=\"Section · tone=paper · padding=default\" class=\"bg-paper text-ink py-20 md:py-28 scroll-mt-24 border-t border-line\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/layout/Section.astro\" data-astro-source-loc=\"49:2\">",
+                 "target": Array [
+                   "#sheets",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"plate__index\" data-astro-cid-r35i5vkr=\"\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/patterns/Plate.astro\" data-astro-source-loc=\"87:29\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div[data-astro-source-loc=\"695:31\"] > .plate[data-size=\"band\"][data-plate=\"\"]:nth-child(3) > .plate__index[data-astro-source-loc=\"87:29\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafbfc",
+               "contrastRatio": 2.69,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a9aa1",
+               "fontSize": "8.2pt (10.88px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"sheets\" data-source=\"Section · tone=paper · padding=default\" class=\"bg-paper text-ink py-20 md:py-28 scroll-mt-24 border-t border-line\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/layout/Section.astro\" data-astro-source-loc=\"49:2\">",
+                 "target": Array [
+                   "#sheets",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"plate__index\" data-astro-cid-r35i5vkr=\"\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/patterns/Plate.astro\" data-astro-source-loc=\"87:29\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div[data-astro-source-loc=\"695:31\"] > .plate[data-size=\"band\"][data-plate=\"\"]:nth-child(4) > .plate__index[data-astro-source-loc=\"87:29\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafbfc",
+               "contrastRatio": 2.69,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a9aa1",
+               "fontSize": "8.2pt (10.88px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"sheets\" data-source=\"Section · tone=paper · padding=default\" class=\"bg-paper text-ink py-20 md:py-28 scroll-mt-24 border-t border-line\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/layout/Section.astro\" data-astro-source-loc=\"49:2\">",
+                 "target": Array [
+                   "#sheets",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"plate__index\" data-astro-cid-r35i5vkr=\"\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/patterns/Plate.astro\" data-astro-source-loc=\"87:29\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div[data-astro-source-loc=\"739:33\"] > .plate[data-size=\"band\"][data-plate=\"\"]:nth-child(1) > .plate__index[data-astro-source-loc=\"87:29\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafbfc",
+               "contrastRatio": 2.69,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a9aa1",
+               "fontSize": "8.2pt (10.88px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"sheets\" data-source=\"Section · tone=paper · padding=default\" class=\"bg-paper text-ink py-20 md:py-28 scroll-mt-24 border-t border-line\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/layout/Section.astro\" data-astro-source-loc=\"49:2\">",
+                 "target": Array [
+                   "#sheets",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"plate__index\" data-astro-cid-r35i5vkr=\"\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/patterns/Plate.astro\" data-astro-source-loc=\"87:29\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div[data-astro-source-loc=\"739:33\"] > .plate[data-size=\"band\"][data-plate=\"\"]:nth-child(2) > .plate__index[data-astro-source-loc=\"87:29\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafbfc",
+               "contrastRatio": 2.69,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a9aa1",
+               "fontSize": "8.2pt (10.88px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"sheets\" data-source=\"Section · tone=paper · padding=default\" class=\"bg-paper text-ink py-20 md:py-28 scroll-mt-24 border-t border-line\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/layout/Section.astro\" data-astro-source-loc=\"49:2\">",
+                 "target": Array [
+                   "#sheets",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"plate__index\" data-astro-cid-r35i5vkr=\"\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/patterns/Plate.astro\" data-astro-source-loc=\"87:29\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div[data-astro-source-loc=\"739:33\"] > .plate[data-size=\"band\"][data-plate=\"\"]:nth-child(3) > .plate__index[data-astro-source-loc=\"87:29\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafbfc",
+               "contrastRatio": 2.69,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a9aa1",
+               "fontSize": "8.2pt (10.88px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"sheets\" data-source=\"Section · tone=paper · padding=default\" class=\"bg-paper text-ink py-20 md:py-28 scroll-mt-24 border-t border-line\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/layout/Section.astro\" data-astro-source-loc=\"49:2\">",
+                 "target": Array [
+                   "#sheets",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"plate__index\" data-astro-cid-r35i5vkr=\"\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/patterns/Plate.astro\" data-astro-source-loc=\"87:29\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div[data-astro-source-loc=\"739:33\"] > .plate[data-size=\"band\"][data-plate=\"\"]:nth-child(4) > .plate__index[data-astro-source-loc=\"87:29\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafbfc",
+               "contrastRatio": 2.69,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a9aa1",
+               "fontSize": "8.2pt (10.88px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"sheets\" data-source=\"Section · tone=paper · padding=default\" class=\"bg-paper text-ink py-20 md:py-28 scroll-mt-24 border-t border-line\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/layout/Section.astro\" data-astro-source-loc=\"49:2\">",
+                 "target": Array [
+                   "#sheets",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"plate__index\" data-astro-cid-r35i5vkr=\"\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/patterns/Plate.astro\" data-astro-source-loc=\"87:29\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".plate[data-size=\"band\"][data-plate=\"\"]:nth-child(5) > .plate__index[data-astro-source-loc=\"87:29\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafbfc",
+               "contrastRatio": 2.69,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a9aa1",
+               "fontSize": "8.2pt (10.88px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"outcome\" data-source=\"Section · tone=paper · padding=default\" class=\"bg-paper text-ink py-20 md:py-28 scroll-mt-24\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/layout/Section.astro\" data-astro-source-loc=\"49:2\">",
+                 "target": Array [
+                   "#outcome",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.2pt (10.88px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"site-shot-index\" data-astro-cid-wmttz3yn=\"\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/patterns/SiteShot.astro\" data-astro-source-loc=\"35:32\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".site-shot-index",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafbfc",
+               "contrastRatio": 2.69,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9a9aa1",
+               "fontSize": "8.4pt (11.2px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.4pt (11.2px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section id=\"outcome\" data-source=\"Section · tone=paper · padding=default\" class=\"bg-paper text-ink py-20 md:py-28 scroll-mt-24\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/layout/Section.astro\" data-astro-source-loc=\"49:2\">",
+                 "target": Array [
+                   "#outcome",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.69 (foreground color: #9a9aa1, background color: #fafbfc, font size: 8.4pt (11.2px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"site-shot-kind\" data-astro-cid-wmttz3yn=\"\" data-astro-source-file=\"/Users/joshuabriley/Documents/web/joshuabriley.com/src/components/patterns/SiteShot.astro\" data-astro-source-loc=\"54:34\">Live site</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".site-shot-kind",
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
      - navigation "Breadcrumb" [ref=e21]:
        - link "Projects" [ref=e22] [cursor=pointer]:
          - /url: /projects/
        - img [ref=e24]
        - generic [ref=e26]: VMSpark
      - generic [ref=e27]:
        - generic [ref=e28]:
          - generic [ref=e29]:
            - img "VMSpark logo" [ref=e30]
            - paragraph [ref=e32]: Case study
          - heading "The pipeline was enterprise-grade. The app in front of it wasn't." [level=1] [ref=e33]:
            - text: The pipeline was enterprise-grade. The app
            - emphasis [ref=e34]: in front of it
            - text: wasn't.
          - paragraph [ref=e35]: VMSpark's pipeline normalizes thousands of VMS jobs a day and fans them out to a dozen-plus ATS providers. The admin app in front of it, the surface operators work in all day and investors judge in the first thirty seconds of a demo, still looked like a Rails scaffold from 2018. I owned the audit, the design direction, and the phased rebuild that closed that gap, without touching the pipeline underneath.
        - complementary "Project details" [ref=e36]:
          - generic [ref=e37]:
            - generic [ref=e38]:
              - term [ref=e39]: Role
              - definition [ref=e40]: Product Design Engineer
            - generic [ref=e41]:
              - term [ref=e42]: Client
              - definition [ref=e43]: VMSpark
            - generic [ref=e44]:
              - term [ref=e45]: Stack
              - definition [ref=e46]: Rails · Hotwire
            - generic [ref=e47]:
              - term [ref=e48]: Focus
              - definition [ref=e49]: Shell · Tokens
    - generic [ref=e51]:
      - paragraph [ref=e52]: Receipts
      - generic [ref=e53]:
        - generic [ref=e54]:
          - term [ref=e55]: Skills proven
          - definition [ref=e56]:
            - list [ref=e57]:
              - listitem [ref=e58]:
                - img [ref=e60]
                - generic [ref=e62]: Design-system audit
              - listitem [ref=e63]:
                - img [ref=e65]
                - generic [ref=e67]: UI/UX design direction
              - listitem [ref=e68]:
                - img [ref=e70]
                - generic [ref=e72]: Accessible component APIs
              - listitem [ref=e73]:
                - img [ref=e75]
                - generic [ref=e77]: Frontend architecture
              - listitem [ref=e78]:
                - img [ref=e80]
                - generic [ref=e82]: Style-guide documentation
              - listitem [ref=e83]:
                - img [ref=e85]
                - generic [ref=e87]: Product decisions
        - generic [ref=e88]:
          - term [ref=e89]: Stack
          - definition [ref=e90]:
            - list [ref=e91]:
              - listitem [ref=e92]:
                - img [ref=e94]
                - generic [ref=e96]: Ruby on Rails
              - listitem [ref=e97]:
                - img [ref=e99]
                - generic [ref=e101]: Stimulus.js
              - listitem [ref=e102]:
                - img [ref=e104]
                - generic [ref=e106]: Design tokens
              - listitem [ref=e107]:
                - img [ref=e109]
                - generic [ref=e111]: Modern CSS
        - generic [ref=e112]:
          - term [ref=e113]: Quality
          - definition [ref=e114]:
            - list [ref=e115]:
              - listitem [ref=e116]:
                - img [ref=e118]
                - generic [ref=e120]: Keyboard operability
              - listitem [ref=e121]:
                - img [ref=e123]
                - generic [ref=e125]: Focus management
              - listitem [ref=e126]:
                - img [ref=e128]
                - generic [ref=e130]: ARIA semantics
              - listitem [ref=e131]:
                - img [ref=e133]
                - generic [ref=e135]: Token contrast checks
        - generic [ref=e136]:
          - term [ref=e137]: Outcomes
          - definition [ref=e138]:
            - list [ref=e139]:
              - listitem [ref=e140]:
                - img [ref=e142]
                - generic [ref=e144]: Zero pipeline regressions
              - listitem [ref=e145]:
                - img [ref=e147]
                - generic [ref=e149]: No operator retraining
              - listitem [ref=e150]:
                - img [ref=e152]
                - generic [ref=e154]: One token layer, app and brand
              - listitem [ref=e155]:
                - img [ref=e157]
                - generic [ref=e159]: No new JS on hot paths
    - generic [ref=e161]:
      - paragraph [ref=e162]: On the docket
      - list [ref=e163]:
        - listitem [ref=e164]:
          - link "01 Inventory before invention" [ref=e165] [cursor=pointer]:
            - /url: "#inventory"
            - generic [ref=e166]: "01"
            - img [ref=e168]
            - generic [ref=e170]: Inventory before invention
            - img [ref=e172]
        - listitem [ref=e174]:
          - link "02 Three directions, one chosen" [ref=e175] [cursor=pointer]:
            - /url: "#directions"
            - generic [ref=e176]: "02"
            - img [ref=e178]
            - generic [ref=e180]: Three directions, one chosen
            - img [ref=e182]
        - listitem [ref=e184]:
          - link "03 Phased rollout" [ref=e185] [cursor=pointer]:
            - /url: "#rollout"
            - generic [ref=e186]: "03"
            - img [ref=e188]
            - generic [ref=e190]: Phased rollout
            - img [ref=e192]
        - listitem [ref=e194]:
          - link "04 Screens and flows" [ref=e195] [cursor=pointer]:
            - /url: "#sheets"
            - generic [ref=e196]: "04"
            - img [ref=e198]
            - generic [ref=e200]: Screens and flows
            - img [ref=e202]
        - listitem [ref=e204]:
          - link "05 What shipping it changed" [ref=e205] [cursor=pointer]:
            - /url: "#outcome"
            - generic [ref=e206]: "05"
            - img [ref=e208]
            - generic [ref=e210]: What shipping it changed
            - img [ref=e212]
      - paragraph [ref=e214]: VMSpark normalizes thousands of VMS job listings a day, runs them through an account-specific rule engine, and fans them out to whichever ATS the customer has contracted with. The product works. The shell it lived in did not look like it. Leadership was scheduling investor demos, and the admin app, the surface those conversations lived inside, felt like a Rails scaffold from 2018. Operators noticed it daily. Investors noticed it in the first thirty seconds of a demo.
      - paragraph [ref=e215]:
        - text: "The brief I gave myself:"
        - strong [ref=e216]: make the admin app read as a modern, enterprise-grade product that matches the sophistication of the pipeline underneath
        - text: ", without touching the pipeline, the rule engine, or anything an operator had muscle memory for. That meant owning it as one job: the design-system audit, the product calls about what to build and what to drop, and the Rails engineering to ship it."
    - generic [ref=e218]:
      - generic [ref=e219]:
        - generic [ref=e220]:
          - paragraph [ref=e221]: Step 01
          - heading "Inventory before invention" [level=2] [ref=e222]
        - generic [ref=e223]:
          - generic [ref=e224]:
            - paragraph [ref=e225]:
              - text: "Sprawl this wide can't be fixed one screen at a time. Restyle the buttons on Manual Jobs and seven other button treatments are still waiting elsewhere, with no way to know you've found them all. So before writing a line of new CSS, I cataloged what was there: a"
              - strong [ref=e226]: ~700-line design inventory
              - text: covering every one of the 350 ERB templates (roughly 11,800 lines) across the app.
            - paragraph [ref=e227]: "The audit wasn't a complaint list. It was the map that told me which problems were cosmetic (fixable during the redesign), which were structural (needed architectural decisions), and which were out of scope (pipeline-adjacent, don't touch). Most of what I found was UI sprawl: the same interaction rendered a dozen different ways across the app, each screen a small argument against the one before it."
          - generic [ref=e228]:
            - generic [ref=e229]:
              - generic [ref=e231]: "350"
              - paragraph [ref=e232]: ERB templates inventoried
            - generic [ref=e233]:
              - generic [ref=e235]: 8+
              - paragraph [ref=e236]: button styles, one concept
            - generic [ref=e237]:
              - generic [ref=e239]: 10+
              - paragraph [ref=e240]: form-element styles
            - generic [ref=e241]:
              - generic [ref=e243]: ~40
              - paragraph [ref=e244]: views bypassing the tokens
          - generic [ref=e245]:
            - paragraph [ref=e246]: A few of the findings
            - generic [ref=e247]:
              - generic [ref=e248]:
                - generic [ref=e249]: 8+
                - generic [ref=e250]:
                  - heading "Button styles competing for attention" [level=3] [ref=e251]
                  - paragraph [ref=e252]:
                    - text: Primary, secondary, danger, and ghost variants, each implemented two or three different ways. Some leaned on Bootstrap utility classes, others on per-view custom CSS, a few were inline-styled anchors pretending to be buttons. A
                    - emphasis [ref=e253]: Save
                    - text: on one screen didn’t match a
                    - emphasis [ref=e254]: Save
                    - text: two clicks away.
              - generic [ref=e255]:
                - generic [ref=e256]: 10+
                - generic [ref=e257]:
                  - heading "Form element styles, all at once" [level=3] [ref=e258]
                  - paragraph [ref=e259]:
                    - text: Plain Rails helpers sat next to Bootstrap
                    - code [ref=e260]: form-control
                    - text: inputs, Select2 widgets, and hand-rolled dropdowns. Border radius, padding, focus rings, and disabled treatments all diverged. The same concept (
                    - emphasis [ref=e261]: pick one from a list
                    - text: ) rendered five different ways across the app.
              - generic [ref=e262]:
                - generic [ref=e263]: "5"
                - generic [ref=e264]:
                  - heading "Form-rendering patterns, coexisting" [level=3] [ref=e265]
                  - paragraph [ref=e266]:
                    - code [ref=e267]: form_with(model:)
                    - text: ", legacy"
                    - code [ref=e268]: form_for
                    - text: ","
                    - code [ref=e269]: form_with(url:)
                    - text: ", bare"
                    - code [ref=e270]: <form>
                    - text: + HTMX, and HTMX-only with
                    - code [ref=e271]: hx-include
                    - text: .
              - generic [ref=e272]:
                - generic [ref=e273]: 6+
                - generic [ref=e274]:
                  - heading "Tables with no shared convention" [level=3] [ref=e275]
                  - paragraph [ref=e276]: "Row striping in some, not in others. Headers styled four ways: dark fill, light fill, borderless, and all-caps. Pagination rendered with Kaminari on one screen and a bespoke HTMX block on the next. Density jumped from compressed to roomy between adjacent views with no underlying logic."
              - generic [ref=e277]:
                - generic [ref=e278]: 4+
                - generic [ref=e279]:
                  - heading "Labeling strategies, all coexisting" [level=3] [ref=e280]
                  - paragraph [ref=e281]:
                    - text: Sentence case, Title Case, ALL CAPS, and placeholder-as-label all appeared across the app. Required indicators were sometimes asterisks, sometimes parenthetical
                    - emphasis [ref=e282]: (required)
                    - text: ", sometimes absent. The same field concept carried different names on different screens ("
                    - emphasis [ref=e283]: Bill Rate
                    - text: ","
                    - emphasis [ref=e284]: Rate
                    - text: ","
                    - emphasis [ref=e285]: Pay Rate
                    - text: ).
              - generic [ref=e286]:
                - generic [ref=e287]: ~40
                - generic [ref=e288]:
                  - heading "Views bypassing the token system" [level=3] [ref=e289]
                  - paragraph [ref=e290]:
                    - text: A semantic color-token system already existed in
                    - code [ref=e291]: _color_tokens.scss
                    - text: ", but dozens of views bypassed it with inline styles, hardcoded hex literals, and raw colors in view-level"
                    - code [ref=e292]: <style>
                    - text: blocks.
              - generic [ref=e293]:
                - generic [ref=e294]: ☠
                - generic [ref=e295]:
                  - heading "Dead code in production" [level=3] [ref=e296]
                  - paragraph [ref=e297]:
                    - text: A zero-byte
                    - code [ref=e298]: _empty.html.erb
                    - text: ", an"
                    - code [ref=e299]: X
                    - text: "-prefixed dead index file (101 lines), an"
                    - code [ref=e300]: ASDKAJSHDJHASD
                    - text: debug string committed to production, and a sticky table header with hardcoded
                    - code [ref=e301]: "background-color: red"
                    - text: from an abandoned debug session.
      - generic [ref=e302]:
        - paragraph [ref=e303]: What the sprawl actually looked like
        - paragraph [ref=e304]: Four screens pulled from the same app, on the same day. Each one makes its own decisions about buttons, inputs, labels, and tables. None of them agree with the others.
        - generic [ref=e305]:
          - figure "Manual Jobs. Three buttons in one row, three different treatments. Labels sit below inputs." [ref=e306]:
            - generic [ref=e307]:
              - 'img "VMSpark Manual Jobs screen. Three buttons sit side by side in the top bar: a filled orange Add New, an outlined Edit Selected, and an outlined Copy Selected. Search inputs appear above the table with labels placed below each field."'
            - generic [ref=e308]:
              - strong [ref=e309]: Manual Jobs.
              - text: Three buttons in one row, three different treatments. Labels sit below inputs.
          - figure "ATS Professions. Labels are now placeholders inside the inputs. Different page, different rule." [ref=e310]:
            - generic [ref=e311]:
              - img "VMSpark ATS Professions screen. Five search inputs use their label text as placeholders inside the fields. A Sync with ATS outlined button sits at the top right."
            - generic [ref=e312]:
              - strong [ref=e313]: ATS Professions.
              - text: Labels are now placeholders inside the inputs. Different page, different rule.
          - 'figure "Announcements. Yet another icon-button pattern: dark gray paired with solid red, nothing like the blue outlines elsewhere." [ref=e314]':
            - generic [ref=e315]:
              - img "VMSpark Announcements screen. Each row ends with a dark gray pencil edit icon next to a solid red trash icon. A filled orange New Announcement button sits in the top right."
            - generic [ref=e316]:
              - strong [ref=e317]: Announcements.
              - text: "Yet another icon-button pattern: dark gray paired with solid red, nothing like the blue outlines elsewhere."
          - figure "OpenAI Usage. A solid dark-navy table header. Every other table in the app uses a light gray one." [ref=e318]:
            - generic [ref=e319]:
              - img "VMSpark OpenAI Usage dashboard. A data table with a solid dark-navy header bar, right-aligned numeric columns, and underlined orange account names."
            - generic [ref=e320]:
              - strong [ref=e321]: OpenAI Usage.
              - text: A solid dark-navy table header. Every other table in the app uses a light gray one.
      - paragraph [ref=e322]: The inventory is what made a root fix possible instead of a screen-by-screen one. Every finding above resolved to a single decision applied once, and because the semantic token layer already existed, each of those decisions cascaded across dozens of views. The remaining work was routing the views through it.
    - generic [ref=e325]:
      - generic [ref=e326]:
        - paragraph [ref=e327]: Step 02
        - heading "Three directions, one chosen" [level=2] [ref=e328]
      - generic [ref=e329]:
        - paragraph [ref=e330]: Rather than design in a vacuum, I spec'd three mutually exclusive directions with honest tradeoffs. Writing the options down, with their reasons and risks, is what lets the choice get overturned on evidence later, not preference.
        - generic [ref=e331]:
          - generic [ref=e332]:
            - generic [ref=e333]:
              - generic [ref=e334]: A
              - generic [ref=e335]: Command Shell
            - paragraph [ref=e336]: Dense · Keyboard-first
            - paragraph [ref=e337]:
              - text: 56 px icon rail, tight 13/14 px type, hairline borders,
              - code [ref=e338]: ⌘K
              - text: palette as the centerpiece, orange reserved for exactly one thing per screen.
            - paragraph [ref=e339]:
              - img [ref=e341]
              - generic [ref=e343]: Signals “scales to power users.”
          - generic [ref=e344]:
            - paragraph [ref=e345]: Chosen
            - generic [ref=e346]:
              - generic [ref=e347]: B
              - generic [ref=e348]: Two-Tier Platform
            - paragraph [ref=e349]: Enterprise-familiar
            - paragraph [ref=e350]: 48 px product rail plus 260 px project nav, the real two-tier pattern. App-switcher waffle, breadcrumbed page headers, right-side inspector panel. Brand orange on active rail state, soft navy-tinted elevation.
            - paragraph [ref=e351]:
              - img [ref=e353]
              - generic [ref=e355]: Every enterprise buyer has used this pattern before.
          - generic [ref=e356]:
            - generic [ref=e357]:
              - generic [ref=e358]: C
              - generic [ref=e359]: Modern Workspace
            - paragraph [ref=e360]: Spacious · Document-forward
            - paragraph [ref=e361]:
              - text: 270 px soft sidebar, no persistent top bar,
              - code [ref=e362]: ⌘K
              - text: by shortcut only, generous spacing.
            - paragraph [ref=e363]:
              - img [ref=e365]
              - generic [ref=e367]: "Risk: reads as lightweight for a dense ops tool."
        - generic [ref=e368]:
          - paragraph [ref=e369]: I chose B. Not because it was the prettiest (C was), and not because it was the most sophisticated (A was). I chose it because the product's audience was multi-tenant operators, and the lowest-risk path to both user and investor trust was the pattern those operators had already used at every previous job.
          - paragraph [ref=e370]:
            - text: I also
            - strong [ref=e371]: dropped
            - text: "a feature I'd originally scoped in: a global \"Create\" button. Most creates in this product are feed-driven, not user-initiated. Adding one would have been copying a convention without earning it."
        - figure [ref=e372]:
          - blockquote [ref=e373]: Pattern familiarity compounds trust faster than novelty does.
    - generic [ref=e376]:
      - generic [ref=e377]:
        - paragraph [ref=e378]: Step 03
        - heading "Phased rollout" [level=2] [ref=e379]
      - generic [ref=e380]:
        - paragraph [ref=e381]:
          - text: The constraint was the whole problem. This was a live multi-tenant product with operators in it every working day, so a big-bang redesign that broke muscle memory, or that needed a rollback plan, was never on the table. Each phase was instead
          - strong [ref=e382]: shippable on its own
          - text: ", behind no flags, with the previous phase's work still intact if I needed to roll back."
        - generic [ref=e383]:
          - generic [ref=e384]:
            - paragraph [ref=e385]: Phase 1 · Baseline
            - generic [ref=e386]:
              - img [ref=e388]
              - heading "Visual baseline" [level=3] [ref=e390]
            - paragraph [ref=e391]:
              - text: Built a
              - code [ref=e392]: _page_header
              - text: partial and
              - code [ref=e393]: page_header
              - text: helper with meta/tabs/actions slots, backfilled ~30 pages silently by having the legacy partial delegate to the new helper. Added an environment/account badge in the top bar, an explicit multi-tenant signal at a glance.
          - generic [ref=e394]:
            - paragraph [ref=e395]: Phase 2 · The shell
            - generic [ref=e396]:
              - img [ref=e398]
              - heading "Two-tier shell" [level=3] [ref=e400]
            - paragraph [ref=e401]:
              - text: Replaced a single always-expanded 300 px sidebar with a 56 px product rail + 280 px contextual panel keyed off
              - code [ref=e402]: controller_name
              - text: via a
              - code [ref=e403]: SidebarHelper
              - text: "mapping. Crucially:"
              - strong [ref=e404]: server-rendered active state
              - text: . No client JS decides which section is open on first paint.
          - generic [ref=e405]:
            - paragraph [ref=e406]: Phase 3 · ⌘K
            - generic [ref=e407]:
              - img [ref=e409]
              - heading "Command palette" [level=3] [ref=e411]
            - paragraph [ref=e412]:
              - text: A read-only
              - code [ref=e413]: CommandSearchController#index
              - text: scoped to
              - code [ref=e414]: current_account
              - text: ", grouped (Custom Rules, Rate Plans, Facilities, Accounts, Jump-to), debounced at 150 ms, rendered via a native"
              - code [ref=e415]: <dialog>
              - text: "with HTMX. Deliberate constraint: the palette"
              - strong [ref=e416]: does not replace per-page search
              - text: . It's additive.
          - generic [ref=e417]:
            - paragraph [ref=e418]: Phase 4 · Polish
            - generic [ref=e419]:
              - img [ref=e421]
              - heading "Density, shortcuts, inspector" [level=3] [ref=e423]
            - list [ref=e424]:
              - listitem [ref=e425]:
                - img [ref=e427]
                - generic [ref=e429]:
                  - text: Density toggle persisted on the user record, read pre-paint from
                  - code [ref=e430]: <head>
                  - text: to avoid FOUC.
              - listitem [ref=e431]:
                - img [ref=e433]
                - generic [ref=e435]:
                  - text: Shortcut overlay (
                  - code [ref=e436]: "?"
                  - text: ) gated to skip when a form field has focus.
              - listitem [ref=e437]:
                - img [ref=e439]
                - generic [ref=e441]: Inspector slide-over built with HTMX to match the rest of the app.
              - listitem [ref=e442]:
                - img [ref=e444]
                - generic [ref=e446]:
                  - text: Skeleton loader primitive honoring
                  - code [ref=e447]: prefers-reduced-motion
                  - text: .
    - generic [ref=e448]:
      - generic [ref=e449]:
        - paragraph [ref=e450]: What it looks like now
        - heading "One system, documented in the app" [level=2] [ref=e451]
        - paragraph [ref=e452]: Buttons collapsed to a single set of component classes. Inputs, selects, and labels moved onto shared primitives with consistent padding, focus states, and required-field treatment. Tables standardized on one header style, one pagination component, one density rule.
        - paragraph [ref=e453]: All of it lives in an admin-only style guide that ships with the app, so the next person to build a screen inherits the decisions instead of re-litigating them. These are whole-page captures, so each one opens to its full height in place.
      - generic [ref=e455]:
        - 'figure "Full page Style guide: overview The admin-only style guide: every primitive, button, table, and form pattern documented in one place." [ref=e456]':
          - paragraph [ref=e457]: Plate / 01
          - generic [ref=e458]:
            - generic [ref=e459]:
              - 'img "VMSpark admin UI playground: the style-guide overview indexing every primitive"'
            - button "Expand":
              - generic:
                - img
              - generic: Expand
          - generic [ref=e460]:
            - generic [ref=e461]:
              - generic [ref=e462]: Full page
              - generic [ref=e463]: "Style guide: overview"
            - paragraph [ref=e464]: "The admin-only style guide: every primitive, button, table, and form pattern documented in one place."
        - 'figure "Full page Primitives Color, type, spacing, and elevation: the shared primitives every screen now draws from." [ref=e465]':
          - paragraph [ref=e466]: Plate / 02
          - generic [ref=e467]:
            - generic [ref=e468]:
              - 'img "VMSpark UI primitives: color ramps, type scale, spacing, and elevation"'
            - button "Expand":
              - generic:
                - img
              - generic: Expand
          - generic [ref=e469]:
            - generic [ref=e470]:
              - generic [ref=e471]: Full page
              - generic [ref=e472]: Primitives
            - paragraph [ref=e473]: "Color, type, spacing, and elevation: the shared primitives every screen now draws from."
        - figure "Full page Buttons The eight-plus button treatments from the audit, resolved into one set of component classes covering every variant, size, and state." [ref=e474]:
          - paragraph [ref=e475]: Plate / 03
          - generic [ref=e476]:
            - generic [ref=e477]:
              - 'img "VMSpark button system: variants, sizes, states, and density from one set of classes"'
            - button "Expand":
              - generic:
                - img
              - generic: Expand
          - generic [ref=e478]:
            - generic [ref=e479]:
              - generic [ref=e480]: Full page
              - generic [ref=e481]: Buttons
            - paragraph [ref=e482]: The eight-plus button treatments from the audit, resolved into one set of component classes covering every variant, size, and state.
        - figure "Full page Tables One header style, one density rule, one pagination component, standardized across every table." [ref=e483]:
          - paragraph [ref=e484]: Plate / 04
          - generic [ref=e485]:
            - generic [ref=e486]:
              - 'img "VMSpark table system: one header style, one density rule, one pagination component"'
            - button "Expand":
              - generic:
                - img
              - generic: Expand
          - generic [ref=e487]:
            - generic [ref=e488]:
              - generic [ref=e489]: Full page
              - generic [ref=e490]: Tables
            - paragraph [ref=e491]: One header style, one density rule, one pagination component, standardized across every table.
    - generic [ref=e492]:
      - generic [ref=e493]:
        - paragraph [ref=e494]: Screens and flows
        - heading "What actually got built" [level=2] [ref=e495]
        - paragraph [ref=e496]: Eleven screens and five flows, with the reasoning written onto each sheet rather than left for a reader to infer. These are reconstructions, drawn after the fact to document the decisions rather than the original working files.
        - paragraph [ref=e497]:
          - text: "Four of them went through three passes: a crude sketch to argue about the shape, a lo-fi wireframe to fix it, and the real thing with the reasoning annotated on top. The ladder ends in colour rather than greyscale here, because arriving at"
          - emphasis [ref=e498]: one
          - text: visual language is what this project was.
      - generic [ref=e499]:
        - paragraph [ref=e500]: How a screen got built
        - figure "The passes run left to right, and the ladder ends in colour rather than greyscale because arriving at one visual language is what this project was." [ref=e501]:
          - generic [ref=e502]:
            - generic [ref=e503]:
              - generic [ref=e504]:
                - img "App shell, rough hand-drawn concept sketch."
              - paragraph [ref=e505]: Sketch
              - paragraph [ref=e506]: Arguing about the shape.
            - generic [ref=e507]:
              - generic [ref=e508]:
                - img "App shell, clean wireframe without annotations."
              - paragraph [ref=e509]: Wireframe
              - paragraph [ref=e510]: Fixing it.
            - generic [ref=e511]:
              - 'img "Annotated design sheet of the VMSpark app shell: icon rail, nav sidebar, workspace switcher, command palette and impersonation control, with callouts explaining why tenant identity lives in the chrome and why the token path had to be the shortest one." [ref=e513]'
              - paragraph [ref=e514]:
                - text: Annotated
                - button "Full size" [ref=e515] [cursor=pointer]:
                  - img [ref=e517]
                  - text: Full size
              - paragraph [ref=e519]: The reasoning written on top.
          - generic [ref=e520]: The passes run left to right, and the ladder ends in colour rather than greyscale because arriving at one visual language is what this project was.
      - generic [ref=e522]:
        - figure "01App shell Full size One shell applied to every authenticated screen. The sprawl came from every view having somewhere of its own to decide." [ref=e523]:
          - paragraph [ref=e524]: Plate / 01
          - 'img "Annotated design sheet of the VMSpark app shell: icon rail, nav sidebar, workspace switcher, command palette and impersonation control, with callouts explaining why tenant identity lives in the chrome and why the token path had to be the shortest one." [ref=e526]'
          - generic [ref=e527]:
            - generic [ref=e528]:
              - generic [ref=e529]: 01/App shell
              - button "Full size" [ref=e530] [cursor=pointer]:
                - img [ref=e532]
                - text: Full size
            - paragraph [ref=e534]: One shell applied to every authenticated screen. The sprawl came from every view having somewhere of its own to decide.
        - figure "02Job listings Full size The primary triage surface. Status is a tab count, and a failed row stays in the list rather than being exiled to another screen." [ref=e535]:
          - paragraph [ref=e536]: Plate / 02
          - 'img "Annotated design sheet of the job listings grid: per-column filter inputs, status tabs carrying queue depth, and a tinted failed row among the healthy ones, with callouts on queued reprocessing and per-user column persistence." [ref=e538]'
          - generic [ref=e539]:
            - generic [ref=e540]:
              - generic [ref=e541]: 02/Job listings
              - button "Full size" [ref=e542] [cursor=pointer]:
                - img [ref=e544]
                - text: Full size
            - paragraph [ref=e546]: The primary triage surface. Status is a tab count, and a failed row stays in the list rather than being exiled to another screen.
        - figure "03Inspector Full size Why one listing ended up in the state it did. Raw payload beside mapped result, so a failure is self-explaining rather than a support ticket." [ref=e547]:
          - paragraph [ref=e548]: Plate / 03
          - 'img "Annotated design sheet of the listing inspector: an overlay opening over the filtered grid, showing the mapped result beside the raw VMS payload with the unresolved facility field marked on both sides, plus a timestamped process history." [ref=e550]'
          - generic [ref=e551]:
            - generic [ref=e552]:
              - generic [ref=e553]: 03/Inspector
              - button "Full size" [ref=e554] [cursor=pointer]:
                - img [ref=e556]
                - text: Full size
            - paragraph [ref=e558]: Why one listing ended up in the state it did. Raw payload beside mapped result, so a failure is self-explaining rather than a support ticket.
        - figure "04Data mapping Full size The operational centre. Unmapped values are a revenue problem, not a tidiness problem, so the queue is built to visibly empty." [ref=e559]:
          - paragraph [ref=e560]: Plate / 04
          - 'img "Annotated design sheet of the data mapping screen: entity-type tabs carrying unmapped counts, and two-column resolution cards pairing each inbound VMS value with its ATS candidates, with callouts on auto-mapping, focus advance, and why Ignore is a real decision." [ref=e562]'
          - generic [ref=e563]:
            - generic [ref=e564]:
              - generic [ref=e565]: 04/Data mapping
              - button "Full size" [ref=e566] [cursor=pointer]:
                - img [ref=e568]
                - text: Full size
            - paragraph [ref=e570]: The operational centre. Unmapped values are a revenue problem, not a tidiness problem, so the queue is built to visibly empty.
      - generic [ref=e572]:
        - paragraph [ref=e573]: The rest of the system
        - paragraph [ref=e574]: Seven more screens, ending with the component and token inventory that replaced eight button styles, ten form-element styles and six table conventions with one of each.
        - list [ref=e575]:
          - listitem [ref=e576]:
            - figure "Custom rules Full size" [ref=e577]:
              - img "Annotated design sheet of the custom rules screen." [ref=e579]
              - generic [ref=e581]:
                - generic [ref=e582]: Custom rules
                - button "Full size" [ref=e583] [cursor=pointer]:
                  - img [ref=e585]
                  - text: Full size
          - listitem [ref=e587]:
            - figure "Candidate profiles Full size" [ref=e588]:
              - img "Annotated design sheet of the candidate profiles screen." [ref=e590]
              - generic [ref=e592]:
                - generic [ref=e593]: Candidate profiles
                - button "Full size" [ref=e594] [cursor=pointer]:
                  - img [ref=e596]
                  - text: Full size
          - listitem [ref=e598]:
            - figure "Applications & matches Full size" [ref=e599]:
              - img "Annotated design sheet of the applications & matches screen." [ref=e601]
              - generic [ref=e603]:
                - generic [ref=e604]: Applications & matches
                - button "Full size" [ref=e605] [cursor=pointer]:
                  - img [ref=e607]
                  - text: Full size
          - listitem [ref=e609]:
            - figure "Settings Full size" [ref=e610]:
              - img "Annotated design sheet of the settings screen." [ref=e612]
              - generic [ref=e614]:
                - generic [ref=e615]: Settings
                - button "Full size" [ref=e616] [cursor=pointer]:
                  - img [ref=e618]
                  - text: Full size
          - listitem [ref=e620]:
            - figure "Candidate portal Full size" [ref=e621]:
              - img "Annotated design sheet of the candidate portal screen." [ref=e623]
              - generic [ref=e625]:
                - generic [ref=e626]: Candidate portal
                - button "Full size" [ref=e627] [cursor=pointer]:
                  - img [ref=e629]
                  - text: Full size
          - listitem [ref=e631]:
            - figure "AI usage Full size" [ref=e632]:
              - img "Annotated design sheet of the ai usage screen." [ref=e634]
              - generic [ref=e636]:
                - generic [ref=e637]: AI usage
                - button "Full size" [ref=e638] [cursor=pointer]:
                  - img [ref=e640]
                  - text: Full size
          - listitem [ref=e642]:
            - figure "The design system Full size" [ref=e643]:
              - img "Annotated design sheet of the the design system screen." [ref=e645]
              - generic [ref=e647]:
                - generic [ref=e648]: The design system
                - button "Full size" [ref=e649] [cursor=pointer]:
                  - img [ref=e651]
                  - text: Full size
      - generic [ref=e654]:
        - paragraph [ref=e655]: User flows
        - paragraph [ref=e656]: Five flows covering the paths the screens sit on. Each splits what a person does from what the system does with it, because in a pipeline product the gap between those two is where the design decisions live.
        - generic [ref=e657]:
          - figure "F1Ingestion Full size The pipeline the redesign was forbidden from touching. Processed, failed and skipped are all first-class outcomes." [ref=e658]:
            - paragraph [ref=e659]: Plate / F1
            - 'img "User flow diagram: ingestion. The pipeline the redesign was forbidden from touching. Processed, failed and skipped are all first-class outcomes." [ref=e661]'
            - generic [ref=e662]:
              - generic [ref=e663]:
                - generic [ref=e664]: F1/Ingestion
                - button "Full size" [ref=e665] [cursor=pointer]:
                  - img [ref=e667]
                  - text: Full size
              - paragraph [ref=e669]: The pipeline the redesign was forbidden from touching. Processed, failed and skipped are all first-class outcomes.
          - figure "F2Mapping resolution & fan-out Full size What an operator does to clear one unmapped facility, and what that single save costs downstream." [ref=e670]:
            - paragraph [ref=e671]: Plate / F2
            - 'img "User flow diagram: mapping resolution & fan-out. What an operator does to clear one unmapped facility, and what that single save costs downstream." [ref=e673]'
            - generic [ref=e674]:
              - generic [ref=e675]:
                - generic [ref=e676]: F2/Mapping resolution & fan-out
                - button "Full size" [ref=e677] [cursor=pointer]:
                  - img [ref=e679]
                  - text: Full size
              - paragraph [ref=e681]: What an operator does to clear one unmapped facility, and what that single save costs downstream.
          - figure "F3Rule engine Full size Per-account rules as the escape hatch that keeps client special cases out of a shared pipeline." [ref=e682]:
            - paragraph [ref=e683]: Plate / F3
            - 'img "User flow diagram: rule engine. Per-account rules as the escape hatch that keeps client special cases out of a shared pipeline." [ref=e685]'
            - generic [ref=e686]:
              - generic [ref=e687]:
                - generic [ref=e688]: F3/Rule engine
                - button "Full size" [ref=e689] [cursor=pointer]:
                  - img [ref=e691]
                  - text: Full size
              - paragraph [ref=e693]: Per-account rules as the escape hatch that keeps client special cases out of a shared pipeline.
          - figure "F4Candidate matching Full size The system proposes, a recruiter disposes. Submission is the only externally visible step, so it is the only one that asks." [ref=e694]:
            - paragraph [ref=e695]: Plate / F4
            - 'img "User flow diagram: candidate matching. The system proposes, a recruiter disposes. Submission is the only externally visible step, so it is the only one that asks." [ref=e697]'
            - generic [ref=e698]:
              - generic [ref=e699]:
                - generic [ref=e700]: F4/Candidate matching
                - button "Full size" [ref=e701] [cursor=pointer]:
                  - img [ref=e703]
                  - text: Full size
              - paragraph [ref=e705]: The system proposes, a recruiter disposes. Submission is the only externally visible step, so it is the only one that asks.
          - figure "F5User journeys Full size Three people with opposite needs, one shell, and a mapping queue upstream of all of them." [ref=e706]:
            - paragraph [ref=e707]: Plate / F5
            - 'img "User flow diagram: user journeys. Three people with opposite needs, one shell, and a mapping queue upstream of all of them." [ref=e709]'
            - generic [ref=e710]:
              - generic [ref=e711]:
                - generic [ref=e712]: F5/User journeys
                - button "Full size" [ref=e713] [cursor=pointer]:
                  - img [ref=e715]
                  - text: Full size
              - paragraph [ref=e717]: Three people with opposite needs, one shell, and a mapping queue upstream of all of them.
    - generic [ref=e720]:
      - generic [ref=e721]:
        - paragraph [ref=e722]: Step 04
        - heading "What shipping it changed" [level=2] [ref=e723]
      - generic [ref=e724]:
        - generic [ref=e725]:
          - paragraph [ref=e726]: The app now reads as the same caliber product it always was. The pipeline, the rule engine, the ATS integrations, the account scoping. None of that changed. A user who logged in the day of the cutover saw their data, their filters, their scroll position, and their workflows intact. They just saw them inside a shell that looks like it belongs in 2026.
          - paragraph [ref=e727]:
            - text: "That shift paid off on both sides of the business. Operators who spent every working day inside the tool stopped mentally filtering out visual noise: buttons, forms, tables, and labels finally behaved the same from screen to screen, which made the product feel deliberate and trustworthy rather than patched together. Leadership stopped apologizing for the admin UI in investor demos. The audit is what made both of those possible:"
            - strong [ref=e728]: nothing got fixed until every inconsistency had been written down and traced to its cause.
        - generic [ref=e729]:
          - generic [ref=e730]:
            - img [ref=e732]
            - heading "Zero pipeline regressions" [level=3] [ref=e734]
            - paragraph [ref=e735]: No regressions reported against the ingest or fan-out paths after cutover.
          - generic [ref=e736]:
            - img [ref=e738]
            - heading "Operator confidence" [level=3] [ref=e740]
            - paragraph [ref=e741]: Operators use a tool that looks like one product, not ten. The UI stopped fighting them at every screen.
          - generic [ref=e742]:
            - img [ref=e744]
            - heading "Investor confidence" [level=3] [ref=e746]
            - paragraph [ref=e747]: Demos open with the product, not with caveats about the surface it lives on.
          - generic [ref=e748]:
            - img [ref=e750]
            - heading "No new JS on hot paths" [level=3] [ref=e752]
            - paragraph [ref=e753]: Palette and inspector load on demand. First paint got lighter, not heavier.
        - generic [ref=e754]:
          - paragraph [ref=e755]: A detail worth calling out
          - heading "Aligning the app with the marketing site" [level=3] [ref=e756]
          - paragraph [ref=e757]:
            - text: Partway through Phase 2 I pulled the marketing site's
            - code [ref=e758]: :root
            - text: "custom properties (five brand colors, pinned) and re-pointed the app's semantic token layer at them. The semantic layer didn't change shape; I re-pointed five values and added three new tokens. Every existing consumer got the new look for free. Two non-obvious behaviors made it across intentionally: primary button hover swaps orange to steel blue rather than darkening, and link hover goes near-black instead of lighter, both inherited from the marketing brand."
          - figure "Live site vmspark.com" [ref=e760]:
            - paragraph [ref=e761]: Plate / 01
            - link "Visit vmspark.com (opens in a new tab)" [ref=e762] [cursor=pointer]:
              - /url: https://vmspark.com/
              - generic [ref=e763]:
                - img "The VMSpark marketing site, the source of the five pinned brand colors the admin app's token layer was re-pointed at" [ref=e764]
                - generic [ref=e765]:
                  - text: Visit site
                  - img [ref=e767]
            - generic [ref=e769]:
              - generic [ref=e770]: Live site
              - generic [ref=e771]:
                - text: vmspark.com
                - img [ref=e773]
        - figure [ref=e775]:
          - blockquote [ref=e776]: The shell is the surface operators use every day and the one investors see in a demo. The audit is what let me rebuild it without breaking the product underneath.
    - figure "What Jon said Jon Sturm Jon Sturm Director of Product & Customer Success · VMSpark" [ref=e779]:
      - generic [ref=e780]:
        - paragraph [ref=e781]: What Jon said
        - generic [ref=e782]:
          - img "Jon Sturm" [ref=e783]
          - generic [ref=e784]:
            - paragraph [ref=e785]: Jon Sturm
            - paragraph [ref=e786]: Director of Product & Customer Success · VMSpark
      - blockquote [ref=e787]:
        - img [ref=e789]
        - paragraph [ref=e791]: Josh inventoried 350 ERB templates before writing a line of new CSS, then turned that audit into a phased rollout we could ship behind no flags. The shell finally reads like the enterprise product the pipeline always was, and operators didn't lose a single piece of muscle memory in the move.
    - generic [ref=e793]:
      - paragraph [ref=e794]: Product design engineering
      - heading "Four phases, no feature flags, nothing broken underneath." [level=2] [ref=e795]
      - paragraph [ref=e796]: The interface and the design system are where I bring the most value, backed by enough command of the Rails underneath to ship the whole thing finished. That combination is what let this rebuild land on a live multi-tenant product without a rollback plan. If that's the bar you're hiring for, let's talk.
      - generic [ref=e797]:
        - link "Get in touch" [ref=e798] [cursor=pointer]:
          - /url: /contact/
          - img [ref=e800]
          - text: Get in touch
        - link "Résumé" [ref=e802] [cursor=pointer]:
          - /url: /resume/
          - img [ref=e804]
          - text: Résumé
      - generic [ref=e806]:
        - 'link "Next: Logatot" [ref=e807] [cursor=pointer]':
          - /url: /projects/logatot/
          - text: "Next: Logatot"
          - img [ref=e809]
        - link "Back to all projects" [ref=e811] [cursor=pointer]:
          - /url: /projects/
          - text: Back to all projects
          - img [ref=e813]
  - contentinfo [ref=e815]:
    - generic [ref=e816]:
      - generic [ref=e817]:
        - generic [ref=e818]:
          - img "Joshua Briley" [ref=e819]:
            - generic [ref=e820]: JB
            - generic [ref=e821]:
              - text: Joshua Briley
              - generic [ref=e822]: .
          - paragraph [ref=e823]: "Design- and front-end-focused product design engineer. The interface is where I bring the most value: design-grade, accessible UI, finished to the last detail."
          - paragraph [ref=e824]: Open to product design engineering roles
        - generic [ref=e826]:
          - navigation "Site" [ref=e827]:
            - heading "Site" [level=2] [ref=e828]
            - list [ref=e829]:
              - listitem [ref=e830]:
                - link "About" [ref=e831] [cursor=pointer]:
                  - /url: /about/
              - listitem [ref=e832]:
                - link "Projects" [ref=e833] [cursor=pointer]:
                  - /url: /projects/
              - listitem [ref=e834]:
                - link "Résumé" [ref=e835] [cursor=pointer]:
                  - /url: /resume/
              - listitem [ref=e836]:
                - link "Contact" [ref=e837] [cursor=pointer]:
                  - /url: /contact/
          - navigation "More" [ref=e838]:
            - heading "More" [level=2] [ref=e839]
            - list [ref=e840]:
              - listitem [ref=e841]:
                - link "Personal Projects" [ref=e842] [cursor=pointer]:
                  - /url: /personal-projects/
              - listitem [ref=e843]:
                - link "Testimonials" [ref=e844] [cursor=pointer]:
                  - /url: /testimonials/
              - listitem [ref=e845]:
                - link "Blog" [ref=e846] [cursor=pointer]:
                  - /url: /blog/
              - listitem [ref=e847]:
                - link "Tools" [ref=e848] [cursor=pointer]:
                  - /url: /tools/
              - listitem [ref=e849]:
                - link "Style Guide" [ref=e850] [cursor=pointer]:
                  - /url: /style-guide/
      - generic [ref=e851]:
        - generic [ref=e852]:
          - generic [ref=e853]: © 2026 Joshua Briley
          - link "Privacy" [ref=e854] [cursor=pointer]:
            - /url: /privacy/
          - link "Terms" [ref=e855] [cursor=pointer]:
            - /url: /terms/
        - generic [ref=e856]:
          - link "LinkedIn" [ref=e857] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/joshuabriley/
            - text: LinkedIn
            - img [ref=e859]
          - link "GitHub" [ref=e861] [cursor=pointer]:
            - /url: https://github.com/somecallmejosh
            - text: GitHub
            - img [ref=e863]
      - paragraph [ref=e865]: Designed by me, Joshua Briley, and built with my favorite static site generator, Astro.
  - generic [ref=e868]:
    - button "Menu" [ref=e869]:
      - img [ref=e871]
      - generic: Menu
    - button "Inspect" [ref=e875]:
      - img [ref=e877]
      - generic: Inspect
    - button "Audit" [ref=e879]:
      - img [ref=e881]
      - generic: Audit
    - button "Settings" [ref=e884]:
      - img [ref=e886]
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