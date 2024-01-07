import Section from 'components/ui/Section';

import { Project } from 'types';
import { Labels } from 'components/ui/Label';
import { projects } from 'content';
import InteractableCard from 'components/ui/InteractableCard';

export default function Projects() {
	return (
		<Section title="projects">
			<div>
				{projects
					.filter(({ main }) => main)
					.map((project: Project) => (
						<InteractableCard
							key={project.title}
							className="p-4 mt-2"
							href={project.pageUrl ?? project.githubUrl}
							out
						>
							<div className="block font-medium"> {project.title}</div>
							<div className="text-sm">{project.description}</div>

							<div className="mt-2">
								<Labels small labels={project.tech} />
							</div>
						</InteractableCard>
					))}
			</div>
		</Section>
	);
}
