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
				'text-xs bg-brand-primary/20 text-brand-primary rounded-md leading-5  inline-flex items-center',
				{
					'py-0.5 px-1.5 sm:px-2': !small,
					'py-0.5 px-1': small,
				},
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
					<Label className="mr-2" small={small}>
						{field}
					</Label>
				</span>
			))}
			{labels.length > 3 && (
				<span className="cursor-pointer" title={labels.slice(max, labels.length).join(', ')}>
					<Label small={small}>+{labels.length - max}</Label>
				</span>
			)}
		</div>
	);
}
