const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.md'],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo,
      red: colors.red,
    },
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
  },
  variants: {},
  plugins: [ require('postcss-import'), require('tailwindcss'), require('autoprefixer') ]
};
