import useTranslation from 'next-translate/useTranslation';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-2">
      <h1 className="text-4xl ">
        {t('common:hey')}{' '}
        <p className="text-4xl text-brand"> Maximilian Werpers </p>
      </h1>
      <p className="lg:text-lg">{t('common:what')}</p>
    </div>
  );
};

export default Hero;
