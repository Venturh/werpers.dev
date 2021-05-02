import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useTheme } from 'next-themes';

import IconButton from './IconButton';
import { Circle, Moon, Sun } from 'icons';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [animate, setAnimate] = useState(false);

  useEffect(() => setMounted(true), []);

  function changeTheme() {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  }

  return (
    <div>
      <IconButton
        rounded
        onClick={() => changeTheme()}
        icon={!mounted ? Circle : resolvedTheme === 'dark' ? Sun : Moon}
        className={clsx({ 'animate-spin-0.5': animate })}
      />
    </div>
  );
};

export default ThemeToggle;
