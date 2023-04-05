import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </>
  );
}
