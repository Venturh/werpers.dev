import InteractableCard from 'components/ui/InteractableCard';
import Section from 'components/ui/Section';

import { stack } from 'content';

export default function Stack() {
	return (
		<Section title="stack">
			<div className="grid grid-cols-2 gap-3 md:grid-cols-3">
				{stack.map((name) => (
					<InteractableCard
						key={name}
						className="col-span-1 flex items-center justify-center space-x-2 p-8"
					>
						{name}
					</InteractableCard>
				))}
			</div>
		</Section>
	);
}
