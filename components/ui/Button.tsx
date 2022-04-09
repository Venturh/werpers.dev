import clsx from 'clsx';
import { cloneElement, ComponentProps, forwardRef, isValidElement } from 'react';
import Clickable, { ClickableProps } from './Clickable';

export type Color = 'brand' | 'accent' | 'secondary';
export type Variant = 'solid' | 'ghost' | 'oppacity';
export type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
export type Position = 'left' | 'center';

export interface ButtonProps extends ClickableProps {
	size?: Size;
	variant?: Variant;
	color?: Color;
	circle?: boolean;
	rounded?: boolean;
	position?: Position;
	leftIcon?: React.ReactElement;
	rightIcon?: React.ReactElement;
	loading?: boolean;
	label?: string;
}

const Button = forwardRef<any, ButtonProps>(
	(
		{
			children,
			color = 'brand',
			variant = 'oppacity',
			rounded = true,
			size = 'md',
			loading = false,
			circle = false,
			position = 'center',
			leftIcon,
			rightIcon,
			className,
			label,
			type = 'button',
			...rest
		}: ButtonProps,
		ref
	) => {
		return (
			<Clickable
				ref={ref}
				type={type}
				className={clsx(
					' flex-shrink-0 font-medium focus:outline-xxs  disabled:opacity-50 disabled:pointer-events-xxs truncate',
					circle ? sizesCircle[size] : sizes[size],
					variants[variant][color],
					positions[position],
					label ? 'flex flex-col' : 'inline-flex items-center',
					{ 'rounded-md': rounded },
					{ 'rounded-full': circle },
					className
				)}
				{...rest}
			>
				<>
					{label && (
						<label htmlFor={rest.name} className="block text-xs font-medium text-secondary">
							{label}
						</label>
					)}
					<div className={clsx('flex items-center', { 'mt-1': label })}>
						{leftIcon && (
							<ButtonIcon
								className={clsx('-ml-0.5 mr-1.5', leadingIconClasses[size])}
								aria-hidden="true"
							>
								{leftIcon}
							</ButtonIcon>
						)}
						{children}
						{rightIcon && (
							<ButtonIcon
								className={clsx('-ml-0.5 mr-1.5', trailingIconClasses[size])}
								aria-hidden="true"
							>
								{rightIcon}
							</ButtonIcon>
						)}
						{loading && (
							<svg
								className="w-4 h-4 ml-2 fill-current animate-spin"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									className="opacity-100"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
						)}
					</div>
				</>
			</Clickable>
		);
	}
);

export default Button;
Button.displayName = 'Button';

export function ButtonIcon({ children, className, ...rest }: ComponentProps<'div'>) {
	const element = children;
	const _children = isValidElement(element)
		? cloneElement(element as any, {
				'aria-hidden': true,
				focusable: false,
		  })
		: null;
	return (
		<div
			className={clsx(
				'flex items-center justify-center flex-shrink-0 text-currentColor',
				className
			)}
			{...rest}
		>
			{_children}
		</div>
	);
}

const sizes = {
	xxs: 'p-1 text-xs',
	xs: 'px-1.5 py-1 text-xs ',
	sm: 'px-3 py-1.5 text-sm',
	md: 'px-4 py-2 text-sm',
	lg: 'px-4 py-2 text-base',
};
const sizesCircle = {
	xxs: '',
	xs: 'p-1 text-sm',
	sm: 'p-1.5 text-sm',
	md: 'p-2 text-sm',
	lg: 'p-2 text-base',
};

export const solid = {
	brand:
		'text-white dark:text-black bg-brand-primary hover:bg-brand-secondary shadow-sm focus:ring-1 focus:ring-brand-primary ring-offset-2 ring-offset-bg-primary disabled:hover:bg-brand-primary',
	accent:
		'bg-accent-primary hover:bg-accent-secondary shadow-sm focus:ring-1 focus:ring-accent-primary ring-offset-2 ring-offset-bg-primary disabled:hover:bg-accent-primary',
	secondary:
		'text-primary bg-primary hover:bg-accent-secondary border border-accent-primary shadow-sm focus:ring-1 focus:ring-accent-primary ring-offset-2 ring-offset-bg-primary disabled:hover:bg-bg-secondary',
};

export const ghost = {
	brand:
		'bg-transparent text-brand-primary hover:bg-opacity-10 hover:bg-brand-primary focus:ring-1 focus:ring-currentColor disabled:hover:bg-transparent',
	accent:
		'bg-transparent text-text-primary hover:bg-opacity-10 hover:bg-accent-primary focus:ring-1 focus:ring-currentColor disabled:hover:bg-transparent',
	secondary:
		'bg-transparent text-text-primary hover:bg-opacity-10 hover:bg-text-primary focus:ring-1 focus:ring-currentColor disabled:hover:bg-transparent',
};

const oppacity = {
	brand:
		'bg-cyan-50 text-cyan-800 hover:bg-cyan-100 dark:text-brand-primary dark:text-opacity-80 dark:bg-brand-primary dark:bg-opacity-10 dark:hover:bg-opacity-10 shadow-sm focus:ring-1 focus:ring-brand-primary ring-offset-2 ring-offset-bg-primary disabled:hover:bg-opacity-20',
	accent:
		'text-accent-primary bg-text-primary bg-opacity-20 hover:bg-opacity-10 shadow-sm focus:ring-1 focus:ring-accent-primary ring-offset-2 ring-offset-bg-primary disabled:hover:bg-opacity-20',
	secondary:
		'text-secondary bg-bg-secondary bg-opacity-20  hover:bg-opacity-10 shadow-sm focus:ring-1 focus:ring-accent-primary ring-offset-2 ring-offset-bg-primary disabled:hover:bg-opacity-20',
};

export const variants = {
	solid,
	ghost,
	oppacity,
};

const leadingIconClasses = {
	xs: '-ml-0.5 mr-1 h-3.5 w-3.5',
	sm: '-ml-0.5 mr-1.5 h-4 w-4',
	md: '-ml-0.5 mr-1.5 h-4 w-4',
	lg: '-ml-1 mr-1.5 h-5 w-5',
};
const trailingIconClasses = {
	xs: 'ml-1 -mr-0.5 h-3.5 w-3.5',
	sm: 'ml-1.5 -mr-0.5 h-4 w-4 ',
	md: 'ml-1.5 -mr-0.5 h-4 w-4 order-2',
	lg: 'ml-1.5 -mr-1 h-5 w-5 order-last',
};

const positions = {
	left: 'justify-start',
	center: 'justify-center',
};
