module.exports = {
  theme: {
    extend: {
      colors: {},
    },
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // enable remove unused CSS only in production
    enabled: process.env.NODE_ENV === 'production',
    // any file that may contain the reference of CSS styles by class name.
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
};
