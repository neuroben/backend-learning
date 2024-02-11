import { Button as MuiButton, ThemeProvider } from '@mui/material';
import buttonTheme from './buttonThemes';

const Button = (props) => (
    <ThemeProvider theme={buttonTheme}>
        <MuiButton {...props} />
    </ThemeProvider>
);

export default Button;