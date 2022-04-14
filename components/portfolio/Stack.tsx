import Label from 'components/ui/Label';
import Section from 'components/ui/Section';

import { stack } from 'content';

function Stack() {
	return (
		<Section title="stack" subtitle="stackSub">
			<div className="flex flex-wrap gap-y-2">
				{stack.map((name) => (
					<Label className="ml-2" key={name}>
						{name}
					</Label>
				))}
			</div>
		</Section>
	);
}

export default Stack;
