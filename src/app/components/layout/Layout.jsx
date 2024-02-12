import { useMediaQuery, Box } from '@mui/material';


const Layout = ({ children, bgcolor = '#050708' }) => {
    const matches = useMediaQuery('(max-width:600px)');
    return (

            
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', marginTop:'10vh', marginLeft: '600px', marginBottom:'10vh' }}>
                <Box sx={{width: '75vh', bgcolor: bgcolor}}>
                    {children}
                </Box>
            </Box>
        
    );
};

export default Layout;