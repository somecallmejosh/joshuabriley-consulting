/**
 * Tone tokens used across components. Each tone maps to an AA-passing
 * combination of Tailwind classes for surfaces, borders, and text — keeping
 * arbitrary class strings out of the component boundary.
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

export interface ToneStyles {
  surface: string;
  surfaceMuted: string;
  border: string;
  text: string;
  textOnSurface: string;
  ring: string;
}

export const toneStyles: Record<Tone, ToneStyles> = {
  coral: {
    surface: 'bg-coral',
    surfaceMuted: 'bg-coral/10',
    border: 'border-coral/40',
    text: 'text-coral',
    textOnSurface: 'text-white',
    ring: 'focus-visible:outline-coral',
  },
  plum: {
    surface: 'bg-plum',
    surfaceMuted: 'bg-plum/10',
    border: 'border-plum/40',
    text: 'text-plum',
    textOnSurface: 'text-white',
    ring: 'focus-visible:outline-plum',
  },
  sage: {
    surface: 'bg-sage',
    surfaceMuted: 'bg-sage/10',
    border: 'border-sage/40',
    text: 'text-sage',
    textOnSurface: 'text-white',
    ring: 'focus-visible:outline-sage',
  },
  sunset: {
    surface: 'bg-sunset',
    surfaceMuted: 'bg-sunset/10',
    border: 'border-sunset/40',
    text: 'text-sunset',
    textOnSurface: 'text-white',
    ring: 'focus-visible:outline-sunset',
  },
  navy: {
    surface: 'bg-navy',
    surfaceMuted: 'bg-navy/10',
    border: 'border-navy/40',
    text: 'text-navy',
    textOnSurface: 'text-white',
    ring: 'focus-visible:outline-navy',
  },
  sky: {
    surface: 'bg-sky',
    surfaceMuted: 'bg-sky/10',
    border: 'border-sky/40',
    text: 'text-sky',
    textOnSurface: 'text-navy',
    ring: 'focus-visible:outline-sky',
  },
  lemon: {
    surface: 'bg-lemon',
    surfaceMuted: 'bg-lemon/40',
    border: 'border-lemon/60',
    text: 'text-navy',
    textOnSurface: 'text-navy',
    ring: 'focus-visible:outline-lemon',
  },
  peach: {
    surface: 'bg-peach',
    surfaceMuted: 'bg-peach/40',
    border: 'border-peach/60',
    text: 'text-navy',
    textOnSurface: 'text-navy',
    ring: 'focus-visible:outline-peach',
  },
  cream: {
    surface: 'bg-cream',
    surfaceMuted: 'bg-cream/60',
    border: 'border-charcoal/10',
    text: 'text-navy',
    textOnSurface: 'text-navy',
    ring: 'focus-visible:outline-coral',
  },
};
