import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Tab Title */}
        <title>Green Acres Realty</title>

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/logo.png" />

        {/* ✅ Google Search Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Green Acres Realty",
              "url": "https://greenacresrealty.co.in",
              "logo": "https://greenacresrealty.co.in/logo.png",
            }),
          }}
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
