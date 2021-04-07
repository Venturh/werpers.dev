import Link from 'next/link';

import Label from './Label';

import BaseCard from './BaseCard';
import { ProjectFrontMatter } from '@types';

const ProjectCard = ({
  title,
  description,
  slug,
  tech,
}: ProjectFrontMatter) => (
  <BaseCard barPosition="left">
    <Link href={`/projects/${slug}`}>
      <a className="">
        <div className="text-xl"> {title}</div>
        <div>{description}</div>
        <div className="flex mt-1 space-x-2">
          {tech.map((build) => (
            <Label variant="15" key={build}>
              <div className="text-sm">{build}</div>
            </Label>
          ))}
        </div>
      </a>
    </Link>
  </BaseCard>
);

export default ProjectCard;
