'use client'

import { useEffect, useState } from "react"
import Heads from "./Heads"
import Order from "./Order"
import { getOrders } from "@/utils/Requests"
import Pagination from "@/components/UI & Layout/Pagination"
import Loading from "@/components/UI & Layout/Loading"

const OrdersPage = () => {
  const [data, setData] = useState()
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState()

  useEffect(() => {
    getOrders(setData, page, setTotalPages)
  }, [page])

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