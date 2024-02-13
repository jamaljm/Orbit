import { Html, Head, Main, NextScript } from "next/document";
import { links } from "../consts/links";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />

        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no"
        />

        <meta name="application-name" content="The Hyperlane Network" />
        <meta
          name="keywords"
          content="Hyperlane Permissionless Interoperability Network Blockchain Interchain Messaging"
        />
        <meta
          name="description"
          content="The Permissionless Interoperability layer built for the modular future. Hyperlane is the first interoperability layer that enables you to permissionlessly connect any blockchain, out-of-the-box."
        />

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
