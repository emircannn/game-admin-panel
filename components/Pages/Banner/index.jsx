'use client'

import useFirstModalBanner from '@/hooks/useFirstBannerModal';
import useSecBannerModal from '@/hooks/useSecBannerModal';
import { getFirstBanner, getSecondBanner } from '@/utils/Requests';
import { formatter } from '@/utils/helper';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import {MdChangeCircle} from 'react-icons/md'


const BannerPage = () => {

    const firstBannerModal = useFirstModalBanner()
    const secBannerModal = useSecBannerModal()

    const [secondBannerData, setSecondBannerData] = useState()
    const [firstBannerData, setFirstBannerData] = useState() 

    useEffect(() => {
        getSecondBanner(setSecondBannerData)
    }, [])

    useEffect(() => {
        getFirstBanner(setFirstBannerData)
    }, [])

  return (
    <div className='flex flex-col gap-[20px]'>
        <div className='pb-[10px] flex items-center justify-between border-b border-secondary'>
            <h3 className='text-white font-semibold text-lg'>
                Birinci Banner
            </h3>

            <button
            onClick={() => firstBannerModal.onOpen()}>
                <MdChangeCircle size={40} className='text-secondary hover:text-white transition-colors duration-300 delay-100'/>
            </button>
        </div>

        <div className='w-full h-[300px] relative overflow-hidden clip-polygon'>
            <Image alt={firstBannerData?.seo} src={firstBannerData?.bannerImage} fill quality={100} className='object-cover'/>

            <span className='absolute top-0 left-0 w-full h-full hover:opacity-100 opacity-0 duration-300 bg-black/50 flex items-center justify-center flex-col gap-[10px]'>
            <h3 className='text-white flex flex-col font-semibold text-[20px] 1140:text-[40px] uppercase'>{firstBannerData?.name}</h3>
            <div className='flex items-center gap-[10px]'>
                {firstBannerData?.discountRate && 
                <span className='text-white font-semibold text-[12px] bg-gradient-to-r from-graident to-secondary 450:px-[8px] 450:py-[4px] px-[4px] py-[2px] rounded-md'>
                -{firstBannerData?.discountRate}%
                </span>}
                <span className='text-white font-semibold text-[14px] 1140:text-[20px]'>
                {firstBannerData?.discountPrice ? formatter.format(firstBannerData?.discountPrice) : 
                formatter.format(firstBannerData?.price)}</span>
            </div>
            </span>
        </div>
        {/* Seccond Banner */}
        <div className='pb-[10px] flex items-center justify-between border-b border-secondary'>
            <h3 className='text-white font-semibold text-lg'>
                İkinci Banner
            </h3>

            <button
            onClick={() => secBannerModal.onOpen()}
            >
                <MdChangeCircle size={40} className='text-secondary hover:text-white transition-colors duration-300 delay-100'/>
            </button>
        </div>

        <div className='w-full h-[300px] relative overflow-hidden clip-polygon'>
            <Image alt={secondBannerData?.seo} src={secondBannerData?.bannerImage} fill quality={100} className='object-cover'/>

            <span className='absolute top-0 left-0 w-full h-full hover:opacity-100 opacity-0 duration-300 bg-black/50 flex items-center justify-center flex-col gap-[10px]'>
            <h3 className='text-white flex flex-col font-semibold text-[20px] 1140:text-[40px] uppercase'>{secondBannerData?.name}</h3>
            <div className='flex items-center gap-[10px]'>
                {secondBannerData?.discountRate && 
                <span className='text-white font-semibold text-[12px] bg-gradient-to-r from-graident to-secondary 450:px-[8px] 450:py-[4px] px-[4px] py-[2px] rounded-md'>
                -{secondBannerData?.discountRate}%
                </span>}
                <span className='text-white font-semibold text-[14px] 1140:text-[20px]'>
                {secondBannerData?.discountPrice ? formatter.format(secondBannerData?.discountPrice) : 
                formatter.format(secondBannerData?.price)}</span>
            </div>
            </span>
        </div>
    </div>
  )
}

export default BannerPage