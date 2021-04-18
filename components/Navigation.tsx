import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import Link from './Link';
import LanguageSwitch from './LanguageSwitch';

import { navlinks } from 'content';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

const Navigation = () => {
  const { t } = useTranslation('portfolio');
  const { pathname } = useRouter();

  return (
    <nav className="flex items-center justify-between w-full h-12">
      <Link to="/">
        <Logo small />
      </Link>
      <div className="flex items-center space-x-4">
        <div className="flex space-x-4">
          {navlinks.map(({ name, to }) => (
            <Link active={pathname === to} key={name} to={`${to}`}>
              {t(`${name}`)}
            </Link>
          ))}
        </div>
        <div className="flex items-center mt-1 space-x-4 md:space-x-2">
          <ThemeToggle />
          <LanguageSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
