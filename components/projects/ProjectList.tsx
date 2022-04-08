import useTranslation from 'next-translate/useTranslation';
import { ExternalLinkIcon } from '@heroicons/react/outline';

import Icon from 'components/ui/Icon';
import IconButton from 'components/ui/IconButton';
import Label, { Labels } from 'components/ui/Label';

import { Github } from 'icons';
import { Project } from '@types';

const ProjectList = ({ projects }: { projects: Project[] }) => {
	const { t } = useTranslation('portfolio');
	return (
		<div className="rounded-md shadow bg-secondary ring-1 ring-accent-primary sm:rounded-lg">
			<table className="min-w-full divide-y divide-accent-primary">
				<thead>
					<tr className="tracking-wider text-left text-secondary">
						<th className="p-3 text-xs font-medium">Name</th>
						<th className="hidden p-3 text-xs font-medium md:table-cell">{t('buildUsing')}</th>
						<th className="p-3 text-xs font-medium">{t('type')}</th>
						<th className="p-3 text-xs font-medium">{t('year')}</th>
						<th className="p-3 text-xs font-medium">Links</th>
					</tr>
				</thead>
				<tbody className="text-sm divide-y divide-accent-primary">
					{projects.map(({ type, githubUrl, pageUrl, tech, title, year }) => {
						return (
							<tr key={title}>
								<td className="p-3 text-base ">{title}</td>
								<td className="hidden p-3 md:table-cell">
									<Labels labels={tech} overflowDirection="down" />
								</td>

								<td className="p-3">{type}</td>
								<td className="p-3 space-x-2">{year}</td>
								<td className="flex p-3 space-x-2">
									<IconButton
										out
										fullRounded
										ariaLabel="github"
										size="sm"
										variant="ghost"
										to={githubUrl}
										icon={<Icon colored path={Github} />}
									/>
									{pageUrl ? (
										<IconButton
											out
											fullRounded
											ariaLabel="link"
											size="sm"
											variant="ghost"
											to={pageUrl}
											icon={<ExternalLinkIcon />}
										/>
									) : null}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default ProjectList;
