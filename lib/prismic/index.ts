import { fetchAPI } from './prismic-configuration';

export interface Project {
  name: string;
  gitname: string;
  headline: string;
  icon: string;
  slug: string;
  cover: { url: string };
  year: string;
  progress: string;
  url: string;
  giturl: string;
  buildWith?: [{ type: string; icon: string }];
}

export interface Careers {
  company: string;
  url: string;
  description: string;
  end_time: string;
  start_time: string;
  type: string;
  used?: [{ used: string }];
  icon?: string;
}

export interface Ressource {
  node: { name: string; url: string; cover: { url: string } };
}

export interface Ressources {
  ressources: Ressource[];
}

export const getAllProjects = async (lang: string) => {
  const locale = `${lang}-${lang === 'de' ? 'de' : 'gb'}`;
  const data = await fetchAPI(
    `
    {
      allProjects(lang: "${locale}", sortBy: order_ASC) {
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
  return data.allProjects.edges.map(
    ({
      node: {
        name,
        gitname,
        headline,
        icon,
        slug,
        cover,
        year,
        progress,
        url,
        giturl,
        body,
      },
    }) => ({
      name,
      gitname,
      headline,
      icon,
      slug,
      cover,
      year,
      progress,
      url,
      giturl,
      buildWith: body[0].fields,
    })
  );
};

export const getProjectBySlug = async (lang: string, slug: string) => {
  const locale = `${lang}-${lang === 'de' ? 'de' : 'gb'}`;
  const { allProjects } = await fetchAPI(
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

  const projects = allProjects.edges.map(
    ({
      node: {
        name,
        gitname,
        headline,
        icon,
        slug,
        cover,
        year,
        progress,
        url,
        giturl,
        body,
      },
    }) => ({
      name,
      gitname,
      headline,
      icon,
      slug,
      cover,
      year,
      progress,
      url,
      giturl,
      buildWith: body[0].fields,
    })
  );

  return projects[0];
};

export const getAllExperiences = async (lang: string) => {
  const locale = `${lang}-${lang === 'de' ? 'de' : 'gb'}`;
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

export const getAllRessources = async (lang: string) => {
  const locale = `${lang}-${lang === 'de' ? 'de' : 'gb'}`;
  const { allRessources } = await fetchAPI(
    `
    {
      allRessources(lang: "${locale}") {
        edges{
          node {
            name
            url
            cover
          }
        }
      }
    }
  `,
    {}
  );
  return allRessources.edges;
};

export const getAllCareers = async (lang: string) => {
  const locale = `${lang}-${lang === 'de' ? 'de' : 'gb'}`;
  const { allCareers } = await fetchAPI(
    `
    {
      allCareers(lang: "${locale}", sortBy: start_time_DESC) {
        edges {
          node {
            company
            url
            start_time
            end_time
            type
            description
            icon
            body {
              ... on CareerBodyUsed {
                fields {
                  used
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
  return allCareers.edges.map(
    ({
      node: {
        company,
        url,
        description,
        end_time,
        start_time,
        type,
        body,
        icon,
      },
    }) => ({
      company,
      url,
      description,
      end_time,
      start_time,
      type,
      icon,
      used: body[0].fields,
    })
  );
};
