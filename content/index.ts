import { Navlink, Social } from '@types';
import { LinkedInOutlined, GithubOutlined, MailOutlined, Discord } from 'icons';

export { default as projects } from './projects';
export { default as career } from './career';
export { default as skills } from './skills';

export const navlinks: Navlink[] = [
  { name: 'portfolio', to: '/' },
  { name: 'projects', to: '/projects' },
];

export const socials: Social[] = [
  { name: 'Portfolio', link: '/', internal: true },
  { name: 'Github', link: 'https://github.com/Venturh', icon: GithubOutlined },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/max-werpers-9474251a5/',
    icon: LinkedInOutlined,
  },
  { name: 'Projects', link: '/projects', internal: true },
  {
    name: 'Discord',
    link: 'https://discord.gg/pmsD8Qqvn9',
    icon: Discord,
  },
  { name: 'Email', link: 'mailto:contact@maxwerpers.me', icon: MailOutlined },
];
