import { createTheme } from '@mui/material';
import { Inconsolata } from 'next/font/google';
import { Lora } from 'next/font/google';

const fonts = createTheme({
    typography: {
        fontFamily: 'Inconsolata, Lora, sans-serif',
    },
});

export default fonts;

