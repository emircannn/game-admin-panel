'use client'

import { BsFillArrowRightCircleFill } from "react-icons/bs"
import Readed from '@/public/icons/message.svg'
import { messageDate } from "@/utils/helper"
import Link from "next/link"
const Request = ({
    data
}) => {
  return (
    <div className="p-[15px] rounded-xl border-2 border-secondary w-full flex flex-col justify-between gap-[10px]">
        <span className="text-white font-semibold">
        {data?.chat?.username}
        </span>

        <div className="flex items-center justify-between gap-[40px]">
            <p className={`text-secondary font-semibold line-clamp-3 text-[14px]`}>
                {data?.messages[0].content ? data?.messages[0]. content : null}
                {data?.messages[0].media ? 'Kullanıcı bir medya öğesi gönderdi...' : null}
            </p>

            <Link href={`/destek/${data?.chat?.username}`}>
            <button className="text-graident-dark">
                <BsFillArrowRightCircleFill className="hover:neon-yellow duration-300 rounded-full" size={40}/>
            </button>
            </Link>
        </div>

        <div className="w-full flex items-center justify-between pr-[5px]">
            <span className="text-white font-medium">
                {messageDate(data?.updatedAt)}
            </span>

            <Readed width='30' height='30' className={`${data?.isReaded ? '' : 'animate-pulse'}`} fill={`${data?.isReaded ? '#fff' : '#8585f5'}`}/>
        </div>
    </div>
  )
}

export default Request