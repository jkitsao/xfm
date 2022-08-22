import React, { useEffect, useState } from 'react'
import PauseButton from '../../svg/PauseButton';
import PlayButton from '../../svg/PlayButton';
import { motion } from 'framer-motion'
function Playbar({ start, pause, isPlayin }) {
    return (
        <section className='fixed bottom-0 p-4 py-5  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80 shadow-lg w-full flex justify-center items-center select-none'>
            <div className='select-none'>
                {!isPlayin ?

                    <motion.button className="select-none" onClick={start} title='play music'
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.2 }}
                    >
                        <PlayButton />
                    </motion.button>
                    :
                    <motion.button className='select-none' onClick={pause} title='pause music'
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.2 }}
                    >
                        {/* <PauseButton /> */}
                        <PauseButton />
                    </motion.button>
                }
            </div>
        </section>
    )
}

export default Playbar