import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Tab Title */}
        <title>Green Acres Realty</title>

        {/* Favicon */}
        <link rel="icon" href="/logo.svg" />
        {/* Or PNG version */}
        {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
