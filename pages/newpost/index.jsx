import * as React from 'react';
import { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from '@/app/components/layout/Layout';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./AddPost.css";
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import SideNav from '@/app/components/nav/sideNav';

const Editor = dynamic(
    () => import('react-draft-wysiwyg').then(module => module.Editor),
    { ssr: false }
);

function AddPost() {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    const handleEditorChange = (state) => {
        setEditorState(state);

        const rawContentState = convertToRaw(editorState.getCurrentContent());
        const markup = draftToHtml(rawContentState);
        console.log(markup);
    };

    return (
        <>
        <SideNav />
        <Grid sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
            <Box><h1>Valami</h1></Box>
            <Box>
                <Layout>
                    <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={handleEditorChange}
                    />
                </Layout>
            </Box>
            <Box></Box>
        </Grid>
        </>
    );
}

export default AddPost;