import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';
import 'styles/index.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
