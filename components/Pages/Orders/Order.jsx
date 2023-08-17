'use client';

import Image from "next/image";
import Arrow from '@/public/icons/arrow.svg';
import { useState } from 'react';
import { Collapse } from "@mui/material";
import Button from "@/components/UI & Layout/Form/Button";
import Textarea from "@/components/UI & Layout/Form/Textarea";


const Order = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col bg-primary-lighter rounded-xl overflow-hidden duration-300 hover:neon-blue">
        <div className="w-full h-[100px] flex items-center gap-[20px] p-[12px]">
        <div className="aspect-square h-full relative overflow-hidden shrink-0 group rounded-xl border-2 border-secondary">
            <Image alt="" src='/images/fifa.jpg' priority fill quality={100} className="object-cover hover:scale-110 duration-300"/>
        </div>

        <div className="w-full gap-[20px] grid grid-cols-5 text-[14px] font-semibold text-white">
            <span className="flex items-center">emircanny</span>
            <span className="text-center text-secondary flex items-center justify-center">
            yasar.emircann@gmail.com
            </span>
            <span className="text-center text-white flex items-center justify-center">
                280.00 TL
            </span>

            <span className="text-center text-secondary flex items-center justify-center">
                25.08.2023
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
       <div className="p-[12px] border-t border-secondary grid grid-cols-2 gap-[20px]">
            <div className="flex flex-col gap-[15px] items-center">
                <span className="text-[13px] font-semibold text-white">
                    Sipariş Verilen Oyunlar
                </span>
                <div className="w-full grid grid-cols-2 gap-[10px]">
                    <div className="flex items-center justify-between gap-[15px] p-[10px] w-full rounded-xl text-[13px] font-semibold text-secondary bg-primary-dark">
                        <div className="flex items-center gap-[15px]">
                        <div className="aspect-square h-[30px] relative overflow-hidden shrink-0 group rounded-xl border-2 border-secondary">
                            <Image alt="" src='/images/fifa.jpg' priority fill quality={100} className="object-cover hover:scale-110 duration-300"/>
                        </div>

                        <span>Fifa 23</span>
                        </div>

                        <span>x3</span>
                    </div>
                    <div className="flex items-center justify-between gap-[15px] p-[10px] w-full rounded-xl text-[13px] font-semibold text-secondary bg-primary-dark">
                        <div className="flex items-center gap-[15px]">
                        <div className="aspect-square h-[30px] relative overflow-hidden shrink-0 group rounded-xl border-2 border-secondary">
                            <Image alt="" src='/images/fifa.jpg' priority fill quality={100} className="object-cover hover:scale-110 duration-300"/>
                        </div>

                        <span>Fifa 23</span>
                        </div>

                        <span>x2</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-[15px] items-center">
                <span className="text-[13px] font-semibold text-white">
                    Erişim Bilgilerini Teslim Et
                </span>

                <Textarea
                />

                <Button
                    title='Erişim Bilgilerini Teslim Et'
                    height="40px"
                    wfull
                />
                
                <div>

                </div>
            </div>
        </div>
       </Collapse>
    </div>
  )
}

export default Order