import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';
import { useEffect } from 'react';
import 'styles/index.css';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    async function incrViews() {
      await fetch(
        `https://api.countapi.xyz/hit/${process.env.NEXT_PUBLIC_VIEWCOUNT_KEY}/viewcount`
      );
    }
    incrViews();
  }, []);
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
