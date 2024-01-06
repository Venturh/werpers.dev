import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
		},
		sitemap: 'https://werpers.dev/sitemap.xml',
		host: 'https://werpers.dev',
	};
}
