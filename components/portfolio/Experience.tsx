import dayjs from 'dayjs';

import Image from 'next/image';
import Link from 'next/link';
import Section from 'components/ui/Section';

import { experience } from 'content';
import { Experience as ExperienceType } from 'types';

export default function Experience() {
	return (
		<Section title="experience">
			<ol className="w-full space-y-6 hover-list ">
				{experience.map((experience: ExperienceType, idx) => {
					return (
						<li className="transition-opacity" key={idx}>
							<Link className="w-full flex gap-4 " href={experience.url}>
								<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 ring-accent-primary bg-secondary ">
									<Image
										alt=""
										loading="lazy"
										width="32"
										height="32"
										className="size-full rounded-full"
										src={`/${experience.imageName}`}
									/>
								</div>
								<dl className="flex flex-auto flex-wrap gap-x-2">
									<dt className="sr-only">Role</dt>
									<dd className="w-full flex-none font-medium">{experience.role}</dd>
									<dt className="sr-only">Company</dt>
									<dd className="text-sm text-secondary">{experience.company}</dd>
									<dt className="sr-only">Date</dt>
									<dd className="ml-auto text-sm text-secondary">
										<time>{dayjs(experience.startTime).format('MMM YYYY')}</time>{' '}
										<span aria-hidden="true">—</span>{' '}
										<time>
											{experience.endTime
												? dayjs(experience.endTime).format('MMM YYYY')
												: 'Present'}
										</time>
									</dd>
								</dl>
							</Link>
						</li>
					);
				})}
			</ol>
		</Section>
	);
}
