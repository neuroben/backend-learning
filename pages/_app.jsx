import React from 'react';
import Head from 'next/head';
import '../src/app/styles/global.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createContext } from 'react';

export const PostContext = createContext();

function PostProvider({ children }) {
    const [post, setPost] = React.useState({
        id: '',
        slug: '',
        title: '',
        created_on: '',
        published_on: '',
        created_by: '',
        content: '',
        context: '',
        tags: [],
    });
    return (
        <PostContext.Provider value={{ post, setPost }}>
            {children}
        </PostContext.Provider>
    );
} // the post object to save the post



function MyApp({ Component, pageProps }) {
    return (
        <PostProvider>
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
        </PostProvider>
    );
    //<link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap" rel="stylesheet" />
}

export default MyApp;
