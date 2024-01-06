import { Project } from 'types';

const projects: Project[] = [
	{
		title: 'elisabethwerpers.com',
		description: 'Art gallery website',
		tech: ['NextJs', 'TypeScript', 'TailwindCss'],
		slug: 'galery',
		type: 'Frontend',
		githubUrl: 'https://github.com/Venturh/elisabethwerpers.com',
		pageUrl: 'https://elisabethwerpers.com',
		year: '2023',
		main: true,
	},
	{
		title: 'clickbar.dev',
		description: 'Company website for clickbar',
		tech: ['Nuxt', 'Vue', 'TailwindCss', 'MDX'],
		slug: 'clickbar',
		type: 'Frontend',
		madeAt: 'clickbar',
		pageUrl: 'https://clickbar.dev',
		year: '2022',
		main: true,
	},
	{
		title: 'Discord Bot',
		description:
			'Personal discord bot to display the current status of a selected user, used on this site to display my current status.',
		tech: ['Node', 'Express', 'Typescript', 'Redis', 'DiscordJS'],
		slug: 'discordapi',
		type: 'Backend',
		githubUrl: 'https://github.com/Venturh/discordapi',
		pageUrl: 'https://discord-api-production.up.railway.app/presence',
		year: '2021',
	},
	{
		title: 'werpers.dev',
		description: 'My personal portfolio.',
		tech: ['React', 'Next.js', 'Typescript'],
		slug: 'werpers.dev',
		type: 'Frontend',
		githubUrl: 'https://github.com/venturh/werpers.dev',
		pageUrl: 'https://werpers.dev/',
		year: '2020',
		main: true,
	},
];

export default projects;
