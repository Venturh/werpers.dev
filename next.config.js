const path = require("path");

module.exports = {
  webpack: (config) => {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["icons"] = path.join(__dirname, "icons");
    return config;
  },
};
