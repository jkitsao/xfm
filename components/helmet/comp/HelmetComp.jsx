import React from 'react'
import Head from 'next/head';
function HelmetComp() {
    const title='Listen to Great Rock music online'
    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{title && title}</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            <meta name='title' content={title && title} />
            <meta name="description" content="Home of Great rock music" />
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://xfmradio.co.ke/" />
            <meta property="og:title" content={title && title} />
            <meta property="og:description" content='Home of Great rock music' />
            <meta property="og:image" content="/assets/rockstar.jpg" />
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://xfmradio.co.ke/" />
            <meta property="twitter:title" content={title && title} />
            <meta property="twitter:description" content="Home of Great rock music" />
            <meta property="twitter:image" content='/assets/rockstar.jpg' />
        </Head>

    )
}

export default HelmetComp