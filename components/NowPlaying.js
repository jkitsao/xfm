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
        axios.get('https://xfmke.herokuapp.com/playing').then(resp => {
            // console.log(resp.data);
            setNowPlaying(resp.data.playing)
        });
    }, 15000);
    return (
        <div className=' text-white text-center rounded-md p-2  flex items-center justify-center '>
            <span className=' animate-bounce font-mono'>
                {nowPlaying}
            </span>
        </div >
    )
}

export default NowPlaying