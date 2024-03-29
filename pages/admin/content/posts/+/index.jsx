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
import { useContext } from 'react';
import { PostContext } from '../../../../_app';
import PostEditorPage from './Editor/PostEditorPage';
import PostEditor from './Editor/PostEditorPage';


export const EditorContext = createContext(); // a context to use the button from the sidenav to save the editor content



function NewPost() {
    isLogged();

    const { post, setPost } = useContext(PostContext);

    // Empty dependency array means this effect runs once on component mount    
    return (
        <PostEditor />
    );
}

export default NewPost;

