import { NextSeoProps } from 'next-seo';

export default function SEO(lang: string): NextSeoProps {
	const title = 'Portfolio - Maximilian Werpers';
	const description = 'Maximilian Werpers - Fullstack Software Engineer';
	const locale = lang === 'de' ? 'de_DE' : 'en_US';
	const url = `https://www.werpers.dev/${lang}`;

	return {
		title,
		description,
		additionalMetaTags: [
			{ property: 'author', content: 'Maximilian Werpers' },
			{
				property: 'keywords',
				content:
					'bio,homepage,portfolio,developer,remote,typescript,node.js,node,react,vue, laravel, php, open-source,open source, github, werpers',
			},
		],
		twitter: {
			cardType: 'summary_large_image',
			handle: 'venturh94',
			site: 'venturh94',
		},
		openGraph: {
			type: 'website',
			locale,
			url,
			title,
			description,
			profile: {
				firstName: 'Maximilian',
				lastName: 'Werpers',
			},
		},
	};
}
