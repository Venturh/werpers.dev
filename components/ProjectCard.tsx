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
      <p className="text-xl"> {title}</p>
      <p className="prose">{locale === 'en' ? descriptionEn : description}</p>
      <Labels labels={tech} variant="15" />
    </ButtonOrLink>
  </BaseCard>
);

export default ProjectCard;
