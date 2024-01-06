import { Navlink } from 'types';

export { default as projects } from './projects';
export { default as experience } from './experience';
export { default as stack } from './stack';

export const navlinks: Navlink[] = [{ name: 'Portfolio', to: '/' }];

export const footer = {
	pages: [{ name: 'Portfolio', link: '/', internal: true }],
	socials: [
		{
			name: 'Github',
			link: 'https://github.com/Venturh',
			internal: false,
		},
		{
			name: 'LinkedIn',
			link: 'https://www.linkedin.com/in/max-werpers-9474251a5/',
			internal: false,
		},
		{
			name: 'Discord',
			link: 'https://discord.gg/pmsD8Qqvn9',
			internal: false,
		},
		{
			name: 'Email',
			link: 'mailto:maximilian.werpers@googlemail.com',
			internal: false,
		},
	],
};
