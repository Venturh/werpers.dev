/** @type {import('next').NextConfig} */
const config = {
	images: {
		domains: ['cdn.discordapp.com'],
	},
	experimental: {
		useLightningcss: true,
	},
};

export default config;
