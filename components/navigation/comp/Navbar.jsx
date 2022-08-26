import React from 'react'
import Image from 'next/image'

function Navbar() {
    return (
        <nav className='sticky top-0 z-50  py-4'>
            <section className='w-full flex justify-center text-center py-1'>
                <div>
                    <h2 className='p-2 text-4xl lg:text-6xl font-bold  font-bree text-red-700 flex justify-center items-center'>
                        {/* <Image src='/assets/rockforever.webp' width={50} height={50} classNamemx-2 alt='' /> */}
                        <span className='mx-3 underline-offset-1 font-tapestry'>
                            Memento Mori
                        </span>
                    </h2>
                    {/* <p className='font-mono font-semibold font-elite'>Home of Great music</p> */}
                </div>
            </section>
        </nav>
    )
}

export default Navbar