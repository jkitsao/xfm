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
// import { useChannel } from "../components/chat/AblyReactEffect";
// import RequestModal from "../components/request/RequestModal";
// import PayPalDonate from "../components/Donate/PayPalDonate";

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
      <div className=" w-full lg:w-3/4 lg:mx-auto relative  flex flex-grow-0 justify-center lg:mt-8  ">
        <div className="h-full">
          <motion.h3
            className="relative text-xl pb-3  bg-center font-semibold lg:text-4xl bg-no-repeat  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-95  bg-blend-darken m-3 text-center  rounded-md"
            // style={{
            //   backgroundImage: `url(${imageURL})`,
            //   backgroundSize: "cover",
            // }}
          >
            <div className="px-4 py-2">
              <section className="bg-gray-900/70 shadow-xl shadow-gray-600/70 p-3 rounded-md">
                <iframe
                  src="https://studio.xfm.co.ke/public/xfm.co.ke/embed?theme=dark"
                  // frameBorder={0}
                  style={{ width: "100%", minHeight: 150, border: 0 }}
                />
              </section>
              <section className="my-3 p-3 pb-5 bg-gray-900/60 shadow-xl rounded-lg">
                <div className="text-sm py-3 text-gray-300">
                  <span>AutoDJ History</span>
                </div>
                <iframe
                  src="https://studio.xfm.co.ke/public/xfm.co.ke/history?theme=dark"
                  // frameBorder={0}
                  style={{ width: "100%", minHeight: 250, border: 0 }}
                />
              </section>
            </div>
            {/* <ChatModal receivedMessages={receivedMessages} setMessages={setMessages} channel={channel} ably={ably}/> */}
            {/* <RequestModal /> */}
          </motion.h3>
          {/* <div className="w-full p-2 flex justify-center">
            <PayPalDonate />
          </div> */}
          {/* <div className="py-2 border-b border-gray-900">
            <ByKitsao />
          </div> */}
          {/* <section
            className="my-3 p-3 pb-5 bg-gray-900/60 shadow-xl  rounded-lg"
            id="scheduled"
          >
            <div className="text-sm py-3 text-gray-300 ">
              <span>Scheduled</span>
            </div>
            <iframe
              src="https://xfm.birdbox.studio/public/xfm/schedule?theme=dark"
              frameBorder={0}
              style={{ width: "100%", minHeight: 250, border: 0 }}
            />
          </section> */}
          {/* <div className="p-3">
            <span className="font-semibold ml-3 bg-red-600/10 p-2 text-red-500">
              View Comments
            </span>
          </div>
          <div className="p-5 bg-slate-900 rounded-md border-gray-800 text-gray-200 ">
            <div
              id="commento"
              style={{
                maxWidth: "500px",
              }}
            ></div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default GlassPlayer;
