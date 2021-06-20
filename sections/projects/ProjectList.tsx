import useTranslation from 'next-translate/useTranslation';

import { IconButton, Label, Labels } from 'components';
import { Github, LinkOut } from 'icons';
import { Project } from '@types';

const ProjectList = ({ projects }: { projects: Project[] }) => {
  const { t } = useTranslation('portfolio');
  return (
    <div className="rounded-md shadow bg-secondary ring-1 ring-accent sm:rounded-lg">
      <table className="min-w-full divide-y divide-accent">
        <thead>
          <tr className="tracking-wider text-left text-secondary">
            <th className="p-3 text-xs font-medium">Name</th>
            <th className="hidden p-3 text-xs font-medium lg:table-cell">
              {t('buildUsing')}
            </th>
            <th className="p-3 text-xs font-medium">{t('type')}</th>
            <th className="p-3 text-xs font-medium">{t('year')}</th>
            <th className="p-3 text-xs font-medium">Links</th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-accent">
          {projects.map(({ type, githubUrl, pageUrl, tech, title, year }) => {
            return (
              <tr key={title}>
                <td className="p-3 text-base ">{title}</td>
                <td className="hidden p-3 md:table-cell">
                  <Labels
                    labels={tech}
                    variant="border"
                    overflowDirection="down"
                  />
                </td>

                <td className="p-3">
                  <Label variant="15">{type}</Label>
                </td>
                <td className="p-3 space-x-2">{year}</td>
                <td className="flex p-3 space-x-2">
                  <IconButton rounded out to={githubUrl} icon={Github} />
                  {pageUrl ? (
                    <IconButton rounded out to={pageUrl} icon={LinkOut} />
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
