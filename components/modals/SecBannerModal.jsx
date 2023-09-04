'use client';

import Modal from './Modal'
import FilterSide from './FilterSide';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import useSecBannerModal from '@/hooks/useSecBannerModal';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { getSecondBanner } from '@/utils/Requests';
import Pagination from '../UI & Layout/Pagination';
import { useRouter } from 'next/navigation';

const SecBannerModal = () => {

    const secBannerModal = useSecBannerModal()
    const [secondBannerData, setSecondBannerData] = useState()
    const [id, setId] = useState()
    const {push} = useRouter()

    useEffect(() => {
        getSecondBanner(setSecondBannerData,setId)
    }, [])
    

    const [gameData, setGameData] = useState()
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState()
    const [secondBanner, setSecondBanner] = useState(secondBannerData?._id)
    const [loading, setLoading] = useState(false)

    const handleUpdate = async() => {
        try {
            setLoading(true)
            const token = sessionStorage.getItem('adminToken');
            await axios.post(`${process.env.REQUEST}admin/updateSettings?id=${id}`,{secondBanner}, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            setLoading(false)
            toast.success('İkinci banner güncellendi.', {position: 'bottom-right'})
            secBannerModal.onClose()
            push('/oyunlar')
        } catch (error) {
            setLoading(false)
            toast.error(error?.response?.data?.message?.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
        }
    }

    const Game = ({
        data
    }) => {
        return (
            <div className='w-full h-[80px] rounded-xl bg-primary-dark p-[10px] shrink-0 gap-[10px] flex items-center'>
                <input 
                className='w-[16px] h-[16px] text-secondary'
                type="radio" 
                name="game" 
                checked={secondBanner === data?._id}
                onChange={(e) => setSecondBanner(e.target.value)}
                value={data?._id}
                id={data?._id} />
                <div className='h-full aspect-square rounded-xl overflow-hidden relative border-2 border-secondary shrink-0'>
                <Image alt={data?.name} src={data?.coverImage} priority fill quality={100} className="object-cover hover:scale-110 duration-300"/>
                </div>

                <div className='w-full grid grid-cols-4 gap-[10px]'>
                    <p className='text-white font-semibold text-[13px] line-clamp-1 w-full text-start'>
                        {data?.name}
                    </p>
                    <p className='text-secondary font-semibold text-[13px] line-clamp-1 w-full text-center'>
                        {data?.platform}
                    </p>
                    <p className='text-white font-semibold text-[13px] line-clamp-1 w-full text-center'>
                        {data?.category?.name}
                    </p>
                    <p className='text-secondary font-semibold text-[13px] line-clamp-1 w-full text-center'>
                        Stok:{data?.stok}
                    </p>
                </div>
            </div>
        )
    }

    const body = (
    <div className='flex gap-[20px] w-full'>
        <div className='flex flex-col w-[550px] gap-[10px]'>
                <FilterSide
                    setData={setGameData}
                    page={page}
                    setPage={setPage}
                    setTotalPages={setTotalPages}
                    totalPages={totalPages}
                />
                <div className='w-full h-[270px] 1336:h-[350px] overflow-y-auto flex flex-col gap-[10px] pr-[10px]'>
                    {gameData?.map((game, i) => (
                        <Game
                            key={i}
                            data={game}
                        />
                    ))}
                </div>

                <div className='flex justify-end'>
                {totalPages > 1 && 
                <Pagination
                siblingCount={5} 
                totalPages={totalPages} 
                onPageChange={setPage}
                size='35px'
                textSize='13px'
                />}
                </div>
        </div>

    </div>
)

  return (
    <Modal
        isOpen={secBannerModal.isOpen}
        onClose={secBannerModal.onClose}
        title='İkinci Banner'
        actionLabel='Banner Oluştur'
        body={body}
        width='auto'
        disabled={loading}
        onSubmit={() => handleUpdate()}
    />
  )
}

export default SecBannerModal