import { Navlink, Social } from '@types';
import { MailOutlined } from 'icons';

export { default as projects } from './projects';
export { default as career } from './career';
export { default as skills } from './skills';

export const navlinks: Navlink[] = [
  { name: 'portfolio', to: '/' },
  { name: 'projects', to: '/projects' },
];

export const designLinks: Navlink[] = [
  { name: 'design', to: '/design' },
  { name: 'colors', to: '/design/colors' },
  { name: 'buttons', to: '/design/buttons' },
  { name: 'labels', to: '/design/labels' },
];

export const footer = {
  pages: [
    { name: 'portfolio', link: '/', internal: true },
    { name: 'projects', link: '/projects', internal: true },
    { name: 'design', link: '/design', internal: true },
  ],
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
    { name: 'Email', link: 'mailto:contact@maxwerpers.me', internal: false },
  ],
};
