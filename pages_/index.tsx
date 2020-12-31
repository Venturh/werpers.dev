import { Layout } from 'components';
import { getAllCareers, getAllExperiences, getAllProjects } from 'lib/prismic';
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
      <Career career={career} />
      <Skills />
      <About />
    </Layout>
  );
};
export default Portfolio;

export async function getStaticProps({ locale }) {
  const projects = await getAllProjects(locale);
  const experiences = await getAllExperiences(locale);
  const career = await getAllCareers(locale);
  return {
    props: {
      getStaticPropsWorks: true,
      lang: locale,
      projects,
      experiences,
      career,
    },
    revalidate: 1,
  };
}
