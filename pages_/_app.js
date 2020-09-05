import App from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyles, theme } from "styles";

import "fontsource-open-sans";
import "fontsource-archivo";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
