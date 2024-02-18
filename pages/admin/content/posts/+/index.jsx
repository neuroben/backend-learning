import React, { createContext, useEffect, useState } from 'react';
import { Grid, Typography, Box, ThemeProvider } from '@mui/material';
import Image from 'next/image';
import Router, { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';
import jasonwebtoken from 'jsonwebtoken';
import fonts from '@/app/utils/fonts';
import Layout from '@/app/components/layout/Layout';
import AdminLayout from '../../../componenets/AdminLayout';
import { isLogged } from '@/app/utils/isLogged';
import NewPostMenu from './newPostMenu';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/base';
import MyEditor from './Editor/editor';

export const EditorContext = createContext(); // a context to use the button from the sidenav to save the editor content


function AdminPage() {


    isLogged();

    const [editorContent, setEditorContent] = useState(''); // the content of the editor

    // Empty dependency array means this effect runs once on component mount    
    return (
        <EditorContext.Provider value={{ editorContent, setEditorContent }}>
            <AdminLayout>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', height: '100vh' }}>
                    <Box sx={{ margin: '30px', flexGrow: 1 }}>
                        <TextField sx={{ width: '100%' }} label='Cím' variant='filled'></TextField>
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
            </AdminLayout>
        </EditorContext.Provider>
    );
}

export default AdminPage;
