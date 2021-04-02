import useTranslation from 'next-translate/useTranslation';

import { ProjectCard } from 'components';

import SectionHeader from 'components/SectionHeader';
import { ProjectFrontMatter } from '@types';

const Projects = ({ projects }: { projects: ProjectFrontMatter[] }) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-2">
      <SectionHeader
        title={t('portfolio:projects')}
        subtitle={t('portfolio:projectsSub')}
        buttonText={t('portfolio:show_more')}
        to="/projects"
      />

      <div className="space-y-4">
        {projects.map((project: ProjectFrontMatter, index: number) => {
          if (index <= 2)
            return <ProjectCard key={project.title} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
