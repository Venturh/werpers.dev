import useTranslation from 'next-translate/useTranslation';
import { Button, Link, Section, Icon } from 'components';
import { DefaultLayout } from 'components/layouts';
import { timeline } from 'content';
import { useState } from 'react';
import { ArrowDownS, ArrowUpS } from 'icons';

const About = () => {
  const { t } = useTranslation('portfolio');
  return (
    <DefaultLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold text-brand">{t('aboutMe')}</h1>
          <h2 className="text-lg"> {t('aboutSub')}</h2>
          <div className="space-y-2">
            <p className="w-full prose">
              {t('about_1')}{' '}
              <Link className="text-brand" out to="https://clickbar.dev/">
                <span className="underline text-brand hover:text-brandDarker">
                  clickbar
                </span>
              </Link>{' '}
              {t('about_2')} <br />
              {t('about_3')}
              <Link underline to="/projects">
                <span className="underline text-brand hover:text-brandDarker">
                  {t('here')} <br />
                </span>
              </Link>
              {t('about_4')}
            </p>
          </div>
        </div>
        <Section title="timeline" subtitle="timelineSub" withPadding={false}>
          <Timeline />
        </Section>
      </div>
    </DefaultLayout>
  );
};

const Timeline = () => {
  const { t } = useTranslation('portfolio');
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
            {timeline.map(({ id, icon, date, hasSub }, index) => (
              <li key={id}>
                <div className="relative pb-6">
                  {index !== timeline.length - 1 ? (
                    <span
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-accentBg"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondaryBg ">
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
                          {t(`timeline_${year}_${id}`)}
                        </p>
                        {hasSub && (
                          <p className="text-sm text-secondary">
                            {t(`timeline_${year}_${id}_sub`)}
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
            ))}
          </ul>
        </div>
      ))}

      <span className="flex items-center justify-center">
        <div className="flex-1 border-t border-accentBg" />
        <Button onClick={() => setShowMore(!showMore)} variant="inherit">
          <div className="flex items-center space-x-2">
            {!showMore ? t('show_more') : t('show_less')}
            <Icon colored path={!showMore ? ArrowDownS : ArrowUpS} />
          </div>
        </Button>

        <div className="flex-1 border-t border-accentBg" />
      </span>
    </div>
  );
};

export default About;
