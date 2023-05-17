import React, { useState, useEffect } from "react";
import Image from "next/image";
import useInterval from "../hooks/useInterval";
import { Bars, RotatingLines } from "react-loader-spinner";
import axios from "axios";
import { motion } from "framer-motion";
import HelmetComp from "../components/helmet";
import ByKitsao from "../components/ByKitsao/ByKitsao";
import ShareComp from "../components/share";
import PlayWith from "../components/playwith/PlayWith";
import ChatModal from "../components/chat/ChatModal";
// import Helmet from '../components/helmet/comp/HelmetComp'
import { useChannel } from "../components/chat/AblyReactEffect";
import RequestModal from "../components/request/RequestModal";

function GlassPlayer({ isPlayin, updateVolume, volume, isReady }) {
  const [nowPlaying, setNowPlaying] = useState("");
  const [receivedMessages, setMessages] = useState([]);
  //   const [channel, ably] = useChannel("chat-demo", (message) => {
  //     const history = receivedMessages.slice(-199);
  //     setMessages([...history, message]);
  //   });

  let randomPickGif = "waves";
  const imageURL = `/gifs/${randomPickGif}.gif`;
  return (
    <>
      <HelmetComp title={nowPlaying} />
      <div className=" w-full lg:w-3/4 lg:mx-auto relative  flex justify-center lg:mt-8  ">
        <div className="h-full">
          <motion.h3
            className="relative text-xl pb-3  bg-center font-semibold lg:text-4xl bg-no-repeat  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-95  bg-blend-darken m-3 text-center  rounded-md"
            // style={{
            //   backgroundImage: `url(${imageURL})`,
            //   backgroundSize: "cover",
            // }}
          >
            <div className="px-4 py-2">
              <section className="bg-gray-900/90 shadow-xl shadow-gray-6+00/70 p-3 rounded-md">
                <iframe
                  src="https://dashboard.xfmradio.co.ke/public/xfm-online/embed?theme=dark"
                  frameBorder={0}
                  style={{ width: "100%", minHeight: 150, border: 0 }}
                />
              </section>
              <section className="my-3 p-3 pb-5 bg-gray-900/60 shadow-xl  rounded-lg">
                <div className="text-sm py-3 text-gray-300 ">
                  <span>AutoDJ History</span>
                </div>
                <iframe
                  src="https://dashboard.xfmradio.co.ke/public/xfm-online/history?theme=dark"
                  frameBorder={0}
                  style={{ width: "100%", minHeight: 250, border: 0 }}
                />
              </section>
            </div>
            {/* <ChatModal receivedMessages={receivedMessages} setMessages={setMessages} channel={channel} ably={ably}/> */}
            {/* <RequestModal /> */}
          </motion.h3>

          <div className="py-2 border-t border-b border-gray-900">
            <ByKitsao />
          </div>
          <div className="p-3">
            <span className="font-semibold ml-3 bg-red-600/10 p-2 text-red-500">
              View Comments
            </span>
          </div>
          <div
            className="p-5 bg-slate-900 rounded-md border-gray-800 text-gray-200 h-96"
            style={{
              maxWidth: "100%",
            }}
          >
            <div id="commento"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GlassPlayer;
