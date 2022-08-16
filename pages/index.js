import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navigation';
import Playbar from '../components/playbar';
// import Navigation from '../components/navigation';
import Layout from '../layouts/Layout';
import GlassPlayer from '../player/GlassPlayer';
import HowlerPlayer from '../player/HowlerPlayer';
// import Player from '../player/Player';
export default function Home() {

  const [isPlayin, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState(null)
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    setAudio(new Audio("https://xfmke.herokuapp.com/listen"))
    // only run once on the first render on the client
  }, [])

  const start = () => {
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
      <div className='h-full min-h-screen w-full bg-index '>
        <div className='absolute top-0 left-0 w-full min-h-screen  bg-black'>
          <Navbar />
          <div className='flex justify-center items-center '>
            <GlassPlayer isPlayin={isPlayin} updateVolume={updateVolume} />
          </div>
          <Playbar start={start} pause={pause} updateVolume={updateVolume} isPlayin={isPlayin} />
        </div>
      </div>
    </Layout>
  )
}
