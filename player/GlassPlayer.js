import React, { useState, useEffect, } from 'react'
import Image from 'next/image'
import useInterval from '../hooks/useInterval'
import { Bars, RotatingLines } from 'react-loader-spinner'
import axios from 'axios'
import { motion } from 'framer-motion'
import HelmetComp from '../components/helmet'
import ByKitsao from '../components/ByKitsao/ByKitsao'
import ShareComp from '../components/share'
import PlayWith from '../components/playwith/PlayWith'
// import Helmet from '../components/helmet/comp/HelmetComp'

function GlassPlayer({ isPlayin, updateVolume, volume, isReady }) {
    const [nowPlaying, setNowPlaying] = useState('')
    // const [randomPick, setRandomPick] = useState(Math.floor(Math.random() * 6))
    // const [showVolume, setShowVolume] = useState()
    // const [listeners, setListeners] = useState(null)
    let randomPickGif = 'edgy'
    const imageURL = `/gifs/${randomPickGif}.gif`
    return (
        <>
            <HelmetComp title={nowPlaying} />
            <div className=" w-full lg:w-3/4 lg:mx-auto relative  flex justify-center lg:mt-10  ">
                <div className='h-full'>
                    <motion.h3 className='relative text-xl  bg-center font-semibold lg:text-4xl bg-no-repeat  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80 bg-gray-900 bg-blend-darken m-3 text-center  rounded-md'
                        style={{
                            backgroundImage: `url(${imageURL})`,
                            backgroundSize:'cover'
                        }}
                    >
                        <div className='p-6'>
                        <section className='bg-gray-900/80 shadow-lg shadow-red-900/70 p-3 rounded-md'>
                        <iframe src="https://radio.xfmradio.co.ke/public/xfmonline/embed?theme=dark" frameBorder={0}  style={{width: '100%', minHeight: 150, border: 0}} />
                        </section>
                        <section className='my-3 p-3'>
                        <div className='text-sm py-3 text-gray-400 '>
                                <span>Playlist History</span>
                            </div>
                        <iframe src="https://radio.xfmradio.co.ke/public/xfmonline/history?theme=dark" frameBorder={0}  style={{width: '100%', minHeight: 220, border: 0}} />
                        </section>
                        </div>
                    </motion.h3>
                    <div className='py-2'>
                            <ByKitsao />
                        </div>
                </div>
            </div>
        </>
    )
}

export default GlassPlayer