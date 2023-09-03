'use client';

import useDiscountModal from '@/hooks/useDiscountModal'
import Modal from './Modal'
import FilterSide from './FilterSide';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Calendar from '../UI & Layout/Form/Calendar';
import Input from '../UI & Layout/Form/Input';
import { getDiscountedGames, getGames } from '@/utils/Requests';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Pagination from '../UI & Layout/Pagination';


const DiscountModal = ({
    setData,
    setDisTotalPage
}) => {

    const discountModal = useDiscountModal()
    
    const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [discountDate, setDiscountDate] = useState([
        {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
        }
      ]);
      

    const handleSelect = (ranges) => {
        setDiscountDate([ranges.selection]);
    };
    
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

    const [gameData, setGameData] = useState([])
    const [games, setGames] = useState([])
    const [discountRate, setDiscountRate] = useState()
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState()

    const handleSelectedGames = (e) => {
        const item = e.target.value;
      
        if (e.target.checked) {
            setGames([...games, item]);
        } else {
            setGames(games.filter((selectedItem) => selectedItem !== item));
        }
      };

    const Game = ({
        data
    }) => {
        return (
            <div className='w-full h-[80px] rounded-xl bg-primary-dark p-[10px] shrink-0 gap-[10px] flex items-center'>
                <input 
                className='w-[16px] h-[16px] text-secondary'
                type="checkbox" 
                name="game" 
                value={data._id}
                onChange={handleSelectedGames}
                checked={games?.includes(data._id)}
                id={data._id}/>
                <div className='h-full aspect-square rounded-xl overflow-hidden relative border-2 border-secondary shrink-0'>
                <Image alt="" src={data?.coverImage} priority fill quality={100} className="object-cover hover:scale-110 duration-300"/>
                </div>

                <div className='w-full grid grid-cols-4 gap-[10px]'>
                    <p className='text-white font-semibold text-[13px] line-clamp-1 w-full text-start'>
                        {data?.name}
                    </p>
                    <p className='text-secondary font-semibold text-[13px] line-clamp-1 w-full text-center'>
                        {data?.platform}
                    </p>
                    <p className='text-white font-semibold text-[13px] line-clamp-1 w-full text-center'>
                        {data?.category.name}
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
                    page={page}
                    setData={setGameData}
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
                {totalPages > 1 && <Pagination 
                siblingCount={5} 
                totalPages={totalPages} 
                onPageChange={setPage}
                size='35px'
                textSize='13px'
                />}
                </div>

                <div className='flex items-center justify-between w-full mt-[5px]'>
                    <div className='items-center flex gap-[10px] px-[10px]'>
                    <input 
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className='w-[18px] h-[18px] text-secondary'
                        type="checkbox" 
                        name="disc"  />

                    <p className='text-white text-[13px] line-clamp-1 w-full text-start'>
                        Süreli İndirim
                    </p>
                    </div>

                    <div className='text-[14px] text-white font-medium flex items-center gap-[10px]'>
                        %
                        <Input
                            placeholder='10'
                            textCenter
                            width='80px'
                            height='40px'
                            type='number'
                            onChange={(e) => setDiscountRate(e.target.value)}
                        /> 
                    </div>
                </div>
        </div>

        {/* DatePicke */}
        
            <div className='w-[350px]'>
                <Calendar
                    onChange={handleSelect}
                    value={discountDate}
                />
            </div>
    </div>
)

    const handleSubmit = async() => {
        try {
            if(games, discountRate) {
                setLoading(true)
            const form = {
                games, 
                discountRate, 
                discountDate: isChecked ? discountDate[0].endDate : undefined
            }
            const token = sessionStorage.getItem('adminToken');
            const res = await axios.post(`${process.env.REQUEST}admin/setDiscount`,form, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        toast.success(res?.data?.message, {position: 'bottom-right'})
        setLoading(false)
        getDiscountedGames(setData, setDisTotalPage)
        discountModal.onClose()
        setGames([])
        setDiscountDate([{startDate: new Date(),endDate: new Date(),key: 'selection'}])
    }
            else {
                toast.error('Zorunlu Alanları doldurunuz.', {position: 'bottom-right'})
            }
        } catch (error) {
            setLoading(false)
            toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
        }
    }

  return (
    <Modal
        isOpen={discountModal.isOpen}
        onClose={discountModal.onClose}
        title='İndirim Ekle'
        actionLabel='İndirim Oluştur'
        body={body}
        width='auto'
        onSubmit={() => handleSubmit()}
        disabled={loading}
    />
  )
}

export default DiscountModal