import React from "react";
import useTranslation from "next-translate/useTranslation";
import Layout from "components/Layout";

const Home: React.FC<any> = (data) => {
  const { t, lang } = useTranslation();

  return <Layout>Moin</Layout>;
};

export default Home;
