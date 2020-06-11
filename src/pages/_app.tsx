import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

/**
 * The root app component.
 *
 * Note that title, description and theme color values
 * must be same as in webmanifest.
 */
const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Weather: Do I need an umbrella?</title>
      <meta name="description" content="Weather forecast information" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#3367D6" />
      <link rel="apple-touch-icon" href="/images/apple-devices-icon.png" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
