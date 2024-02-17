import { Button as MuiButton, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#fff',
                    padding: '10px',
                    margin: '0 auto',
                    width: '100%',
                    fontFamily: 'Incensolata, monospace',
                    fontSize: '1.25rem',
                    '&:hover': {
                        color: '#000',
                        backgroundColor: 'rgba(255, 255, 255, .5)',
                    },
                },
            },
        },
    },
});

const MyButton = (props) => (
    <ThemeProvider theme={theme}>
        <MuiButton {...props} />
    </ThemeProvider>
);

export default MyButton;