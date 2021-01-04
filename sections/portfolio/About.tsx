import Link from 'components/Link';
import SectionHeader from 'components/SectionHeader';
import useTranslation from 'next-translate/useTranslation';

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full space-y-2">
      <SectionHeader
        title={t('common:about')}
        subtitle={t('common:aboutSub')}
      />
      <p className="w-full prose lg:prose-lg">
        {t('about:1')}{' '}
        <Link out underline to="https://clickbar.dev/">
          clickbar {''}
        </Link>
        {t('about:2')} <br />
        {t('about:3')}
        <Link underline to="/projects">
          {t('about:here')}
        </Link>
      </p>
    </div>
  );
};

export default About;
