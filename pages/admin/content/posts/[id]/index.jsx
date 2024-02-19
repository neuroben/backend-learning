import React, { createContext, useEffect, useState } from 'react';
import { Grid, Typography, Box, ThemeProvider } from '@mui/material';
import Image from 'next/image';
import jwt from 'jsonwebtoken';
import jasonwebtoken from 'jsonwebtoken';
import fonts from '@/app/utils/fonts';
import Layout from '@/app/components/layout/Layout';
import AdminLayout from '../../../componenets/AdminLayout';
import { isLogged } from '@/app/utils/isLogged';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/base';
import { useContext } from 'react';
import { PostContext } from '../../../../_app';
import PostEditor from '../+/Editor/PostEditorPage';
import { useRouter } from 'next/router';


export const EditorContext = createContext(); // a context to use the button from the sidenav to save the editor content



function EditPost() {
    isLogged();
    const { post, setPost } = useContext(PostContext);
    const router = useRouter();
    const { id } = post ? post : router.query.id;

    console.log(router.query.id);

    const query = {
        text: `SELECT * FROM posts WHERE id = $1`,
        values: [id],
    };

    console.log(query);

    // Empty dependency array means this effect runs once on component mount    
    return id ? <PostEditor /> : <p>Loading...</p>;
}

export default EditPost;

