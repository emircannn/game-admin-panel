import React from 'react'
import Horizontal from '../GameBox/Horizontal'
import GameSkeleton from '../MaterialUI/GameSkeleton'

const SearchCont = () => {
  return (
    <div className='fixed w-full z-40 search h-screen top-0 left-0 right-0'>
         <div className='container'>
         <div className='mt-[150px] grid gap-[10px] 1140:gap-[30px] grid-cols-3 max-768:grid-cols-2'>
            <Horizontal/>
            <Horizontal/>
            <Horizontal/>
            <GameSkeleton/>
            <GameSkeleton/>
            <GameSkeleton/>
        </div>
         </div>
    </div>
  )
}

export default SearchCont