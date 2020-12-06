import { Skill as SkillType } from 'content';
import Icon from './Icon';

const Skill = ({ name, icon }: SkillType) => (
  <div className="flex flex-col items-center space-y-0.5">
    <Icon path={icon} />
    <span className="text-sm lg:text-base">{name}</span>
  </div>
);

export default Skill;
