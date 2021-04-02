import { ProjectFrontMatter } from '@types';
import { Layout } from 'components';
import { getAllFontmatter } from 'lib/mdx';
import {
  Projects,
  PortfolioHero as Hero,
  Career,
  Skills,
  About,
} from 'sections';

const Portfolio = ({ projects }: { projects: ProjectFrontMatter[] }) => {
  return (
    <Layout className="space-y-8">
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
  const projects = getAllFontmatter(locale, 'projects') as ProjectFrontMatter[];
  return {
    props: {
      getStaticPropsWorks: true,
      lang: locale,
      projects,
    },
    revalidate: 1,
  };
}
