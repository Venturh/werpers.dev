import Icon from './Icon';
import { Github, Star } from 'icons';
import { BaseCard } from './ProjectCard';
import ButtonOrLink from './ButtonOrLink';

const GithubCard = ({ repo }) => {
  const {
    html_url,
    full_name,
    description,
    homepage,
    language,
    stargazers_count,
  } = repo || {};

  const languageColors = {
    Vue: '#2C3E50',
    TypeScript: '#2B7489',
    JavaScript: '#F1E05A',
  };
  return (
    <BaseCard>
      <ButtonOrLink className="space-y-1" out to={html_url}>
        <div className="flex items-center space-x-1">
          <span
            style={{ background: languageColors[language] }}
            className="w-3 h-3 rounded-full"
          />
          <span className="text-sm">{language}</span>
        </div>
        <p className="text-2xl">{full_name}</p>
        <p className="">{description}</p>
        <div className="flex items-center space-y-2">
          <div className="flex items-center space-x-2">
            <Icon path={Star} size="sm" />
            <span className="xs">{stargazers_count}</span>
          </div>
        </div>
      </ButtonOrLink>
    </BaseCard>
  );
};

export default GithubCard;
