import styled from "styled-components";
import { breakpoints } from "styles";
import { getAllExperiences, getAllProjects } from "pages_/api";
import { Layout } from "components";
import Start from "sections/portfolio/Start";
import Experience from "sections/portfolio/Experience";
import Skills from "sections/portfolio/Skills";

const Portfolio: React.FC<any> = ({ projects, experiences }) => (
  <Layout>
    <Start projects={projects} />
    <Expertise>
      <Experience experiences={experiences} />
      <Skills />
    </Expertise>
  </Layout>
);
export default Portfolio;

export async function getStaticProps({ lang }) {
  const projects = await getAllProjects(lang);
  const experiences = await getAllExperiences(lang);
  return {
    props: {
      projects,
      experiences,
    },
  };
}

const Expertise = styled.section`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;

  @media (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
