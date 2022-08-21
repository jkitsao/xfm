import React, { useState, useEffect, } from 'react'
import Image from 'next/image'
import useInterval from '../hooks/useInterval'
import { Bars } from 'react-loader-spinner'
import axios from 'axios'
import { motion } from 'framer-motion'
import HelmetComp from '../components/helmet'
// import Helmet from '../components/helmet/comp/HelmetComp'

function GlassPlayer({ isPlayin, updateVolume }) {
    const [nowPlaying, setNowPlaying] = useState('')
    const [randomPick, setRandomPick] = useState(Math.floor(Math.random() * 6))
    const [showVolume, setShowVolume] = useState()
    const [listeners, setListeners] = useState(null)
    const imageURL = `/gallery/gallery${randomPick}.webp`

    useEffect(() => {
        axios.get('https://xfmke.herokuapp.com/playing').then(resp => {
            // console.log(resp.data);
            setNowPlaying(resp.data.playing)
            setListeners(resp.data.listeners)
        });
    }, [])
    useInterval(() => {
        axios.get('https://xfmke.herokuapp.com/playing').then(resp => {
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
            <div className=" w-full lg:w-3/4 lg:mx-auto relative  flex justify-center mt-48 lg:mt-52 h-full "
            // style={{
            //     backgroundImage: `url(${imageURL})`
            // }}
            >
                <div className=''>
                    <motion.h3 className='relative text-2xl font-semibold lg:text-4xl  p-5  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 bg-black m-3 text-center  rounded-md'

                    >
                        <span className='absolute inline-block top-0 left-0 text-xs text-red-500 p-1  m-1'>
                            Playing:
                        </span>
                        <span className='m-2 inline-block font-bold text-red-600 font-elite'>
                            {nowPlaying && nowPlaying}
                        </span>
                        {isPlayin ? <div className='flex justify-center animate-bounce my-2'>
                            <Bars height="50" width="120"
                                radius="9"
                                color='red'
                                className=''
                                ariaLabel='three-dots-loading'
                            />
                        </div>
                            :
                            < div className='flex justify-center py-3'>
                                <Image src='/assets/rockforever.webp' alt='' className='mx-1' width={150} height={150} />
                            </div>

                        }
                        <div className='w-full flex justify-center items-center'>
                            {/* <Slider label={(value) => `${value}`} onChange={() => console.log({ audio })} /> */}
                            <Image src='/red-volume.png' alt='' className='mx-1 cursor-pointer opacity-80 hover:opacity-100' width={20} height={20}
                                onClick={() => setShowVolume(!showVolume)}
                            />
                            {showVolume && (

                                <input
                                    type="range"
                                    defaultValue="50"
                                    min={0}
                                    max={100}
                                    onChange={(e) => updateVolume(e)}
                                    className=" h-2 bg-red-200 rounded-lg text-red-800 mx-3 cursor-pointer"
                                />

                            )}
                        </div>
                    </motion.h3>

                </div>
            </div>
        </>
    )
}

export default GlassPlayer