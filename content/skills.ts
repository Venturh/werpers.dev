import { Skill } from '@types';
import {
  Next,
  Gatsby,
  Html,
  Css,
  Tailwindcss,
  Electron,
  Vue,
  Nuxt,
  Express,
  Graphql,
  MongoDB,
  Postgres,
  MySql,
  Laravel,
  ReactIcon,
  Symfony,
  Spring,
} from 'icons';

const frontend: Skill[] = [
  {
    name: 'React',
    icon: ReactIcon,
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
];

const skills = [
  { type: 'frontend', skills: frontend },
  { type: 'backend', skills: backend },
];

export default skills;
