import useTranslation from 'next-translate/useTranslation';

import { Skill } from 'components';

import { skills } from 'content';
import SectionHeader from 'components/SectionHeader';
const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-2">
      <SectionHeader
        title={t('common:skills')}
        subtitle={t('common:skillsSub')}
      />

      <div className="grid space-y-2 lg:items-center grid-row-2 lg:grid-cols-2">
        {skills.map(
          ({
            type,
            skills,
          }: {
            type: string;
            skills: { name: string; icon: string }[];
          }) => (
            <div key={type} className="space-y-3">
              <p className="lg:text-lg text-brand">{t(`common:${type}`)}</p>
              <div className="flex space-x-4">
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
