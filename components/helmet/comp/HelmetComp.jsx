import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useQuery } from "@tanstack/react-query";
import { nowPlaying } from "../../../utils/api/myapi";
function HelmetComp({ data }) {
  // Rock out with the best online rock station!
  // const {data}=useQuery({ queryKey: ['nowPlaying'], nowPlaying })
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   // alert(data)
  //   (async function () {
  //     // await setData(nowPlaying)
  //     try {
  //       let data = await nowPlaying();
  //       setData(data.data.now_playing);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //     //data.artist,data.title,data.art
  //     // alert(JSON.stringify(data.data.now_playing));
  //   })();
  // }, []);
  const title = "Rock and alternative music 24/7";
  const desc = `Playing you the best  mix of alternative, indie, soft and Punk Rock`;
  //    const dynamic_og_image= `https://xfmradio.co.ke/api/og?title=${data?.text}&artist=${data?.artist}&art=${data?.art}`
  return (
    <Head>
      {/* Primary Meta Tags */}
      {/* <title>Now Playing | {data?.text}</title> */}
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <meta name="title" content={title && title} />
      <meta name="description" content={desc} />
      <meta property="og:image" content={data?.art} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://xfmradio.co.ke/" />
      <meta property="og:title" content={title && title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={data?.art} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://xfmradio.co.ke/" />
      <meta property="twitter:title" content={title && title} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content={data?.art} />
    </Head>
  );
}

export default HelmetComp;
