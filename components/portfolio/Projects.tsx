import ProjectCard from 'components/ui/ProjectCard';
import Section from 'components/ui/Section';

import { Project } from '@types';

const Projects = ({ projects, locale }: { projects: Project[]; locale: string }) => {
	return (
		<Section
			title="projects"
			subtitle="projectsSub"
			button={{ text: 'show_more', to: '/projects' }}
		>
			<div className="space-y-4">
				{projects
					.filter(({ main }) => main)
					.map((project: Project, index: number) => (
						<ProjectCard key={project.slug} project={project} locale={locale} />
					))}
			</div>
		</Section>
	);
};

export default Projects;
