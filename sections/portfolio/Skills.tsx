import useTranslation from 'next-translate/useTranslation';
import { BaseCard, SectionHeader, Skill } from 'components';
import { skills } from 'content';

const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-2">
      <SectionHeader
        title={t('portfolio:skills')}
        subtitle={t('portfolio:skillsSub')}
      />

      <div className="">
        {skills.map(
          ({
            type,
            skills,
          }: {
            type: string;
            skills: { name: string; icon: string }[];
          }) => (
            <div key={type} className="space-y-1">
              <p className="text-lg font-medium md:text-xl ">
                {t(`portfolio:${type}`)}
              </p>
              <div className="grid grid-cols-2 gap-x-12 gap-y-4">
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
