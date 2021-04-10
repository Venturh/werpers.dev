import clsx from 'clsx';

type Props = {
  type?: 'mobile' | 'desktop' | 'auto';
  className?: string;
  small?: boolean;
};

const Logo = ({ type = 'auto', className, small }: Props) => (
  <div className={className}>
    <div
      className={clsx('font-semibold ', {
        hidden: type === 'mobile',
        'hidden md:inline-flex': type === 'auto',
        'text-3xl': !small,
        'text-xl': small,
      })}
    >
      <span className="text-brand">werpers</span>
      <span className="text-primary">.dev</span>
    </div>
    <div
      className={clsx({
        'md:hidden': type === 'auto',
        hidden: type === 'desktop',
        'text-2xl': !small,
        'text-lg': small,
      })}
    >
      <span className="text-brand">
        M<span className="text-primary">W</span>
      </span>
    </div>
  </div>
);

export default Logo;
