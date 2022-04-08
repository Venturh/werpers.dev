import clsx from 'clsx';

type Props = {
	className?: string;
	children: React.ReactNode;
	barPosition?: 'left' | 'bottom' | 'none';
};

const BaseCard = ({ children, barPosition, className }: Props) => (
	<div
		className={clsx(className, 'relative bg-secondary w-full shadow-sm rounded-lg', {
			'pl-6': barPosition === 'left',
			'pb-4': barPosition === 'bottom',
		})}
	>
		{children}
		<div
			className={clsx('absolute rounded-sm bg-brand-primary', {
				'bottom-0 left-0 w-full h-1': barPosition === 'bottom',
				'top-0 left-0 w-1.5 h-full': barPosition === 'left',
				hidden: barPosition === 'none',
			})}
		/>
	</div>
);

export default BaseCard;
