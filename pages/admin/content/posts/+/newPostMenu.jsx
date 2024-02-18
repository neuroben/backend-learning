import React from 'react';
import { Box, SvgIcon } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import PublicIcon from '@mui/icons-material/Public';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookIcon from '@mui/icons-material/Book';
import KeyIcon from '@mui/icons-material/Key';
import adminNavTheme from '../../../componenets/theme';
import { ThemeProvider } from 'styled-components';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import DropdownMenu from './select';
import { useContext } from 'react';
import { EditorContext } from '../+/index';


const username = 'Anita';
const svgS = ['./logout.svg', './password.svg', './earth.svg', './profile.svg']

function NewPostMenu() {
    const router = useRouter();
    let activePath = router.pathname;

    const { editorContent } = useContext(EditorContext);

    const handleClick = () => {
        // Save the editor content when the button is clicked
        console.log('Editor content saved');
        console.log(editorContent);
    };

    return (
        <Box sx={{
            fontFamily: 'Inconsolata',
            fontSize: '20px',
            width: '310px',
            maxHeight: '100vh',
            margin: 0,
            overflow: 'hidden',
            backgroundColor: '#282c37',
            color: '#000',
            position: 'fixed',
            right: 0,
        }}  >
            <Grid container direction='row' sx={{ marginTop: '0' }} >
                <Grid item sx={{
                    color: '#000',
                    borderBottom: '1px solid #22252e',
                    width: '100%',
                    textAlign: 'center',
                    padding: '20px',
                    direction: 'column',
                }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Box>
                            <Button sx={{
                                width: '220px',
                                marginBottom: '10px',

                                '&:hover': {
                                    backgroundColor: 'rgba(158, 255, 135, 0.2)',
                                }
                            }}
                                variant='outlined'
                                color='success'
                            >
                                Közzététel
                            </Button>
                        </Box>
                        <Box>
                            <Button sx={{
                                width: '220px',
                                marginBottom: '10px',
                                '&:hover': {
                                    backgroundColor: 'rgba(102, 156, 210, 0.2)',
                                }
                            }}
                                variant='outlined'
                                onClick={handleClick}
                            >
                                Mentés
                            </Button>
                        </Box>
                        <Box>
                            <Button sx={{
                                width: '220px',
                                marginBottom: '10px',

                                '&:hover': {
                                    backgroundColor: 'rgba(245, 150, 73, 0.2)'
                                }
                            }} color='warning' variant='outlined'>
                                Mégsem
                            </Button>
                        </Box>
                    </Box>

                </Grid>
                <Grid item sx={{
                    color: '#000',
                    borderBottom: '1px solid #22252e',
                    width: '100%',
                    textAlign: 'center',
                    padding: '20px',
                }}>
                    <DropdownMenu />
                </Grid>
                <Grid container
                    direction="column"
                    sx={{
                        color: 'white',
                        width: '100%',
                        boxSizing: 'border-box',
                        height: '100vh', // to ensure full height
                        alignItems: 'center', // to center items vertically
                    }}
                >
                    <Grid item
                        sx={{
                            borderBottom: '1px solid #22252e',
                            width: '100%', // to ensure full width border line
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            padding: '20px',
                            cursor: 'pointer',
                            '&:hover': {
                                backgroundColor: '#22252e',
                                color: '#7d89ac'
                            }
                        }}
                    >
                        <DashboardIcon />
                        <Typography sx={{ marginLeft: '20px' }}>
                            {`Kezelőfelület`}
                        </Typography>
                    </Grid>
                    <Grid item
                        sx={{
                            borderBottom: '1px solid #22252e',
                            width: '100%', // to ensure full width border line
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            padding: '20px',

                            cursor: 'pointer',
                            backgroundColor: activePath.includes('content') ? '#22252e' : '',
                            paddingBottom: activePath.includes('content') ? '0px' : '',
                            '&:hover': {
                                backgroundColor: '#22252e',
                                color: '#7d89ac'
                            }
                        }}
                        onClick={() => {
                            router.push('/admin/content/posts');
                        }}

                    >
                        <BookIcon />
                        <Typography sx={{ marginLeft: '20px' }}>{`Tartalmak`}</Typography>
                    </Grid>
                    {activePath.includes('content') &&
                        <Grid container>
                            <Grid item
                                sx={{
                                    borderBottom: '1px solid #22252e',
                                    width: '100%', // to ensure full width border line
                                    display: 'flex',
                                    margin: 0,
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    padding: '15px 10px 0px 50px',
                                    cursor: 'pointer',
                                    backgroundColor: '#22252e',
                                    color: activePath.includes('/posts') ? '#7d89ac' : '',
                                    '&:hover': {
                                        color: '#7d89ac'
                                    }
                                }}
                                onClick={() => {
                                    window.location.href = '/admin/content/posts';
                                }}
                            >
                                <Typography component="div" sx={{ marginLeft: '20px' }}>
                                    <ul style={{ listStyleType: 'disc' }}>
                                        <li style={{ paddingLeft: '10px' }}>
                                            {`Posztok`}
                                        </li>
                                    </ul>
                                </Typography>
                            </Grid>
                            <Grid item
                                sx={{
                                    borderBottom: '1px solid #22252e',
                                    margin: 0,
                                    width: '100%', // to ensure full width border line
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    padding: '0px 10px 0px 50px',
                                    cursor: 'pointer',
                                    backgroundColor: '#22252e',
                                    color: activePath.includes('/comments') ? '#7d89ac' : '',
                                    '&:hover': {
                                        color: '#7d89ac'
                                    }
                                }}
                                onClick={() => {
                                    window.location.href = '/admin/content/comments';
                                }}
                            >
                                <Typography component="div" sx={{ marginLeft: '20px' }}>
                                    <ul style={{ listStyleType: 'disc' }}>
                                        <li style={{ paddingLeft: '10px' }}>
                                            {`Kommentek`}
                                        </li>
                                    </ul>
                                </Typography>
                            </Grid>
                            <Grid item
                                sx={{
                                    borderBottom: '1px solid #22252e',
                                    width: '100%', // to ensure full width border line
                                    display: 'flex',
                                    margin: 0,
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    padding: '0px 10px 0px 50px',
                                    cursor: 'pointer',
                                    backgroundColor: '#22252e',
                                    color: activePath.includes('/pages') ? '#7d89ac' : '',
                                    '&:hover': {
                                        color: '#7d89ac'
                                    }
                                }}
                                onClick={() => {
                                    window.location.href = '/admin/content/pages';
                                }}
                            >
                                <Typography component="div" sx={{ marginLeft: '20px' }}>
                                    <ul style={{ listStyleType: 'disc' }}>
                                        <li style={{ paddingLeft: '10px' }}>
                                            {`Oldalak`}
                                        </li>
                                    </ul>
                                </Typography>
                            </Grid>
                            <Grid item
                                sx={{
                                    borderBottom: '1px solid #22252e',
                                    width: '100%', // to ensure full width border line
                                    display: 'flex',
                                    margin: 0,
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    padding: '0px 10px 15px 50px',
                                    cursor: 'pointer',
                                    backgroundColor: '#22252e',
                                    color: activePath.includes('/tags') ? '#7d89ac' : '',
                                    '&:hover': {
                                        color: '#7d89ac'
                                    }
                                }}
                                onClick={() => {
                                    window.location.href = '/admin/content/tags';
                                }}
                            >
                                <Typography component="div" sx={{ marginLeft: '20px' }}>
                                    <ul style={{ listStyleType: 'disc' }}>
                                        <li style={{ paddingLeft: '10px' }}>
                                            {`Címkek`}
                                        </li>
                                    </ul>
                                </Typography>
                            </Grid>
                        </Grid>
                    }

                </Grid>
            </Grid >
        </Box >
    )
}

export default NewPostMenu;