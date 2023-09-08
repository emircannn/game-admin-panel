'use client';

import StyledRated from "@/components/UI & Layout/StyledRated";
import Image from "next/image";
import { BsFillTrash3Fill } from "react-icons/bs";
import Arrow from '@/public/icons/arrow.svg';
import { useState } from 'react';
import { Collapse } from "@mui/material";
import { dateFormater } from "@/utils/helper";
import axios from "axios";
import { toast } from "react-hot-toast";


const Review = ({
    data
}) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleDeleteReview = async(id) => {
        try {
          const token = sessionStorage.getItem('adminToken');
          const res = await axios.post(`${process.env.REQUEST}review/delete?id=${id}`,{}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
            })
            if(!res.data.error) {
              toast.success(res.data.message, {position: 'bottom-right'})
              reload()
          }
        } catch (error) {
          reload()
          toast.error(error?.response?.data?.message, {position: 'bottom-right'})
        }
      }

  return (
    <div className="flex flex-col bg-primary-lighter rounded-xl overflow-hidden duration-300 hover:neon-blue">
        <div className="w-full h-[100px] flex items-center gap-[20px] p-[12px]">
        <div className="aspect-square h-full relative overflow-hidden shrink-0 group rounded-xl border-2 border-secondary">
            <Image alt={data.seo} src={data.game.coverImage} priority fill quality={100} className="object-cover hover:scale-110 duration-300"/>
        </div>

        <div className="w-full gap-[20px] grid grid-cols-5 text-[14px] font-semibold text-white">
            <span className="flex items-center">{data.game?.name}</span>
            <span className="text-center text-secondary flex items-center justify-center">
                {data?.user?.username}
            </span>
            <span className="flex items-center justify-center">
                <StyledRated
                    value={data.rate}
                />
            </span>

            <span className="text-center text-white flex items-center justify-center">
                {dateFormater(data.createdAt)}
            </span>

            <div className="flex items-center justify-end gap-[20px] pr-[20px]">
                <button 
                onClick={() => handleDeleteReview(data?._id)}
                className="w-[40px] h-[40px] rounded-xl bg-graident-dark text-white flex items-center justify-center duration-300 hover:bg-secondary">
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
                {data.review}
            </p>
        </div>
       </Collapse>
    </div>
  )
}

export default Review