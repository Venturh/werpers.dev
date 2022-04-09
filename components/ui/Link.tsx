import clsx from 'clsx';
import Clickable from './Clickable';

type Props = {
	to: string;
	out?: boolean;
	inherit?: boolean;
	underline?: boolean;
	active?: boolean;
	children: React.ReactNode;
	className?: string;
};

export default function Link({ to, out, children, className, underline, active }: Props) {
	return (
		<Clickable
			className={clsx({
				underline: underline,
				'text-brand-primary hover:text-brand-primary': active,
				'hover:text-brand-primary text-primary': !active,
				className,
			})}
			href={to}
			out={out}
		>
			{children}
		</Clickable>
	);
}
