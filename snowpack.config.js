module.exports = {
  mount: {
    '_site': { url: '/', static: false },
    src: { url: '/src' },
  },
  plugins: [
    '@snowpack/plugin-postcss',
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
    knownEntrypoints: ["alpinejs", "alpine-turbo-drive-adapter", "instantclick", "tailwindcss"]
  },
  buildOptions: {
    clean: false,
    out: '_site',
  },
  "devOptions": {
    "open": "none",
    "bundle": false,
    "out": "_site"
  },
  optimize: {
    entrypoints: ["index.html"],
    bundle: true,
    minify: true,
    treeshake: true,
    splitting: true,
    target: 'es2020',
  },
};
