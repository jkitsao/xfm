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
import PayPalDonate from "../components/Donate/PayPalDonate";
import EmailBanner from "../components/email/EmailBanner";
// const AblyChatComponent = dynamic(() => import('../components/chat/AblyChatComponent'), { ssr: false });
export default function Home({ data }) {
  const { width, height } = useWindowSize();
  const [isReady, setIsReady] = useState(false);
  const [randomPick, setRandomPick] = useState(Math.floor(Math.random() * 6));
  const desktopUrl = `/gallery/gallery${randomPick}.webp`;
  const mobileUrl = `https://images.unsplash.com/photo-1629276299414-a6f6d6403fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`;
  const imageURL = width > 600 ? desktopUrl : mobileUrl;
  const [showBanner, setShowBanner] = useState(true);
  //check for subscribed state on newsletter
  useEffect(() => {
    let sub = localStorage.getItem("subscribed");
    if (sub) return setShowBanner(false);
  }, []);
  useInterval(() => {
    setRandomPick(data.art);
  }, 60000);
  useInterval(() => {
    if (status >= 2) setIsReady(true);
  }, 2000);

  return (
    <Layout>
      <HelmetComp data={data} />
      <div
        className="h-full min-h-screen glass_player overflow-y-hidden overflow-x-hidden"
        style={{
          backgroundImage: `url(${data?.art})`,
          // backgroun-----dImage: `url(${imageURL})`,
        }}
      >
        <Navbar />
        <div className="flex justify-center items-center pt-8 md:pt-2  overflow-x-hidden ">
          <GlassPlayer />
        </div>
        {/* <div className=" whitespace-pre-wrap p-5 bg-black/80">
          <div></div>
          {data?.lyrics}
        </div> */}
        {/* {JSON.stringify()} */}
        {/* |<ChatModal /> */}
        {/* <PayPalDonate /> */}
      </div>
      {/* <AblyChatComponent /> */}
      {showBanner && <EmailBanner />}
    </Layout>
  );
}
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  try {
    const res = await fetch(`https://studio.xfm.co.ke/api/nowplaying/xfm`);
    const data = await res.json();
    // Pass data to the page via props
    console.log({ nowplaying: data[0].now_playing.song });
    return { props: { data: data[0].now_playing.song } };
  } catch (error) {
    console.error(error);
    return error;
  }
  // console.log(data);
}
