import { useLayoutEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import Link from './Link';
import LanguageSwitch from './LanguageSwitch';

import { navlinks } from 'content';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';
import { useEffect } from 'react';

const Navigation = () => {
  const { t } = useTranslation('portfolio');
  const { pathname } = useRouter();

  const scrollPosition = useScroll();

  return (
    <div className="w-full mt-4">
      <div
        className="fixed top-0 left-0 z-40 h-0.5 bg-brand bg-opacity-75"
        style={{ width: `${scrollPosition}%` }}
      />
      <nav className="flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-4">
            {navlinks.map(({ name, to }) => (
              <Link active={pathname === to} key={name} to={`${to}`}>
                {t(`${name}`)}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4 md:space-x-2">
            <ThemeToggle />
            <LanguageSwitch />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

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
