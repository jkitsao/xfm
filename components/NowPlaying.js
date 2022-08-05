import React, { useState, useEffect, } from 'react'
import useInterval from '../hooks/useInterval'
import axios from 'axios'
function NowPlaying() {
    const [nowPlaying, setNowPlaying] = useState('')
    useEffect(() => {
        axios.get('https://xfmke.herokuapp.com/playing').then(resp => {
            // console.log(resp.data);
            setNowPlaying(resp.data.playing)
        });
    }, [])
    useInterval(() => {
        // Your custom logic here
        // setCount(count + 1);
        axios.get('https://xfmke.herokuapp.com/playing').then(resp => {

            // console.log(resp.data);
            setNowPlaying(resp.data.playing)
        });
    }, 100000);
    return (
        <div className=' text-white text-center rounded-md p-2  flex items-center justify-center '>
            {/* <span className="flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-3 w-3  rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500" />
            </span> */}
            <span className=' animate-bounce font-mono'>

                {nowPlaying}
            </span>
        </div >
    )
}

export default NowPlaying