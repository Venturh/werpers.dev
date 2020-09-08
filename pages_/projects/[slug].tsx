import useSWR from "swr";

import { Layout } from "components";

import { getAllProjects, getProjectBySlug } from "lib/prismic";
import fetcher from "../../lib/fetcher";
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
  gitname: string;
};

function Project({ project, gitname }: ProjectProps) {
  const { data } = useSWR("/api/github?gitname=" + gitname, fetcher);
  return (
    <Layout>
      <Hero project={project} github={data} />
    </Layout>
  );
}

export async function getStaticProps({ params, lang }) {
  const { slug } = params;
  const project = await getProjectBySlug(lang, slug);

  return {
    props: { project, gitname: project.gitname },
  };
}

export async function getStaticPaths({ lang }) {
  const projects = await getAllProjects(lang);

  return {
    paths: projects.map(({ node }) => `/${lang}/projects/${node.slug}`) || [],
    fallback: false,
  };
}

export default Project;
