import { Labels } from './Label';
import BaseCard from './BaseCard';
import ButtonOrLink from './ButtonOrLink';

import { Project } from '@types';

export default function ProjectCard({
  project: { title, description, descriptionEn, pageUrl, githubUrl, tech },
  locale,
}: {
  project: Project;
  locale: string;
}) {
  return (
    <BaseCard barPosition="left" className="p-2">
      <ButtonOrLink
        className="space-y-1"
        to={pageUrl ? pageUrl : githubUrl}
        out
      >
        <div>
          <p className="text-lg font-medium"> {title}</p>
          <p className="prose">
            {locale === 'en' ? descriptionEn : description}
          </p>
        </div>
        <Labels labels={tech} />
      </ButtonOrLink>
    </BaseCard>
  );
}
