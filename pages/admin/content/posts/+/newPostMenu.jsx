import React from 'react';
import { Box, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import DropdownMenu from './select';
import { useContext } from 'react';
import { PostContext } from '../../../../_app';
import { v4 as uuidv4 } from 'uuid';
import { jwtDecode } from 'jwt-decode';
import he from 'he';

const username = 'Anita';
const svgS = ['./logout.svg', './password.svg', './earth.svg', './profile.svg']

function NewPostMenu() {
    const router = useRouter();
    let activePath = router.pathname;
    const { post, setPost } = useContext(PostContext);


    // creating object to save post

    const handleSave = async () => {
        // Save the editor content when the button is clicked
        // itt kell majd elküldenünk a posztot az adatbázisba
        // illetve átirányítani a /+-ról az adott poszt editor nézetére
        // előnézet gomb (ez mentsen is és utánna átirányítson az adott poszt editor nézetére)
        console.log(post);

        // generating slug
        const date = new Date();
        const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

        if (post.slug === '') {
            post.slug = `${post.title.replace(/\s+/g, '-').toLowerCase()}-${dateString}`;
        } else {
            post.slug = `${post.slug.replace(/\s+/g, '-').toLowerCase()}-${dateString}`;
        }

        // generating id
        post.id = uuidv4();

        // generating created_on --- i'll do that on the server side

        // generating created_by
        const token = localStorage.getItem('token');
        post.created_by = jwtDecode(token).username;
        // generating context
        const decodedContent = he.decode(post.content);
        const parser = new DOMParser();
        const doc = parser.parseFromString(decodedContent, 'text/html');

        let draft = '';
        for (const node of doc.body.childNodes) {
            if (node.nodeType === Node.TEXT_NODE) {
                draft += node.textContent;
            } else if (node.nodeType === Node.ELEMENT_NODE && !/^h[1-6]$/.test(node.nodeName.toLowerCase()) && node.nodeName.toLowerCase() !== 'img' && node.nodeName.toLowerCase() !== 'a') {
                draft += node.textContent;
            }

            if (draft.length > 550) {
                draft = draft.slice(0, 547) + '...';
                break;
            }
        }
        post.context = draft;
        // generating tags
        // generating published_on
        // generating content
        // generating tags





        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(post),

        });


        console.log('Editor content saved');
        console.log(post.title);
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
                                    backgroundColor: 'rgba(158, 255, 135, 0.1)',
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
                                onClick={handleSave}
                            >
                                Mentés
                            </Button>
                        </Box>
                        <Box>
                            <Button sx={{
                                width: '220px',
                                marginBottom: '10px',
                                '&:hover': {
                                    backgroundColor: 'rgb(252, 55, 255, 0.1)',
                                }
                            }}
                                variant='outlined'
                                color='secondary'
                            >
                                Előnézet
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
                    boxSizing: 'border-box',
                    textAlign: 'center',
                    padding: '10px 10px'
                }}>
                    <Typography sx={{ color: '#fff', marginBottom: '10px' }}>{`Cimkék`}</Typography>
                    <DropdownMenu />
                </Grid>
                <Grid item sx={{
                    color: '#000',
                    borderBottom: '1px solid #22252e',
                    width: '100%',
                    boxSizing: 'border-box',
                    textAlign: 'center',
                    padding: '10px 10px'
                }}>
                    <Typography sx={{ color: '#fff', marginBottom: '10px' }}>{`Egyedi URL`}</Typography>
                    <TextField sx={{ width: '280px' }}></TextField>
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
                </Grid>
            </Grid >
        </Box >
    )
}

export default NewPostMenu;