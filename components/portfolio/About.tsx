import useTranslation from 'next-translate/useTranslation';

import Link from 'components/ui/Link';
import Section from 'components/ui/Section';

export default function About() {
  const { t } = useTranslation('portfolio');

  return (
    <Section title="aboutMe" subtitle="aboutSub">
      <p className="mt-2 prose dark:prose-invert">
        {t('about_1')}
        <Link out to="https://clickbar.dev/">
          <span className="font-medium text-brand-primary hover:text-brand-secondary">
            clickbar{' '}
          </span>
        </Link>
        {t('about_2')}
        <Link out to="https://www.hs-rm.de/de/">
          <span className="font-medium text-brand-primary hover:text-brand-secondary">
            Hochschule Rhein Main.
          </span>
        </Link>
        <br />
        {t('about_3')}
        <Link underline to="/projects">
          <span className="font-medium text-brand-primary hover:text-brand-secondary">
            {t('here')} <br />
          </span>
        </Link>
        {t('about_4')}
      </p>
    </Section>
  );
}
