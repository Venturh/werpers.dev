import { GetStaticProps } from 'next';

import { DefaultLayout } from 'components/layouts';
import { Projects, Hero, Career, Skills } from 'sections/portfolio';
import { projects } from 'content';
import { ogImage, Project } from '@types';
import generateOgImage from 'lib/ogImage';

const Portfolio = ({
  projects,
  locale,
  ogImage,
}: {
  projects: Project[];
  locale: string;
  ogImage: ogImage;
}) => {
  return (
    <DefaultLayout className="space-y-8" ogImage={ogImage}>
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
      getStaticPropsWorks: true,
      locale: locale,
      projects,
      ogImage: await generateOgImage('og', locale, 'portfolio'),
    },
  };
};
