import { useState } from 'react';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';

import Layout from 'components/Layout';
import { ProjectFilters, ProjectList } from 'sections/projects';

import { projects } from 'content';

import { genearateImage } from 'next-seo.config';

const Projects = ({ projects }) => {
  const { t, lang } = useTranslation();
  const [filteredProjects, setFilteredProjects] = useState([]);

  const title = `${t('projects:projects')} - Maximilian Werpers`;
  const description = t('projects:projectsDesc');
  const url = `https://www.maxwerpers.me/${lang}/projects`;

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
          images: genearateImage(title),
          type: 'website',
        }}
      />
      <Layout className="w-full space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold text-brand">
            {t('projects:projects')}
          </h1>
          <h2 className="text-lg">{description}</h2>
        </div>
        <ProjectFilters projects={projects} onFilter={setFilteredProjects} />
        <ProjectList projects={filteredProjects} />
      </Layout>
    </>
  );
};

export default Projects;

export async function getStaticProps() {
  return {
    props: {
      projects,
      revalidate: 1,
    },
  };
}
