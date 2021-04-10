import useTranslation from 'next-translate/useTranslation';
import { socials } from 'content';

import { Discord, Link, Logo } from 'components';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-full py-6 space-y-4">
      <div className="w-full border-t-2 border-accentBg" />
      <div className="flex items-center justify-between">
        <Discord />
        <Logo small />
      </div>
      <div className="grid grid-cols-3">
        {socials.map(({ link, internal, name }) => (
          <Link key={name} to={link} out={!internal}>
            <span className="text-base text-secondary">{name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
