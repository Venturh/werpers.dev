import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { designLinks } from 'content';
import { Link, SectionHeader } from 'components';

type Props = {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
};

const DesignLayout = ({ children, title, subtitle }: Props) => {
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
      <div className="flex-1 px-4 py-6 space-y-6 rounded-sm shadow-sm bg-bg-secondary ring-1 ring-accent">
        <SectionHeader title={title} subtitle={subtitle} />
        {children}
      </div>
    </div>
  );
};

export default DesignLayout;
