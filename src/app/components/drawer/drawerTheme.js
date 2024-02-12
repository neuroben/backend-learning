import { createTheme } from '@mui/material/styles';

const listItemButtonTheme = createTheme({
    components: {
        MuiListItemButton: {
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

export default listItemButtonTheme;