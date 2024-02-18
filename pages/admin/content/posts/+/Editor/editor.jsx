import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useContext } from 'react';
import { EditorContext } from '../index';

function MyEditor() {


    const { setEditorContent } = useContext(EditorContext);

    const handleEditorChange = (content) => {
        setEditorContent(content);
    };



    return (
        <Editor
            apiKey='wyyobeyiysoez1w1u34x4r7n7vq7ggeqmlaesrv5vfix33dq'
            init={{
                height: '100%',
                plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tinycomments tableofcontents footnotes autocorrect typography inlinecss',
                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | checklist numlist bullist indent outdent |',
                tinycomments_mode: 'embedded',
                tinycomments_author: 'Author name',
                mergetags_list: [
                    { value: 'First.Name', title: 'First Name' },
                    { value: 'Email', title: 'Email' },
                ],
            }}
            initialValue="Welcome to TinyMCE!"
            onEditorChange={handleEditorChange}
        />
    );
}

export default MyEditor;