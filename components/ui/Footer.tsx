import Discord from './Discord';

import { footer } from 'content';
import Clickable from './Clickable';
import clsx from 'clsx';

export default function Footer() {
	return (
		<div className="flex flex-col w-full py-6 space-y-6 px-4 sm:px-0">
			<div className="w-full border-t border-accent-primary" />

			<div className="grid grid-cols-2 gap-4 text-base sm:grid-cols-3">
				{Object.entries(footer).map(([title, values]) => (
					<div className="space-y-2" key={title}>
						<span className="text-xs font-semibold tracking-wider uppercase text-secondary">
							{title}
						</span>
						<div className={clsx('grid gap-2', { 'grid-cols-2': values.length > 2 })}>
							{values.map(({ link, name, internal }) => (
								<Clickable
									className="md:text-sm text-secondary hover:text-primary"
									key={name}
									href={link}
									out={!internal}
								>
									{name}
								</Clickable>
							))}
						</div>
					</div>
				))}
				<div className="col-span-2 space-y-2 md:col-span-1">
					<span className="text-xs font-semibold tracking-wider uppercase text-secondary">
						Currently
					</span>
					<Discord />
				</div>
			</div>
		</div>
	);
}
