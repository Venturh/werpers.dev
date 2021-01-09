import useTranslation from 'next-translate/useTranslation';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-2">
      <h1 className="text-4xl font-semibold ">
        {t('portfolio:hero_1')}{' '}
        <p className="text-4xl text-brand"> Maximilian Werpers </p>
      </h1>
      <p className="lg:text-lg">{t('portfolio:hero_2')}</p>
    </div>
  );
};

export default Hero;
