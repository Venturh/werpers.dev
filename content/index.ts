import { Github, LinkedIn, PlayStore, MailCheck, Postgres } from 'icons';
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
interface Navlink {
  name: string;
  to: string;
}

interface Social {
  name: string;
  link?: string;
  icon?: string;
}

export type Skill = { name: string; icon: string };

export const navlinks: Navlink[] = [
  { name: 'portfolio', to: '/' },
  { name: 'projects', to: '/projects' },
];

export const socials: Social[] = [
  { name: 'Venturh', link: 'https://github.com/Venturh', icon: Github },
  {
    name: 'Max Werpers',
    link: 'https://www.linkedin.com/in/max-werpers-9474251a5/',
    icon: LinkedIn,
  },
  {
    name: 'Venturh',
    link: 'https://play.google.com/store/apps/developer?id=Venturh',
    icon: PlayStore,
  },
  { name: 'Mail', link: 'mailto:contact@maxwerpers.me', icon: MailCheck },
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
