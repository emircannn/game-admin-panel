'use client'

import Input from "@/components/UI & Layout/Form/Input"
import { handleSelectImages } from "@/utils/selectImage"
import Image from "next/image"
import { BsUpload } from "react-icons/bs"
import { IoMdPhotos } from "react-icons/io"

const GameMedias = ({
    setPhotos,
    setPhotosPre,
    photosPre
}) => {

  return (
    <div className="w-full flex flex-col gap-[20px]">
        <h4 className="text-lg font-semibold text-white border-b border-secondary">
            Oyundan Görseller
        </h4>

        <div className="flex flex-col gap-[20px]">
            <div className="flex items-center gap-[20px]">
                <div className="w-full">
                <Input
                    placeholder='Youtube Linki'
                    width='100%'
                />
                </div>

                <button className="w-full h-[44px] rounded-xl overflow-hidden relative bg-primary-lighter flex items-center px-[10px] text-secondary justify-between">
                    Görsel Ekleyin (En fazla 5 tane*)
                    <BsUpload className="text-secondary" size={20}/>

                    <input 
                    type="file" 
                    multiple
                    onChange={(e) => handleSelectImages(e,setPhotos, setPhotosPre)}
                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' />
                </button>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-[20px]">
            <div className="w-full rounded-xl aspect-[3/2] border-2 border-secondary relative overflow-hidden flex items-center justify-center">
                {photosPre?.[0] ? <Image alt='photos' src={photosPre?.[0]} fill quality={100} className='object-cover'/> 
                : <IoMdPhotos size={40} className='text-secondary'/>}
            </div>

            <div className="grid-cols-2 grid-rows-2 grid gap-[20px]">
                <div className="w-full rounded-xl h-full border-2 border-secondary relative overflow-hidden flex items-center justify-center">
                {photosPre?.[1] ? <Image alt='photos' src={photosPre?.[1]} fill quality={100} className='object-cover'/> 
                : <IoMdPhotos size={40} className='text-secondary'/>}
                </div>
                <div className="w-full rounded-xl h-full border-2 border-secondary relative overflow-hidden flex items-center justify-center">
                {photosPre?.[2] ? <Image alt='photos' src={photosPre?.[2]} fill quality={100} className='object-cover'/> 
                : <IoMdPhotos size={40} className='text-secondary'/>}
                </div>
                <div className="w-full rounded-xl h-full border-2 border-secondary relative overflow-hidden flex items-center justify-center">
                {photosPre?.[3] ? <Image alt='photos' src={photosPre?.[3]} fill quality={100} className='object-cover'/> 
                : <IoMdPhotos size={40} className='text-secondary'/>}
                </div>
                <div className="w-full rounded-xl h-full border-2 border-secondary relative overflow-hidden flex items-center justify-center">
                {photosPre?.[4] ? <Image alt='photos' src={photosPre?.[4]} fill quality={100} className='object-cover'/> 
                : <IoMdPhotos size={40} className='text-secondary'/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default GameMedias