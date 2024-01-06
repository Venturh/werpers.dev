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
				role: 'clickbar_step1_role',
				status: 'clickbar_step1_status',
				description: ['clickbar_step1_desc_1', 'clickbar_step1_desc_2', 'clickbar_step1_desc_3'],
				time: 'clickbar_step1_time',
			},
			{
				role: 'clickbar_step2_role',
				status: 'clickbar_step2_status',
				description: [],
				time: 'clickbar_step2_time',
			},
		],
	},
	{
		company: 'Hochschule Rhein Main',
		startTime: '10-01-2017',
		endTime: undefined,
		location: 'Wiesbaden, Germany',
		url: 'https://www.hs-rm.de/de/',
		steps: [{ role: 'hsrm_role', status: 'hsrm_status', description: [], time: 'hsrm_time' }],
	},
];

export default experience;
