import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  variant?: 'brand' | 'default' | 'border' | 'secondary' | '25';
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
        'bg-accentBg text-primary dark:bg-secondary dark:text-brand':
          variant === '25',
      },
      className
    )}
  >
    {children}
  </div>
);

export default Label;
