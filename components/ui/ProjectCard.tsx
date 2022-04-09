import { Labels } from './Label';

import IconButton from './IconButton';
import Icon from './Icon';
import Clickable from './Clickable';

import { Github } from 'icons';
import { Project } from '@types';

export default function ProjectCard({
	project: { title, description, descriptionEn, pageUrl, githubUrl, tech },
	locale,
}: {
	project: Project;
	locale: string;
}) {
	return (
		<div className="shadow-sm border border-accent-primary  rounded divide-y divide-accent-primary">
			<Clickable out href={pageUrl ?? githubUrl}>
				<div className="px-4 py-2">
					<h3 className="font-medium text-left"> {title}</h3>
					<span className="text-sm">{locale === 'en' ? descriptionEn : description}</span>
				</div>
			</Clickable>
			<div className="px-4 py-2 flex justify-between items-center">
				<Labels small labels={tech} />
				<IconButton
					out
					fullRounded
					ariaLabel="github"
					size="sm"
					variant="ghost"
					href={githubUrl}
					icon={<Icon colored path={Github} />}
				/>
			</div>
		</div>
	);
}
