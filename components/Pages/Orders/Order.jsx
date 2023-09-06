'use client';

import Image from "next/image";
import Arrow from '@/public/icons/arrow.svg';
import { useState } from 'react';
import { Collapse } from "@mui/material";
import Button from "@/components/UI & Layout/Form/Button";
import Textarea from "@/components/UI & Layout/Form/Textarea";
import { dateFormater, formatter } from "@/utils/helper";
import axios from "axios";
import { toast } from "react-hot-toast";


const Order = ({
    data
}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [orderInfo, setOrderInfo] = useState(data?.orderInfo)

    const complateOrder = async() => {
        try {
            if(orderInfo) {
                const token = sessionStorage.getItem('adminToken');
                const res = await axios.post(`${process.env.REQUEST}order/complate?id=${data?._id}`, {orderInfo}, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })
                toast.success(res?.data?.message, {position: 'bottom-right'})
                window.location.reload()
            }
            else {
                toast.error('Gerekli alanı doldurun.', {position: 'bottom-right'})
            }
        } catch (error) {
            toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
        }
    }
    
    return (
        <div className="flex flex-col bg-primary-lighter rounded-xl overflow-hidden duration-300 hover:neon-blue">
        <div className="w-full h-[100px] flex items-center gap-[20px] p-[12px]">
        <div className="aspect-square h-full relative overflow-hidden shrink-0 group rounded-xl border-2 border-secondary">
            <Image alt="" src={data?.user?.image ? data?.user?.image : '/images/user.jpg'} priority fill quality={100} className="object-cover hover:scale-110 duration-300"/>
        </div>

        <div className="w-full gap-[20px] grid grid-cols-5 text-[14px] font-semibold text-white">
            <span className="flex items-center">{data?.user?.username}</span>
            <span className="text-center text-white flex items-center justify-center">
                {data?.subtotal > data?.total ? formatter.format(data?.total) : formatter.format(data?.subtotal)}
            </span>
            <span className={`text-[14px] text-center ${data?.status === false ? 'text-graident-dark' : 'text-yellow-500'}`}>
              {data?.status === false ? 'Beklemede' : 'Onaylandı'}
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
       <div className="p-[12px] border-t border-secondary grid grid-cols-2 gap-[20px]">
            <div className="flex flex-col gap-[15px] items-center">
                <span className="text-[13px] font-semibold text-white">
                    Sipariş Verilen Oyunlar
                </span>
                <div className="w-full grid grid-cols-2 gap-[10px]">
                    {data?.game?.map((item, i) => (
                        <div key={i} className="flex items-center justify-between gap-[15px] p-[10px] w-full rounded-xl text-[13px] font-semibold text-secondary bg-primary-dark">
                        <div className="flex items-center gap-[15px]">
                        <div className="aspect-square h-[35px] relative overflow-hidden shrink-0 group rounded-xl border-2 border-secondary">
                            <Image alt={item?.seo} src={item.coverImage} priority fill quality={100} className="object-cover hover:scale-110 duration-300"/>
                        </div>

                        <span>{item.name}</span>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-[15px] items-center">
                <span className="text-[13px] font-semibold text-white">
                    Erişim Bilgilerini Teslim Et
                </span>

                <Textarea
                onChange={(e) => setOrderInfo(e.target.value)}
                value={orderInfo}
                />

                <Button
                    title='Erişim Bilgilerini Teslim Et'
                    height="40px"
                    wfull
                    onClick={() => complateOrder()}
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