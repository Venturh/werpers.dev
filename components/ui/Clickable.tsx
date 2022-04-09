import Link from 'next/link';
import { ComponentProps, ElementType, forwardRef } from 'react';
import { Url } from 'url';

type ComponentProp = ComponentProps<'button'> & ComponentProps<'a'>;

export interface ClickableProps extends Omit<ComponentProp, 'href'> {
	out?: boolean;
	ref?: any;
	href?: Url | string;
	as?: ElementType;
}

const Clickable = forwardRef<any, ClickableProps>(
	({ out, href, as, ...props }: ClickableProps, ref) => {
		const isLink = typeof href !== 'undefined';
		const Clickable = as ? as : isLink ? 'a' : 'button';
		const content = (
			<Clickable
				ref={ref}
				target={out ? '_blank' : undefined}
				rel={out ? 'noopener noreferrer' : undefined}
				{...props}
			/>
		);
		if (isLink) {
			return (
				<Link href={href} {...props}>
					{content}
				</Link>
			);
		}
		return content;
	}
);

export default Clickable;
Clickable.displayName = 'Clickable';
