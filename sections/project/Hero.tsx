import { Project as ProjectType } from 'lib/prismic';
import { Github, Icon } from 'components';

type HeroProps = {
  project: ProjectType;
  github: any;
};

const Hero = ({ project, github }: HeroProps) => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-semibold">{project.name}</h1>
      <p>{project.headline}</p>
      <Github repo={github} />
      <div className="space-y-2 ">
        <h2 className="text-2xl">Build with</h2>
        <div className="flex flex-wrap ">
          {project.buildWith.map(({ type, icon }) => (
            <div
              className="flex items-center px-2 py-3 mt-2 ml-2 space-x-2 border rounded-md md:px-6 md:py-4 border-primaryText text-brand"
              key={type}
            >
              <Icon className="fill-current" path={icon} size="md" colored />
              <span className="text-primary">{type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
