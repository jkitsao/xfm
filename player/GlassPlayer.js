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
    const [randomPick, setRandomPick] = useState(Math.floor(Math.random() * 6))
    const [showVolume, setShowVolume] = useState()
    const [listeners, setListeners] = useState(null)
    let randomPickGif = 'edgy'
    const imageURL = `/gifs/${randomPickGif}.gif`


    useEffect(() => {
        axios.get('https://xfmonline.xyz/playing').then(resp => {
            // console.log(resp.data);
            setNowPlaying(resp.data.playing)
            setListeners(resp.data.listeners)
        });
    }, [])
    useInterval(() => {
        axios.get('https://xfmonline.xyz/playing').then(resp => {
            // console.log(resp.data);
            setNowPlaying(resp.data.playing)
            setListeners(resp.data.listeners)
            // setRandomPick(Math.floor(Math.random() * 7))
        });
    }, 15000);

    useInterval(() => {
        setRandomPick(Math.floor(Math.random() * 6))
    }, 120000);
    // store bg images in an array then randomly pick from the list after 
    // a given amount of time

    return (
        <>
            <HelmetComp title={nowPlaying} />
            <div className=" w-full lg:w-3/4 lg:mx-auto relative  flex justify-center mt-24  ">
                <div className='h-full'>
                    <motion.h3 className='relative text-xl  bg-center font-semibold lg:text-4xl bg-no-repeat   bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 bg-black/80 bg-blend-darken m-3 text-center  rounded-md'
                        style={{
                            backgroundImage: `url(${imageURL})`,
                            backgroundSize:'cover'
                        }}
                    >
                       
                        <div className='p-5'>
                        <iframe src="https://radio.xfmradio.co.ke/public/xfmonline/embed?theme=dark" frameBorder={0}  style={{width: '100%', minHeight: 150, border: 0}} />
                        <section className='my-5'>
                        <iframe src="https://radio.xfmradio.co.ke/public/xfmonline/history?theme=dark" frameBorder={0}  style={{width: '100%', minHeight: 300, border: 0}} />
                        </section>
                        </div>

                         <div className='py-4'>
                            <ByKitsao />
                        </div>
                    </motion.h3>

                </div>
            </div>
        </>
    )
}

export default GlassPlayer