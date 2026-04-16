// ─── Scorecard Engine ────────────────────────────────────────────────────────
// Shared module: sections data, scoring logic, URL encoding, recommendation engine.
// Used by both /scorecard/index.html and /scorecard/results/index.html.

// ─── Data ────────────────────────────────────────────────────────────────────

export const SECTIONS = [
  {
    id: 's1',
    title: 'Component consistency',
    max: 12,
    items: [
      { id: 's1-1', label: 'Similar UI patterns (buttons, inputs, modals) are built as shared components, not duplicated across the codebase.' },
      { id: 's1-2', label: 'Component APIs (props, slots, events) follow a consistent naming convention across the library.' },
      { id: 's1-3', label: 'Visual decisions (spacing, color, border radius) reference tokens, not hardcoded values inside components.' },
      { id: 's1-4', label: 'Components render consistently across the browsers and viewports your product supports.' },
      { id: 's1-5', label: "One-off components that duplicate an existing shared component don\u2019t exist in the codebase." },
      { id: 's1-6', label: 'Deprecated components have a documented migration path and are not mixed with current components in production.' },
    ],
  },
  {
    id: 's2',
    title: 'Accessibility',
    max: 16,
    items: [
      { id: 's2-1', label: 'Every interactive component (buttons, links, form controls) is fully operable with a keyboard alone.' },
      { id: 's2-2', label: 'All form inputs have visible, programmatically associated labels.' },
      { id: 's2-3', label: 'Focusable elements have a clearly visible focus indicator that meets WCAG 2.1 AA contrast requirements.' },
      { id: 's2-4', label: 'Color is never used as the only means of conveying information (errors, statuses, required fields).' },
      { id: 's2-5', label: 'Components that control visibility (modals, drawers, tooltips) trap focus correctly and return focus on close.' },
      { id: 's2-6', label: 'Informative images and icons have descriptive alt text, and purely decorative elements are hidden from assistive technology.' },
      { id: 's2-7', label: 'Text and interactive elements meet WCAG 2.1 AA contrast ratios (4.5:1 for text, 3:1 for UI components).' },
      { id: 's2-8', label: 'Dynamic content updates (alerts, notifications, loading states) are announced to screen readers.' },
    ],
  },
  {
    id: 's3',
    title: 'Token architecture',
    max: 12,
    items: [
      { id: 's3-1', label: 'Tokens are defined in a single source of truth (design tool, JSON file, or equivalent) and synced to code.' },
      { id: 's3-2', label: 'Token names follow a consistent, predictable pattern (for example: category/property/variant) with no abbreviations or ambiguity.' },
      { id: 's3-3', label: 'Semantic tokens (for example: color.text.primary) reference primitive tokens (for example: color.gray.900), not raw values.' },
      { id: 's3-4', label: 'Token names describe intent, not value. For example, color.brand-primary rather than color.blue.' },
      { id: 's3-5', label: 'Tokens cover every design decision that varies across themes, modes, or brands.' },
      { id: 's3-6', label: 'Every component references tokens rather than redefining their values.' },
    ],
  },
  {
    id: 's4',
    title: 'Documentation',
    max: 12,
    items: [
      { id: 's4-1', label: 'Every component has a working example showing its most common use case.' },
      { id: 's4-2', label: 'Props, slots, and events are documented with types and plain-language descriptions.' },
      { id: 's4-3', label: "Components with common misuse patterns or non-obvious behavior have explicit do/don\u2019t guidance." },
      { id: 's4-4', label: 'Documentation is updated as part of the development workflow, not added retroactively.' },
      { id: 's4-5', label: 'A getting-started guide lets a new developer install and use the library without asking anyone for help.' },
      { id: 's4-6', label: 'Keyboard interactions, ARIA attributes, and screen reader behavior are documented per component.' },
    ],
  },
  {
    id: 's5',
    title: 'Handoff process',
    max: 12,
    items: [
      { id: 's5-1', label: "Design files use components from the shared library, not custom one-offs that don\u2019t exist in code." },
      { id: 's5-2', label: 'Designers and developers use the same token names to describe design decisions.' },
      { id: 's5-3', label: 'New components follow a documented process from design to code.' },
      { id: 's5-4', label: "Developers don\u2019t rebuild components that already exist in the library." },
      { id: 's5-5', label: 'A clear owner (team or individual) is responsible for maintaining and evolving the design system.' },
      { id: 's5-6', label: 'The design system has a versioning and changelog process so consumers know what changed between releases.' },
    ],
  },
];

export const TOTAL_ITEMS = SECTIONS.reduce((n, s) => n + s.items.length, 0);
export const TOTAL_MAX = SECTIONS.reduce((sum, s) => sum + s.max, 0);

export const VALID_PARAM_RE = new RegExp(`^[012]{${TOTAL_ITEMS}}$`);

// ─── Short labels for radar chart ────────────────────────────────────────────

export const SHORT_LABELS = {
  'Component consistency': 'Consistency',
  'Accessibility': 'Accessibility',
  'Token architecture': 'Tokens',
  'Documentation': 'Docs',
  'Handoff process': 'Handoff',
};

// ─── Display maps ────────────────────────────────────────────────────────────

// Benefit copy keyed by section title. Used on the results page under
// "Where to focus" to explain *why* the area is worth investing in.
export const SECTION_BENEFITS = {
  'Component consistency':
    'When patterns live in one shared library, every fix propagates automatically. Your team stops rebuilding the same button a dozen different ways and designers trust that what they spec is what ships.',
  'Accessibility':
    'Accessible defaults widen your addressable market, shield you from legal exposure, and surface usability bugs that hurt every user — not just those relying on assistive tech. Baking it in early costs a fraction of retrofitting it later.',
  'Token architecture':
    'Tokens turn rebrands, theming, and dark mode into a config change instead of a codebase-wide sweep. Design decisions become cheap to revisit, which means the system can evolve without stalling the roadmap.',
  'Documentation':
    'Clear docs replace Slack threads and tribal knowledge. New hires ramp in days instead of weeks, designers stop guessing at what components already exist, and the system scales past the handful of people who built it.',
  'Handoff process':
    'A shared vocabulary between design and code means less rework, fewer one-off rebuilds, and faster shipping. Fix the ritual once and the sprint tax — the questions, the Figma-to-PR translation, the surprise at review — largely goes away.',
};

// Consequence copy keyed by section title. Used on the results page under
// "Where to focus" to make the cost of inaction concrete.
export const SECTION_CONSEQUENCES = {
  'Component consistency':
    'Leave it alone and every team keeps shipping slight variations of the same component. A minor button tweak turns into a week of hunting down one-offs, and the same bugs keep resurfacing because the fix only landed in half the places it needed to.',
  'Accessibility':
    'Ignore it and you are one complaint or procurement review away from an expensive retrofit — while quietly locking out the roughly 1-in-4 users who rely on assistive tech, larger text, or reduced motion. The usability bugs it hides hurt every user, not just the ones you are overlooking.',
  'Token architecture':
    'Without tokens, every rebrand, theme, or dark-mode ask becomes a multi-sprint search-and-replace. Small visual changes balloon into cross-team projects, and the first time a rebrand or white-label gets proposed, the estimate quietly kills the idea.',
  'Documentation':
    'Skip this and institutional knowledge stays trapped in Slack DMs and 1:1s. Onboarding stretches from days into weeks, designers rebuild components that already exist, and the handful of people who know how the system works become bottlenecks the whole team routes through.',
  'Handoff process':
    'Left unaddressed, handoff friction becomes a hidden tax on every sprint: duplicate Figma-to-code translation, surprise PR reviews, and components rebuilt because no one knew they existed. Nothing breaks outright — everything just ships slower than it should, and the team stops noticing the drag.',
};

export const STATUS_LABEL = {
  strong: 'Strong',
  'needs-attention': 'Needs attention',
  critical: 'Critical gap',
};

export const TOTAL_STATUS_LABEL = {
  healthy: 'Healthy',
  functional: 'Functional but inconsistent',
  investment: 'Significant investment needed',
};

// Brand-mapped status colors
export const STATUS_COLORS = {
  healthy: '#7bb47a',
  functional: '#ff8e53',
  investment: '#e8573d',
};

// ─── URL param helpers ───────────────────────────────────────────────────────

export function encodeRatings(ratings) {
  return SECTIONS.flatMap((s) =>
    s.items.map((item) => String(ratings[item.id] ?? 0))
  ).join('');
}

export function decodeRatings(param) {
  const result = {};
  let i = 0;
  for (const section of SECTIONS) {
    for (const item of section.items) {
      result[item.id] = parseInt(param[i++], 10);
    }
  }
  return result;
}

export function emptyRatings() {
  const result = {};
  for (const section of SECTIONS) {
    for (const item of section.items) {
      result[item.id] = null;
    }
  }
  return result;
}

// ─── Scoring functions ───────────────────────────────────────────────────────

export function sectionScore(section, ratings) {
  return section.items.reduce((sum, item) => sum + (ratings[item.id] ?? 0), 0);
}

export function sectionComplete(section, ratings) {
  return section.items.every((item) => ratings[item.id] !== null);
}

export function sectionPercent(section, ratings) {
  return Math.round((sectionScore(section, ratings) / section.max) * 100);
}

export function sectionStatus(section, ratings) {
  if (!sectionComplete(section, ratings)) return null;
  const pct = sectionScore(section, ratings) / section.max;
  if (pct >= 10 / 12) return 'strong';
  if (pct >= 6 / 12) return 'needs-attention';
  return 'critical';
}

export function getTotalScore(ratings) {
  return SECTIONS.reduce((sum, s) => sum + sectionScore(s, ratings), 0);
}

export function totalPercent(ratings) {
  return Math.round((getTotalScore(ratings) / TOTAL_MAX) * 100);
}

export function getTotalStatus(score) {
  if (score >= 52) return 'healthy';
  if (score >= 32) return 'functional';
  return 'investment';
}

export function getWeakestSection(ratings) {
  return SECTIONS.reduce((weakest, section) => {
    const ratio = sectionScore(section, ratings) / section.max;
    const weakestRatio = sectionScore(weakest, ratings) / weakest.max;
    return ratio < weakestRatio ? section : weakest;
  });
}

export function getCriticalSections(ratings) {
  return SECTIONS.filter((s) => sectionStatus(s, ratings) === 'critical');
}

export function letterGrade(pct) {
  if (pct >= 93) return 'A';
  if (pct >= 85) return 'A-';
  if (pct >= 78) return 'B+';
  if (pct >= 70) return 'B';
  if (pct >= 62) return 'C+';
  if (pct >= 54) return 'C';
  if (pct >= 45) return 'D';
  return 'F';
}

// ─── Recommendation engine ───────────────────────────────────────────────────

export function getRecommendationType(ratings) {
  const score = getTotalScore(ratings);
  const status = getTotalStatus(score);
  const criticals = getCriticalSections(ratings);
  const weakest = getWeakestSection(ratings);

  if (criticals.length > 0) return 'audit';
  if (status === 'healthy') return 'healthy';
  if (status === 'investment') return 'audit';
  return weakest.id === 's5' ? 'workflow' : 'audit';
}

export function buildRecommendation(ratings) {
  const recType = getRecommendationType(ratings);
  if (recType === 'healthy') return { type: 'healthy' };

  const strong = SECTIONS
    .filter((s) => sectionStatus(s, ratings) === 'strong')
    .sort((a, b) => sectionScore(b, ratings) / b.max - sectionScore(a, ratings) / a.max)
    .map((s) => ({ title: s.title, score: sectionScore(s, ratings), max: s.max }));

  const weak = SECTIONS
    .filter((s) => {
      const st = sectionStatus(s, ratings);
      return st === 'needs-attention' || st === 'critical';
    })
    .sort((a, b) => sectionScore(a, ratings) / a.max - sectionScore(b, ratings) / b.max)
    .map((s) => ({
      title: s.title,
      score: sectionScore(s, ratings),
      max: s.max,
      status: sectionStatus(s, ratings),
    }));

  if (recType === 'workflow') {
    const s5 = SECTIONS.find((s) => s.id === 's5');
    const s5Score = sectionScore(s5, ratings);

    const strongNonHandoff = strong.filter((s) => s.title !== 'Handoff process');
    let why;
    if (strongNonHandoff.length === 0) {
      why = `Your handoff process (${s5Score}/12) is costing your team time every sprint. Design and development are not fully aligned. That leads to rework, inconsistent UI, and repeated conversations. This is a workflow issue, not a tooling issue.`;
    } else if (strongNonHandoff.length === 1) {
      why = `Your ${strongNonHandoff[0].title.toLowerCase()} is a solid foundation. But your handoff process (${s5Score}/12) is costing your team time every sprint. Design and development are not fully aligned. That leads to rework, inconsistent UI, and repeated conversations. This is a workflow issue, not a tooling issue.`;
    } else {
      const titles = strongNonHandoff.map((s) => s.title.toLowerCase());
      const last = titles.pop();
      why = `Your ${titles.join(', ')} and ${last} are solid foundations. But your handoff process (${s5Score}/12) is costing your team time every sprint. Design and development are not fully aligned. That leads to rework, inconsistent UI, and repeated conversations. This is a workflow issue, not a tooling issue.`;
    }

    const secondarySections = SECTIONS.filter((s) => {
      if (s.id === 's5') return false;
      const st = sectionStatus(s, ratings);
      return st === 'needs-attention' || st === 'critical';
    });

    return {
      type: 'workflow',
      label: 'Design-to-Code Workflow',
      tagline: 'Reduce handoff friction and rework. Fix the process once so your team stops losing time to it every sprint.',
      why,
      strongSections: strong,
      weakSections: weak,
      secondaryRecommendation: secondarySections.length > 0
        ? {
            label: 'Design System Audit',
            sectionNames: secondarySections.map((s) => s.title),
            link: '/services/audit/',
          }
        : undefined,
      price: '$2,500',
      link: '/services/workflow/',
    };
  }

  // Audit recommendation
  const score = getTotalScore(ratings);
  const status = getTotalStatus(score);
  const criticals = getCriticalSections(ratings);
  let why;
  if (status === 'investment') {
    why = 'With critical gaps across multiple dimensions, the Audit gives you a prioritized roadmap before you invest in rebuilding.';
  } else if (criticals.length > 0) {
    const names = criticals.map((s) => s.title.toLowerCase());
    const last = names.pop();
    const joined = names.length > 0 ? `${names.join(', ')} and ${last}` : last;
    why = `Your ${joined} ${criticals.length === 1 ? 'has' : 'have'} a critical gap that needs expert analysis before it compounds into a larger problem.`;
  } else {
    const weakNames = weak.map((s) => s.title.toLowerCase());
    const last = weakNames.pop();
    const joined = weakNames.length > 0 ? `${weakNames.join(', ')} and ${last}` : last;
    why = `Your ${joined} ${weak.length === 1 ? 'shows' : 'show'} structural gaps that need expert analysis before you invest in fixing them.`;
  }

  return {
    type: 'audit',
    label: 'Design System Audit',
    tagline: "Before you build anything new, you need to understand what\u2019s actually broken.",
    why,
    strongSections: strong,
    weakSections: weak,
    price: '$2,000',
    link: '/services/audit/',
  };
}

// ─── Chart data helper ───────────────────────────────────────────────────────

export function getChartSections(ratings) {
  return SECTIONS.map((s) => ({
    title: s.title,
    score: sectionScore(s, ratings),
    max: s.max,
  }));
}
