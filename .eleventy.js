module.exports = function(eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({ ghostMode: false });

  return {
    dir: {
      input: "src",
      output: "build"
    }
  };
};
