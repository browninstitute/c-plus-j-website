const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
//   eleventyConfig.addPassthroughCopy("**/*.png");
//   eleventyConfig.addPassthroughCopy("**/*.css");
};