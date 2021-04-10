const path = require('path');
const nextTranslate = require('next-translate');
module.exports = nextTranslate({
  experimental: {
    optimizeFonts: true,
    optimizeImages: true,
  },
});
