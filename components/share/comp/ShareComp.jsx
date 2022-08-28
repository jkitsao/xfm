import React from 'react'
import { Popover, Text, Button } from '@mantine/core';
import {
    FacebookShareButton,
    WhatsappIcon,
    TwitterIcon,
    RedditIcon,
    InstapaperShareButton,
    RedditShareButton,
    TelegramShareButton,
    FacebookIcon,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";
function ShareComp({ song }) {
    const title = `Listening to ${song} on xfmradio online`
    const shareUrl = 'https://xfmradio.co.ke/'
    return (
        <div>
            <Popover width={170} position="bottom" withArrow shadow="md">
                <Popover.Target>
                    <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                        </svg>

                    </Button>
                </Popover.Target>
                <Popover.Dropdown>
                    <div>
                        <FacebookShareButton url={shareUrl} title={title} className='mx-1' >
                            <FacebookIcon size={24} round />
                        </FacebookShareButton>
                        <InstapaperShareButton url={shareUrl} />
                        <RedditShareButton url={shareUrl} title={title} className='mx-1'>
                            <RedditIcon size={24} round />
                        </RedditShareButton>
                        {/* <TelegramShareButton url={shareUrl} /> */}
                        <TwitterShareButton url={shareUrl} title={title} className='mx-1'>
                            <TwitterIcon round size={24} />
                        </TwitterShareButton>
                        <WhatsappShareButton url={shareUrl} className='mx-1'>
                            <WhatsappIcon size={24} round />
                        </WhatsappShareButton>
                    </div>
                </Popover.Dropdown>
            </Popover>
        </div>
    )
}

export default ShareComp