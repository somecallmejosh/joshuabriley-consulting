/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        heading: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        logo: ['var(--font-style-script)', 'cursive'],
        hand: ['Caveat', 'cursive'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        cream: '#FFFDF9',
        peach: '#FFE8D6',
        coral: '#E8573D',
        sunset: '#FF8E53',
        'sunset-deep': '#A24818', // AA on white: 5.91:1
        plum: '#6C4AB6',
        navy: '#2D2B55',
        charcoal: '#2E2E30',
        sage: '#7BB47A',
        'sage-deep': '#3E6E3D', // AA on white: 6.71:1
        sky: '#5DADE2',
        'sky-deep': '#1B6FA1', // AA on white: 5.69:1
        lemon: '#FDE68A',
      },
    },
  },
};
