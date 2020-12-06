const path = require("path");
const { locales, defaultLocale } = require("./i18n.json");
module.exports = {
  i18n: { locales, defaultLocale },
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
