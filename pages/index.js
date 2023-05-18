import React, { useEffect, useState, useReducer } from "react";
import Navbar from "../components/navigation";
import useInterval from "../hooks/useInterval";
import Playbar from "../components/playbar";
// import Navigation from '../components/navigation';
import Layout from "../layouts/Layout";
import GlassPlayer from "../player/GlassPlayer";
import HowlerPlayer from "../player/HowlerPlayer";
// import Player from '../player/Player';
import { useWindowSize } from "usehooks-ts";
import dynamic from "next/dynamic";
import ChatModal from "../components/chat/ChatModal";
import HelmetComp from "../components/helmet";
// const AblyChatComponent = dynamic(() => import('../components/chat/AblyChatComponent'), { ssr: false });
export default function Home({ data }) {
  const [isPlayin, setIsPlaying] = useState(false);
  const { width, height } = useWindowSize();
  const [isReady, setIsReady] = useState(false);
  const [audio, setAudio] = useState({});
  const [volume, setVolume] = useState(1);
  const [randomPick, setRandomPick] = useState(Math.floor(Math.random() * 6));
  const desktopUrl = `/gallery/gallery${randomPick}.webp`;
  const mobileUrl = `/mobile/rockstar.webp`;
  const imageURL = width > 600 ? desktopUrl : mobileUrl;

  useInterval(() => {
    setRandomPick(Math.floor(Math.random() * 6));
  }, 60000);
  useInterval(() => {
    if (status >= 2) setIsReady(true);
  }, 2000);

  return (
    <Layout>
      <HelmetComp data={data} />
      <div
        className="h-full min-h-screen   glass_player overflow-y-hidden"
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      >
        <Navbar />
        <div className="flex justify-center  items-center  overflow-x-hidden">
          <GlassPlayer />
        </div>
        {/* |<ChatModal/> */}
      </div>
      {/* <AblyChatComponent /> */}
    </Layout>
  );
}
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  try {
    const res = await fetch(
      `https://dashboard.xfmradio.co.ke/api/nowplaying/xfm-online`
    );
    const data = await res.json();
    // Pass data to the page via props
    console.log({ nowplaying: data.now_playing.song });
    return { props: { data: data.now_playing.song } };
  } catch (error) {
    console.error(error);
  }
  // console.log(data);
}
