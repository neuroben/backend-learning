
import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
// legenerálni hogy hány hónapra és abban a hónapban menniy poszt volt



function PostsByMonth() {
    return (
        <Box>
            <Typography variant="h6" sx={{
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, .2)',
                borderRadius: '5px',
            }}>Posztok</Typography>
        </Box>
    )
}

export default PostsByMonth;