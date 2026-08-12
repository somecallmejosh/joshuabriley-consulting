/**
 * The essay figures, named once. Same shape as tones.ts, and for the same
 * reason: the posts schema (src/content.config.ts) and the component that draws
 * them (components/patterns/PostFigure.astro) both key off this list, so adding
 * a drawing is one edit here plus one `{name === '...'}` block rather than an
 * enum in two files that can quietly disagree.
 *
 * Astro cannot export a type from a component's frontmatter, which is the other
 * half of why this module exists.
 */
export const FIGURES = [
  'drift',
  'namespace',
  'ownership',
  'trust-gap',
  'reading-list',
  'shared-floor',
  'altitude',
] as const;

export type FigureName = (typeof FIGURES)[number];
