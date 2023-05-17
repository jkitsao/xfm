import React from 'react'
import { Highlight } from '@mantine/core';
function ByKitsao() {
    return (
        <div className='w-full py-1 flex justify-center sticky bottom-0  mb-1 overflow-y-hidden'>
            <div className='text-xs lg:text-sm font-semibold font-mono overflow-y-hidden'>
                <span className='text-red-500/70 overflow-hidden'>
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