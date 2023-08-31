'use client';

import Button from '@/components/UI & Layout/Form/Button';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor'

const EditorWrapper = ({
  setData,
  data
}) => {
  return (
    <div className="w-full flex flex-col gap-[10px]">
      <h4 className="text-lg font-semibold text-white border-b border-secondary">
            Açıklama & Oyun Hakkında
        </h4>
      <CKEditor
        editor={ Editor }
        data={data}
        onChange={ (event, editor) => {
          const data = editor.getData();
          setData(data);
        } }
      /> 
    </div>
  )
}

export default EditorWrapper