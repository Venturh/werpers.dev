import useTranslation from 'next-translate/useTranslation';
import { DefaultLayout } from 'components/layouts';
import { Container, ButtonOrLink, Labels, Section, BaseCard } from 'components';
import { getAllFontmatter } from 'lib/mdx';
import { BlogFrontMatter } from '@types';

type Props = {
  blogFrontmatter: BlogFrontMatter[];
};

const Blog = ({ blogFrontmatter }: Props) => {
  const { t, lang } = useTranslation('portfolio');
  const title = `${t('blog')} - Maximilian Werpers`;
  const description = t('blogSub');
  const url = `https://www.werpers.dev/${lang}/projects`;

  return (
    <DefaultLayout title={title} description={description} url={url}>
      <Container title="blog" subtitle="blogSub">
        <div className="flex flex-col space-y-4">
          {blogFrontmatter.map(
            ({ title, summary, date, slug, categories, readingTime }) => (
              <ButtonOrLink key={slug} to={`/blog/${slug}`}>
                <span className="text-lg font-medium md sm:text-xl text-primary">
                  {title}
                </span>
                <div className="flex items-center space-x-2 text-sm text-secondary">
                  <div className="space-x-1">
                    <span>{date}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>{readingTime} read</span>
                  </div>
                  {categories && (
                    <Labels labels={categories} variant="15" max={3} small />
                  )}
                </div>
                <p className="mt-1 prose">{summary}</p>
              </ButtonOrLink>
            )
          )}
        </div>
      </Container>
    </DefaultLayout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const blogFrontmatter = getAllFontmatter(locale, 'blog') as BlogFrontMatter[];
  return {
    props: {
      getStaticPropsWorks: true,
      blogFrontmatter,
    },
    revalidate: 1,
  };
}

export default Blog;
