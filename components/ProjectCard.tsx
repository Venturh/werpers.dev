import { Label, BaseCard, ButtonOrLink } from 'components';
import { Project } from '@types';

const ProjectCard = ({
  project: { title, description, descriptionEn, pageUrl, githubUrl, tech },
  locale,
}: {
  project: Project;
  locale: string;
}) => (
  <BaseCard barPosition="left">
    <ButtonOrLink to={pageUrl ? pageUrl : githubUrl} out>
      <div className="text-xl"> {title}</div>
      <div>{locale === 'en' ? descriptionEn : description}</div>
      <div className="flex mt-1 space-x-2">
        {tech.map((build) => (
          <Label variant="15" key={build}>
            <div className="text-sm">{build}</div>
          </Label>
        ))}
      </div>
    </ButtonOrLink>
  </BaseCard>
);

export default ProjectCard;
