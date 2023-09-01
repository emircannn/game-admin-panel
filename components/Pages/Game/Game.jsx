'use client'

import StyledRated from "@/components/UI & Layout/StyledRated"
import { formatter } from "@/utils/helper";
import Image from "next/image"
import Link from "next/link";
import { AiFillEdit } from "react-icons/ai";
import {BsFillTrash3Fill} from 'react-icons/bs'

const Game = ({
    data,
    onDelete
}) => {

    const price = formatter.format(data?.price)
    const discountPrice = data?.discountPrice ? formatter.format(data?.discountPrice) : null
  return (
    <div className="flex flex-col bg-primary-lighter rounded-xl overflow-hidden duration-300 hover:neon-blue">
        <div className="w-full h-[100px] flex items-center gap-[20px] p-[12px]">
            <div className="aspect-square h-full relative overflow-hidden shrink-0 group rounded-xl border-2 border-secondary">
                <Image alt="" src={data?.coverImage} priority fill quality={100} className="object-cover hover:scale-110 duration-300"/>
            </div>

            <div className="w-full gap-[20px] grid grid-cols-7 text-[14px] font-semibold text-white">
            <span className="flex items-center">{data?.name}</span>
            <span className="text-center text-secondary flex items-center justify-center">
                {data?.category?.name}
            </span>
            <span className="text-center text-white flex items-center justify-center">
                {data?.platform}
            </span>

            <span className="text-center text-secondary flex items-center justify-center flex-col">
                <span className={`${data?.discountPrice && 'line-through'}`}>{price}</span>
                {discountPrice && <span className="text-secondary-light">{discountPrice}</span>}
            </span>

            <span className="flex items-center justify-center gap-[6px]">
                <StyledRated
                    size="16"
                    value={data?.rating}
                />
                <span className="text-white font-semibold text-[13px]">({data?.reviews?.length})</span>
            </span>

            <span className="flex items-center justify-center text-secondary">
                Stok: {data?.stok}
            </span>

            <div className="flex items-center justify-end gap-[10px] pr-[20px]">
                <Link href={`/oyunlar/duzenle/${data?.seo}`}>
                <button className="w-[35px] aspect-square flex items-center justify-center bg-secondary rounded-xl hover:scale-105 duration-300">
                    <AiFillEdit size={18} className="text-white"/>
                </button>
                </Link>
                <button
                onClick={onDelete}
                className="w-[35px] aspect-square flex items-center justify-center bg-graident-dark rounded-xl hover:scale-105 duration-300">
                    <BsFillTrash3Fill size={18} className="text-white"/>
                </button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Game