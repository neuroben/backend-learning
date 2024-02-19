import React, { createContext, useEffect, useState, useContext } from 'react';
import { Grid, Typography, Box, ThemeProvider, TextField, FormControl } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';
import fonts from '@/app/utils/fonts';
import Layout from '@/app/components/layout/Layout';
import AdminLayout from '../../../../componenets/AdminLayout';
import { isLogged } from '@/app/utils/isLogged';
import NewPostMenu from '../newPostMenu';
import MyEditor from './editor';
import { PostContext } from '../../../../../_app';

export const EditorContext = createContext(); // a context to use the button from the sidenav to save the editor content



function PostEditor(id, slug, title, created_on, published_on, created_by, content, context, tags) {
    isLogged();

    const { post, setPost } = useContext(PostContext);

    // Empty dependency array means this effect runs once on component mount    
    return (
        <>
            <AdminLayout>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', height: '100vh' }}>
                    <Box sx={{ margin: '30px', flexGrow: 1 }}>
                        <TextField
                            sx={{
                                width: '100%',
                                '& .MuiFilledInput-root': {
                                    borderRadius: 2,
                                    backgroundColor: 'rgba(242, 242, 242, 0.2)',
                                    border: '1px solid #f2f2f2',
                                    fontSize: '20px',
                                    '& .MuiFilledInput-input': {
                                        padding: '10px 12px', // adjust as needed
                                    },
                                },
                            }}
                            InputProps={{ disableUnderline: true }}
                            InputLabelProps={{ shrink: true }}
                            placeholder='A poszt címe'
                            variant='filled'
                            value={post.title}
                            onChange={(e) => setPost(prevPost => ({ ...prevPost, title: e.target.value }))}
                        />
                        <Box sx={{ height: 'calc(100% - 90px)', marginTop: '30px' }}>
                            <MyEditor />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', height: '100%' }}>
                        <Box sx={{ width: '310px', boxSizing: 'border-box', overflow: 'hidden' }}>
                            <NewPostMenu />
                        </Box>
                    </Box>
                </Box>
            </AdminLayout >
        </>
    );
}

export default PostEditor;

