import useTranslation from 'next-translate/useTranslation';
import { Link } from 'components';

const Hero = () => {
  const { t } = useTranslation('portfolio');

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight sm:text-5xl ">
        Maximilian Werpers
      </h1>
      <h2 className="tracking-tight text-secondary">
        Software Engineer at{' '}
        <Link className="text-brand" out to="https://clickbar.dev/">
          <span className="font-medium text-brand hover:text-brand-darker">
            clickbar
          </span>
        </Link>
      </h2>
      <p className="mt-2 prose-sm sm:w-1/2">{t('hero_2')}</p>
    </div>
  );
};

export default Hero;
