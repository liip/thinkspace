module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        md: '2rem',
      },
    },
    extend: {
      colors: {
        green: {
          100: '#F8FCF8',
          200: '#D3EED7',
          300: '#AEE0B5',
          400: '#89D193',
          500: '#65C371',
          600: '#45B053',
          700: '#368C42',
          800: '#286730',
          900: '#1A421F',
        },
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
};
