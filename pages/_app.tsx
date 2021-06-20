import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';
import 'assets/index.css';

const App = ({ Component, pageProps }) => {
  const { lang } = useTranslation('portfolio');

  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...SEO(lang)} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
