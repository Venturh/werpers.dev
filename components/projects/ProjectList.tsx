import useTranslation from 'next-translate/useTranslation';
import { ExternalLinkIcon } from '@heroicons/react/outline';

import IconButton from 'components/ui/IconButton';
import { Labels } from 'components/ui/Label';
import GithubIcon from 'components/icons/GithubIcon';

import { Project } from 'types';

const ProjectList = ({ projects }: { projects: Project[] }) => {
	const { t } = useTranslation('portfolio');
	return (
		<div className="rounded-md shadow bg-secondary ring-1 ring-accent-primary sm:rounded-lg">
			<table className="min-w-full divide-y divide-accent-secondary">
				<thead>
					<tr className="text-xs font-medium text-left uppercase text-secondary">
						<th className="p-3">Name</th>
						<th className="p-3">{t('madeAt')}</th>
						<th className="hidden p-3 md:table-cell">{t('buildUsing')}</th>
						<th className="hidden p-3 md:table-cell">{t('type')}</th>
						<th className="p-3">{t('year')}</th>
						<th className="p-3">Links</th>
					</tr>
				</thead>
				<tbody className="text-sm divide-y divide-accent-primary">
					{projects.map(({ type, githubUrl, madeAt, pageUrl, tech, title, year }) => {
						return (
							<tr key={title}>
								<td className="p-3">{title}</td>
								<td className="p-3">{madeAt ?? 'personal'}</td>

								<td className="hidden p-3 md:table-cell">
									<Labels small labels={tech} overflowDirection="down" />
								</td>

								<td className="hidden p-3 md:table-cell">{type}</td>
								<td className="p-3">{year}</td>
								<td className="flex p-3 space-x-2">
									<IconButton
										out
										fullRounded
										ariaLabel="github"
										size="xs"
										variant="ghost"
										href={githubUrl}
										icon={<GithubIcon />}
										disabled={!githubUrl}
									/>

									<IconButton
										out
										fullRounded
										ariaLabel="link"
										size="xs"
										variant="ghost"
										href={pageUrl}
										icon={<ExternalLinkIcon />}
										disabled={!pageUrl}
									/>
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
