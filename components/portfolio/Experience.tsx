import useTranslation from 'next-translate/useTranslation';
import dayjs from 'dayjs';

import Section from 'components/ui/Section';
import Clickable from 'components/ui/Clickable';

import { experience } from 'content';
import { Experience as ExperienceType } from '@types';
import { useEffect, useState } from 'react';

function Experience() {
	const { t, lang } = useTranslation('portfolio');
	const [times, setTimes] = useState([]);

	function pluralize(n: number) {
		return n === 1 ? '' : `${lang === 'en' ? 's' : 'e'}`;
	}

	useEffect(() => {
		const today = dayjs(new Date());
		const t = experience.map(({ startTime }) => {
			const years = today.diff(startTime, 'year');
			const months = today.diff(startTime, 'month') - years * 12;
			const days = today.diff(dayjs(startTime).add(years, 'year').add(months, 'month'), 'day');
			return { years, months, days };
		});
		setTimes(t);
	}, []);

	return (
		<Section title="experience" subtitle="experienceSub">
			<ul className="w-full -mt-4 divide-y divide-accent-primary">
				{experience.map(({ company, steps, url, startTime }: ExperienceType, idx) => {
					const { years, months, days } = times[idx] || {
						years: undefined,
						months: undefined,
						days: undefined,
					};
					return (
						<div className="block pt-4" key={startTime}>
							<div className="flex items-center justify-between">
								<Clickable href={url} out className="text-sm font-medium hover:text-brand-primary">
									{company}
								</Clickable>
								<div className="text-sm text-secondary">
									{years > 0 && `${years} ${t('year')}${pluralize(years)} `}
									{months > 0 && `${months} ${t('month')}${pluralize(months)} `}
									{days > 0 && !months && !years && `${days} ${t('day')}${pluralize(days)}`}
								</div>
							</div>
							{steps.map((step, stepIdx) => (
								<li key={step.role} className="relative pt-2">
									{!(stepIdx === steps.length - 1) && (
										<span
											className="hidden md:block absolute top-4 left-2.5 rounded  h-full w-0.5 bg-accent-primary"
											aria-hidden="true"
										/>
									)}
									<div className="relative flex items-start md:space-x-2">
										<div className="items-center justify-center hidden w-6 h-6 rounded-full md:flex bg-primary ring-bg-primary ring-offset-accent-primary ring-offset-1">
											<span className="relative inline-flex w-3 h-3 rounded-full bg-brand-primary" />
										</div>
										<div className="w-full">
											<div className="flex flex-col md:flex-row md:justify-between">
												<div className="font-medium text-primary">{t(step.role)}</div>
												<div>
													<span className="text-sm text-secondary">{t(step.status)} • </span>
													<span className="text-sm text-secondary">{t(step.time)}</span>
												</div>
											</div>
											<div className="-my-2 prose-sm prose">
												<ul>
													{step.description.map((description) => (
														<li key={description}>{t(description)}</li>
													))}
												</ul>
											</div>
										</div>
									</div>
								</li>
							))}
						</div>
					);
				})}
			</ul>
		</Section>
	);
}

export default Experience;
