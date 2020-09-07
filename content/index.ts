import { Github, LinkedIn, PlayStore, MailCheck } from "icons";
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
  Firebase,
  MariaDB,
  Figma,
} from "icons";
interface Navlink {
  name: string;
  to: string;
}

interface Social {
  name: string;
  link?: string;
  icon?: string;
}

export const navlinks: Navlink[] = [
  { name: "portfolio", to: "" },
  { name: "projects", to: "/projects" },
  { name: "about", to: "/about" },
];

export const socials: Social[] = [
  { name: "Venturh", link: "https://github.com/Venturh", icon: Github },
  {
    name: "Max Werpers",
    link: "https://www.linkedin.com/in/max-werpers-9474251a5/",
    icon: LinkedIn,
  },
  {
    name: "Venturh",
    link: "https://play.google.com/store/apps/developer?id=Venturh",
    icon: PlayStore,
  },
  { name: "Mail", link: "mailto:contact@maxwerpers.me", icon: MailCheck },
];

const frameworks = [
  { name: "React", icon: React },
  { name: "Vue", icon: Vue },
  { name: "Next", icon: Next },
  { name: "Gatsby", icon: Gatsby },
  { name: "Electron", icon: Electron },
];

const languages = [
  { name: "HTML", icon: Html },
  { name: "CSS", icon: Css },
  { name: "Javascript", icon: JavaScript },
  { name: "Java", icon: Java },
  { name: "Python", icon: Python },
  { name: "C", icon: C },
];

const databases = [
  { name: "Firebase", icon: Firebase },
  { name: "MongoDB", icon: MongoDB },
  { name: "MariaDB", icon: MariaDB },
];

const other = [
  { name: "Github", icon: Github },
  { name: "Figma", icon: Figma },
  ,
];

export const skills = [
  { type: "frameworks", skills: frameworks },
  { type: "languages", skills: languages },
  { type: "databases", skills: databases },
  { type: "other", skills: other },
];
