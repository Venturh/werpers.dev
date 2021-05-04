import { useEffect } from 'react';
import clsx from 'clsx';
import useSWR from 'swr';
import { fetcher } from 'lib/swr';
import useTranslation from 'next-translate/useTranslation';

type Props = {
  slug: String;
  className?: string;
  increment?: boolean;
};

const ViewCounter = ({ slug, className, increment = false }: Props) => {
  const { t } = useTranslation('portfolio');
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  let views = data?.views;

  if (views) views = views.toLocaleString(undefined);

  useEffect(() => {
    if (increment) {
      const inc = () =>
        fetch(`/api/views/${slug}`, {
          method: 'POST',
        });
      inc();
    }
  }, [slug]);

  return (
    <span className={clsx(className, 'text-secondary')}>
      {views ? views : '---'} {t('views')}
    </span>
  );
};

export default ViewCounter;
