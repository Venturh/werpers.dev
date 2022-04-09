const nextTranslate = require('next-translate');

module.exports = nextTranslate({
	images: {
		domains: ['cdn.discordapp.com'],
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
