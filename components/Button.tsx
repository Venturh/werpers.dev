import clsx from 'clsx';
import ButtonOrLink from './ButtonOrLink';
type Props = {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'inherit';
};

const Button = ({ children, to, onClick, variant = 'primary' }: Props) => (
  <ButtonOrLink
    onClick={onClick}
    className={clsx(
      'inline-flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm  focus:outline-none',
      {
        'bg-brand text-brandContrast hover:bg-brandDarker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand15':
          variant === 'primary',
        'text-primary focus:ring-1 focus:ring-primaryText':
          variant === 'inherit',
      }
    )}
    to={to}
  >
    {children}
  </ButtonOrLink>
);

export default Button;
