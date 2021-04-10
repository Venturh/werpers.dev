import useTranslation from 'next-translate/useTranslation';

import { Github, LinkOut } from 'icons';
import { IconButton } from 'components';
import { Project } from '@types';

const ProjectList = ({ projects }: { projects: Project[] }) => {
  const { t } = useTranslation();
  return (
    <table className="w-full">
      <thead>
        <tr className="w-full text-left text-brand">
          <th>Name</th>
          <th className="hidden lg:table-cell"> {t('projects:buildUsing')}</th>
          <th>{t('projects:year')}</th>
          <th>Links</th>
        </tr>
      </thead>
      <tbody>
        {projects.map(({ date, githubUrl, pageUrl, tech, title, slug }) => {
          return (
            <tr key={title}>
              <td>
                <span>{title}</span>
              </td>
              <td className="hidden lg:table-cell">
                {tech.map((field, i) => (
                  <span key={field}>
                    {field}
                    {i !== tech.length - 1 && <span> - </span>}
                  </span>
                ))}
              </td>

              <td>{date}</td>
              <td className="flex space-x-2">
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
  );
};

export default ProjectList;
