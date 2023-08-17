'use client';

import Image from "next/image";
import { BsFillTrash3Fill } from "react-icons/bs";
import Arrow from '@/public/icons/arrow.svg';
import { useState } from 'react';
import { Collapse } from "@mui/material";


const User = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col bg-primary-lighter rounded-xl overflow-hidden duration-300 hover:neon-blue">
        <div className="w-full h-[100px] flex items-center gap-[20px] p-[12px]">
        <div className="aspect-square h-full relative overflow-hidden shrink-0 group rounded-xl border-2 border-secondary">
            <Image alt="" src='/images/user.jpg' priority fill quality={100} className="object-cover hover:scale-110 duration-300"/>
        </div>

        <div className="w-full gap-[20px] grid grid-cols-5 text-[14px] font-semibold text-white">
            <span className="flex items-center">Emircan Yaşar</span>
            <span className="text-center text-secondary flex items-center justify-center">
                emircanny
            </span>
            <span className="text-center text-white flex items-center justify-center">
                yasar.emircann@gmail.com
            </span>

            <span className="text-center text-secondary flex items-center justify-center">
                25.08.2023
            </span>

            <div className="flex items-center justify-end gap-[20px] pr-[20px]">
                <button className="w-[40px] h-[40px] rounded-xl bg-graident-dark text-white flex items-center justify-center duration-300 hover:bg-secondary">
                    <BsFillTrash3Fill size={20}/>
                </button>

                <button
                onClick={() => setIsOpen(!isOpen)}
                >
                    <Arrow width='18' heihgt='20' fill='#8585f5' className={`${isOpen ? 'rotate-[270deg]' : 'rotate-90'} duration-300`}/>
                </button>
            </div>
        </div>
        </div>

       <Collapse in={isOpen} timeout='auto' unmountOnExit>
       <div className="p-[12px] border-t border-secondary grid grid-cols-3 gap-[20px]">
            <div className="flex flex-col gap-[15px] items-center">
                <span className="text-[13px] font-semibold text-white">
                    Sahip Olduğu Oyunlar
                </span>

                <div className="grid grid-cols-2 gap-[10px] w-full">
                    <div className="flex items-center gap-[15px] p-[10px] w-full rounded-xl text-[13px] font-semibold text-secondary bg-primary-dark">
                        <div className="aspect-square h-[30px] relative overflow-hidden shrink-0 group rounded-xl border-2 border-secondary">
                            <Image alt="" src='/images/fifa.jpg' priority fill quality={100} className="object-cover hover:scale-110 duration-300"/>
                        </div>

                        <span>Fifa 23</span>
                    </div>
                    <div className="flex items-center gap-[15px] p-[10px] w-full rounded-xl text-[13px] font-semibold text-secondary bg-primary-dark">
                        <div className="aspect-square h-[30px] relative overflow-hidden shrink-0 group rounded-xl border-2 border-secondary">
                            <Image alt="" src='/images/fifa.jpg' priority fill quality={100} className="object-cover hover:scale-110 duration-300"/>
                        </div>

                        <span>Fifa 23</span>
                    </div>
                </div>
            </div>

            {/* Friends */}
            <div className="flex flex-col gap-[15px] items-center">
                <span className="text-[13px] font-semibold text-white">
                    Arkadaşlar
                </span>

                <div className="grid grid-cols-2 gap-[10px] w-full">
                    <div className="flex items-center gap-[15px] p-[10px] w-full rounded-xl text-[13px] font-semibold text-secondary bg-primary-dark">
                        <div className="aspect-square h-[30px] relative overflow-hidden shrink-0 group rounded-xl border-2 border-secondary">
                            <Image alt="" src='/images/user.jpg' priority fill quality={100} className="object-cover hover:scale-110 duration-300"/>
                        </div>

                        <span>emircanny</span>
                    </div>
                    <div className="flex items-center gap-[15px] p-[10px] w-full rounded-xl text-[13px] font-semibold text-secondary bg-primary-dark">
                        <div className="aspect-square h-[30px] relative overflow-hidden shrink-0 group rounded-xl border-2 border-secondary">
                            <Image alt="" src='/images/user.jpg' priority fill quality={100} className="object-cover hover:scale-110 duration-300"/>
                        </div>

                        <span>emircanny</span>
                    </div>
                </div>
            </div>

            {/* Wishlist */}
            <div className="flex flex-col gap-[15px] items-center">
                <span className="text-[13px] font-semibold text-white">
                    İstek Listesi
                </span>

                <div className="grid grid-cols-2 gap-[10px] w-full">
                    <div className="flex items-center gap-[15px] p-[10px] w-full rounded-xl text-[13px] font-semibold text-secondary bg-primary-dark">
                        <div className="aspect-square h-[30px] relative overflow-hidden shrink-0 group rounded-xl border-2 border-secondary">
                            <Image alt="" src='/images/fifa.jpg' priority fill quality={100} className="object-cover hover:scale-110 duration-300"/>
                        </div>

                        <span>Fifa 23</span>
                    </div>
                    <div className="flex items-center gap-[15px] p-[10px] w-full rounded-xl text-[13px] font-semibold text-secondary bg-primary-dark">
                        <div className="aspect-square h-[30px] relative overflow-hidden shrink-0 group rounded-xl border-2 border-secondary">
                            <Image alt="" src='/images/fifa.jpg' priority fill quality={100} className="object-cover hover:scale-110 duration-300"/>
                        </div>

                        <span>Fifa 23</span>
                    </div>
                </div>
            </div>
        </div>
       </Collapse>
    </div>
  )
}

export default User