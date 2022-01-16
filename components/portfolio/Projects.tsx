import useTranslation from 'next-translate/useTranslation';

import ProjectCard from 'components/ui/ProjectCard';
import Section from 'components/ui/Section';
import SectionHeader from 'components/ui/SectionHeader';

import { Project } from '@types';

const Projects = ({
  projects,
  locale,
}: {
  projects: Project[];
  locale: string;
}) => {
  const { t } = useTranslation('portfolio');
  return (
    <Section
      title="projects"
      subtitle="projectsSub"
      button={{ text: 'show_more', to: '/projects' }}
    >
      <div className="space-y-4">
        {projects.map((project: Project, index: number) => {
          if (index <= 2)
            return (
              <ProjectCard
                key={project.slug}
                project={project}
                locale={locale}
              />
            );
        })}
      </div>
    </Section>
  );
};

export default Projects;
