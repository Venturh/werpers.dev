const path = require("path");
module.exports = {
  experimental: {
    optimizeFonts: true,
    optimizeImages: true,
  },
  webpack: (config) => {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["icons"] = path.join(__dirname, "icons");
    return config;
  },
};
