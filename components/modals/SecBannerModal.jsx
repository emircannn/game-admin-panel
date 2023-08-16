'use client';

import Modal from './Modal'
import FilterSide from './FilterSide';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import useSecBannerModal from '@/hooks/useSecBannerModal';

const SecBannerModal = () => {

    const secBannerModal = useSecBannerModal()

    const Game = () => {
        return (
            <div className='w-full h-[80px] rounded-xl bg-primary-dark p-[10px] shrink-0 gap-[10px] flex items-center'>
                <input 
                className='w-[16px] h-[16px] text-secondary'
                type="radio" 
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
    />
  )
}

export default SecBannerModal