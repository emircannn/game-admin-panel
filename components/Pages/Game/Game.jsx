'use client'

import Button from "@/components/UI & Layout/Form/Button"
import Image from "next/image"
import {BsFillEyeFill} from 'react-icons/bs'

const Game = () => {

    
  return (
    <div className="w-full rounded-xl aspect-square bg-primary-lighter overflow-hidden duration-300 hover:neon-blue">
        <div className="w-full h-[60%] relative overflow-hidden shrink-0 group">
            <Image alt="" src='/images/fifa.jpg' priority fill quality={100} className="object-cover hover:scale-110 duration-300"/>

            <span className="absolute w-full h-full top-0 left-0 bg-black/50 flex cursor-pointer items-center justify-center flex-col 
            gap-[10px] opacity-0 group-hover:opacity-100 duration-300">
                <BsFillEyeFill className="text-white" size={28}/>
                <span className="text-[14px] font-semibold text-white">
                    Önizlemeyi Gör
                </span>
            </span>
        </div>

        <div className="p-[10px] w-full h-[40%] flex flex-col gap-[10px] justify-between">
            <div className="flex items-center justify-between text-[14px] text-white font-medium">
                <h4 className=" font-semibold">
                    Fifa 23
                </h4>
                <span className="text-secondary">
                    Steam
                </span>
            </div>
            <div className="flex items-center justify-between text-white text-[14px] font-medium">
                <span className="line-through">
                    120.00 TL
                </span>
                <span>
                    80.00 TL
                </span>
            </div>

            <div className="flex gap-[10px]">
                <Button
                    height="40px"
                    wfull
                    title='Düzenle'
                />
                <Button
                    height="40px"
                    wfull
                    title='Sil'
                    bgColor='#8585f5'
                />
            </div>
        </div>
    </div>
  )
}

export default Game