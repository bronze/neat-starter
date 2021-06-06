const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  // Eleventy Navigation https://www.11ty.dev/docs/plugins/navigation/
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  // Syntax Highlighting for Code blocks
  eleventyConfig.addPlugin(syntaxHighlight);
  // To Support .yaml Extension in _data
  // human readable date
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
  });
  eleventyConfig.addPassthroughCopy('./src/images');

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/static/img");
  // Copy favicon to route of /_site
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  // Copy Javascript Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/static/js");
  // Copy Javascript Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/static/css");


  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
    // your normal config options
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
