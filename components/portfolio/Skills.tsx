import useTranslation from 'next-translate/useTranslation';

import Section from 'components/ui/Section';
import Icon from 'components/ui/Icon';

import { skills } from 'content';

const Skills = () => {
	const { t } = useTranslation('portfolio');
	return (
		<Section title="skills" subtitle="skillsSub">
			<div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
				{skills.map(({ name, icon }) => (
					<div
						key={name}
						className="col-span-1 flex justify-center p-5  border border-accent-primary rounded"
					>
						<div className="flex items-center space-x-2 text-secondary">
							<Icon colored path={icon} />
							<span>{name}</span>
						</div>
					</div>
				))}
			</div>
		</Section>
	);
};

export default Skills;
