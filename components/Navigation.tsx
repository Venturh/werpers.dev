import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import Link from './Link';
import LanguageSwitch from './LanguageSwitch';

import { navlinks } from 'content';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const { t } = useTranslation();
  const { pathname } = useRouter();

  return (
    <nav className="flex items-center justify-between w-full h-12">
      <Link to="/">
        <div className="hidden font-semibold lg:inline-flex">
          <span className="text-3xl text-brand">max</span>
          <span className="text-3xl ">werpers</span>
        </div>
        <div className="lg:hidden">
          <span className="text-2xl text-brand">
            M<span className="text-2xl text-primary">W</span>
          </span>
        </div>
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
