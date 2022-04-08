import { isValidElement, cloneElement, forwardRef } from 'react';
import clsx from 'clsx';

import Button, { ButtonIcon, ButtonProps } from './Button';

type OmittedProps = 'leftIcon' | 'rightIcon' | 'iconSpacing' | 'spinnerPlacement';

interface IconButtonsProps extends Omit<ButtonProps, OmittedProps> {
	ariaLabel: string;
	icon?: React.ReactElement;
	fullRounded?: boolean;
}

export const iconSizes = {
	xxs: 'h-4 w-4',
	xs: 'h-4 w-4',
	sm: 'h-4 w-4',
	md: 'h-5 w-5',
	lg: 'h-6 w-6',
};

const IconButton = forwardRef<any, IconButtonsProps>(
	(
		{
			size = 'md',
			icon,
			ariaLabel,
			ref,
			children,
			fullRounded = false,
			loading,
			...rest
		}: IconButtonsProps,
		_
	) => {
		const element = icon || children;
		const _children = isValidElement(element)
			? cloneElement(element as any, {
					'aria-hidden': true,
					focusable: false,
			  })
			: null;
		return (
			<Button circle={fullRounded} loading={loading} size={size} {...rest}>
				<span className="sr-only">{ariaLabel}</span>
				{!loading && (
					<ButtonIcon className={clsx('text-currentColor ', iconSizes[size])}>
						{_children}
					</ButtonIcon>
				)}
			</Button>
		);
	}
);

export default IconButton;
IconButton.displayName = 'IconButton';
