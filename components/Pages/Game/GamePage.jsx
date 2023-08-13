'use client';


import { useState, useEffect } from 'react';
import FilterSide from '@/components/Pages/Game/FilterSide'
import Game from './Game';
import Skeleton from './Skeleton';

const GamePage = () => {

  return (
    <div className="flex flex-col gap-[30px] w-full">
      <FilterSide/>

      <div className='grid grid-cols-3 gap-[20px] w-full'>
        <Game/>
        <Game/>
        <Game/>
        <Game/>
        <Game/>
        <Skeleton/>
      </div>
    </div>
  )
}

export default GamePage