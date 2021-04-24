const nextTranslate = require('next-translate');
module.exports = nextTranslate({
  experimental: {
    optimizeFonts: true,
    optimizeImages: true,
  },
  future: {
    webpack5: true,
  },
});
