'use client';

import useDiscountModal from '@/hooks/useDiscountModal'
import Modal from './Modal'
import FilterSide from './FilterSide';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Calendar from '../UI & Layout/Form/Calendar';
import Input from '../UI & Layout/Form/Input';


const DiscountModal = () => {

    const discountModal = useDiscountModal()
    
    const [isChecked, setIsChecked] = useState(false);
    const [selectedRange, setSelectedRange] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      

      const handleSelect = (ranges) => {
        setSelectedRange([ranges.selection]);
      };
    

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

    const Game = () => {
        return (
            <div className='w-full h-[80px] rounded-xl bg-primary-dark p-[10px] shrink-0 gap-[10px] flex items-center'>
                <input 
                className='w-[16px] h-[16px] text-secondary'
                type="checkbox" 
                name="game" 
                id="" />
                <div className='h-full aspect-square rounded-xl overflow-hidden relative border-2 border-secondary shrink-0'>
                <Image alt="" src='/images/fifa.jpg' priority fill quality={100} className="object-cover hover:scale-110 duration-300"/>
                </div>

                <div className='w-full grid grid-cols-4 gap-[10px]'>
                    <p className='text-white font-semibold text-[13px] line-clamp-1 w-full text-start'>
                        Fifa 23
                    </p>
                    <p className='text-secondary font-semibold text-[13px] line-clamp-1 w-full text-center'>
                        EA
                    </p>
                    <p className='text-white font-semibold text-[13px] line-clamp-1 w-full text-center'>
                        Spor
                    </p>
                    <p className='text-secondary font-semibold text-[13px] line-clamp-1 w-full text-center'>
                        Stok:10
                    </p>
                </div>
            </div>
        )
    }

    const body = (
    <div className='flex gap-[20px] w-full'>
        <div className='flex flex-col w-[550px] gap-[10px]'>
                <FilterSide/>
                <div className='w-full h-[270px] 1336:h-[350px] overflow-y-auto flex flex-col gap-[10px] pr-[10px]'>
                    <Game/>
                    <Game/>
                    <Game/>
                    <Game/>
                    <Game/>
                </div>

                <div className='flex items-center justify-between w-full mt-[5px]'>
                    <div className='items-center flex gap-[10px] px-[10px]'>
                    <input 
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className='w-[18px] h-[18px] text-secondary'
                        type="checkbox" 
                        name="game" 
                        id="" />

                    <p className='text-white text-[13px] line-clamp-1 w-full text-start'>
                        Süreli İndirim
                    </p>
                    </div>

                    <div className='text-[14px] text-white font-medium flex items-center gap-[10px]'>
                        %
                        <Input
                            placeholder='%10'
                            textCenter
                            width='80px'
                            height='40px'
                        />
                    </div>
                </div>
        </div>

        {/* DatePicke */}
        {isChecked && 
            <div className='w-[350px]'>
                <Calendar
                    onChange={handleSelect}
                    value={selectedRange}
                />
            </div>
        }
    </div>
)

  return (
    <Modal
        isOpen={discountModal.isOpen}
        onClose={discountModal.onClose}
        title='İndirim Ekle'
        actionLabel='İndirim Oluştur'
        body={body}
        width='auto'
    />
  )
}

export default DiscountModal