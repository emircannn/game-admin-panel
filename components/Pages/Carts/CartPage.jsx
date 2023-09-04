'use client'

import { useEffect, useState } from "react"
import FilterSide from "../Game/FilterSide"
import Cart from "./Cart"
import Heads from "./Heads"
import axios from "axios"
import { toast } from "react-hot-toast"
import Loading from "@/components/UI & Layout/Loading"

const CartPage = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const getData = async () => {
      try {
        const token = sessionStorage.getItem('adminToken');
        const res = await axios.get(`${process.env.REQUEST}cart/getAll`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        setData(res?.data?.data)
      } catch (error) {
        toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
      }
    }
    getData()
  }, [])

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
    </div>
  )
}

export default CartPage