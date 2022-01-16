import { useState } from 'react';
import { GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';

import Layout from 'components/layouts/Layout';
import Container from 'components/ui/Container';
import ProjectFilters from 'components/projects/ProjectFilters';
import ProjectList from 'components/projects/ProjectList';

import { projects } from 'content';
import generateOgImage from 'lib/ogImage';

import { ogImage, Project } from '@types';

const Projects = ({
  projects,
  ogImage,
}: {
  projects: Project[];
  ogImage: ogImage;
}) => {
  const { t, lang } = useTranslation('portfolio');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const title = `${t('projects')} - Maximilian Werpers`;
  const description = t('projectsDesc');
  const url = `https://www.werpers.dev/${lang}/projects`;

  return (
    <Layout title={title} description={description} url={url} ogImage={ogImage}>
      <Container
        title="projects"
        subtitle="projectsDesc"
        button={{
          text: lang === 'de' ? 'Filter' : 'Filters',
          onClick: () => {
            setShowFilters(!showFilters);
          },
        }}
      >
        <div className="space-y-6">
          {showFilters && (
            <ProjectFilters
              projects={projects}
              onFilter={setFilteredProjects}
            />
          )}
          <ProjectList projects={filteredProjects} />
        </div>
      </Container>
    </Layout>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      projects,
      ogImage: await generateOgImage('og', locale, 'projects'),
    },
  };
};
