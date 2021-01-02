import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import Cookies from 'universal-cookie';
import { DARK_MODE_COOKIE, DEFAULT_THEME } from 'hooks/darkMode';

type Props = {
  theme: string;
};
export default class Document extends NextDocument<Props> {
  static async getInitialProps(context: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(context);
    const cookies = new Cookies(context.req.headers.cookie);
    const theme = cookies.get(DARK_MODE_COOKIE || DEFAULT_THEME);

    return { ...initialProps, theme };
  }

  render() {
    return (
      <Html className={this.props.theme}>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#161821"
          />
          <meta name="msapplication-TileColor" content="#161821" />
          <meta name="theme-color" content="#161821"></meta>
        </Head>
        <body className="min-h-screen text-base text-primary bg-primary">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
