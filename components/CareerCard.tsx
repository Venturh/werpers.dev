import { Careers } from 'lib/prismic';
import Label from './Label';
import Link from './Link';

const CareerCard = ({
  company,
  description,
  end_time,
  start_time,
  type,
  url,
  used,
}: Careers) => (
  <div className="space-y-1">
    <div className="flex justify-between">
      <div className="flex items-center space-x-2">
        <Label variant="brand">{type}</Label>
        <Link out to={url} className="text-lg">
          {company}
        </Link>
      </div>
      <span>
        {start_time} - {end_time}
      </span>
    </div>
    <p className="lg:w-10/12">{description}</p>
    <div className="flex flex-wrap w-11/12 space-x-2">
      {used.map(({ used }) => (
        <Label key={used}>{used}</Label>
      ))}
    </div>
  </div>
);

export default CareerCard;
