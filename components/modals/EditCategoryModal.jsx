'use client';

import Modal from './Modal'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {IoMdPhotos} from 'react-icons/io'
import { BsUpload } from 'react-icons/bs';
import { handleSelectImage } from '@/utils/selectImage';
import Input from '../UI & Layout/Form/Input';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { getCategory } from '@/utils/Requests';

const EditCategoryModal = ({
    categoryModal,
    setCategoryModal,
    data,
    setData,
    setAllCategories
}) => {
    
    const [banner, setBanner] = useState()
    const [bannerPre, setBannerPre] = useState()
    const [character, setCharacter] = useState()
    const [characterPre, setCharacterPre] = useState()
    const [name, setName] = useState()
    const [loading, setLoading] = useState(false)
    
    const handleUpdate= async () => {
        try {
            if(name) {
            const token = sessionStorage.getItem('adminToken');
            const formData = new FormData();
            formData.append('banner', banner)
            formData.append('character', character)
            const res = await axios.post(`${process.env.REQUEST}category/update?id=${data?._id}&name=${name}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
                })
            toast.success(res?.data?.message, {position: "bottom-right"})
            setLoading(false)
            setCategoryModal(false)
            setData()
            getCategory(setAllCategories)
            setName()
            } else {
            const token = sessionStorage.getItem('adminToken');
            const formData = new FormData();
            formData.append('banner', banner)
            formData.append('character', character)
            const res = await axios.post(`${process.env.REQUEST}category/update?id=${data?._id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
                })
            toast.success(res?.data?.message, {position: "bottom-right"})
            setLoading(false)
            setCategoryModal(false)
            setData()
            getCategory(setAllCategories)
            setName()
        }
    } catch (error) {
        setLoading(false)
        toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
}

    useEffect(() => {
        setBannerPre(data?.banner)
        setCharacterPre(data?.character)
    }, [data])
    

    const body = (
    <div className='flex gap-[20px] w-[400px] flex-col'>
        <div className='w-full h-[200px] rounded-xl relative overflow-hidden border-2 border-secondary flex items-center justify-center cursor-pointer'>
            {!bannerPre && !characterPre ? <IoMdPhotos size={40} className='text-secondary'/> : null}

            {bannerPre && <Image alt='char' src={bannerPre} fill quality={100} className='object-cover'/>}

            {characterPre && 
            <span className='absolute w-[35%] h-full top-0 right-0 z-50'>
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
        isOpen={categoryModal}
        onClose={() => setCategoryModal(false)}
        title='Kategori Düzenle'
        actionLabel='Kategori Düzenle'
        onSubmit={() => handleUpdate()}
        body={body}
        width='auto'
        disabled={loading}
    />
  )
}

export default EditCategoryModal