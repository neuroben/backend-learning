import React from 'react';
import Head from 'next/head';
import './styles/global.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
