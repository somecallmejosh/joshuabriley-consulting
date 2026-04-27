/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        logo: ['Style Script', 'cursive'],
        hand: ['Caveat', 'cursive'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        cream: '#FFFDF9',
        peach: '#FFE8D6',
        coral: '#E8573D',
        sunset: '#FF8E53',
        plum: '#6C4AB6',
        navy: '#2D2B55',
        charcoal: '#2E2E30',
        sage: '#7BB47A',
        sky: '#5DADE2',
        lemon: '#FDE68A',
      },
    },
  },
}
