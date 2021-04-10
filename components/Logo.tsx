import clsx from 'clsx';

type Props = {
  type?: 'mobile' | 'desktop' | 'auto';
  className?: string;
};

const Logo = ({ type = 'auto', className }: Props) => (
  <div className={className}>
    <div
      className={clsx('font-semibold ', {
        hidden: type === 'mobile',
        'hidden md:inline-flex': type === 'auto',
      })}
    >
      <span className="text-3xl text-brand">werpers</span>
      <span className="text-3xl ">.dev</span>
    </div>
    <div
      className={clsx({
        'md:hidden': type === 'auto',
        hidden: type === 'desktop',
      })}
    >
      <span className="text-2xl text-brand">
        M<span className="text-2xl text-primary">W</span>
      </span>
    </div>
  </div>
);

export default Logo;
