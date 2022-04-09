import useTranslation from 'next-translate/useTranslation';

import { Labels } from './Label';
import Link from './Link';

import { Career } from '@types';
import clsx from 'clsx';

type Props = {
	career: Career;
	first: boolean;
	last: boolean;
};

const CareerCard = ({ career: { title, description, time, role, url }, first, last }: Props) => {
	const { t } = useTranslation('portfolio');
	return (
		<li className="py-2">
			<div className="relative">
				{!last && (
					<span
						className="hidden md:block absolute top-4 left-2.5 rounded  h-full w-0.5 bg-accent-primary"
						aria-hidden="true"
					/>
				)}
				<div className="relative flex items-start md:space-x-2">
					<div className="items-center justify-center hidden w-6 h-6 rounded-full md:flex  bg-primary  ring-bg-primary ring-offset-accent-primary ring-offset-1">
						<span
							className={clsx(
								'absolute inline-flex h-3 w-3 rounded-full bg-brand-primary opacity-75',
								{
									'animate-ping': first,
								}
							)}
						/>
						<span className="relative inline-flex rounded-full h-3 w-3 bg-brand-primary" />
					</div>
					<div className="w-full">
						<span className="font-medium text-primary">{t(`${role}`)}</span>
						<div className="flex items-center justify-between text-sm text-secondary pt-1.5">
							<Link out to={url}>
								<span>{title}</span>
							</Link>
							<span>{t(`${time}`)}</span>
						</div>
						<div className="prose prose-sm">
							<ul>
								{description.map((d, i) => (
									<li key={i}>{t(d)}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};

export default CareerCard;
