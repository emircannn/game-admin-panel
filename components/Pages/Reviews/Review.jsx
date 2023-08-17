'use client';

import StyledRated from "@/components/UI & Layout/StyledRated";
import Image from "next/image";
import { BsFillTrash3Fill } from "react-icons/bs";
import Arrow from '@/public/icons/arrow.svg';
import { useState } from 'react';
import { Collapse } from "@mui/material";


const Review = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col bg-primary-lighter rounded-xl overflow-hidden duration-300 hover:neon-blue">
        <div className="w-full h-[100px] flex items-center gap-[20px] p-[12px]">
        <div className="aspect-square h-full relative overflow-hidden shrink-0 group rounded-xl border-2 border-secondary">
            <Image alt="" src='/images/fifa.jpg' priority fill quality={100} className="object-cover hover:scale-110 duration-300"/>
        </div>

        <div className="w-full gap-[20px] grid grid-cols-5 text-[14px] font-semibold text-white">
            <span className="flex items-center">Fifa 23</span>
            <span className="text-center text-secondary flex items-center justify-center">
                emircanny
            </span>
            <span className="flex items-center justify-center">
                <StyledRated
                    value={4}
                />
            </span>

            <span className="text-center text-white flex items-center justify-center">
                25.08.2023
            </span>

            <div className="flex items-center justify-end gap-[20px] pr-[20px]">
                <button className="w-[40px] h-[40px] rounded-xl bg-graident-dark text-white flex items-center justify-center duration-300 hover:bg-secondary">
                    <BsFillTrash3Fill size={20}/>
                </button>

                <button
                onClick={() => setIsOpen(!isOpen)}
                >
                    <Arrow width='18' heihgt='30' fill='#8585f5' className={`${isOpen ? 'rotate-[270deg]' : 'rotate-90'} duration-300`}/>
                </button>
            </div>
        </div>
        </div>

       <Collapse in={isOpen} timeout='auto' unmountOnExit>
       <div className="p-[12px] border-t border-secondary">
            <p className="text-[14px] text-white font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, eos ipsa porro modi deserunt animi, omnis in vel vitae, enim aspernatur possimus placeat vero blanditiis.
            </p>
        </div>
       </Collapse>
    </div>
  )
}

export default Review