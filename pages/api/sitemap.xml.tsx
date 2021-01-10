import { ProjectFrontMatter } from '@types';
import { getAllFontmatter } from 'lib/mdx';
import { NextApiRequest, NextApiResponse } from 'next';
import { SitemapStream, streamToPromise, EnumChangefreq } from 'sitemap';
import { createGzip } from 'zlib';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!res) return {};
  try {
    res.setHeader('content-type', 'application/xml');
    res.setHeader('Content-Encoding', 'gzip');

    const smStream = new SitemapStream({
      hostname: 'https://maxwerpers.me',
    });

    const pipeline = smStream.pipe(createGzip());
    smStream.write({
      url: '/',
    });
    smStream.write({
      url: '/about',
    });
    smStream.write({
      url: '/projects',
    });

    const projects = getAllFontmatter('de', 'projects') as ProjectFrontMatter[];
    projects.map((project) => {
      smStream.write({
        url: `/projects/${project.slug}`,
        changefreq: EnumChangefreq.WEEKLY,
      });
    });
    smStream.end();

    // cache the response
    // streamToPromise.then(sm => sitemap = sm)
    streamToPromise(pipeline);
    // stream the response
    pipeline.pipe(res).on('error', (e) => {
      throw e;
    });
  } catch (e) {
    res.status(500).end();
  }
};
