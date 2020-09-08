import { fetchAPI } from "./prismic-configuration";

interface Node {
  node: {
    name: string;
    gitname: string;
    headline: string;
    icon: string;
    slug: string;
    cover: object;
    year: string;
    progress: string;
    url: string;
    giturl: string;
    body?: [{ fields: [{ type: string; icon: string }] }];
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
            gitname
            headline
            icon
            slug
            cover
            year
            progress
            url
            giturl
            body {
              ... on  ProjectBodyBuildwith{
                  fields {
                    type
                    icon
                  }
                }
              }
          }
        }
      }
    }
  `,
    {}
  );
  return projects.allProjects.edges;
};

export const getProjectBySlug = async (lang: string, slug: string) => {
  const locale = `${lang}-${lang === "de" ? "de" : "gb"}`;
  const projects = await fetchAPI(
    `
    {
      allProjects(lang: "${locale}", where : {slug: "${slug}"} ) {
        edges{
          node {
            name
            gitname
            headline
            icon
            slug
            cover
            year
            progress
            url
            giturl
            body {
              ... on  ProjectBodyBuildwith{
                  fields {
                    type
                    icon
                  }
                }
              }
          }
        }
      }
    }
  `,
    {}
  );
  return projects.allProjects.edges[0].node;
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
