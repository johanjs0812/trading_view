import React from 'react';
import Head from 'next/head';
import Layout from '../app/layout/layout';
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Trading View App</title>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
