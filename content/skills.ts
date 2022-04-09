import { Skill } from '@types';
import { Next, Tailwindcss, Vue, Express, Graphql, Postgres, Laravel, ReactIcon } from 'icons';

const skills: Skill[] = [
	{
		name: 'React',
		icon: ReactIcon,
	},
	{ name: 'Vue', icon: Vue },
	{ name: 'Next', icon: Next },
	{ name: 'Tailwindcss', icon: Tailwindcss },
	{ name: 'Express', icon: Express },
	{ name: 'Graphql', icon: Graphql },
	{ name: 'Postgres', icon: Postgres },
	{ name: 'Laravel', icon: Laravel },
];

export default skills;
