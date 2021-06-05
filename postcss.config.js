module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.njk',
    './src/**/*.md',
    './src/**/*.jsx',
  ],
  plugins: [
    require('postcss-import'),
    require(`tailwindcss`),
    require('postcss-preset-env')({ stage: 1 }), //It’s important to note that CSS variables, nesting, and autoprefixer are included out-of-the-box, so if you’re using postcss-preset-env, you don’t need to add separate plugins for those features.
    ...(process.env.NODE_ENV === "production"
      ? [
          require(`cssnano`)({
            preset: "default",
          }),
        ]
      : []),
  ],
};
