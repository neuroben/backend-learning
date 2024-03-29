import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import fonts from '@/app/utils/fonts';
import Image from 'next/image';
import Navigation from '../../../src/app/components/nav/nav';
import BlogPostBigCard from '../../../src/app/components/blogPostCards/BlogPostBigCard';
import Page from '../../a_login';
import LoginForm from '../../a_login/login';
import PostsByMonth from '../../../src/app/components/sideContent/postsByMonth';
import AdminMenu from './AdminMenu';

function AdminLayout({ children }) {


    return (
        <ThemeProvider theme={fonts}>
            <Box sx={{ display: 'flex', position: 'fixed', width: '100%', height: '100%', overflow: 'hidden' }}>
                <Box sx={{ width: '220px', boxSizing: 'border-box' }}>
                    <AdminMenu />
                </Box>
                <Box sx={{ flexGrow: 1, minWidth: '200px', overflow: 'auto' }}>
                    {children}
                </Box>

            </Box>
        </ThemeProvider>
    );
}

export default AdminLayout;