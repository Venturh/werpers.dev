import { Layout } from 'components';
import { getAllProjects } from 'lib/prismic';
import {
  Projects,
  PortfolioHero as Hero,
  Career,
  Skills,
  About,
} from 'sections';

const Portfolio = ({ projects, career }) => {
  return (
    <Layout className="space-y-6">
      <Hero />
      <Projects projects={projects} />
      <Career />
      <Skills />
      <About />
    </Layout>
  );
};
export default Portfolio;

export async function getStaticProps({ locale }) {
  const projects = await getAllProjects(locale);
  return {
    props: {
      getStaticPropsWorks: true,
      lang: locale,
      projects,
    },
    revalidate: 1,
  };
}
