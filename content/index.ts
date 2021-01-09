import {
  LinkedInOutlined,
  Github,
  Postgres,
  GithubOutlined,
  PlaystoreOutlined,
  MailOutlined,
  Discord,
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
  Java,
  Python,
  C,
  MongoDB,
  Figma,
} from 'icons';
export type Navlink = {
  name: string;
  to: string;
};

export type Social = {
  name: string;
  link?: string;
  icon?: string;
};
export type Career = {
  title: string;
  description: string;
  time: string;
  type: string;
  url: string;
  tech: string[];
};

export type Skill = { name: string; icon: string };

export const navlinks: Navlink[] = [
  { name: 'portfolio', to: '/' },
  { name: 'projects', to: '/projects' },
];

export const career: Career[] = [
  {
    title: 'clickbar',
    description: 'clickbar_description',
    time: 'clickbar_time',
    type: 'clickbar_type',
    url: 'https://clickbar.dev/',
    tech: ['Vue', 'Node', 'Typescript', 'Laravel', 'Symfony', 'Php'],
  },
  {
    title: 'Hochschule Rhein Main',
    description: 'hsrm_description',
    time: 'hsrm_time',
    type: 'hsrm_type',
    url: 'https://www.hs-rm.de/de/',
    tech: ['Javascript', 'React', 'Java', 'Python', 'Scrum', 'Database'],
  },
];

export const socials: Social[] = [
  { name: 'Venturh', link: 'https://github.com/Venturh', icon: GithubOutlined },
  {
    name: 'Max Werpers',
    link: 'https://www.linkedin.com/in/max-werpers-9474251a5/',
    icon: LinkedInOutlined,
  },
  {
    name: 'My Discord Server',
    link: 'https://discord.gg/pmsD8Qqvn9',
    icon: Discord,
  },
  {
    name: 'Venturh',
    link: 'https://play.google.com/store/apps/developer?id=Venturh',
    icon: PlaystoreOutlined,
  },
  { name: 'Mail', link: 'mailto:contact@maxwerpers.me', icon: MailOutlined },
];

const frameworks = [
  { name: 'React', icon: React },
  { name: 'Vue', icon: Vue },
  { name: 'Next', icon: Next },
  { name: 'Gatsby', icon: Gatsby },
  { name: 'Electron', icon: Electron },
];

const languages = [
  { name: 'HTML', icon: Html },
  { name: 'CSS', icon: Css },
  { name: 'Javascript', icon: JavaScript },
  { name: 'Java', icon: Java },
  { name: 'Python', icon: Python },
  { name: 'C', icon: C },
];

const other = [
  { name: 'Github', icon: Github },
  { name: 'Figma', icon: Figma },
  { name: 'MongoDB', icon: MongoDB },
  { name: 'Postgres', icon: Postgres },
  ,
];

export const skills = [
  { type: 'frameworks', skills: frameworks },
  { type: 'languages', skills: languages },
  { type: 'others', skills: other },
];
