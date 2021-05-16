import clsx from 'clsx';
import ButtonOrLink, { Props as ButtonOrLinkProps } from './ButtonOrLink';
import Icon from './Icon';
interface Props extends ButtonOrLinkProps {
  icon: string;
  rounded?: boolean;
  iconSize?: 'sm' | 'md' | 'lg';
  colored?: boolean;
  outlined?: boolean;
}
const IconButton = ({
  icon,
  to,
  onClick,
  rounded,
  iconSize,
  colored,
  out,
  outlined,
  className,
  children,
}: Props) => (
  <ButtonOrLink
    to={to}
    out={out}
    onClick={onClick}
    className={clsx(
      className,
      'flex items-center  md:p-1 hover:ring-4 hover:ring-accent hover:bg-accent focus:outline-none',
      {
        'rounded-full': rounded,
      }
    )}
  >
    <Icon size={iconSize} path={icon} colored={colored} outlined={outlined} />
    {children ? <div className="mx-1">{children}</div> : null}
  </ButtonOrLink>
);

export default IconButton;
