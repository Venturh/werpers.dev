import useTranslation from 'next-translate/useTranslation';

import { Project } from 'lib/prismic';
import { ArrowRightUp, Github, LinkOut } from 'icons';
import { IconButton } from 'components';

const ProjectList = ({ projects }) => {
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
        {projects.map(
          ({ name, year, buildWith, url, giturl, slug }: Project) => {
            return (
              <tr key={name}>
                <td>
                  <span>{name}</span>
                </td>
                <td className="hidden lg:table-cell">
                  {buildWith.map((field, i) => (
                    <span key={field.type}>
                      {field.type}
                      {i !== buildWith.length - 1 && <span> - </span>}
                    </span>
                  ))}
                </td>

                <td>{year}</td>
                <td className="flex space-x-2">
                  <IconButton
                    rounded
                    to={`/projects/${slug}`}
                    icon={ArrowRightUp}
                  />
                  <IconButton rounded out to={giturl} icon={Github} />
                  {url ? (
                    <IconButton rounded out to={url} icon={LinkOut} />
                  ) : null}
                </td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default ProjectList;
