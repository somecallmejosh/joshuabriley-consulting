https://claude.ai/share/aeea72e6-8bfd-4401-9206-790563ff12c2

I went through the homepage, About, the America's Test Kitchen case study, and the blog. Here's the honest read against a staff-level UX engineer bar, which from our earlier thread means scope, cross-team influence, and being a multiplier, not just craft.

## The headline

The work on this site is staff-level. The framing is not. The site reads as a consultant's lead-generation page, and that actively undercuts your case for a staff FTE role. That's the core problem, and most of what follows is downstream of it.

## What's genuinely working

The ATK case study is your strongest asset and it's pitched at the right altitude. The behavior-versus-appearance separation, the two named failure modes (rigidity and fragmentation), the decision shown in code, and the line that a keyboard gap in a shared component is "the same violation across every product that consumes the library" — that compounding-blast-radius reasoning is exactly how staff engineers think. Keep that pattern. It's the template every other case study should follow.
The quantified outcomes fixed the biggest gap from your earlier versions. "75% fewer support calls," "55% fewer shipping errors," "3 → 1 brands," "0 brand-fork props" under a "Receipts, not adjectives" frame is the right instinct. Accessibility-as-architecture is a real differentiator and you thread it consistently. The CDO quote ("raised the floor on accessibility for every team that touches the system") is multiplier language, which is the most staff-coded sentence on the site. And the craft itself, the hand-built Astro, the secret system mode, the token playground, proves the skill instead of claiming it.
Don't gut any of that in response to the critique below.

## Where it misaligns with staff, in priority order

1. It's a consulting site wearing a job-search hat. Every path funnels to selling: "Start a project," "Available Q3," "replies in one business day," "Let's audit your component library," "Book an intro call," Calendly, "Briley Creative," "UX engineer & design-systems consultant." A staff hiring manager reads this as "runs an agency, will leave in a year for client work." You're asking one site to win consulting leads and convert FTE offers, and those two audiences want opposite signals. A lead wants someone available now who books calls. A hiring manager wants someone who joins a team and thinks in multi-year systems. Right now consulting wins the layout and FTE is only implied. This is the thing to fix first.
2. The word "staff" and the scale of your influence are both missing. The work is staff-level but the framing is humble craftsperson: "I build the quiet parts," "designer by origin, engineer by practice." Staff is measured in blast radius, and the site undersells yours. How many teams consumed each system? How many engineers? What decision did you drive that others adopted without you having authority over them? The ATK case hints at it; nothing else does. Add explicit scope. "One library, three brands" is good. "One library adopted by N teams and M engineers, where I set the token architecture the whole org now builds on" is staff.
3. Some outcomes won't survive a skeptical interviewer. ATK has a clean causal chain. Others don't. "VMSpark — lifted conversion and retention" has no number next to projects that do. "75% fewer support calls" floats without baseline, timeframe, or your specific role in it. Staff interviews probe causality hard, so pre-empt it: baseline, intervention, measured delta, your contribution. Also reconcile your numbers against anything you've said before (an earlier version of the IVFCRYO story used different figures); every stat needs to be one you can defend out loud without contradicting yourself.
4. The blog reads thin and possibly batch-generated. Three essays, two of them 23 minutes long and published the same day. To a discerning reader that signals a content drop, not sustained authorship, and same-day long-reads invite the question of whether they're AI-assisted. Staff-level writing usually shows an arc over time. Space them out, and make sure the voice is unmistakably yours.
5. Rudiment UI and the trust logos can over-promise. You call Rudiment UI "the backbone" and your public sandbox, which is prominent enough that an interviewer will open the GitHub repo. If the tests, docs, and adoption there don't match that billing, the gap hurts more than a smaller claim would. Same with "Trusted by NASCAR, NFL, Berkshire Hathaway." If some of those were agency marketing-site jobs rather than design-systems work, the logo invites "what did you actually do at the NFL?" and a weak answer deflates the rest. Make every logo and every project map to a story you'd be glad to be asked about.

## Example Homepage reframe direction:

Eyebrow: Design systems lead · UX engineer · 20 yrs

H1: I own the UI systems teams build on every day.

Sub: Twenty years at the seam between design and engineering. I build the
component libraries, tokens, and documentation that let a whole team ship
consistent, accessible UI without re-deciding it every sprint, with
accessibility built into the architecture instead of parked in the backlog.

Buttons: See the work · Read the approach

etc.

## VMSpark, staff reframe

Same no-fabrication rule as before. Bracketed items are yours to supply with figures you can defend, or cut.
The shift from the lead version is framing the work as a system decision with reach, not a shell redesign. Two real facts on the page already give you scope to claim: it's multi-tenant, normalizing thousands of VMS jobs a day and fanning out to a dozen-plus ATS providers. That is genuine surface area. Use it.
Intro reframe (replace "raising the visual caliber of the admin app"):
A single semantic token layer already existed but was bypassed by ~40 views. I
rebuilt the shell so that layer became the one place UI decisions live: change a
primitive once, and every screen across a multi-tenant product serving thousands
of jobs a day inherits it. The redesign was the visible part. The point was making
the system the only path.
Outcomes list (replace the vague conversion/retention bullets):
Outcomes

- One token layer made authoritative: ~40 bypassing views routed back through it
- Marketing brand and app aligned by repointing 5 tokens; every screen updated at once
- 350 templates and 8+ button treatments consolidated onto one primitive set
- Shipped in 4 phases, no flags, each rollback-safe, zero pipeline regressions
- Reach: multi-tenant operators across [N] accounts, the daily surface for the pipeline
- [If tracked: X% lift in trial-to-paid or activation]
  Outcome cards. Keep "Zero pipeline regressions" and "No new JS on hot paths." Lead with a propagation card and recast the soft two honestly:
  One decision, every surface
  Repointing 5 brand tokens updated every consuming screen at once. The system did
  the work, not a screen-by-screen sweep.

One product, not ten
The same control behaves the same way on every screen, across every tenant.

Demos lead with the product
Leadership stopped opening investor demos by apologizing for the admin UI.

[If you have it: UI-related support tickets down X%. A number you can defend, or
leave these qualitative.]
Closing (replace the audit-sales block):
The layer I want to own.

Inventory first, architecture second, a rollout nobody has to be afraid of, and a
system that makes the right output the default. This is the work I do at staff
level: not the screen, the layer underneath it that decides every screen.

Links: Flagship: America's Test Kitchen · Open to staff and lead roles
Move the ROI calculator and audit-finder widgets to /tools, same as before. On a staff path they read as service marketing and pull against the altitude you're claiming.

## ATK closing copy, staff frame

Replace the current "Let's audit your component library / Book an intro call" block with this:
The system outlives the project.

One component library, three brands, and one accessibility floor every team
inherits. That is the work I do at staff level: the decisions that propagate, so
the right output becomes the default for teams I will never sit next to.

Links: Next: VMSpark · Open to staff and lead roles
Same widget move applies if any sales tools are embedded in the ATK body: send them to /tools.
