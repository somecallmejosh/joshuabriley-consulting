/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        // One grotesk does display/heading/body/logo; one mono does the rest.
        // Legacy token names are kept and pointed at the new families so every
        // page that still references font-display/-heading/-body reflows cleanly.
        sans: ['var(--font-hanken)', 'system-ui', 'sans-serif'],
        // Display serif — the character face. Applied deliberately (Heading
        // primitive's display/h1/h2 variants + oversized numerals), never as a
        // blanket override, so small functional text keeps the legible grotesk.
        serif: ['var(--font-fraunces)', 'Georgia', 'Times New Roman', 'serif'],
        display: ['var(--font-hanken)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-hanken)', 'system-ui', 'sans-serif'],
        body: ['var(--font-hanken)', 'system-ui', 'sans-serif'],
        logo: ['var(--font-hanken)', 'system-ui', 'sans-serif'],
        hand: ['var(--font-hanken)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        // ── New "Editorial Technical" system ──────────────────────────────
        paper: '#F5F4F1', // page background — warm off-white
        raised: '#FFFFFF', // cards / raised surfaces
        ink: {
          DEFAULT: '#1B1A17', // primary text + dark surfaces (warm near-black)
          soft: '#2A2925',
          muted: '#5C5B55', // secondary text (~6:1 on paper — AA with margin)
          faint: '#9A9892', // metadata / disabled
        },
        line: {
          DEFAULT: '#E5E3DC', // hairline rules / borders
          strong: '#D6D3CA',
        },
        accent: {
          // Channel-based so the accent can FOLLOW the surface: deep clay on
          // light paper (AA 5.5:1), a brightened clay on dark ink (AA 5.0:1 vs
          // the old 2.9:1 which was muddy/illegible). --accent-rgb is overridden
          // per-surface in site.css; <alpha-value> keeps `accent/NN` working.
          DEFAULT: 'rgb(var(--accent-rgb) / <alpha-value>)',
          ink: '#8F3722', // pressed / darker (light-surface press state)
        },

        // ── Legacy tokens remapped to monochrome ──────────────────────────
        // Kept so un-migrated pages render in-system until each is hand-finished.
        cream: '#F5F4F1',
        peach: '#EFEDE6',
        coral: 'rgb(var(--accent-rgb) / <alpha-value>)', // legacy alias → follows surface like accent
        sunset: '#8A4B2E',
        'sunset-deep': '#8A4B2E',
        plum: '#1B1A17',
        navy: '#1B1A17',
        charcoal: '#1B1A17',
        sage: '#5C5B55',
        'sage-deep': '#44433E',
        sky: '#5C5B55',
        'sky-deep': '#44433E',
        lemon: '#EAE7DD',
      },
    },
  },
};
