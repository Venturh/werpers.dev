import clsx from 'clsx';
import { default as NextLink } from 'next/link';
import ButtonOrLink from './ButtonOrLink';

type Props = {
  to: string;
  out?: boolean;
  underline?: boolean;
  block?: boolean;
  active?: boolean;
  children: React.ReactNode;
  className?: string;
};
const Link = ({
  to,
  out,
  children,
  className,
  underline,
  block,
  active,
}: Props) => {
  return (
    <ButtonOrLink
      className={clsx({
        'hover:text-brand': !block,
        'flex items-center hover:ring-4 p-1 hover:ring-secondaryBg hover:bg-secondary rounded-md': block,
        underline: underline,
        'text-brand': active,
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
