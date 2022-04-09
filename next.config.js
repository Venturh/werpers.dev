const nextTranslate = require('next-translate');

module.exports = nextTranslate({
	images: {
		domains: [process.env.NEXT_PUBLIC_DISCORD_API, 'cdn.discordapp.com'],
	},
	async rewrites() {
		return [
			{
				source: '/sitemap.xml',
				destination: '/api/sitemap',
			},
		];
	},
});
