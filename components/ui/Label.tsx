import clsx from 'clsx';

type Props = {
	children: React.ReactNode;
	className?: string;
	small?: boolean;
};

export default function Label({ children, small, className }: Props) {
	return (
		<div
			className={clsx(
				'text-xs rounded-md leading-5  inline-flex items-center bg-cyan-50 text-cyan-800  dark:bg-brand-primary dark:bg-opacity-10 dark:text-brand-primary dark:text-opacity-80',
				small ? 'py-[1px] px-1' : 'py-0.5 px-1.5 sm:px-2',
				className
			)}
		>
			{children}
		</div>
	);
}

type LabelsProps = {
	labels: string[];
	max?: number;
	small?: boolean;
	overflowDirection?: 'down' | 'right';
};

export function Labels({ labels, max = 3, small }: LabelsProps) {
	return (
		<div className="relative flex items-center">
			{labels.slice(0, max).map((field) => (
				<span key={field}>
					<Label className={clsx(small ? 'mr-1.5' : 'mr-2')} small={small}>
						{field}
					</Label>
				</span>
			))}
			{labels.length > max && (
				<span title={labels.slice(max, labels.length).join(', ')}>
					<Label small={small}>+{labels.length - max}</Label>
				</span>
			)}
		</div>
	);
}
