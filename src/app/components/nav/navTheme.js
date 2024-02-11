import { createTheme } from '@mui/material/styles';

const buttonTheme = createTheme({
    components: {
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    fontFamily: 'Inconsolata',
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