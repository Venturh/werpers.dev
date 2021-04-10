import { Project } from '@types';

const projects: Project[] = [
  {
    title: 'Portfolio Max Werpers',
    description:
      'Meine persönliche Website auf der ich meine Erfahrungen und Projekte teile.',
    descriptionEn:
      'My personal portfolio, where I display my current works and experiences.',
    tech: ['React', 'Next.js', 'Typescript'],
    slug: 'werpers.dev',
    date: '2020',
    githubUrl: 'https://github.com/venturh/werpers.dev',
    pageUrl: 'https://werpers.dev/',
  },
  {
    title: 'Rememoir',
    description:
      'Eine Fullstack App in der Nutzer Daten wie Links oder Notizen sicher durch Verschlüsselung gesammelt speichern können.',
    descriptionEn:
      'A fullstack App that allows Users to securly save data like links or notes.',
    tech: ['Vue', 'Express.js', 'Typescript', 'GraphQL', 'RxDB'],
    slug: 'rememoir',
    date: '2020',
    githubUrl: 'https://github.com/venturh/rememoir',
    pageUrl: 'https://intelligent-top-production.up.railway.app/',
  },
  {
    title: 'EIA Note',
    description: 'Eine hybride Todo App',
    descriptionEn: 'A hybrid todo app',
    tech: ['React', 'Ionic', 'Typescript'],
    slug: 'eianote',
    date: '2020',
    githubUrl: 'https://github.com/Venturh/EIANote',
    pageUrl: 'https://eianode.web.app/',
  },
  {
    title: 'Yee',
    description: 'Eine Desktop App zur Steuerung von Yeelight Smart Lichtern.',
    descriptionEn:
      'A desktop app for mac and windows to manage Yeelight Smart Lamps.',
    tech: ['Vue', 'Electron'],
    slug: 'yee',
    date: '2020',
    githubUrl: 'https://github.com/Venturh/Yee',
    pageUrl: '',
  },
];

export default projects;
