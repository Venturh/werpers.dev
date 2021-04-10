import useTranslation from 'next-translate/useTranslation';
import { CareerCard, SectionHeader } from 'components';
import { career } from 'content';
import { Career as CareerType } from '@types';

const Career = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-2">
      <SectionHeader
        title={t('portfolio:experience')}
        subtitle={t('portfolio:experienceSub')}
      />
      <ul className="w-full space-y-2 divide-y divide-accentBg md:divide-y-0">
        {career.map((c: CareerType, index) => (
          <CareerCard
            key={index}
            last={index === career.length - 1}
            career={c}
          />
        ))}
      </ul>
    </div>
  );
};

export default Career;
