import { Layout } from 'components';
import { Projects, Hero, Career, Skills, About } from 'sections/portfolio';
import { projects } from 'content';
import { Project } from '@types';

const Portfolio = ({
  projects,
  locale,
}: {
  projects: Project[];
  locale: string;
}) => {
  return (
    <Layout className="space-y-8">
      <Hero />
      <Projects projects={projects} locale={locale} />
      <Career />
      <Skills />
      <About />
    </Layout>
  );
};
export default Portfolio;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      getStaticPropsWorks: true,
      locale: locale,
      projects,
    },
    revalidate: 1,
  };
}
