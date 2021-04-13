import { DefaultLayout } from 'components/layouts';
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
    <DefaultLayout className="space-y-8">
      <Hero />
      <Projects projects={projects} locale={locale} />
      <Career />
      <Skills />
      <About />
    </DefaultLayout>
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
