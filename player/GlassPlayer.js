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
            <div className=" w-full lg:w-3/4 lg:mx-auto relative  flex justify-center mt-32 lg:mt-52 h-full">
                <div className=''>
                    <motion.h3 className='relative text-2xl  bg-center font-semibold lg:text-4xl bg-no-repeat p-5 py-8  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 bg-black/80 bg-blend-darken m-3 text-center  rounded-md'
                        style={{
                            backgroundImage: `url(${imageURL})`
                        }}
                    >
                        <span className='absolute inline-block top-0 left-0 text-xs text-red-500 p-1 px-2 bg-black m-1'>
                            listeners: {listeners}
                        </span>
                        <span className='m-2 inline-block font-bold text-red-600 font-elite max-w-screen-sm p-2 bg-black/70'>
                            {nowPlaying && nowPlaying}
                        </span>
                        {isPlayin ? <div className='flex justify-center  my-2'>

                            {isReady ? <Bars height="50" width="120"
                                radius="9"
                                color='red'
                                className=''
                                ariaLabel='three-dots-loading'
                            />
                                :
                                <RotatingLines
                                    strokeColor="red"
                                    strokeWidth="2"
                                    animationDuration="0.75"
                                    width="56"
                                    visible={true}
                                />
                            }

                        </div>
                            :
                            < div className='flex justify-center py-3'>
                                {/* <Image src='/assets/rockforever.webp' alt='' className='mx-1' width={150} height={150} /> */}
                                <span className='font-bold font-tapestry  text-red-700'>
                                    Paused
                                </span>
                            </div>

                        }


                        <div className='w-full flex justify-center items-center py-2'>
                            {/* <Slider label={(value) => `${value}`} onChange={() => console.log({ audio })} /> */}
                            <Image src='/red-volume.png' alt='' className='mx-1 cursor-pointer opacity-80 hover:opacity-100' width={20} height={20}
                                onClick={() => setShowVolume(!showVolume)}
                            />
                            {showVolume && (

                                <input
                                    type="range"
                                    defaultValue="50"
                                    value={volume}
                                    min={0}
                                    max={100}
                                    onChange={(e) => updateVolume(e)}
                                    className=" h-2 bg-red-200 rounded-lg text-red-800 mx-3 cursor-pointer"
                                />

                            )}
                        </div>

                        <div>
                            <ShareComp song={nowPlaying} />
                        </div>

                        <div className='w-full py-3 flex justify-center'>
                            <div className='text-xs  font-semibold font-mono w-3/4 mx-auto'>
                                <span className='text-red-600 inline-block my-1'>
                                    If your audio stops playing (Caused by Network issue), please reload the page.
                                </span>
                                {/* <hr /> */}
                                <div className='py-1 flex justify-center'>
                                    <PlayWith />
                                </div>
                            </div>
                        </div>
                        <div>
                            <ByKitsao />
                        </div>
                    </motion.h3>

                </div>
            </div>
        </>
    )
}

export default GlassPlayer