import React from 'react';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Image from 'next/image';


function BlogPostBigCard() {
    // fotó elérési útvonal
    const title = 'Lorem Ipsum dolor sit amet';
    const date = '2024.01.01.';
    const context = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
    const by = 'Szcsényi Anita';
    const img = '/testing.jpg';






    return (
        <Button sx={{
            color: '#fff',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, .6)',
            border: '1px solid rgba(255, 255, 255, .2)',
            marginBottom: '20px',
            transition: 'all 0.5s ease',
            textDecoration: 'none',
            textTransform: 'none',
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, .2)',
                border: '1px solid rgba(255, 255, 255, .1)',
                transition: 'all 0.3s ease',
                padding: '7px',
            }
        }}>
            <Box sx={{ padding: '5px' }}>
                <Typography sx={{ borderBottom: '1px solid rgba(255, 255, 255, .1)', width: '100%', lineHeight: '0.85' }}
                    className='title'
                    variant='h2'
                >
                    {title}
                </Typography>
                <Typography sx={{ textDecoration: 'italic' }} className='date' variant='p'>Dátum</Typography>
                <Box display='flex' gap={2}>
                    {img && (
                        <Box sx={{ marginTop: '7px', width: 'auto', flexShrink: 0 }}>
                            <Image style={{ borderRadius: '5px' }}
                                src={img}
                                alt='kép'
                                width={250}
                                height={250}
                                objectFit='contain'
                                layout='intrinsic'
                            />
                        </Box>
                    )}
                    <Box sx={{ width: 'auto', flexGrow: 1 }}>
                        <Typography sx={{ textAlign: 'justify' }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                    </Box>
                </Box>
                {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <Typography>Írta: Szcsényi Anita</Typography>
                   <Button sx={{ marginRight: '0px', color: '#fff', padding: '1px', fontFamily: 'Incensolata, monospace', fontSize: '1.10rem', '&:hover': { color: '#000', backgroundColor: '#fff', } }}>
                       olvass tovább
                   </Button>
                    </Box> */}
            </Box>
        </Button>
    )
}

export default BlogPostBigCard;