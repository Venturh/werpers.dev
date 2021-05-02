import chrome from 'chrome-aws-lambda';
import { mkdirSync, statSync } from 'fs';

const isDev = process.env.NODE_ENV === 'development';

async function generateOgImage(
  path: string,
  locale: string,
  title = 'portfolio',
  type = 'portfolio',
  summary?: string,
  readingTime?: string,
  date?: string
) {
  if (isDev) return null;
  const baseUrl = `https://werpers.dev`;
  let url = `${baseUrl}/${locale}/${path}`;
  if (title) url += `?title=${title}`;
  if (type === 'blog') {
    url += `&summary=${summary}&readinTime=${readingTime}&date=${date}`;
  }
  const ogImageDir = `./public/images/og/${locale}`;

  const imagePath = `${ogImageDir}/${title}.png`;
  const publicPath = `${baseUrl}/images/og/${locale}/${title}.png`;

  try {
    statSync(imagePath);
    return {
      url: publicPath,
      width: 1200,
      height: 630,
      alt: title,
    };
    return publicPath;
  } catch (error) {
    //
  }

  mkdirSync(ogImageDir, { recursive: true });

  const browser = await chrome.puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: true,
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  await page.goto(url, { waitUntil: 'networkidle2' });
  await page.screenshot({ type: 'png', path: imagePath });
  await browser.close();

  return {
    url: publicPath,
    width: 1200,
    height: 630,
    alt: title,
  };
}

export default generateOgImage;
