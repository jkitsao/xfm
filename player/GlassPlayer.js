import React, { useState, useEffect, } from 'react'
import Image from 'next/image'
import useInterval from '../hooks/useInterval'
import { Bars } from 'react-loader-spinner'
import axios from 'axios'
import autoprefixer from 'autoprefixer'
import HelmetComp from '../components/helmet'
// import Helmet from '../components/helmet/comp/HelmetComp'

function GlassPlayer({ isPlayin, updateVolume }) {
    const [nowPlaying, setNowPlaying] = useState('')
    const [randomPick, setRandomPick] = useState(0)
    const imageURL = `/gallery/gallery${randomPick}.webp`

    useEffect(() => {
        axios.get('https://xfmke.herokuapp.com/playing').then(resp => {
            // console.log(resp.data);
            setNowPlaying(resp.data.playing)
        });
    }, [])
    useInterval(() => {
        axios.get('https://xfmke.herokuapp.com/playing').then(resp => {
            // console.log(resp.data);
            setNowPlaying(resp.data.playing)
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

            <div className=" w-full mlg:w-3/4 lg:mx-auto relative  glass_player"
                style={{
                    backgroundImage: `url(${imageURL})`
                }}
            >
                <div className='flex justify-center items-center h-full  absolute top-0 w-full'>
                    <h3 className='relative text-2xl font-semibold lg:text-4xl  p-5  bg-black/90 m-3 text-center rounded-md'>
                        <span className='absolute inline-block top-0 left-0 text-xs text-red-500 p-1  m-1'>
                            Playing:
                        </span>
                        <span className='m-2 inline-block font-bold text-red-700 font-elite'>
                            {nowPlaying && nowPlaying}
                        </span>
                        {isPlayin ? <div className='flex justify-center animate-bounce my-2'>
                            <Bars height="50" width="100"
                                radius="9"
                                color='purple'
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
                            <Image src='/speaker2.svg' alt='' className='mx-1' width={20} height={20} />
                            <input
                                type="range"
                                defaultValue="50"
                                min={0}
                                max={100}
                                onChange={(e) => updateVolume(e)}
                                className=" h-2 bg-red-200 rounded-lg text-red-800 mx-3 cursor-pointer"
                            />
                        </div>
                    </h3>
                </div>
            </div>
        </>
    )
}

export default GlassPlayer