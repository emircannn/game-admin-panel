'use client'

import FilterSide from "../Game/FilterSide"
import Heads from "./Heads"
import Order from "./Order"

const OrdersPage = () => {
  return (
    <div className="flex flex-col gap-[20px]">
        <FilterSide
            noSecondAction
        />

        <Heads/>

        <div className="flex flex-col gap-[20px]">
            <Order/>
            <Order/>
            <Order/>
            <Order/>
        </div>
    </div>
  )
}

export default OrdersPage