import React, { useEffect, useState } from 'react'
import PauseButton from '../../svg/PauseButton';
import PlayButton from '../../svg/PlayButton';

function Playbar({ start, pause, isPlayin }) {
    return (
        <section className='fixed bottom-0 p-4 py-5 border-t-8  border-red-900/30 w-full bg-black flex justify-center items-center '>
            <div>
                {!isPlayin ?

                    <button className="" onClick={start} title='play music'>
                        {/* <PlayButton /> */}
                        <PlayButton />
                    </button>
                    :
                    <button className='' onClick={pause} title='pause music' >
                        {/* <PauseButton /> */}
                        <PauseButton />
                    </button>
                }
            </div>
        </section>
    )
}

export default Playbar