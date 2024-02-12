import * as React from 'react';
import { List, ListItemButton, ListItemText, Box, ThemeProvider, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import navTheme from './navTheme';
import Link from 'next/link';



const MenuItem = ({ text, link }) => {
    const router = useRouter();
    const isActive = router.pathname === link;
    const submenuItems = ['New post', 'Edit posts', 'Profile', 'Contact'];
    const menuLinks00 = ['/newpost', '/editposts', '/profile', '/contact'];

    const SubMenuItem = ({ text, link }) => {

        const router = useRouter();
        const isActive = router.pathname === link;


        return (
            <Link href={link}>
                <ListItemButton sx={{ backgroundColor: '#040506', marginLeft: "25px" }}>
                    <ListItemText primary={text} />
                </ListItemButton>
            </Link>
        );
    };


    return (
        <div>
            <Link href={link}>
                <ListItemButton sx={{ borderLeft: isActive ? '1px solid #479dff' : '1px solid #262f38' }}>
                    <ListItemText primary={text} />
                </ListItemButton>
            </Link>
            {isActive && submenuItems.map((text, index) => (
                <SubMenuItem key={index} text={text} link={menuLinks00[index]} />
            ))}
        </div>
    );
};

const SideNav = () => {
    const menuItems = ['New post', 'Edit posts', 'Profile', 'Contact'];
    const menuLinks = ['/newpost', '/editposts', '/profile', '/contact'];

    return (
        <Box
            sx={{
                position: 'fixed',
                width: 600,
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