import React, { useEffect, useState, useReducer } from 'react'
import Navbar from '../components/navigation';
import useInterval from '../hooks/useInterval';
import Playbar from '../components/playbar';
// import Navigation from '../components/navigation';
import Layout from '../layouts/Layout';
import GlassPlayer from '../player/GlassPlayer';
import HowlerPlayer from '../player/HowlerPlayer';
// import Player from '../player/Player';
import { useWindowSize } from 'usehooks-ts'
export default function Home() {

  const [isPlayin, setIsPlaying] = useState(false)
  const { width, height } = useWindowSize()
  const [isReady, setIsReady] = useState(false)
  const [audio, setAudio] = useState({})
  const [volume, setVolume] = useState(1);
  const [randomPick, setRandomPick] = useState(Math.floor(Math.random() * 6))
  const desktopUrl = `/gallery/gallery${randomPick}.webp`
  const mobileUrl = `/mobile/rockstar.webp`
  const imageURL = width > 600 ? desktopUrl : mobileUrl

  useEffect(() => {
    setAudio(new Audio("http://102.37.221.126:8000/radio.mp3"))
    // audio.preload = "auto";
  }, [])
  let status = audio.readyState
  useEffect(() => {
    if (status >= 1) setIsReady(true)
    if (status < 1) setIsReady(false)
  }, [status])

  useInterval(() => {
    setRandomPick(Math.floor(Math.random() * 6))
  }, 60000);
  useInterval(() => {
    if (status >= 2) setIsReady(true)
  }, 2000);

  const start = () => {
    audio.play();
    // alert(audio.readyState)
    setIsPlaying(true)
  };
  const pause = () => {
    audio.pause();
    setIsPlaying(false)
  };

  const updateVolume = (e) => {
    let myvolume = e.target.value / 100
    setVolume(myvolume)
    Howler.volume(volume);
  }

  return (
    <Layout>
      <div className='h-full min-h-screen w-full  glass_player overflow-y-hidden'
        style={{
          backgroundImage: `url(${imageURL})`
        }}
      >
        <Navbar />
        <div className='flex justify-center  items-center  '>
          <GlassPlayer isPlayin={isPlayin} updateVolume={updateVolume} volume={volume * 100} isReady={isReady} />
        </div> 
      </div>
      {/* </div> */}
    </Layout>
  )
}
