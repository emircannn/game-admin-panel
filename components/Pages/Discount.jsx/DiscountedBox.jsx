import Button from "@/components/UI & Layout/Form/Button"
import Image from "next/image"
import { BsFillEyeFill } from "react-icons/bs"

const DiscountedBox = () => {
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
                <div className="flex items-center justify-between gap-[10px]">
                    <h4 className=" font-semibold text-[16px] text-white line-clamp-1">
                        Fifa 23
                    </h4>

                    <span className="text-[12px] font-semibold text-white px-[8px] py-[3px] rounded-full bg-primary-dark neon-yellow">
                        - %25
                    </span>
                </div>

                <span className=" font-semibold text-[14px] text-secondary">
                    Kalan Süre: 14 s 57 dk
                </span>

           
                <Button
                    height="40px"
                    wfull
                    title='İndirimi Bitir'
                />
        </div>
    </div>
  )
}

export default DiscountedBox