import React from 'react'
import { Highlight } from '@mantine/core';
function ByKitsao() {
    return (
        <div className='w-full py-1 flex justify-center'>
            <div className='text-xs lg:text-sm font-semibold font-mono'>
                <span className='text-red-600'>
                    crafted by
                    <a href="https://twitter.com/j_kitsao" target='_blank' rel='noreferrer' className="mx-1 underline p-1 font-semibold">
                        kitsao
                    </a>
                </span>
            </div>
        </div>
    )
}

export default ByKitsao