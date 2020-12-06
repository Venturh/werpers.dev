import clsx from 'clsx';

type Props = {
  path: string;
  viewBox?: string;
  className?: string;
  colored?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const Icon = ({
  path,
  viewBox = '0 0 24 24',
  className,
  colored,
  size,
}: Props) => {
  return (
    <svg
      viewBox={viewBox}
      className={clsx(className, {
        'fill-current text-primary ': !colored,
        'w-4 ': size === 'sm',
        'h-5': size === undefined,
        'h-6': size === 'md',
        'w-7 ': size === 'lg',
      })}
    >
      <path d={path} />
    </svg>
  );
};

export default Icon;
