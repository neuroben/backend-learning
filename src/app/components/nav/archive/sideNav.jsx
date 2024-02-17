import * as React from 'react';
import { List, ListItemButton, ListItemText, Box, ThemeProvider, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import navTheme from './navTheme';
import Link from 'next/link';



const MenuItem = ({ text, link }) => {
    const router = useRouter();
    const isActive = router.pathname === link;

    const [open, setOpen] = React.useState(false);

    function handleToggle() {
        setOpen(!open);
    }

    const subMenuItems = ['Save post', 'Preview post'];
    const subMenuActions = ['/save', '/preview'];

    return (
        <div>
            <Link href={link}>
                <ListItemButton onClick={handleToggle} sx={{ borderLeft: isActive ? '1px solid #479dff' : '1px solid #262f38' }}>
                    <ListItemText primary={text} />
                </ListItemButton>
            </Link>
            {open && subMenuItems.map((item) => (
                <Box sx={{ marginLeft: '15px' }} key={item}>
                    <MenuItem text={item} link={subMenuActions[subMenuItems.indexOf(item)]} />
                </Box>
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