import { useMediaQuery, Box } from '@mui/material';
import SideNav from '../../nav/archive/sideNav';


const Layout = ({ children, bgcolor = '#050708' }) => {
    const matches = useMediaQuery('(max-width:600px)');
    return (
        <Box display="flex" flexDirection="row" justifyContent="space-between">
            <SideNav />
            <Box flexGrow={1}>
                {children}
            </Box>
        </Box>

    );
};

export default Layout;