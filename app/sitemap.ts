import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://werpers.dev',
			lastModified: new Date(),
		},
	];
}
