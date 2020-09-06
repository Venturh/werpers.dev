import { fetchAPI } from "./prismic-configuration";

export async function getAllProjects(lang) {
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
}
