import * as React from 'react';
import { List, ListItemButton, ListItemText, Box, ThemeProvider } from '@mui/material';
import navTheme from './navTheme';
import { Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';



const MenuItem = ({ text, link }) => {
    const router = useRouter();
    const isActive = router.pathname === link;

    return (
        <Link href={link}>
            <ListItemButton sx={{ backgroundColor: isActive ? '#262f38' : 'transparent' }}>
                <ListItemText primary={text} />
            </ListItemButton>
        </Link>
    );
};

const SideNav = () => {
    const menuItems = ['New post', 'Edit posts', 'Services', 'Contact'];
    const menuLinks = ['/newpost', '/editposts', '/services', '/contact'];

    return (
        <Box
            sx={{
                width: 240,
                height: '100vh',
                left: 0,
                top: 0,
                bgcolor: '#101418',
                p: 2,
                borderRight: '1px solid #262f38',
            }}
        >

            <ThemeProvider theme={navTheme}>
                <List>
                    <Box component="img" src="./logo.png" alt="logo" sx={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                    <ListItemText sx={{ color: 'white', fontWeight: 'bold' }} primary={<Typography sx={{ fontWeight: 'bold' }}>Menu</Typography>} />
                    {menuItems.map((item) => (
                        <MenuItem key={item} text={item} link={menuLinks[menuItems.indexOf(item)]} />
                    ))}
                </List>
            </ThemeProvider>
        </Box>
    );
};

export default SideNav;