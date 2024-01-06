import dayjs from 'dayjs';

import Section from 'components/ui/Section';
import Clickable from 'components/ui/Clickable';

import { experience } from 'content';
import { ExperienceStep, Experience as ExperienceType } from 'types';
import Label from 'components/ui/Label';

function getDates(steps: ExperienceStep[]) {
	const startDate = dayjs(steps[steps.length - 1].startTime).format('MMM YYYY');
	const latestStept = steps[0];
	const endDate = latestStept.endTime ? dayjs(latestStept.endTime).format('MMM YYYY') : 'Present';

	return `${startDate} - ${endDate}`;
}

function Experience() {
	return (
		<Section title="experience">
			<ul className="w-full -mt-4 divide-y divide-accent-primary">
				{experience.map((experience: ExperienceType, idx) => {
					return (
						<div className="py-4" key={experience.company}>
							<div className="flex items-center justify-between">
								<Clickable
									href={experience.url}
									out
									className="text-sm font-medium hover:text-brand-primary"
								>
									{experience.company}
								</Clickable>
								<div className="text-sm text-secondary">{getDates(experience.steps)}</div>
							</div>
							{experience.steps?.map((step, stepIdx) => (
								<li key={step.role} className="relative pt-2">
									{!(experience.steps && stepIdx === experience.steps.length - 1) && (
										<span
											className="absolute top-4 left-2.5 rounded  h-full w-0.5 bg-accent-primary"
											aria-hidden="true"
										/>
									)}
									<div className="relative flex items-start space-x-1">
										<div className="items-center justify-center  w-6 h-6 rounded-full flex bg-primary ring-bg-primary ring-offset-accent-primary ring-offset-1">
											<span className="relative inline-flex w-3 h-3 rounded-full bg-brand-primary" />
										</div>
										<div className="w-full">
											<div className="sm:flex justify-between items-center">
												<div className="sm:flex sm:space-x-2 sm:items-center w-full sm:justify-between">
													<span className="font-medium text-primary">{step.role}</span>

													{experience.steps.length > 1 && (
														<div className="text-sm text-secondary">{getDates([step])}</div>
													)}
												</div>
											</div>
											<div className="prose-sm prose dark:prose-invert">{step.description}</div>
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
