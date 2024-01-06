import Section from 'components/ui/Section';
import Clickable from 'components/ui/Clickable';

import { Project } from '@types';
import { Labels } from 'components/ui/Label';

type Props = {
	projects: Project[];
	locale: string;
};

function Projects({ projects, locale }: Props) {
	return (
		<Section
			title="projects"
			subtitle="projectsSub"
			button={{ text: 'show_more', to: '/projects' }}
		>
			<div className="space-y-2">
				{projects
					.filter(({ main }) => main)
					.map((project: Project, index: number) => (
						<Clickable
							key={project.title}
							className="block w-full p-4 text-left border rounded-lg border-accent-primary bg-secondary hover:bg-accent-primary"
							href={project.pageUrl ?? project.githubUrl}
							out
						>
							<div className="block font-medium "> {project.title}</div>
							<div className="text-sm">
								{locale === 'en' ? project.descriptionEn : project.description}
							</div>

							<div className="mt-2">
								<Labels small labels={project.tech} />
							</div>
						</Clickable>
					))}
			</div>
		</Section>
	);
}

export default Projects;
