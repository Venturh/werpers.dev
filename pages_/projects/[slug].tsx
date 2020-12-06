import { NextSeo } from 'next-seo';

import { Layout } from 'components';
import Hero from 'sections/project/Hero';

import {
  getAllProjects,
  getProjectBySlug,
  Project as ProjectType,
} from 'lib/prismic';

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
          type: 'website',
        }}
      />
      <Layout>
        <Hero project={project} github={github} />
      </Layout>
    </>
  );
};

export default Project;

export async function getStaticProps({ params, locale }) {
  const { slug } = params;

  const project = await getProjectBySlug(locale, slug);
  const userReposResponse = await fetch(
    `https://api.github.com/repos/venturh/${project.gitname}`
  );

  const github = await userReposResponse.json();

  return { props: { project, github }, revalidate: 1 };
}

export async function getStaticPaths({ locales }) {
  const projects = {
    de: await getAllProjects(locales[0]),
    en: await getAllProjects(locales[1]),
  };

  return {
    paths: locales
      .map((locale: 'en' | 'de') => {
        return projects[locale].map((page) => {
          return { params: { slug: page.slug }, locale };
        });
      })
      .flat(),
    fallback: false,
  };
}
