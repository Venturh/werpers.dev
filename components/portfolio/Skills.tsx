import useTranslation from 'next-translate/useTranslation';

import Section from 'components/ui/Section';
import Skill from 'components/ui/Skill';

import { skills } from 'content';

const Skills = () => {
	const { t } = useTranslation('portfolio');
	return (
		<Section title="skills" subtitle="skillsSub">
			<div className="space-y-3 divide-y divide-accent-primary md:divide-y-0">
				{skills.map(
					({ type, skills }: { type: string; skills: { name: string; icon: string }[] }) => (
						<div key={type} className="space-y-3">
							<p className="text-lg font-medium md:text-xl">{t(`${type}`)}</p>
							<div className="grid md:grid-cols-2 md:gap-x-12 gap-y-4">
								{skills.map((skill) => (
									<Skill key={skill.name} {...skill} />
								))}
							</div>
						</div>
					)
				)}
			</div>
		</Section>
	);
};

export default Skills;
