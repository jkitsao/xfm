import "../styles/globals.css";
import "../styles/Home.css";

import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { MantineProvider } from "@mantine/core";
import Helmet from "../components/helmet";
import { GoogleAnalytics } from "nextjs-google-analytics";
import React, { useEffect, useState } from "react";
import { nowPlaying } from "../utils/api/myapi";
export default function App(props) {
  const { Component, pageProps } = props;
  // const queryClient = useQueryClient();
  const [data, setData] = useState([]);
  useEffect(() => {
    // alert(data)
    (async function () {
      // await setData(nowPlaying)
      let data = await nowPlaying();
      setData(data.data.now_playing);
      //data.artist,data.title,data.art
      alert(JSON.stringify(data.data.now_playing));
    })();
  }, []);
  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      <Helmet title="xfm online | Home of great music" data={data} />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
        }}
      >
        <GoogleAnalytics trackPageViews />
        <Component {...pageProps} />
      </MantineProvider>
      {/* </QueryClientProvider> */}
      <Script src="https://forum.xfmradio.co.ke/js/commento.js" />
    </>
  );
}
