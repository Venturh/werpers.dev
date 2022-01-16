import { GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';

import Layout from 'components/layouts/Layout';
import Projects from 'components/portfolio/Projects';
import Hero from 'components/portfolio/Hero';
import Career from 'components/portfolio/Career';
import Skills from 'components/portfolio/Skills';

import generateOgImage from 'lib/ogImage';
import { projects } from 'content';
import { ogImage, Project } from '@types';
import About from 'components/portfolio/About';

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

  const title = 'Portfolio - Maximilian Werpers';
  const description = 'Maximilian Werpers -  Web Developer, Student';
  const url = `https://www.werpers.dev/${lang}`;
  return (
    <Layout
      className="space-y-8"
      title={title}
      description={description}
      url={url}
      ogImage={ogImage}
    >
      <Hero />
      <Projects projects={projects} locale={locale} />
      <Skills />
      <Career />
      <About />
    </Layout>
  );
};
export default Portfolio;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      locale: locale,
      projects,
      ogImage: await generateOgImage('og', locale, 'portfolio'),
    },
  };
};
