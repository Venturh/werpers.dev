import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { useState } from 'react';

type Props = {
  type?: 'mobile' | 'desktop' | 'auto';
  className?: string;
  h?: string;
};

const Logo = ({ type = 'auto', h = 'h-10', className }: Props) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [resolvedTheme]);
  return (
    <div className={className}>
      <div
        className={clsx({
          hidden: type === 'mobile',
          'hidden md:inline-flex': type === 'auto',
        })}
      >
        {mounted && (
          <div className="flex items-center space-x-2">
            <img className={`w-auto ${h}`} src={`/logo_${resolvedTheme}.png`} />
            <span>werpers.dev</span>
          </div>
        )}
      </div>
      <div
        className={clsx({
          'md:hidden': type === 'auto',
          hidden: type === 'desktop',
        })}
      >
        {mounted && (
          <img className={`w-auto ${h}`} src={`/logo_${resolvedTheme}.png`} />
        )}
      </div>
    </div>
  );
};

export default Logo;
