import '../styles/globals.css'
import '../styles/Home.css'

import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import Helmet from '../components/helmet';
export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Helmet title="xfm online | Home of great music" />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'dark',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}


