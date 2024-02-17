import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import fonts from '@/app/utils/fonts';
import Image from 'next/image';
import Layout from '@/app/components/layout/Layout';
import BlogPostBigCard from '../src/app/components/blogPostCards/BlogPostBigCard';

function LandingPage() {
    return (
        <Layout>
            <BlogPostBigCard></BlogPostBigCard>
            <BlogPostBigCard></BlogPostBigCard>
            <BlogPostBigCard></BlogPostBigCard>
        </Layout>
    );
}

export default LandingPage;