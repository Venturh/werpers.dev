import useTranslation from 'next-translate/useTranslation';
import { SectionHeader, Skill } from 'components';
import { skills } from 'content';

const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-2">
      <SectionHeader
        title={t('portfolio:skills')}
        subtitle={t('portfolio:skillsSub')}
      />

      <div className="space-y-3 divide-y divide-accentBg md:divide-y-0">
        {skills.map(
          ({
            type,
            skills,
          }: {
            type: string;
            skills: { name: string; icon: string }[];
          }) => (
            <div key={type} className="space-y-3">
              <p className="text-lg font-medium md:text-xl ">
                {t(`portfolio:${type}`)}
              </p>
              <div className="grid md:grid-cols-2 md:gap-x-12 gap-y-4">
                {skills.map((skill) => (
                  <Skill key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Skills;
