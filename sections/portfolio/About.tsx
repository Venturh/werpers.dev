import Link from 'components/Link';
import SectionHeader from 'components/SectionHeader';
import useTranslation from 'next-translate/useTranslation';

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full space-y-2">
      <SectionHeader
        title={t('portfolio:about')}
        subtitle={t('portfolio:aboutSub')}
      />
      <p className="w-full prose">
        {t('portfolio:about_1')}{' '}
        <Link out underline to="https://clickbar.dev/">
          clickbar {''}
        </Link>
        {t('portfolio:about_2')} <br />
        {t('portfolio:about_3')}
        <Link underline to="/projects">
          {t('portfolio:here')}
        </Link>
      </p>
    </div>
  );
};

export default About;
