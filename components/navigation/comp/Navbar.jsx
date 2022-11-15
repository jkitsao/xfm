import React from 'react'
import Image from 'next/image'

function Navbar() {
    return (
        <nav className='sticky top-0 z-50  py-2'>
            <section className='w-full flex justify-center text-center py-1'>
                <div>
                    <h2 className='p-2 text-2xl lg:text-4xl font-bold  font-bree text-purple-100 '>
                        <Image src='/assets/rockstar.jpg' width={70} height={80}  alt='' />
                        <span className='mx-3 block underline-offset-1 font-tapestry'>
                            Great Rock/Alternative Music
                        </span>
                    </h2>
                    {/* <p className='font-mono font-semibold font-elite'>Home of Great music</p> */}
                </div>
            </section>
        </nav>
    )
}

export default Navbar