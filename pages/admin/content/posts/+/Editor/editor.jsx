
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import './quill.snow.css'; // Import Quill styles

import { Box } from '@mui/system';


const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });


export default function Editor() {
    const [content, setContent] = useState('');


    const quillModules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            [{ align: [] }],
            [{ color: [] }],
            ['code-block'],
            ['clean'],
        ],
    };


    const quillFormats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'link',
        'image',
        'align',
        'color',
        'code-block',
    ];


    const handleEditorChange = (newContent) => {
        setContent(newContent);
    };


    return (

        <Box>
            <QuillEditor
                value={content}
                onChange={handleEditorChange}
                modules={quillModules}
                formats={quillFormats}
                style={{
                    backgroundColor: '#fff',
                    width: '100%',
                    height: '100%',

                }}
            />
        </Box>

    );
}


