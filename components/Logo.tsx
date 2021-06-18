import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { useState } from 'react';

type Props = {
  type?: 'mobile' | 'desktop' | 'auto';
  className?: string;
  h?: string;
};

const Logo = ({ type = 'auto', h = 'h-8', className }: Props) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [resolvedTheme]);
  return (
    <div className={className}>
      <div>
        {mounted && (
          <img className={`w-auto ${h}`} src={`/logo_${resolvedTheme}.png`} />
        )}
      </div>
    </div>
  );
};

export default Logo;
