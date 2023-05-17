import React from 'react'
import Image from 'next/image'

function Navbar() {
    return (
        <nav className='  lg:py-3 '>
            <section className='w-full flex ml-4 md:justify-center text-center py-1'>
                <div>
                    <h2 className='p-2 text-xl lg:text-4xl font-bold  text-gray-400  z-50 '>
                        {/* <Image src='/assets/rockstar.jpg' width={70} height={80}  alt='' /> */}
                        <span className='mx-3  underline-offset-1 p-2 text-red-700  border-red-500 bg-red-600/10 inline-flex items-center'>
                         <img src="https://em-content.zobj.net/thumbs/160/emojidex/112/pushpin_1f4cc.png" className='w-10 mx-1'/> Rock & Alternative Music.
                        </span>
                    </h2>
                    {/* <p className='font-mono font-semibold font-elite'>Home of Great music</p> */}
                </div>
            </section>
        </nav>
    )
}

export default Navbar