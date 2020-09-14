import { NextSeo } from "next-seo";

import { Layout } from "components";
import Hero from "sections/project/Hero";

import {
  getAllProjects,
  getProjectBySlug,
  Project as ProjectType,
} from "lib/prismic";

type ProjectProps = {
  project: ProjectType;
  github: any;
};

const Project = ({ project, github }: ProjectProps) => {
  const url = `https://www.maxwerpers.me/de/projects/${project.slug}`;
  const title = `${project.name} - Maximilian Werpers`;
  const description = project.headline;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
          type: "website",
        }}
      />
      <Layout>
        <Hero project={project} github={github} />
      </Layout>
    </>
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
    paths: projects.map(({ slug }) => `/${lang}/projects/${slug}`) || [],
    fallback: false,
  };
}
