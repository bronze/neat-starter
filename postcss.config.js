const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('tailwind.config.js'),
    require('postcss-preset-env')({ stage: 1 }), //It’s important to note that CSS variables, nesting, and autoprefixer are included out-of-the-box, so if you’re using postcss-preset-env, you don’t need to add separate plugins for those features.
    purgecss({
      content: ['./**/*.html']
    }),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === "production"
      ? [
          require(`cssnano`)({
            preset: "default",
          }),
        ]
      : []),
  ],
};
