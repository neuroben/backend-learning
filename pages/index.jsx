import * as React from 'react';
import Head from 'next/head';
import '../src/app/styles/global.css';
import Button from '../src/app/components/button/Button';
import SideNav from '@/app/components/nav/sideNav';
import Box from '@mui/material/Box';
import Layout from '@/app/components/layout/Layout';


function LandingPage() {
    return (
        <>
            <Head>
                <title>admin</title>
            </Head>
            
            <Layout>
            {/* Your page content goes here */}
            </Layout>
        </>
    );
}

export default LandingPage;