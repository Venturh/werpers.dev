const nextTranslate = require('next-translate');


module.exports = nextTranslate({
    async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap'
      }
    ];
  },
});
