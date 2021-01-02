import Link from 'next/link';

import { Project } from 'lib/prismic';
import Label from './Label';
import clsx from 'clsx';
import BaseCard from './BaseCard';

const ProjectCard = ({ name, headline, slug, buildWith }: Project) => (
  <BaseCard barPosition="left">
    <Link href={`/projects/${slug}`}>
      <a className="">
        <div className="text-xl"> {name}</div>
        <div>{headline}</div>
        <div className="flex mt-1 space-x-2">
          {buildWith.map(({ type }) => (
            <Label variant="default" key={type}>
              <div className="text-sm">{type}</div>
            </Label>
          ))}
        </div>
      </a>
    </Link>
  </BaseCard>
);

export default ProjectCard;
