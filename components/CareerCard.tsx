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
  <div className="relative space-y-0.5">
    <div className="flex items-center space-x-2">
      <Link out to={url} className="text-lg">
        <span className="font-medium">{company}</span>
      </Link>
    </div>
    <div className="flex justify-between">
      <span className="text-sm">{type}</span>
      <div className="flex items-center space-x-2"></div>
      <span>
        {start_time} - {end_time}
      </span>
    </div>
    <p className="prose lg:w-10/12">{description}</p>
    <div className="flex space-x-1 ">
      {used.map(({ used }) => (
        <Label key={used}>{used}</Label>
      ))}
    </div>
    <div className="w-full pt-2 border-b-2 border-accentBg" />
  </div>
);

export default CareerCard;
