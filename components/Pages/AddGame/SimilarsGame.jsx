'use client';

import Image from "next/image";
import FilterSide from "../Game/FilterSide";
import { useEffect, useState } from "react";
import { getGames } from "@/utils/Requests";

const SimilarsGame = ({
    handleSimilarGames,
    similarGames
}) => {

    const [gameData, setGameData] = useState([])

    useEffect(() => {
        getGames(setGameData);
    }, [])

    const Game = ({
        handleSimilarGames,
        data,
        similarGames
    }) => {
        return (
            <div className='w-full h-[80px] rounded-xl bg-primary-lighter p-[10px] shrink-0 gap-[10px] flex items-center'>
                <input 
                className='w-[16px] h-[16px] text-secondary'
                type="checkbox" 
                name="game" 
                value={data._id}
                onChange={handleSimilarGames}
                checked={similarGames?.includes(data._id)}
                id={data._id} />
                <div className='h-full aspect-square rounded-xl overflow-hidden relative border-2 border-secondary shrink-0'>
                <Image alt="" src={data.coverImage} priority fill quality={100} className="object-cover hover:scale-110 duration-300"/>
                </div>

                <div className='w-full grid grid-cols-4 gap-[10px]'>
                    <p className='text-white font-semibold text-[13px] line-clamp-1 w-full text-start'>
                        {data.name}
                    </p>
                    <p className='text-secondary font-semibold text-[13px] line-clamp-1 w-full text-center'>
                        {data.platform}
                    </p>
                    <p className='text-white font-semibold text-[13px] line-clamp-1 w-full text-center'>
                        {data.category?.name}
                    </p>
                    <p className='text-secondary font-semibold text-[13px] line-clamp-1 w-full text-center'>
                        Stok:{data.stok}
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
            {gameData?.map((game, i) => (
                <Game
                    key={i}
                    data={game}
                    handleSimilarGames={handleSimilarGames}
                    similarGames={similarGames}
                />
            ))}
        </div>
    </div>
  )
}

export default SimilarsGame