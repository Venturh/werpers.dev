import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import { Icon, Label } from 'components';
import { Skill as SkillType } from '@types';

const Skill = ({ name, icon, subSkills }: SkillType) => {
  const { t } = useTranslation('portfolio');

  const [hovered, setHovered] = useState('');
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg shadow-sm bg-brand15 text-brand">
            <Icon size="md" colored path={icon} />
          </div>
          <span className="text-sm font-medium lg:text-base">{name}</span>
        </div>

        <div className="relative">
          <Label className="absolute -top-10">{hovered}</Label>
          {subSkills && (
            <div className="flex -space-x-1.5 text-primary">
              {subSkills.map(({ icon, name }) => (
                <div
                  onMouseOver={() => setHovered(name)}
                  onMouseLeave={() => setHovered('')}
                  key={icon}
                  className="flex items-center justify-center w-5 h-5 rounded-full cursor-pointer bg-secondary text-brand"
                >
                  <Icon zoomOnHover size="md" path={icon} colored />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <p className="prose-sm text-secondary">
        {t(`skill_description_${name.toLocaleLowerCase()}`)}
      </p>
    </div>
  );
};

export default Skill;
