import React, { useState } from 'react'
import Image from 'next/image'
import { useClipboard } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';
import { Text, Mark } from '@mantine/core';
function PlayWith() {
    const [opened, setOpened] = useState(false);
    const [link] = useState('https://xfmonline.xyz/listen')
    const clipboard = useClipboard({ timeout: 1000 });
    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Using an External player like VLC!"
                centered
            >
                {/* Modal content */}
                <div>
                    <span className='text-sm'>
                        Copy the link Below and add it to your <strong className='text-red-600'>VLC</strong> stream or use it directly on your <strong className='text-red-600'>Browser</strong>  or any other External player
                    </span>
                    <div className='font-semibold my-3'
                        onClick={() => clipboard.copy(link)}
                    >
                        <span className='text-xs inline-block mb-1'>{clipboard.copied ? 'copied...' : 'click to copy'} </span>
                        <Text color='red' className='cursor-pointer'>
                            <Mark color={clipboard.copied ? 'green' : 'red'} p={5}

                            >{link}</Mark>
                        </Text>
                    </div>
                </div>
            </Modal>

            {/* <Group position="center"> */}
            <button onClick={() => setOpened(true)}
                className='px-5 py-2 border border-red-600 text-red-500 flex justify-center items-center  font-semibold text-xs'
            >
                <>
                    <span className='inline-flex  items-center h-full'>play with <strong className='mx-1'>VLC</strong> Media</span>
                    {/* <span className=' inline-flex justify-center items-center mxh-full'>
                        <Image src='/assets/vlc.png' alt='' className='mx-1 cursor-pointer opacity-80 hover:opacity-100' width={12} height={12} />
                    </span> */}
                </>
            </button>
            {/* </Group> */}
        </>
    );
}

export default PlayWith