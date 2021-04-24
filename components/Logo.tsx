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
      <div
        style={{ color: 'transparent' }}
        className="text-2xl font-bold bg-clip-text bg-gradient-to-r grad via-brand from-brand to-brand-darker"
      >
        werpers.dev
      </div>
    </div>
    <div
      className={clsx({
        'md:hidden': type === 'auto',
        hidden: type === 'desktop',
        'text-2xl': !small,
        'text-lg': small,
      })}
    >
      <div
        style={{ color: 'transparent' }}
        className="font-bold bg-clip-text bg-gradient-to-r from-brand to-brand-darker"
      >
        MW
      </div>
    </div>
  </div>
);

export default Logo;
