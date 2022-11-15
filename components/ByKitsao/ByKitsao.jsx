import React from 'react'
import { Highlight } from '@mantine/core';
function ByKitsao() {
    return (
        <div className='w-full py-1 flex justify-center'>
            <div className='text-xs lg:text-sm font-bold font-mono'>
                <span className='text-red-700 '>
                    crafted by
                    <a href="https://twitter.com/j_kitsao" target='_blank' rel='noreferrer' className="mx-1 underline p-1 ">
                        kitsao
                    </a>
                </span>
            </div>
        </div>
    )
}

export default ByKitsao