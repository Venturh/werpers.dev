const path = require('path');
const nextTranslate = require('next-translate');
module.exports = nextTranslate({
  experimental: {
    optimizeFonts: true,
    optimizeImages: true,
  },
  images: {
    domains: ['i.scdn.co', 'cdn.discordapp.com', `${process.env.NEXT_PUBLIC_DISCORD_API}`],
  },
  webpack: (config) => {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['icons'] = path.join(__dirname, 'icons');
    return config;
  },
});
