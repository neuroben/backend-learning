import React from 'react';
import Head from 'next/head';
import '../src/app/styles/global.css';
import CssBaseline from '@mui/material/CssBaseline';


function MyApp({ Component, pageProps }) {
    return (
        <>
            <React.Fragment >
                <CssBaseline />
                <Head>
                    <meta charset="utf-8"></meta>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
                </Head>
                <Component {...pageProps} />
            </React.Fragment>
        </>
    );
    //<link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap" rel="stylesheet" />
}

export default MyApp;
