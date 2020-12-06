import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';
import 'styles/index.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
