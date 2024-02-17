import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Typography, Grid } from '@mui/material';
import MyTextField from '@/app/components/inputField/textField';
import MyButton from '@/app/components/button/MyButton';
import { ThemeProvider } from '@mui/material/styles';
import fonts from '@/app/utils/fonts';
import Box from '@mui/material/Box';
import LoginForm from '../a_login/login';


function AdminLogin() {

    return (
        <ThemeProvider theme={fonts}>

            <Box sx={{
                maxWidth: 1000,
                margin: 'auto',
                boxSizing: 'content-box',
                padding: 0,
                alignItems: 'center',
            }}>
                <Grid
                    container
                    spacing={0}
                    direction='column'
                    alignItems='center'
                    justifyContent='center'
                    style={{ minHeight: '100vh' }}>
                    <Grid item >
                        <Box sx={{ maxWidth: '500px', color: '#fff', textAlign: 'center' }}>
                            <Typography sx={{}} variant="h1">ADMIN</Typography>
                            <LoginForm />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </ThemeProvider>
    );
}

export default AdminLogin;