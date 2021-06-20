import clsx from 'clsx';
import ButtonOrLink, { Props as ButtonOrLinkProps } from './ButtonOrLink';
interface Props extends ButtonOrLinkProps {
  variant?: 'primary' | '15' | 'inherit';
  size?: 'xs' | 'sm' | 'base';
}

const Button = ({ variant = 'primary', size = 'base', ...props }: Props) => {
  function getSize() {
    switch (size) {
      case 'xs':
        return 'px-2 py-1 text-xs';
      case 'sm':
        return 'px-3 py-1.5 text-sm';
      case 'base':
        return 'px-4 py-2 text-sm';
    }
  }
  return (
    <ButtonOrLink
      className={clsx(
        getSize(),
        'inline-flex items-center font-medium rounded-md shadow-sm  focus:outline-none',
        {
          'bg-brand text-brand-contrast hover:bg-brand-darker focus:ring-1 focus:ring-offset-2 focus:ring-brand focus:ring-offset-bg-primary ':
            variant === 'primary',
          'text-primary hover:text-brand focus:ring-1 focus:ring-text-primary':
            variant === 'inherit',
          'bg-brand15 text-primary dark:text-brand': variant === '15',
        }
      )}
      {...props}
    />
  );
};

export default Button;
