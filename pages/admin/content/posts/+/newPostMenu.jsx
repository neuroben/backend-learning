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
    const { post } = useContext(PostContext);

    const handleSave = async () => {
        // Ebben a funkcióban kezeljük a mentést. A post obijektum a PostContext-ből jön
        // A post object a következő tulajdonságokkal rendelkezik:
        // id: string - a bejegyzés azonosítója
        // slug: string - a bejegyzés egyedi url-je
        // title: string - a bejegyzés címe
        // created_on: string - a bejegyzés létrehozásának dátuma
        // published_on: string - a bejegyzés közzétételének dátuma
        // created_by: string - a bejegyzés szerzőjének azonosítója
        // content: string - a bejegyzés tartalma
        // context: string - a bejegyzés tartalmának egy része, amit a bejegyzés előnézetében használunk
        // tags: string[] - a bejegyzés címkéi


        // Ez a slug generálás amit késöbb fogok megvalósítani
        /*const date = new Date();
        const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

        if (post.slug === '') {
            post.slug = `${post.title.replace(/\s+/g, '-').toLowerCase()}-${dateString}`;
        } else {
            post.slug = `${post.slug.replace(/\s+/g, '-').toLowerCase()}-${dateString}`;
        }*/

        // Létrehozom a poszt egyedi UUID-jét
        post.id = uuidv4();

        // itt kérem el tokenből a user id-jét amit a poszt készítőjeként használok
        const token = localStorage.getItem('token');
        post.created_by = jwtDecode(token).id;

        // itt generálom a bejegyzés előnézetét
        const decodedContent = he.decode(post.content);
        const parser = new DOMParser();
        const doc = parser.parseFromString(decodedContent, 'text/html');

        let draft = '';
        for (const node of doc.body.childNodes) {
            if (node.nodeType === Node.TEXT_NODE) {
                draft += node.textContent.replace(/\n/g, '');
            } else if (node.nodeType === Node.ELEMENT_NODE && !/^h[1-6]$/.test(node.nodeName.toLowerCase()) && node.nodeName.toLowerCase() !== 'img' && node.nodeName.toLowerCase() !== 'a') {
                draft += node.textContent.replace(/\n/g, '');
            }
            if (draft.length > 550) {
                draft = draft.slice(0, 547) + '...';
                break;
            }
        }
        post.context = draft;


        // itt küldök a szervernek egy POST kérést a poszt mentésére
        async function savePost() {
            const response = await fetch('/api/savePost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(post),
            });
            const responseData = await response.json();
            console.log(responseData);
        }

        savePost();

        // a felhasználót átirányítom a poszt szerkesztőjére
        router.push(`/admin/content/posts/${post.id}`);

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
                    <TextField value='Ez a funkció nincs implementálva' sx={{ width: '280px', color: '#fff' }}></TextField>
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