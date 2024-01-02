import type { AppProps } from "next/app";
import "../index.css";
import reportWebVitals from "../reportWebVitals";
import * as serviceWorker from "../serviceWorker";

export default function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined") {
    reportWebVitals(console.info);
    serviceWorker.register();
  }

  return <Component {...pageProps} />;
}
