import useTranslation from 'next-translate/useTranslation';

import { Label, Labels, Link } from 'components';
import { career } from 'content';
import { Career } from '@types';

type Props = {
  career: Career;
  last: boolean;
};

const CareerCard = ({
  career: { title, description, time, type, tech, url, logo },
  last,
}: Props) => {
  const { t } = useTranslation('portfolio');
  return (
    <li className="py-2">
      <div className="relative">
        {!last && (
          <span
            className="hidden md:block absolute top-4 left-3 md:left-5 h-full w-0.5 bg-accent"
            aria-hidden="true"
          />
        )}
        <div className="relative flex items-start md:space-x-3">
          <img
            className="items-center justify-center hidden w-6 h-6 rounded-full md:flex md:w-10 md:h-10 bg-primary ring-8 ring-bg-primary ring-offset-accent ring-offset-1"
            src={`/images/${logo}`}
            alt="career"
          />
          <div className="w-full">
            <div className="flex items-center justify-between">
              <Link out to={url}>
                <span className="text-lg font-medium">{title}</span>
              </Link>
              <p className="text-sm text-secondary">{t(`${time}`)}</p>
            </div>
            <p className="mb-1.5 prose ">{t(`${description}`)}</p>
            <Labels labels={tech} variant="15" max={5} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CareerCard;
