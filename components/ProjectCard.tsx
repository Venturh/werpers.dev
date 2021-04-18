import { Labels, BaseCard, ButtonOrLink } from 'components';
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
      <Labels labels={tech} variant="15" />
    </ButtonOrLink>
  </BaseCard>
);

export default ProjectCard;
