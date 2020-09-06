import Portfolio from "../sections/portfolio";
import { getAllProjects } from "pages_/api";

const Home = ({ projects }) => <Portfolio projects={projects} />;

export default Home;

export async function getStaticProps({ lang }) {
  const projects = await getAllProjects(lang);
  return {
    props: {
      projects,
    },
  };
}
