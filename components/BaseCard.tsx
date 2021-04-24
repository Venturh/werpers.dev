import clsx from 'clsx';

type Props = {
  className?: string;
  children: React.ReactNode;
  barPosition?: 'left' | 'bottom' | 'none';
  outline?: boolean;
};

const BaseCard = ({ children, barPosition, className }: Props) => (
  <div
    className={clsx(
      className,
      'relative bg-bg-secondary w-full shadow-sm p-2 rounded-lg',
      {
        'pl-6': barPosition === 'left',
      }
    )}
  >
    {children}
    <div
      className={clsx('absolute rounded-sm bg-brand', {
        'bottom-0 w-full h-1': barPosition === 'bottom',
        'top-0 left-0 w-1.5 h-full': barPosition === 'left',
        hidden: barPosition === 'none',
      })}
    />
  </div>
);

export default BaseCard;
