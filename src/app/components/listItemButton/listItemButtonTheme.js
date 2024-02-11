import { createTheme } from '@mui/material/styles';
import { list } from 'postcss';

const listItembuttonTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#86baee',
                    backgroundColor: '#0d1c2a',
                    textTransform: 'none',
                    fontFamily: 'Inconsolata',
                    '&:hover': {
                        backgroundColor: '#003a75',
                    },
                },
            },
        },
    },
});

export default listItembuttonTheme;