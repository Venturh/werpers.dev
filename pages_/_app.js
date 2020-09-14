import { ThemeProvider } from "styled-components";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";
import { GlobalStyles, theme } from "styles";

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
