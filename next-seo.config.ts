import { NextSeoProps } from 'next-seo';

export default function SEO(lang: string): NextSeoProps {
  const title = 'Maximilian Werpers - Web Developer & Student';
  const description = `Portfolio ${
    lang === 'de' ? 'von' : 'of'
  } Maximilian Werpers, Fullstack Developer`;
  const locale = lang === 'de' ? 'de_DE' : 'en_US';
  const home = 'https://werpers.dev';

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
      url: home,
      title,
      description,
      images: genearateImage(locale),
      profile: {
        firstName: 'Maximilian',
        lastName: 'Werpers',
      },
    },
  };
}

export function genearateImage(locale: string) {
  return [
    {
      url: `https://werpers.dev/images/${locale}
      width: 1280,
      height: 720,
      alt: title,
    },
  ];
}
