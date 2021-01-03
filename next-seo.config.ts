export default function SEO(lang: string) {
  const title = 'Maximilian Werpers - Web Developer & Student';
  const description = `Portfolio ${
    lang === 'de' ? 'von' : 'of'
  } Maximilian Werpers, Fullstack Developer`;
  const locale = lang === 'de' ? 'de_DE' : 'en_US';
  const home = 'https://maxwerpers.me';

  return {
    title,
    description,
    canonical: home,
    openGraph: {
      type: 'website',
      locale,
      url: home,
      title,
      description,
      images: genearateImage(title),
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
