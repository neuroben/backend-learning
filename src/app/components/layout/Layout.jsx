import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import fonts from '@/app/utils/fonts';
import Image from 'next/image';
import Navigation from '../nav/nav';
import BlogPostBigCard from '../blogPostCards/BlogPostBigCard';
import Page from '../../../../pages/a_login';
import LoginForm from '../../../../pages/a_login/login';
import PostsByMonth from '../sideContent/postsByMonth';

function LandingPage({ children }) {
    // adatbázis kapcsolat lekérni a posztokat
    // tömböt csinálni a post obijektumokról
    // mapelni a postokat
    // is login ?


    return (
        <ThemeProvider theme={fonts}>
            <Box sx={{
                maxWidth: 1000,
                margin: 'auto',
                boxSizing: 'content-box',
                padding: 0,
            }}>
                <Grid container spacing={2}>00
                    <Grid item xs={12}>
                        <Box sx={{ color: '#fff', textAlign: 'center' }}>
                            <Typography sx={{}} variant="h1">FOLTSAROK</Typography>
                            <Typography sx={{}} variant="p">Szécsényi Anita</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Navigation />
                    </Grid>
                    <Grid className='content' item xs={9}>
                        {children}
                    </Grid>
                    <Grid sx={{ color: '#fff' }} className='sideContent' item xs={3}>
                        <PostsByMonth />




                        {/*<Box className='login'>
                            <LoginForm />
                        </Box>*/}
                    </Grid>
                </Grid>
            </Box>

        </ThemeProvider>
    );
}

export default LandingPage;