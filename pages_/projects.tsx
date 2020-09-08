import { useState } from "react";
import useTranslation from "next-translate/useTranslation";

import Layout from "components/Layout";
import ProjectList from "sections/projects/ProjectList";
import ProjectFilter from "sections/projects/ProjectFilters";

import styled from "styled-components";
import { getAllProjects } from "../lib/prismic/api";
import { Project } from "lib/prismic/api";

const Projects = ({ projects }: Project) => {
  const { t } = useTranslation();
  const [appliedFilters, setAppliedFilters] = useState([]);

  const setFilters = (name: string) => {
    const find = appliedFilters.findIndex((n) => n === name);
    if (find !== -1) {
      setAppliedFilters((appliedFilters) =>
        appliedFilters.filter((n) => n !== name)
      );
    } else {
      setAppliedFilters((appliedFilters) => [...appliedFilters, name]);
    }
  };

  const filteredProjects =
    appliedFilters.length !== 0
      ? projects.filter((p) =>
          p.node.body[0].fields.some(({ type }) =>
            appliedFilters.some((n) => n === type)
          )
        )
      : projects;

  console.log("Projects -> filteredProjects", filteredProjects);

  return (
    <Layout>
      <main>
        <Content>
          <ProjectFilter setFilters={setFilters} />
          <ProjectList projects={filteredProjects} />
        </Content>
      </main>
    </Layout>
  );
};

export default Projects;

export async function getStaticProps({ lang }) {
  const projects = await getAllProjects(lang);

  return {
    props: {
      projects,
    },
  };
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
