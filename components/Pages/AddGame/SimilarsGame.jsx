'use client';

import Image from "next/image";
import FilterSide from "../Game/FilterSide";

const SimilarsGame = () => {

    const Game = () => {
        return (
            <div className='w-full h-[80px] rounded-xl bg-primary-lighter p-[10px] shrink-0 gap-[10px] flex items-center'>
                <input 
                className='w-[16px] h-[16px] text-secondary'
                type="checkbox" 
                name="game" 
                id="" />
                <div className='h-full aspect-square rounded-xl overflow-hidden relative border-2 border-secondary shrink-0'>
                <Image alt="" src='/images/fifa.jpg' priority fill quality={100} className="object-cover hover:scale-110 duration-300"/>
                </div>

                <div className='w-full grid grid-cols-4 gap-[10px]'>
                    <p className='text-white font-semibold text-[13px] line-clamp-1 w-full text-start'>
                        Fifa 23
                    </p>
                    <p className='text-secondary font-semibold text-[13px] line-clamp-1 w-full text-center'>
                        EA
                    </p>
                    <p className='text-white font-semibold text-[13px] line-clamp-1 w-full text-center'>
                        Spor
                    </p>
                    <p className='text-secondary font-semibold text-[13px] line-clamp-1 w-full text-center'>
                        Stok:10
                    </p>
                </div>
            </div>
        )
    }

  return (
    <div className="w-full flex flex-col gap-[20px]">
        <h4 className="text-lg font-semibold text-white border-b border-secondary">
            Benzer Oyunları Ekle
        </h4>

        <FilterSide
            noSecondAction
        />

        <div className="grid grid-cols-2 gap-[20px] max-h-[400px] overflow-y-auto pr-[10px]">
            <Game/>
            <Game/>
            <Game/>
            <Game/>
            <Game/>
            <Game/>
            <Game/>
            <Game/>
            <Game/>
            <Game/>
            <Game/>
            <Game/>
        </div>
    </div>
  )
}

export default SimilarsGame