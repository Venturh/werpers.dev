import chrome from 'chrome-aws-lambda';
import { mkdirSync } from 'fs';

const isDev = process.env.NODE_ENV === 'development';
const baseUrl = isDev ? 'http:localhost:3000' : 'https://werpers.dev';

async function generateOgImage(
  path: string,
  locale: string,
  title = 'portfolio'
) {
  let url = `${baseUrl}/${locale}/${path}`;
  if (title) url += `?title=${title}`;
  const ogImageDir = `./public/images/og/${locale}`;

  const imagePath = `${ogImageDir}/${title}.png`;
  const publicPath = `${baseUrl}/images/og/${locale}/${title}.png`;

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
