import App from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyles, theme } from "styles";

import "fontsource-open-sans/300.css";
import "fontsource-open-sans/700.css";
import "fontsource-archivo";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
