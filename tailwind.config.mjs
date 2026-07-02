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
        paper: '#FAFBFC', // page background — near-white, faint cool cast (terracotta + slate)
        raised: '#FFFFFF', // cards / raised surfaces (pure white, lifts off paper)
        ink: {
          DEFAULT: '#1A1B1E', // primary text + dark surfaces (cool near-black)
          soft: '#292A2E',
          muted: '#565760', // secondary text (~6:1 on paper — AA with margin)
          faint: '#9A9AA1', // metadata / disabled
        },
        line: {
          DEFAULT: '#E5E7EB', // hairline rules / borders
          strong: '#D4D7DD',
        },
        accent: {
          // Channel-based so the accent can FOLLOW the surface: deep denim navy
          // on light paper (AA 6.7:1), a brightened sky-denim on dark ink (AA
          // 6.6:1). --accent-rgb is overridden per-surface in site.css;
          // <alpha-value> keeps `accent/NN` working.
          DEFAULT: 'rgb(var(--accent-rgb) / <alpha-value>)',
          ink: '#234A70', // pressed / darker (light-surface press state)
        },

        // ── Legacy tokens remapped to monochrome ──────────────────────────
        // Kept so un-migrated pages render in-system until each is hand-finished.
        // `cream` is the live page-background class (BaseLayout html/body), so it
        // tracks `paper`. The near-black + muted text aliases are cooled to match
        // the new cool-slate ink so body copy doesn't stay warm on a cool page.
        cream: '#ffffff', // = paper (page background)
        peach: '#EFEDE6',
        coral: 'rgb(var(--accent-rgb) / <alpha-value>)', // legacy alias → follows surface like accent
        sunset: '#8A4B2E',
        'sunset-deep': '#8A4B2E',
        plum: '#1A1B1E',
        navy: '#1A1B1E',
        charcoal: '#1A1B1E',
        sage: '#565760',
        'sage-deep': '#45464C',
        sky: '#565760',
        'sky-deep': '#45464C',
        lemon: '#EAE7DD',
      },
    },
  },
}
