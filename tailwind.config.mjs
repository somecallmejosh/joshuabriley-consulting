/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        logo: ['"Style Script"', 'cursive'],
        hand: ['Caveat', 'cursive'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
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
