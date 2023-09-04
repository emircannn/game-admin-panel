'use client';

import Image from "next/image";
import Arrow from '@/public/icons/arrow.svg';
import { useState } from 'react';
import { Collapse } from "@mui/material";
import { dateFormater, formatter } from "@/utils/helper";


const Cart = ({
    data
}) => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col bg-primary-lighter rounded-xl overflow-hidden duration-300 hover:neon-blue">
        <div className="w-full h-[100px] flex items-center gap-[20px] p-[12px]">
        <div className="aspect-square h-full relative overflow-hidden shrink-0 group rounded-xl border-2 border-secondary">
            <Image alt="" src={data?.user?.image ? data?.user?.image : '/images/user.jpg'} priority fill quality={100} className="object-cover hover:scale-110 duration-300"/>
        </div>

        <div className="w-full gap-[20px] grid grid-cols-5 text-[14px] font-semibold text-white">
            <span className="flex items-center">{data?.user?.username}</span>
            <span className="text-center text-secondary flex items-center justify-center">
            {data?.user?.email}
            </span>
            <span className="text-center text-white flex items-center justify-center flex-col">
                <span className={`${data?.subtotal > data?.total && 'line-through'}`}>
                    {formatter.format(data.subtotal)}
                </span>
                {data?.subtotal > data?.total && <span>
                    {formatter.format(data.total)}
                </span>}
            </span>

            <span className="text-center text-secondary flex items-center justify-center">
                {dateFormater(data?.createdAt)}
            </span>

            <div className="flex items-center justify-end gap-[20px] pr-[20px]">
                <button
                onClick={() => setIsOpen(!isOpen)}
                >
                    <Arrow width='18' heihgt='20' fill='#8585f5' className={`${isOpen ? 'rotate-[270deg]' : 'rotate-90'} duration-300`}/>
                </button>
            </div>
        </div>
        </div>

       <Collapse in={isOpen} timeout='auto' unmountOnExit>
            <div className="flex flex-col gap-[15px] items-center p-[12px] border-t border-secondary">
                <span className="text-[13px] font-semibold text-white">
                    Sepetteki Oyunlar
                </span>
                <div className="w-full grid grid-cols-3 gap-[10px]">
                    {data?.game?.map((item, i) => (
                        <div 
                        key={i}
                        className="flex items-center justify-between gap-[15px] p-[10px] w-full rounded-xl text-[13px] font-semibold text-secondary bg-primary-dark">
                        <div className="flex items-center gap-[15px]">
                        <div className="aspect-square h-[30px] relative overflow-hidden shrink-0 group rounded-xl border-2 border-secondary">
                            <Image alt="" src={item?.coverImage} priority fill quality={100} className="object-cover hover:scale-110 duration-300"/>
                        </div>

                        <span>{item?.name}</span>
                        </div>
                    </div>
                    ))}
                </div>
        </div>
       </Collapse>
    </div>
  )
}

export default Cart