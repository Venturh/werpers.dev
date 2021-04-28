import hydrate from 'next-mdx-remote/hydrate';
import { DefaultLayout } from 'components/layouts';

import { getAllFontmatter, getFileBySlug } from 'lib/mdx';
import { BlogFrontMatter } from '@types';

type Props = {
  source: any;
  frontmatter: BlogFrontMatter;
};

export default function Blog({ source, frontmatter }: Props) {
  const content = hydrate(source, {});

  return (
    <DefaultLayout>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
          {frontmatter.title}
        </h1>
        <div className="prose">{content}</div>
      </div>
    </DefaultLayout>
  );
}

export async function getStaticProps({ params, locale }) {
  const { slug } = params;

  const mdx = (await getFileBySlug(locale, 'blog', slug)) as {
    mdxSource: any;
    frontmatter: any;
  };

  return {
    props: {
      source: mdx.mdxSource,
      frontmatter: mdx.frontmatter,
      revalidate: 1,
    },
  };
}

export async function getStaticPaths({ locales }) {
  const blog = {
    de: getAllFontmatter(locales[0], 'blog'),
    en: getAllFontmatter(locales[1], 'blog'),
  };

  return {
    paths: locales
      .map((locale: 'en' | 'de') => {
        return blog[locale].map((page) => {
          return { params: { slug: page.slug }, locale };
        });
      })
      .flat(),
    fallback: false,
  };
}
