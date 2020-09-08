import React from "react";
import { fetchAPI } from "lib/prismic/api/prismic-configuration";
import { Layout } from "components";

interface Project {
  name: string;
  gitname: string;
  cover: string;
  year: string;
  headline: string;
  slug: string;
  url: string;
  giturl: string;
}

type ProjectProps = {
  project: Project;
};

function Project({ project }: ProjectProps) {
  return (
    <Layout>
      <h1>{project.name}</h1>
      <p>{project.headline}</p>
    </Layout>
  );
}

export async function getStaticProps({ params, lang }) {
  const { slug } = params;
  const locale = `${lang}-${lang === "de" ? "de" : "gb"}`;

  const { allProjects } = await fetchAPI(
    `{
      allProjects(lang: "${locale}", where : {slug: "${slug}"} ) {
        edges {
          node {
            name
            headline
            slug
            gitname
            headline
            cover
            year
            url
            giturl
          }
        }
      }
    }
`,
    {}
  );

  return {
    props: { project: allProjects.edges[0].node },
  };
}

export async function getStaticPaths({ lang }) {
  const locale = `${lang}-${lang === "de" ? "de" : "gb"}`;
  const {
    allProjects: { edges },
  } = await fetchAPI(
    `{
      allProjects(lang: "${locale}" ) {
        edges {
          node {
            name
            headline
            slug
            gitname
            headline
            cover
            year
            url
            giturl
          }
        }
      }
    }
`,
    {}
  );

  return {
    paths: edges.map(({ node }) => `/${lang}/projects/${node.slug}`) || [],
    fallback: false,
  };
}

export default Project;
