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

export type Project = {
  title: string;
  description?: string;
  descriptionEn?: string;
  tech: Array<string>;
  slug: string;
  type: 'Frontend' | 'Backend' | 'Fullstack';
  year: string;
  githubUrl?: string;
  pageUrl?: string;
};

export type Skill = { name: string; icon: string; subSkills?: Skill[] };

export type BlogFrontMatter = {
  title: string;
  summary: string;
  categories: Array<string>;
  slug: string;
  date: string;
  readingTime: string;
  image?: string;
};
