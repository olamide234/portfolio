import Head from 'next/head';
import React, { FC } from 'react';

const Seo: FC<{
    title?: string;
    description?: string;
}> = ({
    title = 'Olamide Tofade',
    description = 'Portfolio website',
}) => {
        return (
            <Head>
                <title>{title ? `${title} | Portfolio` : `Olamide's Portfolio`}</title>
                <meta name='description' content={description} />
                <link rel='icon' href='favicon.ico' />
                <link rel="apple-touch-icon" href="/android-chrome-192x192.png" />
                <link rel="manifest" href="manifest.json" />
            </Head>
        );
    };

export default Seo;
