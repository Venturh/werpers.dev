import Link from 'next/link';

import { Project } from 'lib/prismic';
import Label from './Label';
import clsx from 'clsx';

export const BaseCard = ({
  children,
  className,
  barPosition = 'left',
}: {
  className?: string;
  children: React.ReactNode;
  barPosition?: 'left' | 'bottom' | 'none';
}) => (
  <div
    className={clsx(
      'relative w-full py-2 shadow-sm rounded-lg bg-secondaryBg',
      { 'pl-6': barPosition === 'left' },
      className
    )}
  >
    {children}
    <div
      className={clsx('absolute  rounded-sm bg-brand', {
        'bottom-0 w-full h-1': barPosition === 'bottom',
        'top-0 left-0 w-1.5 h-full': barPosition === 'left',
        hidden: barPosition === 'none',
      })}
    />
  </div>
);

const ProjectCard = ({ name, headline, slug, buildWith }: Project) => (
  <BaseCard>
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
