module.exports = {
  purge: [
    './src/**/*.html',
  ],
  plugins: [
    require('postcss-import'),
    require(`tailwindcss`),
    require('postcss-preset-env')({ stage: 1 }), //It’s important to note that CSS variables, nesting, and autoprefixer are included out-of-the-box, so if you’re using postcss-preset-env, you don’t need to add separate plugins for those features.
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
