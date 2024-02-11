import * as React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import { ThemeProvider } from '@mui/material';
import listItemButtonTheme from './drawerTheme';

const Drawer = ({ width = 240, ...props }) => {
    return (
        <ThemeProvider theme={listItemButtonTheme}>
            <MuiDrawer
                sx={{
                    width: width,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: width,
                    },
                }}
                {...props}
            >
                {props.children}
            </MuiDrawer>
        </ThemeProvider>
    );
};

export default Drawer;