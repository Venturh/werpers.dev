import useTranslation from 'next-translate/useTranslation';

import { DefaultLayout } from 'components/layouts';
import { Container, BlogPostCard } from 'components';
import { getAllFontmatter } from 'lib/mdx';
import generateOgImage from 'lib/ogImage';
import { BlogFrontMatter, ogImage } from '@types';

type Props = {
  blogFrontmatter: BlogFrontMatter[];
  ogImage: ogImage;
};

const Blog = ({ blogFrontmatter, ogImage }: Props) => {
  const { t, lang } = useTranslation('portfolio');

  const title = `${t('blog')} - Maximilian Werpers`;
  const description = t('blogSub');
  const url = `https://www.werpers.dev/${lang}/blog`;

  return (
    <DefaultLayout
      title={title}
      description={description}
      url={url}
      ogImage={ogImage}
    >
      <Container title="blog" subtitle="blogSub">
        <div className="flex flex-col space-y-4">
          {blogFrontmatter.map((frontmatter) => (
            <BlogPostCard key={frontmatter.slug} {...frontmatter} />
          ))}
        </div>
      </Container>
    </DefaultLayout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const blogFrontmatter = getAllFontmatter(locale, 'blog') as BlogFrontMatter[];
  return {
    props: {
      blogFrontmatter,
      ogImage: await generateOgImage('og', locale, 'blog'),
    },
  };
}

export default Blog;
