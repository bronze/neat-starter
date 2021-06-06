const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    mode: "all",
    purge: ['./src/**/*.html', './src/**/*.md', './src/**/*.njk'],
    darkMode: false,
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
