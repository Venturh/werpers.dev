import clsx from 'clsx';
import ButtonOrLink from './ButtonOrLink';

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
		<ButtonOrLink
			className={clsx({
				underline: underline,
				'text-brand-primary hover:text-brand-primary': active,
				'hover:text-brand-primary text-primary': !active,
				className,
			})}
			to={to}
			out={out}
		>
			{children}
		</ButtonOrLink>
	);
}
