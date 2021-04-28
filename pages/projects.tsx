import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import { DefaultLayout } from 'components/layouts';
import { Button, Container } from 'components';
import { ProjectFilters, ProjectList } from 'sections/projects';

import { projects } from 'content';

const Projects = ({ projects }) => {
  const { t, lang } = useTranslation('portfolio');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const title = `${t('projects')} - Maximilian Werpers`;
  const description = t('projectsDesc');
  const url = `https://www.werpers.dev/${lang}/projects`;

  return (
    <DefaultLayout title={title} description={description} url={url}>
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

export async function getStaticProps() {
  return {
    props: {
      projects,
      revalidate: 1,
    },
  };
}
