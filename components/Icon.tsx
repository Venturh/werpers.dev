import clsx from 'clsx';

type Props = {
  path: string;
  viewBox?: string;
  className?: string;
  colored?: boolean;
  size?: 'sm' | 'md' | 'lg';
  outlined?: boolean;
  style?: React.CSSProperties;
};

const Icon = ({
  path,
  viewBox = '0 0 24 24',
  className,
  style,
  colored,
  size,
  outlined,
}: Props) => {
  return (
    <svg
      viewBox={viewBox}
      style={style}
      className={clsx(className, {
        'text-primary ': !colored,
        'h-3 md:h-4 ': size === 'sm',
        'h-4.5 md:h-5': size === undefined,
        'h-5 md:h-6': size === 'md',
        'w-6 md:w-7 ': size === 'lg',
        'fill-current': !outlined,
      })}
    >
      <path d={path} />
    </svg>
  );
};

export default Icon;
