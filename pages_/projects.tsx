import { useState } from "react";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";

import Layout from "components/Layout";
import ProjectList from "sections/projects/ProjectList";
import ProjectFilter from "sections/projects/ProjectFilters";

import styled from "styled-components";
import { getAllProjects } from "../lib/prismic";
import { Projects as ProjectsProps } from "lib/prismic";
import { Header, Subtitle } from "components";

const Projects = ({ projects }: ProjectsProps) => {
  const { t } = useTranslation();

  const [filteredProjects, setFilteredProjects] = useState([]);

  const url = "https://www.maxwerpers.me/de/projects";
  const title = "Projekte Übersicht - Maximilian Werpers";

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          title,
          url,
          type: "website",
        }}
      />
      <Layout>
        <main>
          <Header>{t("common:projects")}</Header>
          <Subtitle>{t("common:projectsDesc")}</Subtitle>
          <Content>
            <ProjectFilter projects={projects} onFilter={setFilteredProjects} />
            <ProjectList projects={filteredProjects} />
          </Content>
        </main>
      </Layout>
    </>
  );
};

export default Projects;

export async function getStaticProps({ lang }) {
  const projects = await getAllProjects(lang);

  return {
    props: {
      projects,
      revalidate: 1,
    },
  };
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
