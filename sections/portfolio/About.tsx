import Link from 'components/Link';
import Section from 'components/Section';
import useTranslation from 'next-translate/useTranslation';

const About = () => {
  const { t } = useTranslation('portfolio');
  return (
    <Section title="about" subtitle="aboutSub" withPadding={false}>
      <p className="w-full prose">
        {t('about_1')}{' '}
        <Link out underline to="https://clickbar.dev/">
          clickbar {''}
        </Link>
        {t('about_2')} <br />
        {t('about_3')}
        <Link underline to="/projects">
          {t('here')}
        </Link>
      </p>
    </Section>
  );
};

export default About;
