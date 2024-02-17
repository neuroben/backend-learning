import React from 'react';
import List from '@mui/material/List';
import { ListItem } from '@mui/material';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MyButton from '../button/MyButton';



function Navigation() {
    // gomboknak témát készíteni majd pl a global.css-ben
    const listItems = ['FŐOLDAL', 'PROJEKTEK', 'ARCHIVE', 'KAPCSOLAT'];
    const adminItems = ['BEJELENTKEZÉS', 'REGISZTRÁCIÓ'];
    const navMenu = listItems.map((item) => {
        return <MyButton key={item}>
            <Container sx={{ borderBottom: '1px solid #000' }}>
                {item}
            </Container>
        </MyButton>
    });

    return (
        <>
            <List sx={{ display: 'flex', justifyContent: 'center' }}>
                {navMenu}
            </List>
        </>
    )
}
export default Navigation;