const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "md",
    "css",
    "jpg",
    "png",
    "ico"
  ]);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  // eleventyConfig.addPassthroughCopy("images");
  // eleventyConfig.addPassthroughCopy("css");
  // eleventyConfig.addPassthroughCopy("**/*.jpg");
  // eleventyConfig.addPassthroughCopy("**/*.jpeg");
  // eleventyConfig.addPassthroughCopy("**/*.png");
  // eleventyConfig.addPassthroughCopy("**/*.css");
};

