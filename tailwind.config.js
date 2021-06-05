const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    mode: "all",
    content: [
      './**/*.html',
      './src/**/*.js',
      './src/**/*.njk',
      './src/**/*.md',
    ],
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
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
  plugins: [require("@tailwindcss/typography")],
};
