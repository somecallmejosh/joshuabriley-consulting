#!/usr/bin/env node
/**
 * WCAG contrast audit for the design system.
 *
 * Walks every text-on-surface pair the components actually use, composites
 * any alpha-channel text colors over their surface, and reports the
 * resulting contrast ratio against AA (4.5 normal / 3.0 large) and AAA
 * (7.0 normal / 4.5 large) thresholds.
 *
 * Run: `node scripts/check-contrast.mjs`
 * Exit code: 1 if any AA combination fails.
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

// Sticky-note gradients used in components.
const STICKY_LEMON_TOP = '#FEF3C7';
const STICKY_LEMON_BOT = '#FDE68A';
const STICKY_PEACH_TOP = '#FFE8D6';
const STICKY_PEACH_BOT = '#FFD4B0';

/* ─── color math (sRGB → relative luminance → contrast ratio) ─── */

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
  const la = luminance(a);
  const lb = luminance(b);
  const [bright, dark] = la > lb ? [la, lb] : [lb, la];
  return (bright + 0.05) / (dark + 0.05);
};

/* ─── audit cases ───
 *
 * Each case: { context, fg, bg, alpha?, large? }
 *   context — where this combination appears
 *   fg      — token name or hex (text color)
 *   bg      — token name or hex (surface, after compositing if alpha)
 *   alpha   — optional opacity on the foreground (e.g. /70 → 0.7)
 *   large   — true for ≥18pt (24px) text or ≥14pt bold
 */

const T = TOKENS;

const cases = [
  // body / page chrome
  { context: 'body text on cream',                    fg: T.charcoal, bg: T.cream },
  { context: 'muted body (charcoal/70) on cream',     fg: T.charcoal, bg: T.cream, alpha: 0.7 },
  { context: 'navy heading on cream',                 fg: T.navy,     bg: T.cream },

  // body text on white card
  { context: 'navy heading on white card',            fg: T.navy,     bg: T.white },
  { context: 'charcoal body on white card',           fg: T.charcoal, bg: T.white },
  { context: 'muted text (charcoal/70) on white',     fg: T.charcoal, bg: T.white, alpha: 0.7 },
  { context: 'navy/70 nav link on cream',             fg: T.navy,     bg: T.cream, alpha: 0.7 },

  // navy surface (footer, CTABanner, reveal card)
  { context: 'white text on navy',                    fg: T.white,    bg: T.navy },
  { context: 'white/70 muted on navy',                fg: T.white,    bg: T.navy, alpha: 0.7 },
  { context: 'white/60 footer text on navy',          fg: T.white,    bg: T.navy, alpha: 0.6 },
  { context: 'white/50 footer copyright on navy',     fg: T.white,    bg: T.navy, alpha: 0.5 },
  { context: 'lemon hover on navy footer',            fg: T.lemon,    bg: T.navy },

  // links / accent text  (after fixes: switched to *-deep)
  { context: 'plum link on cream',              fg: T['plum'], bg: T.cream },
  { context: 'plum link on white',              fg: T['plum'], bg: T.white },
  { context: 'plum eyebrow text on white',            fg: T.plum,     bg: T.white },
  { context: 'plum text on plum/10 (badge)',          fg: T.plum,             bg: compositeOver(T.plum, 0.10, T.white) },
  { context: 'plum text on coral/10 (badge)',   fg: T['plum'],    bg: compositeOver(T.coral, 0.10, T.white) },
  { context: 'sage-deep text on sage/10 (badge)',     fg: T['sage-deep'],     bg: compositeOver(T.sage, 0.10, T.white) },
  { context: 'sunset-deep text on sunset/10 (badge)', fg: T['sunset-deep'],   bg: compositeOver(T.sunset, 0.10, T.white) },
  { context: 'navy on lemon/40 (lemon badge)',        fg: T.navy,     bg: compositeOver(T.lemon, 0.40, T.white) },
  { context: 'navy on peach/60 (peach badge)',        fg: T.navy,     bg: compositeOver(T.peach, 0.60, T.white) },

  // primary button (coral surface, white text)
  { context: 'white on coral (primary button)',       fg: T.white,    bg: T.coral, large: true },
  { context: 'white on coral/90 (primary hover)',     fg: T.white,    bg: compositeOver(T.coral, 0.90, T.white), large: true },

  // secondary button (white/10 on navy)
  { context: 'white text on navy + white/10 button',  fg: T.white,    bg: compositeOver(T.white, 0.10, T.navy), large: true },

  // form inputs (after fixes)
  { context: 'input text (charcoal) on white',        fg: T.charcoal, bg: T.white },
  { context: 'placeholder (charcoal/70) on white',    fg: T.charcoal, bg: T.white, alpha: 0.7 },
  { context: 'input border (charcoal/60) on white',   fg: T.charcoal, bg: T.white, alpha: 0.60, nonText: true },
  { context: 'focus border (plum) on white',    fg: T['plum'], bg: T.white, nonText: true },
  { context: 'focus ring (coral) on cream',           fg: T.coral,    bg: T.cream, nonText: true },

  // sticky-note testimonial cards (gradients)
  { context: 'navy quote on lemon sticky (top)',      fg: T.navy,     bg: STICKY_LEMON_TOP },
  { context: 'navy quote on lemon sticky (bottom)',   fg: T.navy,     bg: STICKY_LEMON_BOT },
  { context: 'navy/70 attribution on lemon sticky',   fg: T.navy,     bg: STICKY_LEMON_BOT, alpha: 0.7 },
  { context: 'navy quote on peach sticky (top)',      fg: T.navy,     bg: STICKY_PEACH_TOP },
  { context: 'navy quote on peach sticky (bottom)',   fg: T.navy,     bg: STICKY_PEACH_BOT },

  // alerts (after fixes)
  { context: 'navy text on sage/10 success alert',    fg: T.navy,     bg: compositeOver(T.sage, 0.10, T.white) },
  { context: 'navy text on coral/10 error alert',     fg: T.navy,     bg: compositeOver(T.coral, 0.10, T.white) },
  { context: 'sage-deep icon on sage/10 alert',       fg: T['sage-deep'],   bg: compositeOver(T.sage, 0.10, T.white), nonText: true },
  { context: 'plum icon on coral/10 alert',     fg: T['plum'],  bg: compositeOver(T.coral, 0.10, T.white), nonText: true },

  // "active" radio pill (sage-deep surface, after fix)
  { context: 'white on sage-deep (active choice pill)', fg: T.white,  bg: T['sage-deep'], large: true },

  // skip link
  { context: 'white text on plum (skip link)',        fg: T.white,    bg: T.plum },

  // page header logo + nav
  { context: 'navy nav link on cream/90',             fg: T.navy,     bg: compositeOver(T.cream, 0.90, T.white) },

  // form error text (after fix)
  { context: 'plum error text on white',        fg: T['plum'], bg: T.white },
];

/* ─── thresholds & evaluation ─── */

const aaPass = (ratio, large) => ratio >= (large ? 3.0 : 4.5);
const aaaPass = (ratio, large) => ratio >= (large ? 4.5 : 7.0);
// Non-text contrast (icons, borders, focus rings) needs 3:1 per WCAG 1.4.11.
const nonTextPass = (ratio) => ratio >= 3.0;

const fmt = (n) => n.toFixed(2);
const pad = (s, n) => (s + ' '.repeat(n)).slice(0, n);

const RESET = '\x1b[0m';
const RED = '\x1b[31m';
const YEL = '\x1b[33m';
const GRN = '\x1b[32m';
const DIM = '\x1b[2m';

const rows = [];
let aaFailures = 0;

for (const c of cases) {
  const fgEffective = c.alpha != null ? compositeOver(c.fg, c.alpha, c.bg) : c.fg;
  const ratio = contrast(fgEffective, c.bg);

  let standard, status, color;
  if (c.nonText) {
    standard = '≥ 3.0 (non-text)';
    if (nonTextPass(ratio)) { status = 'PASS'; color = GRN; }
    else { status = 'FAIL'; color = RED; aaFailures++; }
  } else {
    standard = c.large ? 'AA large (≥3.0)' : 'AA normal (≥4.5)';
    if (aaaPass(ratio, c.large)) { status = 'PASS AAA'; color = GRN; }
    else if (aaPass(ratio, c.large)) { status = 'PASS AA'; color = YEL; }
    else { status = 'FAIL'; color = RED; aaFailures++; }
  }

  rows.push({
    context: c.context,
    fgHex: fgEffective.toUpperCase(),
    bgHex: c.bg.toUpperCase(),
    ratio,
    standard,
    status,
    color,
  });
}

const headers = ['Context', 'Text', 'Surface', 'Ratio', 'Standard', 'Status'];
const widths = [54, 9, 9, 7, 18, 10];

console.log();
console.log(headers.map((h, i) => pad(h, widths[i])).join(' '));
console.log(widths.map((w) => '─'.repeat(w)).join(' '));

for (const r of rows) {
  const line = [
    pad(r.context, widths[0]),
    pad(r.fgHex, widths[1]),
    pad(r.bgHex, widths[2]),
    pad(`${fmt(r.ratio)}:1`, widths[3]),
    pad(r.standard, widths[4]),
    `${r.color}${pad(r.status, widths[5])}${RESET}`,
  ].join(' ');
  console.log(line);
}

console.log();
const total = rows.length;
const fails = rows.filter((r) => r.status === 'FAIL').length;
const aaOnly = rows.filter((r) => r.status === 'PASS AA').length;
const aaa = rows.filter((r) => r.status === 'PASS AAA').length;
const passNonText = rows.filter((r) => r.status === 'PASS' && r.standard.includes('non-text')).length;

console.log(`${DIM}${total} combinations checked${RESET}`);
console.log(`${GRN}${aaa} pass AAA${RESET}, ${YEL}${aaOnly} pass AA only${RESET}, ${GRN}${passNonText} non-text pass${RESET}, ${fails ? RED : GRN}${fails} fail${RESET}`);
console.log();

process.exit(aaFailures > 0 ? 1 : 0);
