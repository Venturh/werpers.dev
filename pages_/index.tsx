import styled from "styled-components";
import { breakpoints } from "styles";
import { getAllExperiences, getAllProjects } from "pages_/api";
import { Layout } from "components";
import Start from "sections/portfolio/Start";
import Experience from "sections/portfolio/Experience";

const Portfolio: React.FC<any> = ({ projects, experiences }) => {
  console.log("experiences", experiences);
  return (
    <Layout>
      <Start projects={projects} />
      <Expertise>
        <Experience experiences={experiences} />
      </Expertise>
    </Layout>
  );
};

export default Portfolio;

const Expertise = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

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
