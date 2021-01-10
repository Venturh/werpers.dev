import { useState } from 'react';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';

import Layout from 'components/Layout';
import ProjectList from 'sections/projects/ProjectList';
import ProjectFilter from 'sections/projects/ProjectFilters';

import { genearateImage } from 'next-seo.config';
import { getAllFontmatter } from 'lib/mdx';
import { ProjectFrontMatter } from '@types';

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
        <ProjectFilter projects={projects} onFilter={setFilteredProjects} />
        <ProjectList projects={filteredProjects} />
      </Layout>
    </>
  );
};

export default Projects;

export async function getStaticProps({ locale }) {
  const projects = getAllFontmatter(locale, 'projects') as ProjectFrontMatter[];

  return {
    props: {
      projects,
      revalidate: 1,
    },
  };
}
