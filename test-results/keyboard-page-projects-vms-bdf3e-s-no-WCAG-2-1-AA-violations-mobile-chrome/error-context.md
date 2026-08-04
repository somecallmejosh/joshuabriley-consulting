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
      - button "Toggle navigation menu" [ref=e9] [cursor=pointer]:
        - img [ref=e11]
  - main [ref=e13]:
    - generic [ref=e15]:
      - navigation "Breadcrumb" [ref=e16]:
        - link "Projects" [ref=e17] [cursor=pointer]:
          - /url: /projects/
        - img [ref=e19]
        - generic [ref=e21]: VMSpark
      - generic [ref=e22]:
        - generic [ref=e23]:
          - generic [ref=e24]:
            - img "VMSpark logo" [ref=e25]
            - paragraph [ref=e27]: Case study
          - heading "The pipeline was enterprise-grade. The app in front of it wasn't." [level=1] [ref=e28]:
            - text: The pipeline was enterprise-grade. The app
            - emphasis [ref=e29]: in front of it
            - text: wasn't.
          - paragraph [ref=e30]: VMSpark's pipeline normalizes thousands of VMS jobs a day and fans them out to a dozen-plus ATS providers. The admin app in front of it, the surface operators work in all day and investors judge in the first thirty seconds of a demo, still looked like a Rails scaffold from 2018. I owned the audit, the design direction, and the phased rebuild that closed that gap, without touching the pipeline underneath.
        - complementary "Project details" [ref=e31]:
          - generic [ref=e32]:
            - generic [ref=e33]:
              - term [ref=e34]: Role
              - definition [ref=e35]: Product Design Engineer
            - generic [ref=e36]:
              - term [ref=e37]: Client
              - definition [ref=e38]: VMSpark
            - generic [ref=e39]:
              - term [ref=e40]: Stack
              - definition [ref=e41]: Rails · Hotwire
            - generic [ref=e42]:
              - term [ref=e43]: Focus
              - definition [ref=e44]: Shell · Tokens
    - generic [ref=e46]:
      - paragraph [ref=e47]: Receipts
      - generic [ref=e48]:
        - generic [ref=e49]:
          - term [ref=e50]: Skills proven
          - definition [ref=e51]:
            - list [ref=e52]:
              - listitem [ref=e53]:
                - img [ref=e55]
                - generic [ref=e57]: Design-system audit
              - listitem [ref=e58]:
                - img [ref=e60]
                - generic [ref=e62]: UI/UX design direction
              - listitem [ref=e63]:
                - img [ref=e65]
                - generic [ref=e67]: Accessible component APIs
              - listitem [ref=e68]:
                - img [ref=e70]
                - generic [ref=e72]: Frontend architecture
              - listitem [ref=e73]:
                - img [ref=e75]
                - generic [ref=e77]: Style-guide documentation
              - listitem [ref=e78]:
                - img [ref=e80]
                - generic [ref=e82]: Product decisions
        - generic [ref=e83]:
          - term [ref=e84]: Stack
          - definition [ref=e85]:
            - list [ref=e86]:
              - listitem [ref=e87]:
                - img [ref=e89]
                - generic [ref=e91]: Ruby on Rails
              - listitem [ref=e92]:
                - img [ref=e94]
                - generic [ref=e96]: Stimulus.js
              - listitem [ref=e97]:
                - img [ref=e99]
                - generic [ref=e101]: Design tokens
              - listitem [ref=e102]:
                - img [ref=e104]
                - generic [ref=e106]: Modern CSS
        - generic [ref=e107]:
          - term [ref=e108]: Quality
          - definition [ref=e109]:
            - list [ref=e110]:
              - listitem [ref=e111]:
                - img [ref=e113]
                - generic [ref=e115]: Keyboard operability
              - listitem [ref=e116]:
                - img [ref=e118]
                - generic [ref=e120]: Focus management
              - listitem [ref=e121]:
                - img [ref=e123]
                - generic [ref=e125]: ARIA semantics
              - listitem [ref=e126]:
                - img [ref=e128]
                - generic [ref=e130]: Token contrast checks
        - generic [ref=e131]:
          - term [ref=e132]: Outcomes
          - definition [ref=e133]:
            - list [ref=e134]:
              - listitem [ref=e135]:
                - img [ref=e137]
                - generic [ref=e139]: Zero pipeline regressions
              - listitem [ref=e140]:
                - img [ref=e142]
                - generic [ref=e144]: No operator retraining
              - listitem [ref=e145]:
                - img [ref=e147]
                - generic [ref=e149]: One token layer, app and brand
              - listitem [ref=e150]:
                - img [ref=e152]
                - generic [ref=e154]: No new JS on hot paths
    - generic [ref=e156]:
      - paragraph [ref=e157]: On the docket
      - list [ref=e158]:
        - listitem [ref=e159]:
          - link "01 Inventory before invention" [ref=e160] [cursor=pointer]:
            - /url: "#inventory"
            - generic [ref=e161]: "01"
            - img [ref=e163]
            - generic [ref=e165]: Inventory before invention
            - img [ref=e167]
        - listitem [ref=e169]:
          - link "02 Three directions, one chosen" [ref=e170] [cursor=pointer]:
            - /url: "#directions"
            - generic [ref=e171]: "02"
            - img [ref=e173]
            - generic [ref=e175]: Three directions, one chosen
            - img [ref=e177]
        - listitem [ref=e179]:
          - link "03 Phased rollout" [ref=e180] [cursor=pointer]:
            - /url: "#rollout"
            - generic [ref=e181]: "03"
            - img [ref=e183]
            - generic [ref=e185]: Phased rollout
            - img [ref=e187]
        - listitem [ref=e189]:
          - link "04 Screens and flows" [ref=e190] [cursor=pointer]:
            - /url: "#sheets"
            - generic [ref=e191]: "04"
            - img [ref=e193]
            - generic [ref=e195]: Screens and flows
            - img [ref=e197]
        - listitem [ref=e199]:
          - link "05 What shipping it changed" [ref=e200] [cursor=pointer]:
            - /url: "#outcome"
            - generic [ref=e201]: "05"
            - img [ref=e203]
            - generic [ref=e205]: What shipping it changed
            - img [ref=e207]
      - paragraph [ref=e209]: VMSpark normalizes thousands of VMS job listings a day, runs them through an account-specific rule engine, and fans them out to whichever ATS the customer has contracted with. The product works. The shell it lived in did not look like it. Leadership was scheduling investor demos, and the admin app, the surface those conversations lived inside, felt like a Rails scaffold from 2018. Operators noticed it daily. Investors noticed it in the first thirty seconds of a demo.
      - paragraph [ref=e210]:
        - text: "The brief I gave myself:"
        - strong [ref=e211]: make the admin app read as a modern, enterprise-grade product that matches the sophistication of the pipeline underneath
        - text: ", without touching the pipeline, the rule engine, or anything an operator had muscle memory for. That meant owning it as one job: the design-system audit, the product calls about what to build and what to drop, and the Rails engineering to ship it."
    - generic [ref=e213]:
      - generic [ref=e214]:
        - generic [ref=e215]:
          - paragraph [ref=e216]: Step 01
          - heading "Inventory before invention" [level=2] [ref=e217]
        - generic [ref=e218]:
          - generic [ref=e219]:
            - paragraph [ref=e220]:
              - text: "Sprawl this wide can't be fixed one screen at a time. Restyle the buttons on Manual Jobs and seven other button treatments are still waiting elsewhere, with no way to know you've found them all. So before writing a line of new CSS, I cataloged what was there: a"
              - strong [ref=e221]: ~700-line design inventory
              - text: covering every one of the 350 ERB templates (roughly 11,800 lines) across the app.
            - paragraph [ref=e222]: "The audit wasn't a complaint list. It was the map that told me which problems were cosmetic (fixable during the redesign), which were structural (needed architectural decisions), and which were out of scope (pipeline-adjacent, don't touch). Most of what I found was UI sprawl: the same interaction rendered a dozen different ways across the app, each screen a small argument against the one before it."
          - generic [ref=e223]:
            - generic [ref=e224]:
              - generic [ref=e226]: "350"
              - paragraph [ref=e227]: ERB templates inventoried
            - generic [ref=e228]:
              - generic [ref=e230]: 8+
              - paragraph [ref=e231]: button styles, one concept
            - generic [ref=e232]:
              - generic [ref=e234]: 10+
              - paragraph [ref=e235]: form-element styles
            - generic [ref=e236]:
              - generic [ref=e238]: ~40
              - paragraph [ref=e239]: views bypassing the tokens
          - generic [ref=e240]:
            - paragraph [ref=e241]: A few of the findings
            - generic [ref=e242]:
              - generic [ref=e243]:
                - generic [ref=e244]: 8+
                - generic [ref=e245]:
                  - heading "Button styles competing for attention" [level=3] [ref=e246]
                  - paragraph [ref=e247]:
                    - text: Primary, secondary, danger, and ghost variants, each implemented two or three different ways. Some leaned on Bootstrap utility classes, others on per-view custom CSS, a few were inline-styled anchors pretending to be buttons. A
                    - emphasis [ref=e248]: Save
                    - text: on one screen didn’t match a
                    - emphasis [ref=e249]: Save
                    - text: two clicks away.
              - generic [ref=e250]:
                - generic [ref=e251]: 10+
                - generic [ref=e252]:
                  - heading "Form element styles, all at once" [level=3] [ref=e253]
                  - paragraph [ref=e254]:
                    - text: Plain Rails helpers sat next to Bootstrap
                    - code [ref=e255]: form-control
                    - text: inputs, Select2 widgets, and hand-rolled dropdowns. Border radius, padding, focus rings, and disabled treatments all diverged. The same concept (
                    - emphasis [ref=e256]: pick one from a list
                    - text: ) rendered five different ways across the app.
              - generic [ref=e257]:
                - generic [ref=e258]: "5"
                - generic [ref=e259]:
                  - heading "Form-rendering patterns, coexisting" [level=3] [ref=e260]
                  - paragraph [ref=e261]:
                    - code [ref=e262]: form_with(model:)
                    - text: ", legacy"
                    - code [ref=e263]: form_for
                    - text: ","
                    - code [ref=e264]: form_with(url:)
                    - text: ", bare"
                    - code [ref=e265]: <form>
                    - text: + HTMX, and HTMX-only with
                    - code [ref=e266]: hx-include
                    - text: .
              - generic [ref=e267]:
                - generic [ref=e268]: 6+
                - generic [ref=e269]:
                  - heading "Tables with no shared convention" [level=3] [ref=e270]
                  - paragraph [ref=e271]: "Row striping in some, not in others. Headers styled four ways: dark fill, light fill, borderless, and all-caps. Pagination rendered with Kaminari on one screen and a bespoke HTMX block on the next. Density jumped from compressed to roomy between adjacent views with no underlying logic."
              - generic [ref=e272]:
                - generic [ref=e273]: 4+
                - generic [ref=e274]:
                  - heading "Labeling strategies, all coexisting" [level=3] [ref=e275]
                  - paragraph [ref=e276]:
                    - text: Sentence case, Title Case, ALL CAPS, and placeholder-as-label all appeared across the app. Required indicators were sometimes asterisks, sometimes parenthetical
                    - emphasis [ref=e277]: (required)
                    - text: ", sometimes absent. The same field concept carried different names on different screens ("
                    - emphasis [ref=e278]: Bill Rate
                    - text: ","
                    - emphasis [ref=e279]: Rate
                    - text: ","
                    - emphasis [ref=e280]: Pay Rate
                    - text: ).
              - generic [ref=e281]:
                - generic [ref=e282]: ~40
                - generic [ref=e283]:
                  - heading "Views bypassing the token system" [level=3] [ref=e284]
                  - paragraph [ref=e285]:
                    - text: A semantic color-token system already existed in
                    - code [ref=e286]: _color_tokens.scss
                    - text: ", but dozens of views bypassed it with inline styles, hardcoded hex literals, and raw colors in view-level"
                    - code [ref=e287]: <style>
                    - text: blocks.
              - generic [ref=e288]:
                - generic [ref=e289]: ☠
                - generic [ref=e290]:
                  - heading "Dead code in production" [level=3] [ref=e291]
                  - paragraph [ref=e292]:
                    - text: A zero-byte
                    - code [ref=e293]: _empty.html.erb
                    - text: ", an"
                    - code [ref=e294]: X
                    - text: "-prefixed dead index file (101 lines), an"
                    - code [ref=e295]: ASDKAJSHDJHASD
                    - text: debug string committed to production, and a sticky table header with hardcoded
                    - code [ref=e296]: "background-color: red"
                    - text: from an abandoned debug session.
      - generic [ref=e297]:
        - paragraph [ref=e298]: What the sprawl actually looked like
        - paragraph [ref=e299]: Four screens pulled from the same app, on the same day. Each one makes its own decisions about buttons, inputs, labels, and tables. None of them agree with the others.
        - generic [ref=e300]:
          - figure "Manual Jobs. Three buttons in one row, three different treatments. Labels sit below inputs." [ref=e301]:
            - generic [ref=e302]:
              - 'img "VMSpark Manual Jobs screen. Three buttons sit side by side in the top bar: a filled orange Add New, an outlined Edit Selected, and an outlined Copy Selected. Search inputs appear above the table with labels placed below each field."'
            - generic [ref=e303]:
              - strong [ref=e304]: Manual Jobs.
              - text: Three buttons in one row, three different treatments. Labels sit below inputs.
          - figure "ATS Professions. Labels are now placeholders inside the inputs. Different page, different rule." [ref=e305]:
            - generic [ref=e306]:
              - img "VMSpark ATS Professions screen. Five search inputs use their label text as placeholders inside the fields. A Sync with ATS outlined button sits at the top right."
            - generic [ref=e307]:
              - strong [ref=e308]: ATS Professions.
              - text: Labels are now placeholders inside the inputs. Different page, different rule.
          - 'figure "Announcements. Yet another icon-button pattern: dark gray paired with solid red, nothing like the blue outlines elsewhere." [ref=e309]':
            - generic [ref=e310]:
              - img "VMSpark Announcements screen. Each row ends with a dark gray pencil edit icon next to a solid red trash icon. A filled orange New Announcement button sits in the top right."
            - generic [ref=e311]:
              - strong [ref=e312]: Announcements.
              - text: "Yet another icon-button pattern: dark gray paired with solid red, nothing like the blue outlines elsewhere."
          - figure "OpenAI Usage. A solid dark-navy table header. Every other table in the app uses a light gray one." [ref=e313]:
            - generic [ref=e314]:
              - img "VMSpark OpenAI Usage dashboard. A data table with a solid dark-navy header bar, right-aligned numeric columns, and underlined orange account names."
            - generic [ref=e315]:
              - strong [ref=e316]: OpenAI Usage.
              - text: A solid dark-navy table header. Every other table in the app uses a light gray one.
      - paragraph [ref=e317]: The inventory is what made a root fix possible instead of a screen-by-screen one. Every finding above resolved to a single decision applied once, and because the semantic token layer already existed, each of those decisions cascaded across dozens of views. The remaining work was routing the views through it.
    - generic [ref=e320]:
      - generic [ref=e321]:
        - paragraph [ref=e322]: Step 02
        - heading "Three directions, one chosen" [level=2] [ref=e323]
      - generic [ref=e324]:
        - paragraph [ref=e325]: Rather than design in a vacuum, I spec'd three mutually exclusive directions with honest tradeoffs. Writing the options down, with their reasons and risks, is what lets the choice get overturned on evidence later, not preference.
        - generic [ref=e326]:
          - generic [ref=e327]:
            - generic [ref=e328]:
              - generic [ref=e329]: A
              - generic [ref=e330]: Command Shell
            - paragraph [ref=e331]: Dense · Keyboard-first
            - paragraph [ref=e332]:
              - text: 56 px icon rail, tight 13/14 px type, hairline borders,
              - code [ref=e333]: ⌘K
              - text: palette as the centerpiece, orange reserved for exactly one thing per screen.
            - paragraph [ref=e334]:
              - img [ref=e336]
              - generic [ref=e338]: Signals “scales to power users.”
          - generic [ref=e339]:
            - paragraph [ref=e340]: Chosen
            - generic [ref=e341]:
              - generic [ref=e342]: B
              - generic [ref=e343]: Two-Tier Platform
            - paragraph [ref=e344]: Enterprise-familiar
            - paragraph [ref=e345]: 48 px product rail plus 260 px project nav, the real two-tier pattern. App-switcher waffle, breadcrumbed page headers, right-side inspector panel. Brand orange on active rail state, soft navy-tinted elevation.
            - paragraph [ref=e346]:
              - img [ref=e348]
              - generic [ref=e350]: Every enterprise buyer has used this pattern before.
          - generic [ref=e351]:
            - generic [ref=e352]:
              - generic [ref=e353]: C
              - generic [ref=e354]: Modern Workspace
            - paragraph [ref=e355]: Spacious · Document-forward
            - paragraph [ref=e356]:
              - text: 270 px soft sidebar, no persistent top bar,
              - code [ref=e357]: ⌘K
              - text: by shortcut only, generous spacing.
            - paragraph [ref=e358]:
              - img [ref=e360]
              - generic [ref=e362]: "Risk: reads as lightweight for a dense ops tool."
        - generic [ref=e363]:
          - paragraph [ref=e364]: I chose B. Not because it was the prettiest (C was), and not because it was the most sophisticated (A was). I chose it because the product's audience was multi-tenant operators, and the lowest-risk path to both user and investor trust was the pattern those operators had already used at every previous job.
          - paragraph [ref=e365]:
            - text: I also
            - strong [ref=e366]: dropped
            - text: "a feature I'd originally scoped in: a global \"Create\" button. Most creates in this product are feed-driven, not user-initiated. Adding one would have been copying a convention without earning it."
        - figure [ref=e367]:
          - blockquote [ref=e368]: Pattern familiarity compounds trust faster than novelty does.
    - generic [ref=e371]:
      - generic [ref=e372]:
        - paragraph [ref=e373]: Step 03
        - heading "Phased rollout" [level=2] [ref=e374]
      - generic [ref=e375]:
        - paragraph [ref=e376]:
          - text: The constraint was the whole problem. This was a live multi-tenant product with operators in it every working day, so a big-bang redesign that broke muscle memory, or that needed a rollback plan, was never on the table. Each phase was instead
          - strong [ref=e377]: shippable on its own
          - text: ", behind no flags, with the previous phase's work still intact if I needed to roll back."
        - generic [ref=e378]:
          - generic [ref=e379]:
            - paragraph [ref=e380]: Phase 1 · Baseline
            - generic [ref=e381]:
              - img [ref=e383]
              - heading "Visual baseline" [level=3] [ref=e385]
            - paragraph [ref=e386]:
              - text: Built a
              - code [ref=e387]: _page_header
              - text: partial and
              - code [ref=e388]: page_header
              - text: helper with meta/tabs/actions slots, backfilled ~30 pages silently by having the legacy partial delegate to the new helper. Added an environment/account badge in the top bar, an explicit multi-tenant signal at a glance.
          - generic [ref=e389]:
            - paragraph [ref=e390]: Phase 2 · The shell
            - generic [ref=e391]:
              - img [ref=e393]
              - heading "Two-tier shell" [level=3] [ref=e395]
            - paragraph [ref=e396]:
              - text: Replaced a single always-expanded 300 px sidebar with a 56 px product rail + 280 px contextual panel keyed off
              - code [ref=e397]: controller_name
              - text: via a
              - code [ref=e398]: SidebarHelper
              - text: "mapping. Crucially:"
              - strong [ref=e399]: server-rendered active state
              - text: . No client JS decides which section is open on first paint.
          - generic [ref=e400]:
            - paragraph [ref=e401]: Phase 3 · ⌘K
            - generic [ref=e402]:
              - img [ref=e404]
              - heading "Command palette" [level=3] [ref=e406]
            - paragraph [ref=e407]:
              - text: A read-only
              - code [ref=e408]: CommandSearchController#index
              - text: scoped to
              - code [ref=e409]: current_account
              - text: ", grouped (Custom Rules, Rate Plans, Facilities, Accounts, Jump-to), debounced at 150 ms, rendered via a native"
              - code [ref=e410]: <dialog>
              - text: "with HTMX. Deliberate constraint: the palette"
              - strong [ref=e411]: does not replace per-page search
              - text: . It's additive.
          - generic [ref=e412]:
            - paragraph [ref=e413]: Phase 4 · Polish
            - generic [ref=e414]:
              - img [ref=e416]
              - heading "Density, shortcuts, inspector" [level=3] [ref=e418]
            - list [ref=e419]:
              - listitem [ref=e420]:
                - img [ref=e422]
                - generic [ref=e424]:
                  - text: Density toggle persisted on the user record, read pre-paint from
                  - code [ref=e425]: <head>
                  - text: to avoid FOUC.
              - listitem [ref=e426]:
                - img [ref=e428]
                - generic [ref=e430]:
                  - text: Shortcut overlay (
                  - code [ref=e431]: "?"
                  - text: ) gated to skip when a form field has focus.
              - listitem [ref=e432]:
                - img [ref=e434]
                - generic [ref=e436]: Inspector slide-over built with HTMX to match the rest of the app.
              - listitem [ref=e437]:
                - img [ref=e439]
                - generic [ref=e441]:
                  - text: Skeleton loader primitive honoring
                  - code [ref=e442]: prefers-reduced-motion
                  - text: .
    - generic [ref=e443]:
      - generic [ref=e444]:
        - paragraph [ref=e445]: What it looks like now
        - heading "One system, documented in the app" [level=2] [ref=e446]
        - paragraph [ref=e447]: Buttons collapsed to a single set of component classes. Inputs, selects, and labels moved onto shared primitives with consistent padding, focus states, and required-field treatment. Tables standardized on one header style, one pagination component, one density rule.
        - paragraph [ref=e448]: All of it lives in an admin-only style guide that ships with the app, so the next person to build a screen inherits the decisions instead of re-litigating them. These are whole-page captures, so each one opens to its full height in place.
      - generic [ref=e450]:
        - 'figure "Full page Style guide: overview The admin-only style guide: every primitive, button, table, and form pattern documented in one place." [ref=e451]':
          - paragraph [ref=e452]: Plate / 01
          - generic [ref=e453]:
            - generic [ref=e454]:
              - 'img "VMSpark admin UI playground: the style-guide overview indexing every primitive"'
            - button "Expand":
              - generic:
                - img
              - generic: Expand
          - generic [ref=e455]:
            - generic [ref=e456]:
              - generic [ref=e457]: Full page
              - generic [ref=e458]: "Style guide: overview"
            - paragraph [ref=e459]: "The admin-only style guide: every primitive, button, table, and form pattern documented in one place."
        - 'figure "Full page Primitives Color, type, spacing, and elevation: the shared primitives every screen now draws from." [ref=e460]':
          - paragraph [ref=e461]: Plate / 02
          - generic [ref=e462]:
            - generic [ref=e463]:
              - 'img "VMSpark UI primitives: color ramps, type scale, spacing, and elevation"'
            - button "Expand":
              - generic:
                - img
              - generic: Expand
          - generic [ref=e464]:
            - generic [ref=e465]:
              - generic [ref=e466]: Full page
              - generic [ref=e467]: Primitives
            - paragraph [ref=e468]: "Color, type, spacing, and elevation: the shared primitives every screen now draws from."
        - figure "Full page Buttons The eight-plus button treatments from the audit, resolved into one set of component classes covering every variant, size, and state." [ref=e469]:
          - paragraph [ref=e470]: Plate / 03
          - generic [ref=e471]:
            - generic [ref=e472]:
              - 'img "VMSpark button system: variants, sizes, states, and density from one set of classes"'
            - button "Expand":
              - generic:
                - img
              - generic: Expand
          - generic [ref=e473]:
            - generic [ref=e474]:
              - generic [ref=e475]: Full page
              - generic [ref=e476]: Buttons
            - paragraph [ref=e477]: The eight-plus button treatments from the audit, resolved into one set of component classes covering every variant, size, and state.
        - figure "Full page Tables One header style, one density rule, one pagination component, standardized across every table." [ref=e478]:
          - paragraph [ref=e479]: Plate / 04
          - generic [ref=e480]:
            - generic [ref=e481]:
              - 'img "VMSpark table system: one header style, one density rule, one pagination component"'
            - button "Expand":
              - generic:
                - img
              - generic: Expand
          - generic [ref=e482]:
            - generic [ref=e483]:
              - generic [ref=e484]: Full page
              - generic [ref=e485]: Tables
            - paragraph [ref=e486]: One header style, one density rule, one pagination component, standardized across every table.
    - generic [ref=e487]:
      - generic [ref=e488]:
        - paragraph [ref=e489]: Screens and flows
        - heading "What actually got built" [level=2] [ref=e490]
        - paragraph [ref=e491]: Eleven screens and five flows, with the reasoning written onto each sheet rather than left for a reader to infer. These are reconstructions, drawn after the fact to document the decisions rather than the original working files.
        - paragraph [ref=e492]:
          - text: "Four of them went through three passes: a crude sketch to argue about the shape, a lo-fi wireframe to fix it, and the real thing with the reasoning annotated on top. The ladder ends in colour rather than greyscale here, because arriving at"
          - emphasis [ref=e493]: one
          - text: visual language is what this project was.
      - generic [ref=e494]:
        - paragraph [ref=e495]: How a screen got built
        - figure "The passes run left to right, and the ladder ends in colour rather than greyscale because arriving at one visual language is what this project was." [ref=e496]:
          - generic [ref=e497]:
            - generic [ref=e498]:
              - generic [ref=e499]:
                - img "App shell, rough hand-drawn concept sketch."
              - paragraph [ref=e500]: Sketch
              - paragraph [ref=e501]: Arguing about the shape.
            - generic [ref=e502]:
              - generic [ref=e503]:
                - img "App shell, clean wireframe without annotations."
              - paragraph [ref=e504]: Wireframe
              - paragraph [ref=e505]: Fixing it.
            - generic [ref=e506]:
              - 'img "Annotated design sheet of the VMSpark app shell: icon rail, nav sidebar, workspace switcher, command palette and impersonation control, with callouts explaining why tenant identity lives in the chrome and why the token path had to be the shortest one." [ref=e508]'
              - paragraph [ref=e509]:
                - text: Annotated
                - button "Full size" [ref=e510] [cursor=pointer]:
                  - img [ref=e512]
                  - text: Full size
              - paragraph [ref=e514]: The reasoning written on top.
          - generic [ref=e515]: The passes run left to right, and the ladder ends in colour rather than greyscale because arriving at one visual language is what this project was.
      - generic [ref=e517]:
        - figure "01App shell Full size One shell applied to every authenticated screen. The sprawl came from every view having somewhere of its own to decide." [ref=e518]:
          - paragraph [ref=e519]: Plate / 01
          - 'img "Annotated design sheet of the VMSpark app shell: icon rail, nav sidebar, workspace switcher, command palette and impersonation control, with callouts explaining why tenant identity lives in the chrome and why the token path had to be the shortest one." [ref=e521]'
          - generic [ref=e522]:
            - generic [ref=e523]:
              - generic [ref=e524]: 01/App shell
              - button "Full size" [ref=e525] [cursor=pointer]:
                - img [ref=e527]
                - text: Full size
            - paragraph [ref=e529]: One shell applied to every authenticated screen. The sprawl came from every view having somewhere of its own to decide.
        - figure "02Job listings Full size The primary triage surface. Status is a tab count, and a failed row stays in the list rather than being exiled to another screen." [ref=e530]:
          - paragraph [ref=e531]: Plate / 02
          - 'img "Annotated design sheet of the job listings grid: per-column filter inputs, status tabs carrying queue depth, and a tinted failed row among the healthy ones, with callouts on queued reprocessing and per-user column persistence." [ref=e533]'
          - generic [ref=e534]:
            - generic [ref=e535]:
              - generic [ref=e536]: 02/Job listings
              - button "Full size" [ref=e537] [cursor=pointer]:
                - img [ref=e539]
                - text: Full size
            - paragraph [ref=e541]: The primary triage surface. Status is a tab count, and a failed row stays in the list rather than being exiled to another screen.
        - figure "03Inspector Full size Why one listing ended up in the state it did. Raw payload beside mapped result, so a failure is self-explaining rather than a support ticket." [ref=e542]:
          - paragraph [ref=e543]: Plate / 03
          - 'img "Annotated design sheet of the listing inspector: an overlay opening over the filtered grid, showing the mapped result beside the raw VMS payload with the unresolved facility field marked on both sides, plus a timestamped process history." [ref=e545]'
          - generic [ref=e546]:
            - generic [ref=e547]:
              - generic [ref=e548]: 03/Inspector
              - button "Full size" [ref=e549] [cursor=pointer]:
                - img [ref=e551]
                - text: Full size
            - paragraph [ref=e553]: Why one listing ended up in the state it did. Raw payload beside mapped result, so a failure is self-explaining rather than a support ticket.
        - figure "04Data mapping Full size The operational centre. Unmapped values are a revenue problem, not a tidiness problem, so the queue is built to visibly empty." [ref=e554]:
          - paragraph [ref=e555]: Plate / 04
          - 'img "Annotated design sheet of the data mapping screen: entity-type tabs carrying unmapped counts, and two-column resolution cards pairing each inbound VMS value with its ATS candidates, with callouts on auto-mapping, focus advance, and why Ignore is a real decision." [ref=e557]'
          - generic [ref=e558]:
            - generic [ref=e559]:
              - generic [ref=e560]: 04/Data mapping
              - button "Full size" [ref=e561] [cursor=pointer]:
                - img [ref=e563]
                - text: Full size
            - paragraph [ref=e565]: The operational centre. Unmapped values are a revenue problem, not a tidiness problem, so the queue is built to visibly empty.
      - generic [ref=e567]:
        - paragraph [ref=e568]: The rest of the system
        - paragraph [ref=e569]: Seven more screens, ending with the component and token inventory that replaced eight button styles, ten form-element styles and six table conventions with one of each.
        - list [ref=e570]:
          - listitem [ref=e571]:
            - figure "Custom rules Full size" [ref=e572]:
              - img "Annotated design sheet of the custom rules screen." [ref=e574]
              - generic [ref=e576]:
                - generic [ref=e577]: Custom rules
                - button "Full size" [ref=e578] [cursor=pointer]:
                  - img [ref=e580]
                  - text: Full size
          - listitem [ref=e582]:
            - figure "Candidate profiles Full size" [ref=e583]:
              - img "Annotated design sheet of the candidate profiles screen." [ref=e585]
              - generic [ref=e587]:
                - generic [ref=e588]: Candidate profiles
                - button "Full size" [ref=e589] [cursor=pointer]:
                  - img [ref=e591]
                  - text: Full size
          - listitem [ref=e593]:
            - figure "Applications & matches Full size" [ref=e594]:
              - img "Annotated design sheet of the applications & matches screen." [ref=e596]
              - generic [ref=e598]:
                - generic [ref=e599]: Applications & matches
                - button "Full size" [ref=e600] [cursor=pointer]:
                  - img [ref=e602]
                  - text: Full size
          - listitem [ref=e604]:
            - figure "Settings Full size" [ref=e605]:
              - img "Annotated design sheet of the settings screen." [ref=e607]
              - generic [ref=e609]:
                - generic [ref=e610]: Settings
                - button "Full size" [ref=e611] [cursor=pointer]:
                  - img [ref=e613]
                  - text: Full size
          - listitem [ref=e615]:
            - figure "Candidate portal Full size" [ref=e616]:
              - img "Annotated design sheet of the candidate portal screen." [ref=e618]
              - generic [ref=e620]:
                - generic [ref=e621]: Candidate portal
                - button "Full size" [ref=e622] [cursor=pointer]:
                  - img [ref=e624]
                  - text: Full size
          - listitem [ref=e626]:
            - figure "AI usage Full size" [ref=e627]:
              - img "Annotated design sheet of the ai usage screen." [ref=e629]
              - generic [ref=e631]:
                - generic [ref=e632]: AI usage
                - button "Full size" [ref=e633] [cursor=pointer]:
                  - img [ref=e635]
                  - text: Full size
          - listitem [ref=e637]:
            - figure "The design system Full size" [ref=e638]:
              - img "Annotated design sheet of the the design system screen." [ref=e640]
              - generic [ref=e642]:
                - generic [ref=e643]: The design system
                - button "Full size" [ref=e644] [cursor=pointer]:
                  - img [ref=e646]
                  - text: Full size
      - generic [ref=e649]:
        - paragraph [ref=e650]: User flows
        - paragraph [ref=e651]: Five flows covering the paths the screens sit on. Each splits what a person does from what the system does with it, because in a pipeline product the gap between those two is where the design decisions live.
        - generic [ref=e652]:
          - figure "F1Ingestion Full size The pipeline the redesign was forbidden from touching. Processed, failed and skipped are all first-class outcomes." [ref=e653]:
            - paragraph [ref=e654]: Plate / F1
            - 'img "User flow diagram: ingestion. The pipeline the redesign was forbidden from touching. Processed, failed and skipped are all first-class outcomes." [ref=e656]'
            - generic [ref=e657]:
              - generic [ref=e658]:
                - generic [ref=e659]: F1/Ingestion
                - button "Full size" [ref=e660] [cursor=pointer]:
                  - img [ref=e662]
                  - text: Full size
              - paragraph [ref=e664]: The pipeline the redesign was forbidden from touching. Processed, failed and skipped are all first-class outcomes.
          - figure "F2Mapping resolution & fan-out Full size What an operator does to clear one unmapped facility, and what that single save costs downstream." [ref=e665]:
            - paragraph [ref=e666]: Plate / F2
            - 'img "User flow diagram: mapping resolution & fan-out. What an operator does to clear one unmapped facility, and what that single save costs downstream." [ref=e668]'
            - generic [ref=e669]:
              - generic [ref=e670]:
                - generic [ref=e671]: F2/Mapping resolution & fan-out
                - button "Full size" [ref=e672] [cursor=pointer]:
                  - img [ref=e674]
                  - text: Full size
              - paragraph [ref=e676]: What an operator does to clear one unmapped facility, and what that single save costs downstream.
          - figure "F3Rule engine Full size Per-account rules as the escape hatch that keeps client special cases out of a shared pipeline." [ref=e677]:
            - paragraph [ref=e678]: Plate / F3
            - 'img "User flow diagram: rule engine. Per-account rules as the escape hatch that keeps client special cases out of a shared pipeline." [ref=e680]'
            - generic [ref=e681]:
              - generic [ref=e682]:
                - generic [ref=e683]: F3/Rule engine
                - button "Full size" [ref=e684] [cursor=pointer]:
                  - img [ref=e686]
                  - text: Full size
              - paragraph [ref=e688]: Per-account rules as the escape hatch that keeps client special cases out of a shared pipeline.
          - figure "F4Candidate matching Full size The system proposes, a recruiter disposes. Submission is the only externally visible step, so it is the only one that asks." [ref=e689]:
            - paragraph [ref=e690]: Plate / F4
            - 'img "User flow diagram: candidate matching. The system proposes, a recruiter disposes. Submission is the only externally visible step, so it is the only one that asks." [ref=e692]'
            - generic [ref=e693]:
              - generic [ref=e694]:
                - generic [ref=e695]: F4/Candidate matching
                - button "Full size" [ref=e696] [cursor=pointer]:
                  - img [ref=e698]
                  - text: Full size
              - paragraph [ref=e700]: The system proposes, a recruiter disposes. Submission is the only externally visible step, so it is the only one that asks.
          - figure "F5User journeys Full size Three people with opposite needs, one shell, and a mapping queue upstream of all of them." [ref=e701]:
            - paragraph [ref=e702]: Plate / F5
            - 'img "User flow diagram: user journeys. Three people with opposite needs, one shell, and a mapping queue upstream of all of them." [ref=e704]'
            - generic [ref=e705]:
              - generic [ref=e706]:
                - generic [ref=e707]: F5/User journeys
                - button "Full size" [ref=e708] [cursor=pointer]:
                  - img [ref=e710]
                  - text: Full size
              - paragraph [ref=e712]: Three people with opposite needs, one shell, and a mapping queue upstream of all of them.
    - generic [ref=e715]:
      - generic [ref=e716]:
        - paragraph [ref=e717]: Step 04
        - heading "What shipping it changed" [level=2] [ref=e718]
      - generic [ref=e719]:
        - generic [ref=e720]:
          - paragraph [ref=e721]: The app now reads as the same caliber product it always was. The pipeline, the rule engine, the ATS integrations, the account scoping. None of that changed. A user who logged in the day of the cutover saw their data, their filters, their scroll position, and their workflows intact. They just saw them inside a shell that looks like it belongs in 2026.
          - paragraph [ref=e722]:
            - text: "That shift paid off on both sides of the business. Operators who spent every working day inside the tool stopped mentally filtering out visual noise: buttons, forms, tables, and labels finally behaved the same from screen to screen, which made the product feel deliberate and trustworthy rather than patched together. Leadership stopped apologizing for the admin UI in investor demos. The audit is what made both of those possible:"
            - strong [ref=e723]: nothing got fixed until every inconsistency had been written down and traced to its cause.
        - generic [ref=e724]:
          - generic [ref=e725]:
            - img [ref=e727]
            - heading "Zero pipeline regressions" [level=3] [ref=e729]
            - paragraph [ref=e730]: No regressions reported against the ingest or fan-out paths after cutover.
          - generic [ref=e731]:
            - img [ref=e733]
            - heading "Operator confidence" [level=3] [ref=e735]
            - paragraph [ref=e736]: Operators use a tool that looks like one product, not ten. The UI stopped fighting them at every screen.
          - generic [ref=e737]:
            - img [ref=e739]
            - heading "Investor confidence" [level=3] [ref=e741]
            - paragraph [ref=e742]: Demos open with the product, not with caveats about the surface it lives on.
          - generic [ref=e743]:
            - img [ref=e745]
            - heading "No new JS on hot paths" [level=3] [ref=e747]
            - paragraph [ref=e748]: Palette and inspector load on demand. First paint got lighter, not heavier.
        - generic [ref=e749]:
          - paragraph [ref=e750]: A detail worth calling out
          - heading "Aligning the app with the marketing site" [level=3] [ref=e751]
          - paragraph [ref=e752]:
            - text: Partway through Phase 2 I pulled the marketing site's
            - code [ref=e753]: :root
            - text: "custom properties (five brand colors, pinned) and re-pointed the app's semantic token layer at them. The semantic layer didn't change shape; I re-pointed five values and added three new tokens. Every existing consumer got the new look for free. Two non-obvious behaviors made it across intentionally: primary button hover swaps orange to steel blue rather than darkening, and link hover goes near-black instead of lighter, both inherited from the marketing brand."
          - figure "Live site vmspark.com" [ref=e755]:
            - paragraph [ref=e756]: Plate / 01
            - link "Visit vmspark.com (opens in a new tab)" [ref=e757] [cursor=pointer]:
              - /url: https://vmspark.com/
              - generic [ref=e758]:
                - img "The VMSpark marketing site, the source of the five pinned brand colors the admin app's token layer was re-pointed at" [ref=e759]
                - generic [ref=e760]:
                  - text: Visit site
                  - img [ref=e762]
            - generic [ref=e764]:
              - generic [ref=e765]: Live site
              - generic [ref=e766]:
                - text: vmspark.com
                - img [ref=e768]
        - figure [ref=e770]:
          - blockquote [ref=e771]: The shell is the surface operators use every day and the one investors see in a demo. The audit is what let me rebuild it without breaking the product underneath.
    - figure "What Jon said Jon Sturm Jon Sturm Director of Product & Customer Success · VMSpark" [ref=e774]:
      - generic [ref=e775]:
        - paragraph [ref=e776]: What Jon said
        - generic [ref=e777]:
          - img "Jon Sturm" [ref=e778]
          - generic [ref=e779]:
            - paragraph [ref=e780]: Jon Sturm
            - paragraph [ref=e781]: Director of Product & Customer Success · VMSpark
      - blockquote [ref=e782]:
        - img [ref=e784]
        - paragraph [ref=e786]: Josh inventoried 350 ERB templates before writing a line of new CSS, then turned that audit into a phased rollout we could ship behind no flags. The shell finally reads like the enterprise product the pipeline always was, and operators didn't lose a single piece of muscle memory in the move.
    - generic [ref=e788]:
      - paragraph [ref=e789]: Product design engineering
      - heading "Four phases, no feature flags, nothing broken underneath." [level=2] [ref=e790]
      - paragraph [ref=e791]: The interface and the design system are where I bring the most value, backed by enough command of the Rails underneath to ship the whole thing finished. That combination is what let this rebuild land on a live multi-tenant product without a rollback plan. If that's the bar you're hiring for, let's talk.
      - generic [ref=e792]:
        - link "Get in touch" [ref=e793] [cursor=pointer]:
          - /url: /contact/
          - img [ref=e795]
          - text: Get in touch
        - link "Résumé" [ref=e797] [cursor=pointer]:
          - /url: /resume/
          - img [ref=e799]
          - text: Résumé
      - generic [ref=e801]:
        - 'link "Next: Logatot" [ref=e802] [cursor=pointer]':
          - /url: /projects/logatot/
          - text: "Next: Logatot"
          - img [ref=e804]
        - link "Back to all projects" [ref=e806] [cursor=pointer]:
          - /url: /projects/
          - text: Back to all projects
          - img [ref=e808]
  - contentinfo [ref=e810]:
    - generic [ref=e811]:
      - generic [ref=e812]:
        - generic [ref=e813]:
          - img "Joshua Briley" [ref=e814]:
            - generic [ref=e815]: JB
            - generic [ref=e816]:
              - text: Joshua Briley
              - generic [ref=e817]: .
          - paragraph [ref=e818]: "Design- and front-end-focused product design engineer. The interface is where I bring the most value: design-grade, accessible UI, finished to the last detail."
          - paragraph [ref=e819]: Open to product design engineering roles
        - generic [ref=e821]:
          - navigation "Site" [ref=e822]:
            - heading "Site" [level=2] [ref=e823]
            - list [ref=e824]:
              - listitem [ref=e825]:
                - link "About" [ref=e826] [cursor=pointer]:
                  - /url: /about/
              - listitem [ref=e827]:
                - link "Projects" [ref=e828] [cursor=pointer]:
                  - /url: /projects/
              - listitem [ref=e829]:
                - link "Résumé" [ref=e830] [cursor=pointer]:
                  - /url: /resume/
              - listitem [ref=e831]:
                - link "Contact" [ref=e832] [cursor=pointer]:
                  - /url: /contact/
          - navigation "More" [ref=e833]:
            - heading "More" [level=2] [ref=e834]
            - list [ref=e835]:
              - listitem [ref=e836]:
                - link "Personal Projects" [ref=e837] [cursor=pointer]:
                  - /url: /personal-projects/
              - listitem [ref=e838]:
                - link "Testimonials" [ref=e839] [cursor=pointer]:
                  - /url: /testimonials/
              - listitem [ref=e840]:
                - link "Blog" [ref=e841] [cursor=pointer]:
                  - /url: /blog/
              - listitem [ref=e842]:
                - link "Tools" [ref=e843] [cursor=pointer]:
                  - /url: /tools/
              - listitem [ref=e844]:
                - link "Style Guide" [ref=e845] [cursor=pointer]:
                  - /url: /style-guide/
      - generic [ref=e846]:
        - generic [ref=e847]:
          - generic [ref=e848]: © 2026 Joshua Briley
          - link "Privacy" [ref=e849] [cursor=pointer]:
            - /url: /privacy/
          - link "Terms" [ref=e850] [cursor=pointer]:
            - /url: /terms/
        - generic [ref=e851]:
          - link "LinkedIn" [ref=e852] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/joshuabriley/
            - text: LinkedIn
            - img [ref=e854]
          - link "GitHub" [ref=e856] [cursor=pointer]:
            - /url: https://github.com/somecallmejosh
            - text: GitHub
            - img [ref=e858]
      - paragraph [ref=e860]: Designed by me, Joshua Briley, and built with my favorite static site generator, Astro.
  - generic [ref=e863]:
    - button "Menu" [ref=e864]:
      - img [ref=e866]
      - generic: Menu
    - button "Inspect" [ref=e870]:
      - img [ref=e872]
      - generic: Inspect
    - button "Audit" [ref=e874]:
      - img [ref=e876]
      - generic: Audit
    - button "Settings" [ref=e879]:
      - img [ref=e881]
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