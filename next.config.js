const path = require("path");
const withOptimizedImages = require("next-optimized-images");
module.exports = withOptimizedImages({
  optimizeImagesInDev: true,
  /* config for next-optimized-images */
  webpack: (config) => {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["icons"] = path.join(__dirname, "icons");
    return config;
  },
});
