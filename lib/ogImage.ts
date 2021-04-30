import chrome from 'chrome-aws-lambda';
import { createHash } from 'crypto';
import fs from 'fs';

const isDev = process.env.NODE_ENV === 'development';
const exePath = '/usr/bin/chromium-browser';
console.log('baseURl', process.env.BASE_URL);
async function generateOgImage(path: string, baseUrl = 'https://werpers.dev') {
  if (isDev) {
    return 'og image will be generated in production';
  }
  const url = `${baseUrl}/generator/${path}`;
  const hash = createHash('md5').update(url).digest('hex');
  const ogImageDir = `./public/images/og`;
  const imagePath = `${ogImageDir}/${hash}.png`;
  const publicPath = `${baseUrl}/images/og/${hash}.png`;

  const browser = await chrome.puppeteer.launch({
    args: chrome.args,
    executablePath: isDev ? exePath : await chrome.executablePath,
    headless: true,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  await page.goto(url, { waitUntil: 'networkidle2' });
  const buffer = await page.screenshot({ type: 'png' });
  await browser.close();

  fs.mkdirSync(ogImageDir, { recursive: true });
  fs.writeFileSync(imagePath, buffer as string);

  return publicPath;
}

export default generateOgImage;
