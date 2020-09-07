import { fetchAPI } from "./prismic-configuration";

interface Node {
  node: {
    name: string;
    headline: string;
    icon: string;
    slug: string;
  };
}

export interface Project {
  projects: Node[];
}

export const getAllProjects = async (lang: string) => {
  const locale = `${lang}-${lang === "de" ? "de" : "gb"}`;
  const projects = await fetchAPI(
    `
    {
      allProjects(lang: "${locale}") {
        edges{
          node {
            name
            headline
            slug
            icon
          }
        }
      }
    }
  `,
    {}
  );
  return projects.allProjects.edges;
};

export const getAllExperiences = async (lang: string) => {
  const locale = `${lang}-${lang === "de" ? "de" : "gb"}`;
  const experiences = await fetchAPI(
    `
    {
      allExperiences(lang: "${locale}", sortBy:  nr_DESC) {
        edges{
          node {
        name
        type
        place
        time
          }
        }
      }
    }
  `,
    {}
  );
  return experiences.allExperiences.edges;
};
