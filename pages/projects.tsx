import { useState } from 'react';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';

import Layout from 'components/Layout';
import ProjectList from 'sections/projects/ProjectList';
import ProjectFilter from 'sections/projects/ProjectFilters';

import { getAllProjects } from '../lib/prismic';
import { genearateImage } from 'next-seo.config';

const Projects = ({ projects }) => {
  const { t, lang } = useTranslation();
  const [filteredProjects, setFilteredProjects] = useState([]);

  const title = `${t('common:projects')} - Maximilian Werpers`;
  const description = t('common:projectsDesc');
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
            {t('common:projects')}
          </h1>
          <h2 className="text-lg">{t('common:projectsDesc')}</h2>
        </div>
        <ProjectFilter projects={projects} onFilter={setFilteredProjects} />
        <ProjectList projects={filteredProjects} />
      </Layout>
    </>
  );
};

export default Projects;

export async function getStaticProps({ locale }) {
  const projects = await getAllProjects(locale);

  return {
    props: {
      projects,
      revalidate: 1,
    },
  };
}
