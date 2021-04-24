import { Navlink, Social } from '@types';
import { Check, MailOutlined } from 'icons';

export { default as projects } from './projects';
export { default as career } from './career';
export { default as skills } from './skills';

export const navlinks: Navlink[] = [
  { name: 'portfolio', to: '/' },
  { name: 'projects', to: '/projects' },
  { name: 'about', to: '/about' },
];

export const designLinks: Navlink[] = [
  { name: 'design', to: '/design' },
  { name: 'colors', to: '/design/colors' },
  { name: 'labels', to: '/design/labels' },
  { name: 'buttons', to: '/design/buttons' },
  { name: 'icons', to: '/design/icons' },
];

export const timeline = {
  2021: [
    {
      id: 1,
      keyWord: 'rememoir',
      date: 'Apr 02',
      icon: Check,
      hasSub: false,
    },
    {
      id: 2,
      keyWord: 'workingStudent',
      date: 'Mar 01',
      icon: Check,
      hasSub: true,
    },
  ],
  2020: [
    {
      id: 1,
      keyWord: 'internship',
      date: 'Oct 01',
      icon: Check,
      hasSub: true,
    },
    {
      id: 2,
      keyWord: 'vue',
      date: 'Feb 09',
      icon: Check,
      hasSub: true,
    },
  ],
  2019: [
    {
      id: 1,
      keyWord: 'firstWeb',
      date: 'Nov 10',
      icon: Check,
      hasSub: true,
    },
    {
      id: 2,
      keyWord: 'todo',
      date: 'Sep 22',
      icon: Check,
      hasSub: false,
    },
  ],
  2018: [
    {
      id: 1,
      keyWord: 'todo',
      date: 'Sep 20',
      icon: Check,
      hasSub: false,
    },
    {
      id: 2,
      keyWord: 'todo',
      date: 'Sep 22',
      icon: Check,
      hasSub: false,
    },
  ],
  2017: [
    {
      id: 1,
      keyWord: 'studyStart',
      date: 'Oct 01',
      icon: Check,
      hasSub: false,
    },
    {
      id: 2,
      keyWord: 'firstProgram',
      date: 'Dec 07',
      icon: Check,
      hasSub: false,
    },
  ],
};

export const footer = {
  pages: [
    { name: 'portfolio', link: '/', internal: true },
    { name: 'projects', link: '/projects', internal: true },
    { name: 'about', link: '/about', internal: true },
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
