import { Box } from '@mui/material';
import SideNav from '../nav/sideNav';

const Layout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <SideNav />
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', marginTop:'10vh', marginBottom:'10vh' }}>
                <Box sx={{width: '150vh', bgcolor: '#050708'}}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
};

export default Layout;