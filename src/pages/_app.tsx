import type { AppProps } from "next/app";
import "../index.css";
import reportWebVitals from "../reportWebVitals";
import * as serviceWorker from "../serviceWorker";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "styled-components";
import theme from "@/ui/shared/theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      (
        window as unknown as Window & { dataLayer: Array<NonNullable<unknown>> }
      ).dataLayer.push({
        event: "page_view",
        page_path: url,
        page_title: document.title,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  if (typeof window !== "undefined") {
    reportWebVitals(console.info);
    serviceWorker.register();
  }

  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo
        {...{
          title: "Forca",
          description:
            "Um jogo da forca simples e muito divertido. Venha desafiar os outros jogadores e mostre que você é o mestre das palavras",
          canonical: "https://forca-wheat.vercel.app/",
          openGraph: {
            url: "https://forca-wheat.vercel.app/",
            type: "website",
            siteName: "Forca",
            description:
              "Um jogo da forca simples e muito divertido. Venha desafiar os outros jogadores e mostre que você é o mestre das palavras",
            images: [
              {
                url: "https://opengraph.b-cdn.net/production/images/6bf30d5f-d33f-42a9-9b5c-55ae0499d153.jpg?token=8iOwcgXzkhwAi5bpG0NSvUuNxFLKehvylrG8C0CZj8M&height=402&width=768&expires=33261546392",
                width: 1200,
                height: 630,
                alt: "Jogo da Forca",
                type: "image",
                secureUrl: "https://forca-wheat.vercel.app/og_bg.jpg",
              },
            ],
            locale: "pt_BR",
          },
          twitter: {
            cardType: "summary_large_image",
            site: "https://forca-wheat.vercel.app/",
            handle: "@forca-renatobmps",
          },
          themeColor: "#009688",
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
