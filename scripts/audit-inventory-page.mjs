#!/usr/bin/env node
/**
 * Page-specific audit for /component-inventory/. Evaluates every text
 * element on the page against WCAG 2.1 AA, factoring in font size and
 * weight to apply the correct threshold (4.5:1 for small text, 3:1 for
 * ≥18pt regular or ≥14pt bold).
 *
 * Run: `node scripts/audit-inventory-page.mjs`
 */

const TOKENS = {
  cream:        '#FFFBF5',
  peach:        '#FFE8D6',
  coral:        '#E8573D',
  sunset:       '#FF8E53',
  'sunset-deep':'#A24818',
  plum:         '#6C4AB6',
  navy:         '#2D2B55',
  charcoal:     '#2E2E30',
  sage:         '#7BB47A',
  'sage-deep':  '#3E6E3D',
  sky:          '#5DADE2',
  'sky-deep':   '#1B6FA1',
  lemon:        '#FDE68A',
  white:        '#FFFFFF',
};

const STICKY_PEACH_TOP = '#FFE8D6';
const STICKY_PEACH_BOT = '#FFD4B0';

const hexToRgb = (hex) => {
  const m = hex.replace('#', '');
  const n = m.length === 3 ? m.split('').map((c) => c + c).join('') : m;
  return [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16));
};

const compositeOver = (fgHex, alpha, bgHex) => {
  const [r1, g1, b1] = hexToRgb(fgHex);
  const [r2, g2, b2] = hexToRgb(bgHex);
  const r = Math.round(r1 * alpha + r2 * (1 - alpha));
  const g = Math.round(g1 * alpha + g2 * (1 - alpha));
  const b = Math.round(b1 * alpha + b2 * (1 - alpha));
  return `#${[r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
};

const channelLum = (c) => {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
};
const luminance = (hex) => {
  const [r, g, b] = hexToRgb(hex);
  return 0.2126 * channelLum(r) + 0.7152 * channelLum(g) + 0.0722 * channelLum(b);
};
const contrast = (a, b) => {
  const la = luminance(a), lb = luminance(b);
  const [bright, dark] = la > lb ? [la, lb] : [lb, la];
  return (bright + 0.05) / (dark + 0.05);
};

/**
 * WCAG large-text classification.
 * Large = ≥18pt regular (24px) OR ≥14pt bold (18.66px ≈ 19px).
 * Bold = font-weight ≥ 700. (font-semibold 600 is NOT bold per WCAG.)
 */
const isLarge = (px, weight) => {
  if (weight >= 700) return px >= 18.66;
  return px >= 24;
};

const T = TOKENS;
const C = (fg, alpha, bg) => alpha != null ? compositeOver(fg, alpha, bg) : fg;

// Each row: { section, element, px, weight, fgHex, bgHex, decorative? }
const elements = [
  // ── HERO ──
  { section: 'Hero',  element: 'Badge "Component inventory" (plum/10 sticker)', px: 14, weight: 500, fgHex: T.plum, bgHex: C(T.plum, 0.10, T.cream) },
  { section: 'Hero',  element: 'H1 "The system, composable…" navy display-lg',  px: 60, weight: 600, fgHex: T.navy, bgHex: T.cream },
  { section: 'Hero',  element: 'WavyUnderline coral decoration',                 px: 60, weight: 600, fgHex: T.coral, bgHex: T.cream, decorative: true, kind: 'graphical' },
  { section: 'Hero',  element: 'Lead text-xl muted',                             px: 20, weight: 400, fgHex: C(T.charcoal, 0.7, T.cream), bgHex: T.cream },
  { section: 'Hero',  element: 'Inline <code> text-base inherits muted',         px: 16, weight: 400, fgHex: C(T.charcoal, 0.7, T.cream), bgHex: T.cream },

  // ── SECTION NAV CHIPS ──
  { section: 'Nav',   element: 'Chip label "Foundations" navy text-sm font-medium', px: 14, weight: 500, fgHex: T.navy, bgHex: T.cream },
  { section: 'Nav',   element: 'Chip border charcoal/60 (UI control border)',       px: null, fgHex: C(T.charcoal, 0.60, T.white), bgHex: T.white, kind: 'graphical' },
  { section: 'Nav',   element: 'Chip icon coral 16px (decorative)',                 px: null, fgHex: T.coral, bgHex: T.cream, decorative: true, kind: 'graphical' },

  // ── FOUNDATIONS ──
  { section: 'Foundations', element: 'SectionHeader eyebrow Badge tone=coral',    px: 14, weight: 500, fgHex: T['plum'], bgHex: C(T.coral, 0.10, T.white) },
  { section: 'Foundations', element: 'SectionHeader H2 navy display-md',          px: 48, weight: 600, fgHex: T.navy, bgHex: T.cream },
  { section: 'Foundations', element: 'SectionHeader lead muted text-xl',          px: 20, weight: 400, fgHex: C(T.charcoal, 0.7, T.cream), bgHex: T.cream },
  { section: 'Foundations', element: 'Swatch label "cream" navy text-sm',         px: 14, weight: 500, fgHex: T.navy, bgHex: T.white },
  { section: 'Foundations', element: 'Swatch hex charcoal/70 mono text-xs',       px: 12, weight: 400, fgHex: C(T.charcoal, 0.7, T.white), bgHex: T.white },
  { section: 'Foundations', element: 'Type sample "A serif…" navy text-5xl',      px: 48, weight: 600, fgHex: T.navy, bgHex: T.cream },
  { section: 'Foundations', element: 'Type sample "UI labels…" navy text-2xl',    px: 24, weight: 500, fgHex: T.navy, bgHex: T.cream },
  { section: 'Foundations', element: 'Body sample charcoal/80 text-lg',           px: 18, weight: 400, fgHex: C(T.charcoal, 0.8, T.cream), bgHex: T.cream },
  { section: 'Foundations', element: 'Logo "Joshua" navy text-4xl font-logo',     px: 36, weight: 400, fgHex: T.navy, bgHex: T.cream },
  { section: 'Foundations', element: 'Logo "Briley" coral text-4xl font-logo',    px: 36, weight: 400, fgHex: T.coral, bgHex: T.cream },
  { section: 'Foundations', element: 'Mono sample charcoal/80 text-sm',           px: 14, weight: 400, fgHex: C(T.charcoal, 0.8, T.cream), bgHex: T.cream },

  // ── ATOMS ──
  { section: 'Atoms', element: 'ShowcaseRow header H3 navy text-base',            px: 16, weight: 600, fgHex: T.navy, bgHex: T.white },
  { section: 'Atoms', element: 'ShowcaseRow description charcoal/70 text-sm',     px: 14, weight: 400, fgHex: C(T.charcoal, 0.7, T.white), bgHex: T.white },
  { section: 'Atoms', element: 'Snippet code charcoal/80 mono text-xs on charcoal/3', px: 12, weight: 400, fgHex: C(T.charcoal, 0.8, T.white), bgHex: C(T.charcoal, 0.03, T.white) },
  { section: 'Atoms', element: 'Heading demo navy display-md',                    px: 48, weight: 600, fgHex: T.navy, bgHex: T.white },
  { section: 'Atoms', element: 'Text demo muted text-xl',                         px: 20, weight: 400, fgHex: C(T.charcoal, 0.7, T.white), bgHex: T.white },
  { section: 'Atoms', element: 'Logo lockup "Briley" coral text-3xl',             px: 30, weight: 400, fgHex: T.coral, bgHex: T.white },
  { section: 'Atoms', element: 'Button primary white-on-coral text-base semibold', px: 16, weight: 600, fgHex: T.white, bgHex: T['plum'] },
  { section: 'Atoms', element: 'Button ghost text-navy + border-charcoal/15',     px: 16, weight: 600, fgHex: T.navy, bgHex: T.white },
  { section: 'Atoms', element: 'Button (dark row) primary on bg-navy',            px: 16, weight: 600, fgHex: T.white, bgHex: T['plum'] },
  { section: 'Atoms', element: 'Button secondary white-on-(white/10 over navy)',  px: 16, weight: 600, fgHex: T.white, bgHex: compositeOver(T.white, 0.10, T.navy) },
  { section: 'Atoms', element: 'Link arrow plum text-sm semibold',          px: 14, weight: 600, fgHex: T['plum'], bgHex: T.white },
  { section: 'Atoms', element: 'Link inline plum underlined',               px: 14, weight: 400, fgHex: T['plum'], bgHex: T.white },
  { section: 'Atoms', element: 'Badge tone=coral plum text on coral/10',    px: 14, weight: 500, fgHex: T['plum'], bgHex: C(T.coral, 0.10, T.white) },
  { section: 'Atoms', element: 'Badge tone=sage sage-deep text on sage/10',       px: 14, weight: 500, fgHex: T['sage-deep'], bgHex: C(T.sage, 0.10, T.white) },
  { section: 'Atoms', element: 'Badge tone=lemon navy on lemon/40 (sticker)',     px: 14, weight: 500, fgHex: T.navy, bgHex: C(T.lemon, 0.40, T.white) },
  { section: 'Atoms', element: 'Avatar initials "JB" white on coralSunset gradient', px: 16, weight: 600, fgHex: T.white, bgHex: T.coral, decorative: true },
  { section: 'Atoms', element: 'Avatar initials "MR" lg white on plumSky gradient',  px: 25, weight: 600, fgHex: T.white, bgHex: T.plum, decorative: true },
  { section: 'Atoms', element: 'Avatar initials "PN" sm white on sageLemon gradient', px: 14, weight: 600, fgHex: T.white, bgHex: T.sage, decorative: true },
  { section: 'Atoms', element: 'Demo icon sage 32px (decorative)',                px: null, fgHex: T.sage, bgHex: T.white, decorative: true, kind: 'graphical' },
  { section: 'Atoms', element: 'Demo icon coral 32px (decorative)',               px: null, fgHex: T.coral, bgHex: T.white, decorative: true, kind: 'graphical' },
  { section: 'Atoms', element: 'Demo icon plum 32px (decorative)',                px: null, fgHex: T.plum, bgHex: T.white, decorative: true, kind: 'graphical' },
  { section: 'Atoms', element: 'Demo icon sunset 32px (decorative)',              px: null, fgHex: T.sunset, bgHex: T.white, decorative: true, kind: 'graphical' },

  // ── DECORATIVE ──
  { section: 'Decorative', element: 'Wavy demo navy text-3xl',                    px: 30, weight: 400, fgHex: T.navy, bgHex: T.cream },
  { section: 'Decorative', element: 'WavyUnderline coral decoration on cream',    px: null, fgHex: T.coral, bgHex: T.cream, decorative: true, kind: 'graphical' },

  // ── CARDS ──
  { section: 'Cards', element: 'Card paper border charcoal/5 (decorative)',       px: null, fgHex: C(T.charcoal, 0.05, T.white), bgHex: T.cream, decorative: true, kind: 'graphical' },
  { section: 'Cards', element: 'Service card H3 navy text-xl/2xl',                px: 20, weight: 600, fgHex: T.navy, bgHex: T.white },
  { section: 'Cards', element: 'Service card body muted text-sm',                 px: 14, weight: 400, fgHex: C(T.charcoal, 0.7, T.white), bgHex: T.white },
  { section: 'Cards', element: 'Service card list charcoal/70 text-xs',           px: 12, weight: 400, fgHex: C(T.charcoal, 0.7, T.white), bgHex: T.white },
  { section: 'Cards', element: 'Service card list check icon sage 14px',          px: null, fgHex: T.sage, bgHex: T.white, decorative: true, kind: 'graphical' },
  { section: 'Cards', element: 'CardNumber "1" white on coral 16px display-bold', px: 16, weight: 700, fgHex: T.white, bgHex: T['plum'] },
  { section: 'Cards', element: 'Testimonial quote charcoal/70 italic text-sm',    px: 14, weight: 400, fgHex: C(T.charcoal, 0.7, T.white), bgHex: T.white },
  { section: 'Cards', element: 'Testimonial cite "Maya Rao" navy text-sm semibold', px: 14, weight: 600, fgHex: T.navy, bgHex: T.white },
  { section: 'Cards', element: 'Testimonial role charcoal/70 text-xs',            px: 12, weight: 400, fgHex: C(T.charcoal, 0.7, T.white), bgHex: T.white },
  { section: 'Cards', element: 'Sticky-note quote navy display italic text-lg',   px: 18, weight: 400, fgHex: T.navy, bgHex: STICKY_PEACH_TOP },
  { section: 'Cards', element: 'Sticky-note attribution navy text-xs uppercase',    px: 12, weight: 500, fgHex: T.navy, bgHex: STICKY_PEACH_BOT },
  { section: 'Cards', element: 'Polaroid Badge plum sticker',                     px: 14, weight: 500, fgHex: T.plum, bgHex: C(T.plum, 0.10, T.white) },
  { section: 'Cards', element: 'Polaroid title H3 navy text-lg',                  px: 18, weight: 600, fgHex: T.navy, bgHex: T.white },
  { section: 'Cards', element: 'Reveal card H3 white text-xl/2xl on navy',        px: 20, weight: 600, fgHex: T.white, bgHex: T.navy },
  { section: 'Cards', element: 'Reveal card body whiteMuted text-sm',             px: 14, weight: 400, fgHex: C(T.white, 0.7, T.navy), bgHex: T.navy },
  { section: 'Cards', element: 'Outline card Badge sage',                         px: 14, weight: 500, fgHex: T['sage-deep'], bgHex: C(T.sage, 0.10, T.white) },
  { section: 'Cards', element: 'Outline card H3 navy on cream',                   px: 20, weight: 600, fgHex: T.navy, bgHex: T.cream },
  { section: 'Cards', element: 'Outline card body muted on cream',                px: 14, weight: 400, fgHex: C(T.charcoal, 0.7, T.cream), bgHex: T.cream },
  { section: 'Cards', element: 'Outline card border charcoal/60 (UI control)',    px: null, fgHex: C(T.charcoal, 0.60, T.cream), bgHex: T.cream, kind: 'graphical' },

  // ── PATTERNS ──
  { section: 'Patterns', element: 'FAQ summary question navy text-base medium',   px: 16, weight: 500, fgHex: T.navy, bgHex: T.white },
  { section: 'Patterns', element: 'FAQ Q-badge white on coral text-base bold',    px: 16, weight: 700, fgHex: T.white, bgHex: T['plum'] },
  { section: 'Patterns', element: 'FAQ caret charcoal/70 (decorative)',           px: null, fgHex: C(T.charcoal, 0.7, T.white), bgHex: T.white, decorative: true, kind: 'graphical' },
  { section: 'Patterns', element: 'FAQ answer charcoal/70 text-sm',               px: 14, weight: 400, fgHex: C(T.charcoal, 0.7, T.white), bgHex: T.white },

  // ── FORMS ──
  { section: 'Forms', element: 'Form container border charcoal/10 (decorative)',  px: null, fgHex: C(T.charcoal, 0.10, T.cream), bgHex: T.cream, decorative: true, kind: 'graphical' },
  { section: 'Forms', element: 'Field label navy text-sm medium',                 px: 14, weight: 500, fgHex: T.navy, bgHex: T.white },
  { section: 'Forms', element: 'Required indicator coral 14px (aria-hidden)',     px: 14, weight: 500, fgHex: T.coral, bgHex: T.white, decorative: true },
  { section: 'Forms', element: 'Input value charcoal text-sm',                    px: 14, weight: 400, fgHex: T.charcoal, bgHex: T.white },
  { section: 'Forms', element: 'Input placeholder charcoal/70 text-sm',           px: 14, weight: 400, fgHex: C(T.charcoal, 0.7, T.white), bgHex: T.white },
  { section: 'Forms', element: 'Input border charcoal/60 (UI control)',           px: null, fgHex: C(T.charcoal, 0.60, T.white), bgHex: T.white, kind: 'graphical' },
  { section: 'Forms', element: 'Field hint charcoal/70 text-xs',                  px: 12, weight: 400, fgHex: C(T.charcoal, 0.7, T.white), bgHex: T.white },
  { section: 'Forms', element: 'Field error plum text-xs',                  px: 12, weight: 400, fgHex: T['plum'], bgHex: T.white },
  { section: 'Forms', element: 'Choice (unchecked) navy/70 text-sm',              px: 14, weight: 500, fgHex: C(T.navy, 0.70, T.white), bgHex: T.white },
  { section: 'Forms', element: 'Choice (checked) white on sage-deep text-sm',     px: 14, weight: 500, fgHex: T.white, bgHex: T['sage-deep'] },
  { section: 'Forms', element: 'ChoiceGroup pill container border charcoal/60',   px: null, fgHex: C(T.charcoal, 0.60, T.white), bgHex: T.white, kind: 'graphical' },
  { section: 'Forms', element: 'FormAlert success "Thanks…" navy semibold',       px: 14, weight: 600, fgHex: T.navy, bgHex: C(T.sage, 0.10, T.white) },
  { section: 'Forms', element: 'FormAlert success body charcoal/75',              px: 14, weight: 400, fgHex: C(T.charcoal, 0.75, C(T.sage, 0.10, T.white)), bgHex: C(T.sage, 0.10, T.white) },
  { section: 'Forms', element: 'FormAlert error "We couldn\'t…" navy semibold',   px: 14, weight: 600, fgHex: T.navy, bgHex: C(T.coral, 0.10, T.white) },
  { section: 'Forms', element: 'FormAlert success icon sage-deep 20px',           px: null, fgHex: T['sage-deep'], bgHex: C(T.sage, 0.10, T.white), kind: 'graphical' },
  { section: 'Forms', element: 'FormAlert error icon plum 20px',            px: null, fgHex: T['plum'], bgHex: C(T.coral, 0.10, T.white), kind: 'graphical' },
  { section: 'Forms', element: 'SubmitButton white on coral text-base semibold',  px: 16, weight: 600, fgHex: T.white, bgHex: T['plum'] },
];

/* ─── evaluate ─── */

const RESET = '\x1b[0m';
const RED = '\x1b[31m';
const YEL = '\x1b[33m';
const GRN = '\x1b[32m';
const DIM = '\x1b[2m';

const fmt = (n) => n.toFixed(2);
const pad = (s, n) => (s + ' '.repeat(n)).slice(0, n);

let currentSection = '';
let fails = 0;
let warns = 0;
let total = 0;

for (const e of elements) {
  if (e.section !== currentSection) {
    currentSection = e.section;
    console.log();
    console.log(`${DIM}── ${currentSection} ──${RESET}`);
  }
  total++;

  const ratio = contrast(e.fgHex, e.bgHex);

  let threshold, label, status, color, sizeNote;
  if (e.kind === 'graphical') {
    threshold = 3.0;
    sizeNote = 'graphical';
    if (e.decorative) {
      label = 'decorative — exempt';
      status = ratio >= threshold ? 'PASS' : 'INFO';
      color = ratio >= threshold ? GRN : DIM;
    } else {
      label = 'UI ≥3.0';
      if (ratio >= threshold) { status = 'PASS'; color = GRN; }
      else { status = 'FAIL'; color = RED; fails++; }
    }
  } else {
    const large = e.px != null && isLarge(e.px, e.weight);
    threshold = large ? 3.0 : 4.5;
    sizeNote = large ? `${e.px}px/${e.weight} large` : `${e.px}px/${e.weight} small`;
    label = large ? 'AA large ≥3.0' : 'AA ≥4.5';
    if (e.decorative) {
      status = ratio >= threshold ? 'PASS' : 'WARN';
      color = ratio >= threshold ? GRN : YEL;
      label += ' (decorative)';
      if (status === 'WARN') warns++;
    } else if (ratio >= threshold * (large ? 1.5 : 1.555)) {
      status = 'PASS AAA';
      color = GRN;
    } else if (ratio >= threshold) {
      status = 'PASS AA';
      color = YEL;
    } else {
      status = 'FAIL';
      color = RED;
      fails++;
    }
  }

  const line = [
    pad(e.element, 60),
    pad(sizeNote, 18),
    pad(`${fmt(ratio)}:1`, 8),
    pad(label, 26),
    `${color}${pad(status, 10)}${RESET}`,
  ].join(' ');
  console.log(line);
}

console.log();
console.log(`${DIM}${total} elements checked${RESET}  ·  ${fails ? RED : GRN}${fails} fail${RESET}  ·  ${warns ? YEL : GRN}${warns} warn${RESET}`);
console.log();

process.exit(fails > 0 ? 1 : 0);
