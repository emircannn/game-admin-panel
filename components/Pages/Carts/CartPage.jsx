'use client'

import { useEffect, useState } from "react"
import FilterSide from "../Game/FilterSide"
import Cart from "./Cart"
import Heads from "./Heads"
import axios from "axios"
import { toast } from "react-hot-toast"
import Loading from "@/components/UI & Layout/Loading"
import { getCarts } from "@/utils/Requests"
import Pagination from "@/components/UI & Layout/Pagination"

const CartPage = () => {
  const [data, setData] = useState()
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState()

  useEffect(() => {
    getCarts(setData, page, setTotalPages)
  }, [page])

  if(!data) {
    return <Loading/>
  }
  
  return (
    <div className="flex flex-col gap-[20px]">
        <Heads/>

        <div className="flex flex-col gap-[20px]">
          {data?.map((item, i) => (
            <Cart
              data={item}
              key={i}
            />
          ))}
        </div>

        <div className='flex justify-end'>
          {totalPages > 1 && <Pagination siblingCount={5} totalPages={totalPages} onPageChange={setPage}/>}
      </div>
    </div>
  )
}

export default CartPage