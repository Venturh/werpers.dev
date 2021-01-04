import { Skill as SkillType } from 'content';
import Icon from './Icon';

const Skill = ({ name, icon }: SkillType) => (
  <div className="flex flex-col items-center ">
    <Icon size="md" path={icon} />
    <span className="text-sm lg:text-base mt-0.5">{name}</span>
  </div>
);

export default Skill;
