import { createTheme } from '@mui/material/styles';

const adminNavTheme = createTheme({
    components: {
        LogoutIcon: {
            styleOverrides: {
                primary: {
                    width: '20px',
                    height: '20px',
                    color: '#868686',
                    '&:hover': {
                        color: 'white'
                    }
                },
            },
        },
    },
});

export default adminNavTheme;