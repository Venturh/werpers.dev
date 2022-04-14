import Section from 'components/ui/Section';
import GithubIcon from 'components/icons/GithubIcon';
import IconButton from 'components/ui/IconButton';
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
			<div className="space-y-4">
				{projects
					.filter(({ main }) => main)
					.map((project: Project, index: number) => (
						<div
							key={project.title}
							className="shadow-sm border border-accent-primary  rounded divide-y divide-accent-primary"
						>
							<Clickable out href={project.pageUrl ?? project.githubUrl}>
								<div className="px-4 py-2">
									<span className="font-medium text-left block"> {project.title}</span>
									<span className="text-sm">
										{locale === 'en' ? project.descriptionEn : project.description}
									</span>
								</div>
							</Clickable>
							<div className="px-4 py-2 flex justify-between items-center">
								<Labels small labels={project.tech} />
								<IconButton
									out
									fullRounded
									ariaLabel="github"
									size="sm"
									variant="ghost"
									href={project.githubUrl}
									icon={<GithubIcon />}
								/>
							</div>
						</div>
					))}
			</div>
		</Section>
	);
}

export default Projects;
