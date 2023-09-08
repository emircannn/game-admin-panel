'use client'

import Readed from '@/public/icons/readed.svg';
import { messageDate } from '@/utils/helper';
import Image from 'next/image';

const Message = ({
    admin,
    readed=false,
    media=false,
    content,
    timestamp,
}) => {
  return (
    <>
        { media && 
        <div className={`flex w-full ${admin ? 'justify-end' : 'justify-start'}`}>
            <div className='w-[200px] rounded-xl relative aspect-square overflow-hidden bg-secondary p-[5px] flex flex-col'>
                <div className='w-full h-[90%] shrink-0 relative overflow-hidden rounded-xl'>
                    <Image
                        alt=''
                        src={media}
                        fill
                        quality={100}
                        className='object-cover'
                    />
                </div>
                    <span className='flex items-center h-[10%] justify-end text-[12px] font-semibold text-white gap-[10px]'>
                    {messageDate(timestamp)}
                    <Readed width='20' height='20' fill={`${readed ? '#fff' : '#120e47'}`}/>
                    </span>
            </div>
        </div>}
        {content && 
        <div className={`flex ${admin ? 'justify-end' : 'justify-start'} w-full`}>
            <div className="max-w-[60%] p-[10px] rounded-xl bg-gradient-to-tl from-secondary to-secondary-light 
            flex flex-col gap-[10px] text-white text-[14px] font-semibold">
                <p>{content}</p>

                <div className="flex justify-end gap-[10px] items-center">
                    <span className="text-[12px]">{messageDate(timestamp)}</span>
                    <Readed width='20' height='20' fill={`${readed ? '#fff' : '#120e47'}`}/>
                </div>
            </div>
        </div>}
    </>
  )
}

export default Message