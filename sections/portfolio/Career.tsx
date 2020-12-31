import useTranslation from 'next-translate/useTranslation';
import { CareerCard, SectionHeader } from 'components';
import { Careers } from 'lib/prismic';
import styles from 'styles/global.module.css';
import clsx from 'clsx';

const Career = ({ career }) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-4">
      <SectionHeader
        title={t('common:experience')}
        subtitle={t('common:experienceSub')}
      />
      <div className="grid gap-4 ">
        {career.map((c: Careers) => (
          <div key={c.company} className={styles.timelinecards}>
            <span className="relative flex-shrink-0 hidden w-3.5 h-3.5  rounded-full md:block bg-brand -left-2 top-1.5" />
            <CareerCard {...c} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
