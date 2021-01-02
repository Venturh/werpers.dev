import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import Link from './Link';
import LanguageSwitch from './LanguageSwitch';

import { navlinks } from 'content';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

const Navigation = () => {
  const { t } = useTranslation();
  const { pathname } = useRouter();

  return (
    <nav className="flex items-center justify-between w-full h-12">
      <Link to="/">
        <Logo />
      </Link>

      <div className="flex items-center space-x-2 md:space-x-4">
        {navlinks.map(({ name, to }) => {
          return (
            <Link active={pathname === to} block key={name} to={`${to}`}>
              {t(`common:${name}`)}
            </Link>
          );
        })}

        <div className="flex space-x-2 space-y-1 md:space-x-4">
          <span className="text-xl">|</span>
          <ThemeToggle />
          <LanguageSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
