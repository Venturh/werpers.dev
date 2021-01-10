import useTranslation from 'next-translate/useTranslation';
import { CareerCard, SectionHeader } from 'components';
import styles from 'styles/global.module.css';
import { Career as CareerType, career } from 'content';

const Career = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-2">
      <SectionHeader
        title={t('portfolio:experience')}
        subtitle={t('portfolio:experienceSub')}
      />
      <div className="grid gap-4 ">
        {career.map((c: CareerType) => (
          <div key={c.title} className={styles.timelinecards}>
            <span className="relative flex-shrink-0 hidden w-3.5 h-3.5 rounded-full md:block bg-brand -left-2 top-2" />
            <CareerCard {...c} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
