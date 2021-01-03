import { useTheme } from 'next-themes';
import { Circle, Moon, Sun } from 'icons';
import IconButton from './IconButton';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <IconButton
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      icon={!mounted ? Circle : theme === 'dark' ? Sun : Moon}
      rounded
    />
  );
};

export default ThemeToggle;
