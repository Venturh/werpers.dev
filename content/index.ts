import { Navlink } from '@types';

export { default as projects } from './projects';
export { default as career } from './career';
export { default as skills } from './skills';
export { default as timeline } from './timeline';

export const navlinks: Navlink[] = [
  { name: 'portfolio', to: '/' },
  { name: 'projects', to: '/projects' },
  { name: 'about', to: '/about' },
  //{ name: 'blog', to: '/blog' },
];

export const designLinks: Navlink[] = [
  { name: 'design', to: '/design' },
  { name: 'colors', to: '/design/colors' },
  { name: 'labels', to: '/design/labels' },
  { name: 'buttons', to: '/design/buttons' },
  { name: 'icons', to: '/design/icons' },
];

export const footer = {
  pages: [
    { name: 'portfolio', link: '/', internal: true },
    { name: 'projects', link: '/projects', internal: true },
    { name: 'about', link: '/about', internal: true },
    { name: 'blog', link: '/blog', internal: true },
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
    {
      name: 'Email',
      link: 'mailto:maximilian.werpers@googlemail.com',
      internal: false,
    },
  ],
};
