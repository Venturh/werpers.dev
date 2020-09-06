import Layout from "components/Layout";
import Start from "./Start";

const Portfolio: React.FC<any> = ({ projects }) => {
  return (
    <Layout>
      <Start projects={projects} />
    </Layout>
  );
};

export default Portfolio;
