'use client';

import Modal from './Modal'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import useAddCategory from '@/hooks/useAddCategory';
import {IoMdPhotos} from 'react-icons/io'
import { BsUpload } from 'react-icons/bs';
import { handleSelectImage } from '@/utils/selectImage';
import Input from '../UI & Layout/Form/Input';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { getCategory } from '@/utils/Requests';

const AddCategoryModal = ({
    setData
}) => {

    const categoryModal = useAddCategory()
    const [banner, setBanner] = useState()
    const [bannerPre, setBannerPre] = useState()
    const [character, setCharacter] = useState()
    const [characterPre, setCharacterPre] = useState()
    const [name, setName] = useState()
    const [loading, setLoading] = useState(false)

    const handleCreate= async () => {
        try {
            if(name && character && banner) {
                const token = sessionStorage.getItem('adminToken');
            const formData = new FormData();
            formData.append('banner', banner)
            formData.append('character', character)
            formData.append('name', name)
            const res = await axios.post(`${process.env.REQUEST}category/create`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
                })
            toast.success(res?.data?.message, {position: "bottom-right"})
            setLoading(false)
            categoryModal.onClose()
            getCategory(setData)
            } else {
                toast.error('Tüm alanlar zorunludur.', {position: 'bottom-right'})
            }
        } catch (error) {
            setLoading(false)
            toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
        }
    }

    const body = (
    <div className='flex gap-[20px] w-[400px] flex-col'>
        <div className='w-full h-[200px] rounded-xl relative overflow-hidden border-2 border-secondary flex items-center justify-center cursor-pointer'>
            {!character && !banner ? <IoMdPhotos size={40} className='text-secondary'/> : null}

            {banner && <Image alt='char' src={bannerPre} fill quality={100} className='object-cover'/>}

            {character && <span className='absolute w-[35%] h-full top-0 right-0 z-50'>
                <Image alt='char' src={characterPre} fill quality={100} className='object-contain object-bottom'/>
            </span>}
        </div>

        <div className='w-full grid grid-cols-2 gap-[20px]'>
            <button className='text-secondary text-[13px] font-medium flex items-center justify-between p-[10px] rounded-xl bg-primary-dark h-[40px] relative'>
                Banner Ekle
                <BsUpload size={18} className='text-secondary'/>
                <input 
                onChange={(e) => handleSelectImage(e, setBanner, setBannerPre)}
                type="file" 
                className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' />
            </button>
            <button className='text-secondary text-[13px] font-medium flex items-center justify-between p-[10px] rounded-xl bg-primary-dark h-[40px] relative'>
                Karakter Ekle
                <BsUpload size={18} className='text-secondary'/>
                <input 
                onChange={(e) => handleSelectImage(e, setCharacter, setCharacterPre)}
                type="file" 
                className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' />
            </button>
        </div>

        <Input
            placeholder='Kategori Adı'
            onChange={(e) => setName(e.target.value)}
            value={name}
        />
    </div>
)

  return (
    <Modal
        isOpen={categoryModal.isOpen}
        onClose={categoryModal.onClose}
        title='Kategori Ekle'
        actionLabel='Kategori Oluştur'
        onSubmit={() => handleCreate()}
        body={body}
        width='auto'
        disabled={loading}
    />
  )
}

export default AddCategoryModal