/* eslint-disable @next/next/no-sync-scripts */
import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=1.0" />
          <script src="https://unpkg.com/webp-hero@0.0.1/dist-cjs/polyfills.js" />
          <script src="https://unpkg.com/webp-hero@0.0.1/dist-cjs/webp-hero.bundle.js" />
          <link
            rel="preload"
            href="/fonts/Saira-Bold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Saira-Black.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Saira-BlackItalic.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Saira-Light.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Saira-Medium.ttf"
            as="font"
            crossOrigin=""
          />

          {this.helmetHeadComponents}
        </Head>

        <body {...this.helmetBodyAttrComponents}>
          <script>
            var webpMachine = new webpHero.WebpMachine()
            webpMachine.polyfillDocument()
          </script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
