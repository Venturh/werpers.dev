import useTranslation from 'next-translate/useTranslation';

import Label from './Label';
import Link from './Link';
import { Career } from 'content';

const CareerCard = ({ title, description, time, type, tech, url }: Career) => {
  const { t } = useTranslation();
  return (
    <div className="relative shadow-sm">
      <div className="flex flex-wrap items-center justify-between">
        <Link out to={url} className="text-lg">
          <span className="font-medium">{title}</span>
        </Link>
        <div className="flex space-x-2 ">
          <Label variant="border">{t(`portfolio:${type}`)}</Label>
          <span>{t(`portfolio:${time}`)}</span>
        </div>
      </div>
      <p className="prose ">{t(`portfolio:${description}`)}</p>
      <div className="flex mt-1 space-x-1 ">
        {tech.map((t) => (
          <Label className="" variant="border" key={t}>
            {t}
          </Label>
        ))}
      </div>
      <div className="w-full pt-2 border-b-2 border-accentBg" />
    </div>
  );
};

export default CareerCard;
