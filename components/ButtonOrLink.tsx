import Link from 'next/link';
import { ComponentProps } from 'react';

type ButtonOrLinkProps = ComponentProps<'button'> & ComponentProps<'a'>;

export interface Props extends ButtonOrLinkProps {
  out?: boolean;
  to?: string;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  className?: string;
}

const ButtonOrLink = ({ out, to, ...props }: Props) => {
  const isLink = typeof to !== 'undefined';
  const ButtonOrLink = isLink ? 'a' : 'button';
  const content = (
    <ButtonOrLink
      target={out ? '_blank' : undefined}
      rel={out ? 'noopener noreferrer' : undefined}
      {...props}
    />
  );
  if (isLink) {
    return <Link href={to!}>{content}</Link>;
  }
  return content;
};

export default ButtonOrLink;
