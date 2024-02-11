import { createTheme } from '@mui/material/styles';

const buttonTheme = createTheme({
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
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    color: '#86baee',
                    backgroundColor: '#101418',
                    textTransform: 'none',
                    fontFamily: 'Inconsolata',
                    borderRadius: '2px',
                    borderColor: '#86baee',
                    borderWidth: '1px',
                    '&:hover': {
                        backgroundColor: '#003a75',
                    },
                },
            },
        },
    },
});

export default buttonTheme;