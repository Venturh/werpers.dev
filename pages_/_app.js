import { ThemeProvider } from "styled-components";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";
import { GlobalStyles, theme } from "styles";
import { Head } from "next/document";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
