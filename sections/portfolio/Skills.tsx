import useTranslation from 'next-translate/useTranslation';
import { BaseCard, SectionHeader, Skill } from 'components';
import { skills } from 'content';

const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-2">
      <SectionHeader
        title={t('common:skills')}
        subtitle={t('common:skillsSub')}
      />

      <div className="grid lg:items-center grid-row-2 ">
        {skills.map(
          ({
            type,
            skills,
          }: {
            type: string;
            skills: { name: string; icon: string }[];
          }) => (
            <div key={type} className="space-y-1">
              <p className="text-lg md:text-xl ">{t(`common:${type}`)}</p>
              <div className="flex py-2 space-x-4">
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
