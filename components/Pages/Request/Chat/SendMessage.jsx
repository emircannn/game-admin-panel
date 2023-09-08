'use client'

import Button from "@/components/UI & Layout/Form/Button"
import Input from "@/components/UI & Layout/Form/Input"
import { handleSelectImage } from "@/utils/selectImage"
import {ImAttachment} from 'react-icons/im'

const SendMessage = ({
    setPhoto,
    setPhotoPre,
    setContent,
    content,
    handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full p-[15px] relative overflow-x-hidden">
        <div className="flex items-center justify-end">
            <button className="flex items-center gap-[10px] text-white duration-300 hover:text-secondary group relative">
                <ImAttachment size={20} className="group-hover:text-secondary text-white duration-300 cursor-pointer"/>
                Dosya Yükle
                <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0" onChange={(e) => handleSelectImage(e,setPhoto, setPhotoPre)}/>
            </button>
        </div>

        <div className="flex items-center gap-[20px]">
            <div className="w-full">
            <Input
                width='100%'
                minWidth='100%'
                placeholder='Bir şeyler yaz...'
                onChange={(e) => setContent(e.target.value)}
                value={content}
            />
            </div>

            <Button
                title='Gönder'
                type='submit'
            />
        </div>
    </form>
  )
}

export default SendMessage