const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "md",
    "css",
    "jpg",
    "png",
    "jpeg",
    "ico"
  ]);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  // eleventyConfig.addPassthroughCopy("images");
  // eleventyConfig.addPassthroughCopy("css");
  // eleventyConfig.addPassthroughCopy({"favicon.ico": "/"});
  // eleventyConfig.addPassthroughCopy("**/*.jpeg");
  // eleventyConfig.addPassthroughCopy("**/*.png");
  // eleventyConfig.addPassthroughCopy("**/*.css");
};

