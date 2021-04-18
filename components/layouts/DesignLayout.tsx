import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { designLinks } from 'content';
import { Link } from 'components';

type Props = {
  children: React.ReactNode;
};

const DesignLayout = ({ children }: Props) => {
  const { t } = useTranslation('portfolio');
  const { pathname } = useRouter();
  return (
    <div className="flex flex-col flex-1 h-full space-y-4 md:space-y-0 md:space-x-8 sm:flex-row">
      <nav className="flex space-x-4 sm:space-x-0 sm:space-y-2 sm:flex-col">
        {designLinks.map(({ to, name }) => (
          <Link active={pathname === to} key={name} to={`${to}`}>
            {t(`${name}`)}
          </Link>
        ))}
      </nav>
      <div className="flex-1 p-4 rounded-sm shadow-sm bg-secondaryBg ring-1 ring-accentBg">
        {children}
      </div>
    </div>
  );
};

export default DesignLayout;
