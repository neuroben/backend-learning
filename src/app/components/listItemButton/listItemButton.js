import { ListItemButton as MuiListItemButton, ThemeProvider } from '@mui/material';
import buttonTheme from '../button/buttonThemes';

const ListItemButton = (props) => (
    <ThemeProvider theme={buttonTheme}>
        <MuiListItemButton {...props} />
    </ThemeProvider>
);

export default ListItemButton;