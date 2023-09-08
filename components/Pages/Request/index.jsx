'use client'

import { useEffect, useState } from "react"
import Request from "./Request"
import Toggle from "./Toggle"
import { getChats } from "@/utils/Requests"
import Pagination from "@/components/UI & Layout/Pagination"
import Loading from "@/components/UI & Layout/Loading"
import { useSocket } from "@/utils/socket"


const RequestPage = () => {
    const [toggle, setToggle] = useState('all')
    const [data, setData] = useState()
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState()

    useEffect(() => {
      getChats(setData,page,toggle,setTotalPages)
    }, [page, toggle])

    const socket = useSocket(); 
    useEffect(() => {
        if (!socket) return;

        socket.on('notification', (data) => {
          const audio = new Audio('/sounds/sound1.mp3');
          audio.play();
          getChats(setData,page,toggle,setTotalPages)
        })
    
    return () => {
        socket.off('notification')
    }
    }, [page, socket, toggle])
    

    if(!data) {
      return <Loading/>
    }
  return (
    <div className="flex flex-col gap-[20px]">
        <Toggle
            setToggle={setToggle}
            toggle={toggle}
        />

        <div className="flex flex-col gap-[20px]">
            {
              data?.length > 0 ?
              data.map((item, i) => (
                <Request
                  key={i}
                  data={item}
                />
              ))
              :
              <div className="text-[14px] font-semibold text-white flex items-center justify-center py-[10px]">
                  Henüz destek talebi yok...
              </div>
            }
        </div>

        <div className='flex justify-end'>
          {totalPages > 1 && <Pagination siblingCount={5} totalPages={totalPages} onPageChange={setPage}/>}
        </div>
    </div>
  )
}

export default RequestPage