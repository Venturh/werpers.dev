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
    openGraph: {
      type: 'website',
      locale,
      url: home,
      title,
      description,
      images: genearateImage(title),
      profile: {
        firstName: 'Maximilian',
        lastName: 'Werpers',
      },
    },
  };
}

export function genearateImage(title: string) {
  title = title.replace(' - ', '<br/>');
  return [
    {
      url: `${process.env.NEXT_PUBLIC_OG_IMG_GENERATOR}/${title}?theme=dark&md=1&images=https://prismic-io.s3.amazonaws.com/maxwerpers-next/2b1533d4-e32c-4340-9c50-b5d2acba271c_maxwerpers.svg&widths=1200&heights=150`,
      width: 1500,
      height: 1500,
      alt: title,
    },
  ];
}
