import { useState } from 'react';
import { GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';

import { DefaultLayout } from 'components/layouts';
import { Button, Container } from 'components';
import { ProjectFilters, ProjectList } from 'sections/projects';

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
    <DefaultLayout
      title={title}
      description={description}
      url={url}
      ogImage={ogImage}
    >
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
        <div className="space-y-8">
          {showFilters && (
            <ProjectFilters
              projects={projects}
              onFilter={setFilteredProjects}
            />
          )}
          <ProjectList projects={filteredProjects} />
        </div>
      </Container>
    </DefaultLayout>
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
