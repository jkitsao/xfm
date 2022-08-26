import React, { useEffect, useState } from 'react'
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
  const [audio, setAudio] = useState({})
  const [volume, setVolume] = useState(0.5);
  const [randomPick, setRandomPick] = useState(Math.floor(Math.random() * 6))
  const desktopUrl = `/gallery/gallery${randomPick}.webp`
  const mobileUrl = `/mobile/rockstar.webp`
  const imageURL = width > 600 ? desktopUrl : mobileUrl

  useEffect(() => {
    setAudio(new Audio("https://xfmonline.xyz/listen"))
    // only run once on the first render on the client
    // alert(width)
  }, [])

  useInterval(() => {
    setRandomPick(Math.floor(Math.random() * 6))
  }, 60000);

  const start = () => {
    // setAudio(new Audio("https://xfmke.herokuapp.com/listen"))
    audio.play();
    audio.volume = volume
    setIsPlaying(true)
    // console.log({ audio })
  };
  const pause = () => {

    audio.pause();
    setIsPlaying(false)
    // alert(audio.volume)
  };

  const updateVolume = (e) => {
    let myvolume = e.target.value / 100
    setVolume(myvolume)
    audio.volume = myvolume
    // console.log({ myvolume })
  }

  return (
    <Layout>
      <div className='h-full min-h-screen w-full  glass_player overflow-y-hidden'
        style={{
          backgroundImage: `url(${imageURL})`
        }}
      >
        <Navbar />
        <div className='flex justify-center h-full items-start '>
          <GlassPlayer isPlayin={isPlayin} updateVolume={updateVolume} volume={volume * 100} />
        </div>
        <Playbar start={start} pause={pause} updateVolume={updateVolume} isPlayin={isPlayin} />
      </div>
      {/* </div> */}
    </Layout>
  )
}
