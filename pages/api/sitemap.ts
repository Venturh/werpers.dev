import { BlogFrontMatter } from '@types';
import { getAllFontmatter } from 'lib/mdx';
import { NextApiRequest, NextApiResponse } from 'next';
import { SitemapStream, streamToPromise } from 'sitemap';
import { createGzip } from 'zlib';

let sitemap: any;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.setHeader('content-type', 'application/xml');
    res.setHeader('Content-Encoding', 'gzip');

    if (sitemap) {
      res.send(sitemap);
      return;
    }
    const smStream = new SitemapStream({
      hostname: 'https://werpers.dev',
    });
    const pipeline = smStream.pipe(createGzip());
    const locales = ['', 'de', 'en'];
    const pages = ['', 'projects', 'about', 'blog', 'design'];
    locales.map((locale) =>
      pages.map((page) =>
        smStream.write({
          url: `${locale}/${page}`,
        })
      )
    );

    const blogs = {
      de: getAllFontmatter('de', 'blog'),
      en: getAllFontmatter('en', 'blog'),
    };

    locales.map((locale) =>
      blogs[locale || 'de'].map((blog: BlogFrontMatter) =>
        smStream.write({
          url: `${locale}/blog/${blog.slug}`,
        })
      )
    );

    smStream.end();
    streamToPromise(pipeline).then((sm) => (sitemap = sm));
    smStream.end();
    pipeline.pipe(res).on('error', (e) => {
      throw e;
    });
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};
