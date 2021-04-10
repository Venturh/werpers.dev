import useTranslation from 'next-translate/useTranslation';

import { IconButton, Label } from 'components';
import { Github, LinkOut } from 'icons';
import { Project } from '@types';

const ProjectList = ({ projects }: { projects: Project[] }) => {
  const { t } = useTranslation();
  return (
    <div className="rounded-md shadow ring-1 ring-accentBg sm:rounded-lg">
      <table className="min-w-full divide-y divide-accentBg">
        <thead>
          <tr className="text-sm tracking-wider text-left text-secondary">
            <th className="px-3 py-2">Name</th>
            <th className="hidden px-3 py-2 lg:table-cell">
              {t('projects:buildUsing')}
            </th>
            <th className="px-3 py-2">{t('projects:type')}</th>
            <th className="px-3 py-2">{t('projects:year')}</th>
            <th className="px-3 py-2">Links</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-accentBg">
          {projects.map(({ type, githubUrl, pageUrl, tech, title, year }) => {
            return (
              <tr key={title}>
                <td className="px-3 py-2">
                  <span>{title}</span>
                </td>
                <td className="hidden px-3 py-2 md:table-cell">
                  <div className="flex">
                    {tech.slice(0, 3).map((field) => (
                      <span key={field}>
                        <Label className="mr-2" variant="border">
                          {field}
                        </Label>
                      </span>
                    ))}
                    {tech.length > 3 && (
                      <Label variant="border">+ {tech.length - 3}</Label>
                    )}
                  </div>
                </td>

                <td className="px-3 py-2">
                  <Label className="" variant="15">
                    {type}
                  </Label>
                </td>
                <td className="px-3 py-2 space-x-2">{year}</td>
                <td className="flex px-3 py-2 space-x-2">
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
