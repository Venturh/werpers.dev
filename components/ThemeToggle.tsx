import { useTheme } from 'next-themes';
import { Circle, Moon, Sun } from 'icons';
import IconButton from './IconButton';
import { useEffect, useState } from 'react';
import Icon from './Icon';
import clsx from 'clsx';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [animate, setAnimate] = useState(false);

  useEffect(() => setMounted(true), []);

  function changeTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
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
        icon={!mounted ? Circle : theme === 'dark' ? Sun : Moon}
        className={clsx({ 'animate-spin-0.5': animate })}
      />
    </div>
  );
};

export default ThemeToggle;
