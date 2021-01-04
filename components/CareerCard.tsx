import { Careers } from 'lib/prismic';
import Icon from './Icon';
import Label from './Label';
import Link from './Link';

const CareerCard = ({
  company,
  description,
  end_time,
  start_time,
  type,
  used,
  url,
}: Careers) => (
  <div className="relative shadow-sm">
    <div className="flex flex-wrap items-center justify-between">
      <Link out to={url} className="text-lg">
        <span className="font-medium">{company}</span>
      </Link>
      <div className="flex space-x-2 ">
        <Label variant="border">{type}</Label>
        <span>
          {start_time} - {end_time}
        </span>
      </div>
    </div>
    <p className="prose ">{description}</p>
    <div className="flex mt-1 space-x-1 ">
      {used.map(({ used }) => (
        <Label className="" variant="border" key={used}>
          {used}
        </Label>
      ))}
    </div>
    <div className="w-full pt-2 border-b-2 border-accentBg" />
  </div>
);

export default CareerCard;
