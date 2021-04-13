import clsx from 'clsx';
import ButtonOrLink from './ButtonOrLink';
import Icon from './Icon';
type Props = {
  icon: string;
  to?: string;
  rounded?: boolean;
  onClick?: () => void;
  iconSize?: 'sm' | 'md' | 'lg';
  out?: boolean;
  colored?: boolean;
  children?: React.ReactNode;
  className?: string;
  outlined?: boolean;
};
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
      'flex items-center  md:p-1 hover:ring-4 hover:ring-accentBg hover:bg-accentBg focus:outline-none',
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
