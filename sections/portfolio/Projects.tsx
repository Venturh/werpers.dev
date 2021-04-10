import useTranslation from 'next-translate/useTranslation';

import { ProjectCard, SectionHeader } from 'components';
import { Project } from '@types';

const Projects = ({
  projects,
  locale,
}: {
  projects: Project[];
  locale: string;
}) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-4">
      <SectionHeader
        title={t('portfolio:projects')}
        subtitle={t('portfolio:projectsSub')}
        buttonText={t('portfolio:show_more')}
        to="/projects"
      />

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
    </div>
  );
};

export default Projects;
