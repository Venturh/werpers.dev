import useTranslation from 'next-translate/useTranslation';
import { CareerCard, SectionHeader } from 'components';
import { Careers } from 'lib/prismic';

const Career = ({ career }) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-4">
      <SectionHeader
        title={t('common:experience')}
        subtitle={t('common:experienceSub')}
      />
      <div className="space-y-4">
        {career.map((c: Careers) => (
          <CareerCard key={c.company} {...c} />
        ))}
      </div>
    </div>
  );
};

export default Career;
