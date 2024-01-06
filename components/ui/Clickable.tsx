import clsx from 'clsx';
import Link from 'next/link';
import { ComponentProps, ElementType, forwardRef } from 'react';
import { Url } from 'url';

type ComponentProp = ComponentProps<'button'> & ComponentProps<'a'> & ComponentProps<'div'>;

export interface ClickableProps extends Omit<ComponentProp, 'href'> {
	out?: boolean;
	ref?: any;
	href?: Url | string;
	as?: ElementType;
}

const Clickable = forwardRef<any, ClickableProps>(
	({ out, href, ...props }: ClickableProps, ref) => {
		const isLink = typeof href !== 'undefined';

		if (isLink) {
			const As = props.as || 'div';
			return (
				<Link
					href={href}
					target={out ? '_blank' : undefined}
					rel={out ? 'noopener noreferrer' : undefined}
				>
					<As ref={ref} className={clsx('w-full', props.className)} {...props}>
						{props.children}
					</As>
				</Link>
			);
		}
		return <button ref={ref} {...props} />;
	},
);

export default Clickable;
Clickable.displayName = 'Clickable';
