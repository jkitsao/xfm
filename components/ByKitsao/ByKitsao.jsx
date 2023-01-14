import React from 'react'
import { Highlight } from '@mantine/core';
function ByKitsao() {
    return (
        <div className='w-full py-1 flex justify-center sticky bottom-0  mb-5'>
            <div className='text-xs lg:text-sm font-semibold font-mono'>
                <span className='text-red-500/70 '>
                     by
                    <a href="https://www.kitsao.me/" target='_blank' rel='noreferrer' className="mx-1 underline p-1 text-red-500/80 ">
                        kitsao
                    </a>
                </span>
            </div>
        </div>
    )
}

export default ByKitsao