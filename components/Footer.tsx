import { socials } from 'content';
import useTranslation from 'next-translate/useTranslation';
import useSWR from 'swr';
import { fetcher } from 'lib/swr';

import Discord from './Discord';
import Link from './Link';

const Footer = () => {
  const { t } = useTranslation();
  const { data } = useSWR(
    `https://api.github.com/repos/Venturh/werpers.dev`,
    fetcher
  );
  return (
    <div className="flex flex-col flex-shrink-0 w-full py-6 space-y-4">
      <div className="w-full border-t-2 border-accentBg " />
      <Discord />
      <div className="grid grid-cols-3">
        {socials.map(({ link, internal, name }) => (
          <Link key={name} to={link} out={!internal}>
            <span className="text-base text-secondary">{name}</span>
          </Link>
        ))}
      </div>
      <p className="text-sm text-secondary">
        © 2020, Maximilian Werpers • werpers.dev •{' '}
        {data &&
          `${t('portfolio:updated')}: ${new Date(
            data.updated_at
          ).toLocaleDateString('de-DE', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
          })}`}
      </p>
    </div>
  );
};

export default Footer;
