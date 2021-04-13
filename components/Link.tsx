import clsx from 'clsx';
import { default as NextLink } from 'next/link';
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
const Link = ({ to, out, children, className, underline, active }: Props) => {
  return (
    <ButtonOrLink
      className={clsx('font-medium', {
        underline: underline,
        'text-brand hover:text-brand': active,
        'hover:text-brand text-secondary': !active,
        className,
      })}
      to={to}
      out={out}
    >
      {children}
    </ButtonOrLink>
  );
};

export default Link;
