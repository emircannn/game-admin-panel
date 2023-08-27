'use client';
import { useState, useEffect } from 'react';
import FilterSide from '@/components/Pages/Game/FilterSide'
import Game from './Game';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import Loading from '@/components/UI & Layout/Loading';

const GamePage = () => {

  const [data, setData] = useState()

  useEffect(() => {
    const getData = async () => {
        try {
          const res = await axios.get(`${process.env.REQUEST}admin/allGames`)
          setData(res?.data?.data)
        } catch (error) {
          toast.error(error?.response?.data?.message.split(':')[1], {position: 'bottom-right'})
        }
    }
    getData()
  }, [])

  if(!data) {
    return <Loading/>
  }

  return (
    <div className="flex flex-col gap-[30px] w-full">
      <FilterSide/>

      <div className='flex flex-col gap-[20px] w-full'>
        {data?.length > 0 ?
          data.map((item, i) => (
            <Game key={i} data={item}/>
          ))
          :
          <div className='flex items-center justify-center text-white text-[14px] font-semibold mt-[30px]'>
              Henüz oyun eklemediniz...
          </div>
          }
      </div>
    </div>
  )
}

export default GamePage