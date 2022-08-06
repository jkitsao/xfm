import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import ReactAudioPlayer from 'react-audio-player';
import Layout from '../layouts/Layout';
import HowlerPlayer from '../player/HowlerPlayer';
import Player from '../player/Player';
export default function Home() {
  return (
    <Layout>
      <div className='h-full min-h-screen w-full bg-index '>
        <div className='absolute top-0 left-0 w-full min-h-screen  bg-purple-900/70 flex justify-center items-center '>
          <Player />
          {/* <HowlerPlayer /> */}
        </div>
      </div>
    </Layout>
  )
}
