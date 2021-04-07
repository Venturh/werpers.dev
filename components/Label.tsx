import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  variant?: 'brand' | 'default' | 'border' | 'secondary' | '15';
  className?: string;
};

const Label = ({ children, variant, className }: Props) => (
  <div
    className={clsx(
      'py-0.5 px-1 text-sm rounded-md shadow-sm dark:shadow-none',
      {
        'bg-brand text-brandContrast': variant === 'brand',
        'bg-primary text-primary p-1': variant === 'default',
        'border border-accentBg': variant === 'border',
        'bg-secondary': variant === 'secondary',
        'bg-brand15 text-brandDarker': variant === '15',
      },
      className
    )}
  >
    {children}
  </div>
);

export default Label;
