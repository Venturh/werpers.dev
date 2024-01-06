import { Experience } from 'types';

const experience: Experience[] = [
	{
		company: 'clickbar. GmbH',
		startTime: '10-01-2021',
		endTime: undefined,
		location: 'Darmstadt, Germany',
		url: 'https://clickbar.dev/',
		steps: [
			{
				role: 'Fullstack Software Engineer',
				status: 'Part Time working student',
				description:
					'Working and taking lead on a variety of projects for clients, as well as internal projects.',
				startTime: '2022-08-01',
				endTime: undefined,
			},
			{
				role: 'Fullstack Software Engineer',
				status: 'Part Time working student',
				description:
					'Working and taking lead on a variety of projects for clients, as well as internal projects.',
				startTime: '2021-04-01',
				endTime: '2022-07-31',
			},
			{
				role: 'Full Stack Developer',
				status: 'Intern',
				startTime: '2020-10-01',
				endTime: '2021-03-31',
			},
		],
	},
	{
		company: 'Hochschule Rhein Main',
		status: 'Student',
		role: 'Bachelor of Science in Computer Science',
		startTime: '2017-10-01',
		endTime: '2022-06-15',
		location: 'Wiesbaden, Germany',
		url: 'https://www.hs-rm.de/de/',
	},
];

export default experience;
