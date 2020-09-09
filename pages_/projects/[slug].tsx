import { Layout } from "components";

import { getAllProjects, getProjectBySlug } from "lib/prismic";
import Hero from "sections/project/Hero";

interface Project {
  name: string;
  gitname: string;
  cover: string;
  year: string;
  headline: string;
  slug: string;
  url: string;
  giturl: string;
}

type ProjectProps = {
  project: Project;
  github: any;
};

const Project = ({ project, github }: ProjectProps) => {
  return (
    <Layout>
      <Hero project={project} github={github} />
    </Layout>
  );
};

export default Project;

export async function getStaticProps({ params, lang }) {
  const { slug } = params;
  const project = await getProjectBySlug(lang, slug);
  const userReposResponse = await fetch(
    `https://api.github.com/repos/venturh/${project.gitname}`
  );

  const github = await userReposResponse.json();

  return {
    props: { project, github },
    revalidate: 1,
  };
}

export async function getStaticPaths({ lang }) {
  const projects = await getAllProjects(lang);

  return {
    paths: projects.map(({ node }) => `/${lang}/projects/${node.slug}`) || [],
    fallback: false,
  };
}
