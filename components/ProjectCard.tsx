import { Labels, BaseCard, ButtonOrLink } from 'components';
import { Project } from '@types';

const ProjectCard = ({
  project: { title, description, descriptionEn, pageUrl, githubUrl, tech },
  locale,
}: {
  project: Project;
  locale: string;
}) => (
  <BaseCard barPosition="left" className="p-2">
    <ButtonOrLink className="space-y-1" to={pageUrl ? pageUrl : githubUrl} out>
      <div>
        <p className="text-lg font-semibold"> {title}</p>
        <p className="prose-sm text-secondary">
          {locale === 'en' ? descriptionEn : description}
        </p>
      </div>
      <Labels labels={tech} variant="15" />
    </ButtonOrLink>
  </BaseCard>
);

export default ProjectCard;
