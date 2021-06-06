module.exports = {
  mount: {
    '_site': { url: '/', static: false },
    '_site/pages': { url: '/pages' },
    '_site/static/js': { url: '/static/js' },
    '_site/static/css': { url: '/static/css/' },
  },
  plugins: [
    '@snowpack/plugin-postcss',
    '@jadex/snowpack-plugin-tailwindcss-jit',
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eleventy',
        watch: '$1 --watch',
      },
    ],
  ],
  packageOptions: {
    NODE_ENV: true,
    knownEntrypoints: ["alpinejs", "alpine-turbo-drive-adapter", "instantclick"]
  },
  buildOptions: {
    clean: true,
    out: '_site',
  },
  devOptions: {
    open: 'none',
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020',
  },
};
