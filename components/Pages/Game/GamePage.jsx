'use client';
import { useState, useEffect } from 'react';
import FilterSide from '@/components/Pages/Game/FilterSide'
import Game from './Game';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import Loading from '@/components/UI & Layout/Loading';
import ConfirmDeleteModal from '@/components/modals/ConfirmDeleteModal';

const GamePage = () => {

  const [data, setData] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedGame, setSelectedGame] = useState()

  useEffect(() => {
    const getData = async () => {
        try {
          const token = sessionStorage.getItem('adminToken');
          const res = await axios.get(`${process.env.REQUEST}admin/allGames`,  {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
          setData(res?.data?.data)
        } catch (error) {
          toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
        }
    }
    getData()
  }, [])

  const handleDeleteModal = (data) => {
    setIsOpen(true)
    setSelectedGame(data)
  }

  if(!data) {
    return <Loading/>
  }

  return (
    <div className="flex flex-col gap-[30px] w-full">
      <FilterSide/>

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