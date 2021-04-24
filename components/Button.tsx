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
        'bg-brand text-brand-contrast hover:bg-brand-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand15':
          variant === 'primary',
        'text-brand focus:ring-1 focus:ring-text-primary':
          variant === 'inherit',
      }
    )}
    to={to}
  >
    {children}
  </ButtonOrLink>
);

export default Button;
