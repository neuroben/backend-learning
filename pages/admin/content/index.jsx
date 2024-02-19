import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box, ThemeProvider } from '@mui/material';
import Image from 'next/image';
import Router, { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';
import jasonwebtoken from 'jsonwebtoken';
import fonts from '@/app/utils/fonts';
import Layout from '@/app/components/layout/Layout';
import AdminLayout from '../componenets/AdminLayout';
import { isLogged } from '@/app/utils/isLogged';

function AdminPage() {
    const router = useRouter();
    isLogged();


    // Empty dependency array means this effect runs once on component mount    
    return (
        <AdminLayout>
            <Typography variant="h1">Content</Typography>
        </AdminLayout>
    );
}

export default AdminPage;
