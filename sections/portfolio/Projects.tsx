import useTranslation from 'next-translate/useTranslation';

import { ProjectCard } from 'components';

import { Project } from 'lib/prismic';
import SectionHeader from 'components/SectionHeader';

const Projects = ({ projects }) => {
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
        {projects.map((project: Project, index: number) => {
          if (index <= 2)
            return <ProjectCard key={project.name} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
