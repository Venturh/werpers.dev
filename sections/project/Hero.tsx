import { ProjectFrontMatter } from '@types';
import { Github, Icon } from 'components';

type HeroProps = {
  frontmatter: ProjectFrontMatter;
  github: any;
};

const Hero = ({ frontmatter, github }: HeroProps) => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-semibold">{frontmatter.title}</h1>
      <p>{frontmatter.description}</p>
      <Github repo={github} />
      <div className="space-y-2 ">
        <h2 className="text-2xl">Build with</h2>
        <div className="flex flex-wrap ">
          {frontmatter.tech.map((t) => (
            <div
              className="flex items-center px-2 py-3 mt-2 ml-2 space-x-2 border rounded-md md:px-6 md:py-4 border-primaryText text-brand"
              key={t}
            >
              {/* <Icon className="fill-current" path={icon} size="md" colored /> */}
              <span className="text-primary">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
