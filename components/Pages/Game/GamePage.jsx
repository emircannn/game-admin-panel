'use client';
import { useState, useEffect } from 'react';
import FilterSide from '@/components/Pages/Game/FilterSide'
import Game from './Game';
import Loading from '@/components/UI & Layout/Loading';
import ConfirmDeleteModal from '@/components/modals/ConfirmDeleteModal';
import Pagination from '@/components/UI & Layout/Pagination';
import { getGames } from '@/utils/Requests';

const GamePage = () => {

  const [data, setData] = useState()
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedGame, setSelectedGame] = useState()

  const handleDeleteModal = (data) => {
    setIsOpen(true)
    setSelectedGame(data)
  }

  useEffect(() => {
    getGames(setData,setTotalPages, page)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if(!data) {
    return <Loading/>
  }

  return (
    <div className="flex flex-col gap-[30px] w-full">
      <FilterSide
      setData={setData}
      setTotalPages={setTotalPages}
      page={page}
      setPage={setPage}
      />

      <div className='flex flex-col gap-[20px] w-full'>
        {data?.length > 0 ?
          data.map((item, i) => (
            <Game 
            key={i} 
            data={item}
            onDelete={() => handleDeleteModal(item)}
            />
          ))
          :
          <div className='flex items-center justify-center text-white text-[14px] font-semibold mt-[30px]'>
              Henüz oyun eklemediniz...
          </div>
          }
      </div>

      <div className='flex justify-end'>
          {totalPages > 1 && <Pagination siblingCount={5} totalPages={totalPages} onPageChange={setPage}/>}
      </div>

      <ConfirmDeleteModal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        setSelectedGame={setSelectedGame}
        selectedGame={selectedGame}
      />
    </div>
  )
}

export default GamePage