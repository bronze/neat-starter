module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.njk',
    './src/**/*.md',
    './src/**/*.jsx',
  ],
  plugins: [
    require(`tailwindcss`)(`./tailwind.config.js`),
    // require(`autoprefixer`),
    // require('postcss-nested'), // or require('postcss-nesting')
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
