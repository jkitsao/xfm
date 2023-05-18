import React,{useEffect,useState} from 'react'
import Head from 'next/head';
import { useQuery } from '@tanstack/react-query';
import { nowPlaying } from '../../../utils/api/myapi';
function HelmetComp({data}) {
    // Rock out with the best online rock station!
    // const {data}=useQuery({ queryKey: ['nowPlaying'], nowPlaying })
    const title='Listen to Great Rock and Alternative hits online'
   const dynamic_og_image=`https://xfmradio.co.ke/api/og?title=${data?.title}&artist=${data?.artist}&art=${data?.art}`
    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{data?.artist && data?.artist}</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            <meta name='title' content={title && title} />
            <meta name="description" content="Rock out with the best Online Rock and Alternative music station!" />
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://xfmradio.co.ke/" />
            <meta property="og:title" content={title && title} />
            <meta property="og:description" content='Rock out with the best Online Rock and Alternative music station!' />
            <meta property="og:image" content={dynamic_og_image} />
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://xfmradio.co.ke/" />
            <meta property="twitter:title" content={title && title} />
            <meta property="twitter:description" content="Rock out with the best Online Rock and Alternative music station!" />
            <meta property="twitter:image" content={dynamic_og_image} />
        </Head>
    )
}

export default HelmetComp