import React, { useState, useEffect } from 'react'
import { Card, Text, Badge, Button, Group } from '@mantine/core'
import { Audio as AudioSvg } from 'react-loader-spinner'
import { Slider } from '@mantine/core';
import { Howl, Howler } from 'howler';
import Image from 'next/image'
import NowPlaying from '../components/NowPlaying';
import PlayButton from '../components/svg/PlayButton';
import PauseButton from '../components/svg/PauseButton';
function HowlerPlayer() {
    const [isPlayin, setIsPlaying] = useState(false)
    const [audio, setAudio] = useState(null)
    const [volume, setVolume] = useState(0.5);
    const [endValue, setEndValue] = useState(50);
    useEffect(() => {
        // setAudio(new Audio("https://xfmke.herokuapp.com/listen"))
        setAudio(new Howl({
            src: ['https://xfmke.herokuapp.com/listen'],
            format: ['mp3', 'aac'],
            volume: volume,
            html5: true
        }))
        // only run once on the first render on the client
    }, [])

    const start = () => {
        audio.play();
        audio.volume = volume
        setIsPlaying(true)
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
        <div className="bg-clip-padding w-full m-8 lg:w-1/4 lg:mx-auto rounded-md backdrop-filter backdrop-blur-xl bg-opacity-40  shadow-xl  p-4 py-6">
            <div className='py-2 px-3'>
                <Text weight={400}>
                    <NowPlaying />
                </Text>
            </div>
            <div className='flex justify-center '>
                {!isPlayin ? <Image src='/xfmbg.png' height={100}
                    width={260}

                    alt="xfm"
                />
                    :
                    <div className='py-5 flex'>
                        <AudioSvg height="50" width="100"
                            radius="9"
                            // color='blue'
                            className='text-blue-400'
                            ariaLabel='three-dots-loading'
                        // wrapperStyle
                        // wrapperClass
                        />
                    </div>
                }
            </div>
            <section className='flex justify-center items-center p-4'>
                <div>
                    {!isPlayin ?

                        <button className="" onClick={start}>

                            <PlayButton />
                        </button>
                        // {/* <Image src='/circled-play.png' alt='play' width={80} height={80} onClick={start} /> */}

                        :
                        <button className='' onClick={pause} >
                            <PauseButton />
                        </button>
                        // <Image src='/circled-pause.png' alt='pause' width={80} height={80} onClick={pause} />
                    }
                </div>
            </section>

            <div className='w-full flex justify-center items-center'>
                {/* <Slider label={(value) => `${value}`} onChange={() => console.log({ audio })} /> */}
                <Image src='/speaker2.svg' alt='' className='mx-1' width={20} height={20} />
                <input
                    type="range"
                    defaultValue="50"
                    min={0}
                    max={100}
                    onChange={(e) => updateVolume(e)}
                    className=" h-2 bg-gray-200 rounded-lg text-blue-400 mx-3 cursor-pointer"
                />
            </div>
        </div>

    )
}

export default HowlerPlayer