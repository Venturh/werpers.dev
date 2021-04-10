import useTranslation from 'next-translate/useTranslation';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold sm:text-4xl ">
        {t('portfolio:hero_1')}{' '}
        <span className="text-brand"> Maximilian Werpers </span>
      </h1>
      <p className="lg:text-lg">{t('portfolio:hero_2')}</p>
    </div>
  );
};

export default Hero;
