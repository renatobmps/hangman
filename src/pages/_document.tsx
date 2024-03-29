import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          {/* <!-- Google tag (gtag.js) --> */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-S9QCK0S5QW"
          />
          <script>
            {/* 
            window.dataLayer = window.dataLayer || [];
            function gtag() { window.dataLayer.push(arguments); }
            gtag('js', new Date());

            gtag('config', 'G-S9QCK0S5QW');
          */}
          </script>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Forca</title>
          <link rel="icon" href="/icon.svg" />
          <link rel="shortcut" href="/icon.svg" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#009688" />
          <meta
            name="description"
            content="Um jogo da forca simples feito em React.js"
          />
          <link rel="apple-touch-icon" href="/icon.svg" />
          <meta name="title" content="Forca" />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://renatobmps.github.io/forca/"
          />
          <meta property="og:title" content="Forca" />
          <meta
            property="og:description"
            content="Um jogo da forca simples feito em React.js"
          />
          <meta property="og:image" content="/icon.svg" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://renatobmps.github.io/forca/"
          />
          <meta property="twitter:title" content="Forca" />
          <meta
            property="twitter:description"
            content="Um jogo da forca simples feito em React.js"
          />
          <meta property="twitter:image" content="/icon.svg" />
        </Head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
