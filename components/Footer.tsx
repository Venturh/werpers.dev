import useTranslation from 'next-translate/useTranslation';
import { footer } from 'content';

import { Discord, Link, Logo } from 'components';

const Footer = () => {
  const { t } = useTranslation('portfolio');

  return (
    <div className="flex flex-col w-full py-6 space-y-4">
      <div className="w-full border-t-2 border-accentBg" />
      <div className="flex flex-col sm:grid sm:grid-cols-4">
        <div className="col-span-2 mb-4 space-y-1">
          <Discord />
          <div className="hidden space-y-1 sm:block">
            <Logo small />
            <p className="text-sm">© 2020-2021 - Maximilian Werpers </p>
          </div>
        </div>
        <div className="grid grid-cols-2 col-span-2">
          {Object.entries(footer).map(([title, values]) => (
            <div key={title}>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-secondary">
                {t(`${title}`)}
              </h3>
              <div className="grid sm:grid-cols-2">
                {values.map(({ link, name, internal }) => (
                  <Link key={name} to={link} out={!internal}>
                    <span className="text-sm text-primary">
                      {title === 'pages' ? t(`${name}`) : name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sm:hidden">
        <Logo small />
        <p className="text-sm">© 2020-2021 - Maximilian Werpers </p>
      </div>
    </div>
  );
};

export default Footer;
