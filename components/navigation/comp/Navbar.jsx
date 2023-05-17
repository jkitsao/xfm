import React from 'react'
import Image from 'next/image'

function Navbar() {
    return (
        <nav className='  lg:py-3 '>
            <section className='w-full flex ml-4 md:justify-center text-center py-1'>
                <div>
                    <h2 className='p-2 text-xl lg:text-4xl font-bold   text-gray-400 sticky top-0 z-50 '>
                        {/* <Image src='/assets/rockstar.jpg' width={70} height={80}  alt='' /> */}
                        <span className='mx-3 block underline-offset-1 p-2 text-red-700 border-red-500 bg-red-600/10'>
                          Rock & Alternative Music.
                        </span>
                    </h2>
                    {/* <p className='font-mono font-semibold font-elite'>Home of Great music</p> */}
                </div>
            </section>
        </nav>
    )
}

export default Navbar