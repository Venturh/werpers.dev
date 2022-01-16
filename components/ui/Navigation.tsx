import { useState, useEffect } from 'react';
import { CollectionIcon } from '@heroicons/react/outline';
import useTranslation from 'next-translate/useTranslation';

import LanguageSwitch from './LanguageSwitch';

import ThemeToggle from './ThemeToggle';
import IconButton from './IconButton';
import Icon from './Icon';
import { Github } from 'icons';
import Link from './Link';
import Label from './Label';

export default function Navigation() {
  const { t } = useTranslation('portfolio');

  const scrollPosition = useScroll();

  return (
    <>
      <div
        className="fixed top-0 left-0 z-40 h-0.5 bg-brand-primary bg-opacity-75"
        style={{ width: `${scrollPosition}%` }}
      />
      <div className="relative flex items-center justify-between w-full h-16">
        <Link to="/">
          <Label> werpers.dev</Label>
        </Link>
        <div className="flex divide-x divide-accent-primary">
          <div className="pr-2">
            <IconButton
              title="Projects"
              variant="ghost"
              to="/projects"
              ariaLabel="projects"
              fullRounded
              size="sm"
              icon={<CollectionIcon />}
            />
          </div>
          <div className="px-2">
            <IconButton
              title="Github"
              variant="ghost"
              to="https://github.com/Venturh/werpers.dev"
              out
              ariaLabel="github-icon"
              fullRounded
              size="sm"
              icon={<Icon colored path={Github} />}
            />
          </div>
          <div className="pl-2 space-x-2">
            <LanguageSwitch />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}

export function useScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let requestRunning = null;
    function handleScroll() {
      if (requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
          const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
          const scrolled = (winScroll / height) * 100;
          setScrollPosition(scrolled);

          requestRunning = null;
        });
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
}
