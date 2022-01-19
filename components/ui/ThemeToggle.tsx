import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import {
  DotsCircleHorizontalIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/outline';

import IconButton from './IconButton';

export default function ThemeToggle() {
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
    <IconButton
      title="Toggle Theme"
      variant="ghost"
      ariaLabel="theme-icon"
      fullRounded
      size="sm"
      onClick={() => changeTheme()}
      icon={
        !mounted ? (
          <DotsCircleHorizontalIcon />
        ) : resolvedTheme === 'dark' ? (
          <SunIcon className={clsx({ 'animate-spin-0.5': animate })} />
        ) : (
          <MoonIcon className={clsx({ 'animate-spin-0.5': animate })} />
        )
      }
    />
  );
}
