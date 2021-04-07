import {
  LinkedInOutlined,
  Github,
  Postgres,
  GithubOutlined,
  PlaystoreOutlined,
  MailOutlined,
  Discord,
  Spring,
  Symfony,
  Laravel,
  Express,
  MySql,
  Graphql,
  Tailwindcss,
} from 'icons';
import {
  React,
  Vue,
  Next,
  Gatsby,
  Electron,
  Html,
  Css,
  JavaScript,
  MongoDB,
  Nuxt,
} from 'icons';
export type Navlink = {
  name: string;
  to: string;
};

export type Social = {
  name: string;
  link?: string;
  icon?: string;
  internal?: boolean;
};
export type Career = {
  title: string;
  description: string;
  time: string;
  type: string;
  url: string;
  tech: string[];
  logo: string;
};

export type Skill = { name: string; icon: string; subSkills?: Skill[] };

export const navlinks: Navlink[] = [
  { name: 'portfolio', to: '/' },
  { name: 'projects', to: '/projects' },
];

export const career: Career[] = [
  {
    title: 'clickbar.',
    description: 'clickbar_description',
    time: 'clickbar_time',
    type: 'clickbar_type',
    url: 'https://clickbar.dev/',
    tech: ['Vue', 'Node', 'Typescript', 'Laravel', 'Symfony', 'Php'],
    logo: 'clickbar.jpg',
  },
  {
    title: 'clickbar.',
    description: 'clickbar_internship_description',
    time: 'clickbar_internship_time',
    type: 'clickbar_internship_type',
    url: 'https://clickbar.dev/',
    tech: ['Vue', 'Node', 'Typescript', 'Laravel', 'Symfony', 'Php'],
    logo: 'clickbar.jpg',
  },
  {
    title: 'Hochschule Rhein Main',
    description: 'hsrm_description',
    time: 'hsrm_time',
    type: 'hsrm_type',
    url: 'https://www.hs-rm.de/de/',
    tech: ['Javascript', 'React', 'Java', 'Python', 'Scrum', 'Database'],
    logo: 'hsrm.jpg',
  },
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
  // {
  //   name: 'Playstore',
  //   link: 'https://play.google.com/store/apps/developer?id=Venturh',
  //   icon: PlaystoreOutlined,
  // },
  { name: 'Email', link: 'mailto:contact@maxwerpers.me', icon: MailOutlined },
];

const frontend: Skill[] = [
  {
    name: 'React',
    icon: React,
    subSkills: [
      { name: 'Next', icon: Next },
      { name: 'Gatsby', icon: Gatsby },
      { name: 'Html', icon: Html },
      { name: 'Css', icon: Css },
      { name: 'Tailwindcss', icon: Tailwindcss },
      { name: 'Electron', icon: Electron },
    ],
  },
  {
    name: 'Vue',
    icon: Vue,
    subSkills: [
      { name: 'Nuxt', icon: Nuxt },
      { name: 'Html', icon: Html },
      { name: 'Css', icon: Css },
      { name: 'Tailwindcss', icon: Tailwindcss },
      { name: 'Electron', icon: Electron },
    ],
  },
];

const backend: Skill[] = [
  {
    name: 'Express',
    icon: Express,
    subSkills: [
      { icon: Graphql, name: 'Graphql' },
      { icon: MongoDB, name: 'MongoDB' },
      { icon: Postgres, name: 'Postgres' },
      { icon: MySql, name: 'MySql' },
    ],
  },
  {
    name: 'Laravel',
    icon: Laravel,
    subSkills: [
      { icon: MongoDB, name: 'MongoDB' },
      { icon: Postgres, name: 'Postgres' },
      { icon: MySql, name: 'MySql' },
    ],
  },
  {
    name: 'Symfony',
    icon: Symfony,
    subSkills: [
      { icon: MongoDB, name: 'MongoDB' },
      { icon: Postgres, name: 'Postgres' },
      { icon: MySql, name: 'MySql' },
    ],
  },
  { name: 'Spring', icon: Spring },
];

export const skills = [
  { type: 'frontend', skills: frontend },
  { type: 'backend', skills: backend },
];
