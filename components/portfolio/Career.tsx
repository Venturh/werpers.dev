import useTranslation from 'next-translate/useTranslation';
import CareerCard from 'components/ui/CareerCard';
import Section from 'components/ui/Section';

import { career } from 'content';
import { Career as CareerType } from '@types';

const Career = () => {
  const { t } = useTranslation('portfolio');
  return (
    <Section title="experience" subtitle="experienceSub">
      <ul className="w-full space-y-2 divide-y divide-accent-primary md:divide-y-0">
        {career.map((c: CareerType, index) => (
          <CareerCard
            key={index}
            last={index === career.length - 1}
            career={c}
          />
        ))}
      </ul>
    </Section>
  );
};

export default Career;
