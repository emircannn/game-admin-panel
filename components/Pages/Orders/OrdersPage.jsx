'use client'

import { useEffect, useState } from "react"
import Heads from "./Heads"
import Order from "./Order"
import { getOrders } from "@/utils/Requests"
import Pagination from "@/components/UI & Layout/Pagination"
import Loading from "@/components/UI & Layout/Loading"
import { useSocket } from "@/utils/socket"

const OrdersPage = () => {
  const [data, setData] = useState()
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState()

  useEffect(() => {
    getOrders(setData, page, setTotalPages)
  }, [page])

  const socket = useSocket(); 
    useEffect(() => {
        if (!socket) return;

        socket.on('notification', (data) => {
          const audio = new Audio('/sounds/sound1.mp3');
          audio.play();
          getOrders(setData, page, setTotalPages)
        })
    
    return () => {
        socket.off('notification')
    }
    }, [page, socket])

  if(!data) {
    return <Loading/>
  }

  return (
    <div className="flex flex-col gap-[20px]">
        <Heads/>

        <div className="flex flex-col gap-[20px]">
            {data?.map((item, i) => (
              <Order
                key={i}
                data={item}
              />
            ))}
        </div>

        <div className='flex justify-end'>
          {totalPages > 1 && <Pagination siblingCount={5} totalPages={totalPages} onPageChange={setPage}/>}
      </div>
    </div>
  )
}

export default OrdersPage