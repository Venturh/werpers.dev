import { Github, LinkedIn, PlayStore, MailCheck } from "icons";
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
  { name: "nav1", to: "" },
  { name: "nav2", to: "/projects" },
  { name: "nav3", to: "/about" },
];

export const socials: Social[] = [
  { name: "Github", link: "https://github.com/Venturh", icon: Github },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/max-werpers-9474251a5/",
    icon: LinkedIn,
  },
  {
    name: "Playstore",
    link: "https://play.google.com/store/apps/developer?id=Venturh",
    icon: PlayStore,
  },
  { name: "Mail", link: "mailto:contact@maxwerpers.me", icon: MailCheck },
];
