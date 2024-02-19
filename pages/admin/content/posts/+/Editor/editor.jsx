import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useContext } from 'react';
import { PostContext } from '../../../../../_app';

function MyEditor() {

    const { post, setPost } = useContext(PostContext);

    return (
        <Editor
            apiKey='wyyobeyiysoez1w1u34x4r7n7vq7ggeqmlaesrv5vfix33dq'
            value={post.content}
            init={{
                height: '100%',
                plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tinycomments tableofcontents footnotes autocorrect typography inlinecss',
                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | checklist numlist bullist indent outdent |',
                tinycomments_mode: 'embedded',
                tinycomments_author: 'Author name',
                placeholder: "Írj valami csodásat :)",
                mergetags_list: [
                    { value: 'First.Name', title: 'First Name' },
                    { value: 'Email', title: 'Email' },
                ],
            }}
            // a tinymce-nek van saját függvénye ami a .getcontent() és a .setcontent() függvényeket használja
            // a késöbbiekben érdemes lenne ezeket használni a post.content helyett
            onEditorChange={(content, editor) => {
                setPost(prevPost => ({ ...prevPost, content: content }));
                console.log(post);
            }}


        />
    );
}

export default MyEditor;

/*

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = dynamic(
    () => import('react-draft-wysiwyg').then(mod => mod.Editor),
    { ssr: false }
);

function MyEditor() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };

    return (
        <div style={{ padding: '5px', border: '1px solid black' }}>
            <Editor
                editorState={editorState}
                wrapperClassName="wrapper"
                editorClassName="editor"
                onEditorStateChange={onEditorStateChange}
            />
            <style jsx>{`
        .editor {
          background-color: white;
          min-height: 200px;
          resize: both;
          overflow: auto;
        }
      `}</style>
        </div>
    );
}

export default MyEditor;

*/