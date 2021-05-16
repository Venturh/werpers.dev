async function generateOgImage(
  path: string,
  locale: string,
  title = 'portfolio',
  type = 'portfolio',
  slug = 'portfolio',
  summary?: string,
  readingTime?: string,
  date?: string
) {
  const imagePath = `https://werpers.dev/images/og/portfolio.png`;

  return {
    url: imagePath,
    width: 1200,
    height: 630,
    alt: title,
  };
}

export default generateOgImage;
