import { GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';

import { Container, Button, Link, Section, Icon } from 'components';
import { DefaultLayout } from 'components/layouts';
import { timeline } from 'content';
import { useState } from 'react';
import { ArrowDownS, ArrowUpS } from 'icons';
import generateOgImage from 'lib/ogImage';
import { ogImage } from '@types';

const About = ({ ogImage }: { ogImage: ogImage }) => {
  const { t, lang } = useTranslation('portfolio');
  const title = `${t('about')} - Maximilian Werpers`;
  const description = t('aboutSub');
  const url = `https://www.werpers.dev/${lang}/projects`;

  return (
    <DefaultLayout
      title={title}
      description={description}
      url={url}
      ogImage={ogImage}
    >
      <Container title="aboutMe" subtitle="aboutSub">
        <div className="space-y-8">
          <p className="prose">
            {t('about_1')}{' '}
            <Link className="text-brand" out to="https://clickbar.dev/">
              <span className="underline text-brand hover:text-brand-darker">
                clickbar
              </span>
            </Link>{' '}
            {t('about_2')} <br />
            {t('about_3')}
            <Link underline to="/projects">
              <span className="underline text-brand hover:text-brand-darker">
                {t('here')} <br />
              </span>
            </Link>
            {t('about_4')}
          </p>
          <Section title="timeline" subtitle="timelineSub">
            <Timeline />
          </Section>
        </div>
      </Container>
    </DefaultLayout>
  );
};

const Timeline = () => {
  const { t, lang } = useTranslation('portfolio');
  const [showMore, setShowMore] = useState(false);

  const data = !showMore
    ? Object.entries(timeline)
        .sort(([year], [year2]) => (year2 < year ? -1 : 1))
        .slice(0, 3)
    : Object.entries(timeline).sort(([year], [year2]) =>
        year2 < year ? -1 : 1
      );

  return (
    <div className="flow-root">
      {data.map(([year, timeline]) => (
        <div className="space-y-2 " key={year}>
          <h3 className="font-semibold">{year}</h3>
          <ul>
            {timeline.map(
              (
                { title, titleEn, description, descriptionEn, icon, date },
                index: number
              ) => (
                <li key={index}>
                  <div className="relative pb-6">
                    {index !== timeline.length - 1 ? (
                      <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-accent"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-bg-secondary ">
                          <Icon
                            path={icon}
                            colored
                            className="text-brand"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-base font-medium text-primary">
                            {lang === 'en' ? titleEn : title}
                          </p>
                          {(description || descriptionEn) && (
                            <p className="prose">
                              {lang === 'en' ? descriptionEn : description}
                            </p>
                          )}
                        </div>
                        <div className="text-base text-right text-secondary whitespace-nowrap">
                          <time>{date}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      ))}

      <span className="flex items-center justify-center">
        <div className="flex-1 border-t border-accent" />
        <Button onClick={() => setShowMore(!showMore)} variant="inherit">
          <div className="flex items-center space-x-2">
            {!showMore ? t('show_more') : t('show_less')}
            <Icon colored path={!showMore ? ArrowDownS : ArrowUpS} />
          </div>
        </Button>

        <div className="flex-1 border-t border-accent" />
      </span>
    </div>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: { ogImage: await generateOgImage('og', locale, 'aboutMe') },
  };
};
