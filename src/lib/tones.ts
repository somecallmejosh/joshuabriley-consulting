/**
 * Tone names accepted by tone-aware components (Badge, Metric, SectionHeader).
 * Only the `Tone` type is consumed now — the old per-tone class map was dead
 * code carrying pre-rebrand color literals (text-sunset-deep, text-[#C13A22],
 * etc.) that didn't follow the surface, so it was removed. Components map tone →
 * classes themselves; the single accent is surface-aware via --accent-rgb.
 */

export const TONES = [
  'coral',
  'plum',
  'sage',
  'sunset',
  'navy',
  'sky',
  'lemon',
  'peach',
  'cream',
] as const;

export type Tone = (typeof TONES)[number];
