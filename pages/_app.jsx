import React from 'react';
import Head from 'next/head';
import '../src/app/styles/global.css';
import CssBaseline from '@mui/material/CssBaseline';


function MyApp({ Component, pageProps }) {
    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                </Head>
                <Component {...pageProps} />
            </React.Fragment>
        </>
    );
}

export default MyApp;
