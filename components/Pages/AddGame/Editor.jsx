'use client';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor'

const EditorWrapper = () => {
  return (
    <div className="w-full flex flex-col gap-[10px]">
      <h4 className="text-lg font-semibold text-white border-b border-secondary">
            Açıklama & Oyun Hakkında
        </h4>
      <CKEditor
        editor={ Editor }
        data="<p>Bir yazı girin...</p>"
        onChange={ (event, editor) => {
          const data = editor.getData();
          console.log( { event, editor, data } );
        } }
      /> 
    </div>
  )
}

export default EditorWrapper