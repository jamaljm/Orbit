import { Html, Head, Main, NextScript } from "next/document";
import { links } from "../consts/links";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2362C1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#2362C1" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="application-name" content="The Hyperlane Network" />
        <meta
          name="keywords"
          content="Hyperlane Permissionless Interoperability Network Blockchain Interchain Messaging"
        />
        <meta
          name="description"
          content="The Permissionless Interoperability layer built for the modular future. Hyperlane is the first interoperability layer that enables you to permissionlessly connect any blockchain, out-of-the-box."
        />

        <meta name="HandheldFriendly" content="true" />
        <meta
          name="apple-mobile-web-app-title"
          content="The Hyperlane Network"
        />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:url" content={links.baseUrl} />
        <meta property="og:title" content="The Hyperlane Network" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={links.baseUrl + "/logo.png"} />
        <meta
          property="og:description"
          content="The Permissionless Interoperability layer built for the modular future. Hyperlane is the first interoperability layer that enables you to permissionlessly connect any blockchain, out-of-the-box."
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&family=Poppins:wght@200;400;500;600;800&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
