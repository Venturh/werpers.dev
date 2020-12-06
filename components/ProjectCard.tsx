import Link from 'next/link';

import { Project } from 'lib/prismic';
import Label from './Label';

export const BaseCard = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-full p-2 pl-6 rounded-lg bg-secondaryBg">
    {children}
    <span className="absolute top-0 left-0 w-1.5 h-full rounded-sm bg-brand" />
  </div>
);

const ProjectCard = ({ name, headline, slug, buildWith }: Project) => (
  <BaseCard>
    <Link href={`/projects/${slug}`}>
      <a className="space-y-2">
        <h3 className="text-2xl"> {name}</h3>
        <p>{headline}</p>
        <div className="flex space-x-2">
          {buildWith.map(({ type }) => (
            <Label variant="default" key={type}>
              {type}
            </Label>
          ))}
        </div>
      </a>
    </Link>
  </BaseCard>
);

export default ProjectCard;
