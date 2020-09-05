import Prismic from "prismic-javascript";
import { fetchAPI } from "../prismic-configuration";
import useTranslation from "next-translate/useTranslation";
import Layout from "components/Layout";
import Link from "next-translate/Link";

interface Project {
  node: {
    name: string;
    headline: string;
    slug: string;
  };
}

type ProjectProps = {
  projects: Project[];
};

const Projects: React.FC<any> = ({ projects }: ProjectProps) => {
  const { t, lang } = useTranslation();

  return (
    <Layout>
      <div>
        {projects.map(({ node: project }) => (
          <Link
            key={project.slug}
            href="/projects/[id]"
            as={`/projects/${project.slug}`}
          >
            <a>{project.name}</a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Projects;

export async function getStaticProps({ lang }) {
  const locale = `${lang}-${lang === "de" ? "de" : "gb"}`;
  const projects = await fetchAPI(
    `
    query {
      allProjects(lang: "${locale}") {
        edges{
          node {
            name
            headline
            slug
          }
        }
      }
    }

  `,
    {}
  );

  return {
    props: {
      projects: projects.allProjects.edges,
    },
  };
}
