import { Label, Icon, Link } from 'components';
import useTranslation from 'next-translate/useTranslation';
import { ArrowRightS } from 'icons';

const Hero = () => {
  const { t } = useTranslation('portfolio');

  return (
    <div className="space-y-2">
      {/* <div className="inline-flex items-center space-x-2">
        <Label variant="15">{t('whatsNew')}</Label>
        <Link to="/design">
          <Label
            variant="border"
            className="flex items-center space-x-4 text-sm bg-secondary text-brand hover:text-brand-darker"
          >
            {t('whatsNewDesc')}
            <Icon path={ArrowRightS} colored />
          </Label>
        </Link>
      </div> */}
      <h1 className="text-3xl font-bold sm:text-5xl ">
        {t('hero_1')} <span className="text-brand"> Maximilian Werpers </span>
      </h1>
      <p className="prose">{t('hero_2')}</p>
    </div>
  );
};

export default Hero;
