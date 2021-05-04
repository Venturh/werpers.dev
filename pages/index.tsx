import { GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';

import { DefaultLayout } from 'components/layouts';
import { Projects, Hero, Career, Skills } from 'sections/portfolio';
import generateOgImage from 'lib/ogImage';
import { projects } from 'content';
import { ogImage, Project } from '@types';

const Portfolio = ({
  projects,
  locale,
  ogImage,
}: {
  projects: Project[];
  locale: string;
  ogImage: ogImage;
}) => {
  const { t, lang } = useTranslation('portfolio');

  const title = `${t('portfolio')} - Maximilian Werpers`;
  const description = t('hero_2');
  const url = `https://www.werpers.dev/${lang}`;
  return (
    <DefaultLayout
      className="space-y-8"
      title={title}
      description={description}
      url={url}
      ogImage={ogImage}
    >
      <Hero />
      <Projects projects={projects} locale={locale} />
      <Career />
      <Skills />
    </DefaultLayout>
  );
};
export default Portfolio;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      locale: locale,
      projects,
      ogImage: null,
    },
  };
};
