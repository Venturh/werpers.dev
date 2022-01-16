import Link from 'next/link';
import { ComponentProps, ElementType, forwardRef } from 'react';

type ComponentProp = ComponentProps<'button'> & ComponentProps<'a'>;

export interface ClickableProps extends ComponentProp {
  out?: boolean;
  to?: string;
  ref?: any;
  as?: ElementType;
}

const Clickable = forwardRef<any, ClickableProps>(
  ({ out, to, as, ...props }: ClickableProps, ref) => {
    const isLink = typeof to !== 'undefined';
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
        <Link href={to!} {...props}>
          {content}
        </Link>
      );
    }
    return content;
  }
);

export default Clickable;
Clickable.displayName = 'Clickable';
