import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  variant?: 'brand' | 'default';
};

const Label = ({ children, variant }: Props) => (
  <div
    className={clsx('py-0.5 px-1 text-sm rounded-md ', {
      'bg-brand text-brandContrast': variant === 'brand',
      'bg-primary text-primary p-1': variant === 'default',
    })}
  >
    {children}
  </div>
);

export default Label;
