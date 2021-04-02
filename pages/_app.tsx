import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';
import 'assets/index.css';
import useTranslation from 'next-translate/useTranslation';

const MyApp = ({ Component, pageProps }) => {
  const { lang } = useTranslation();

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <DefaultSeo {...SEO(lang)} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
