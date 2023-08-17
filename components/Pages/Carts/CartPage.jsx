'use client'

import FilterSide from "../Game/FilterSide"
import Cart from "./Cart"
import Heads from "./Heads"

const CartPage = () => {
  return (
    <div className="flex flex-col gap-[20px]">
        <FilterSide
            noSecondAction
        />

        <Heads/>

        <div className="flex flex-col gap-[20px]">
          <Cart/>
          <Cart/>
          <Cart/>
        </div>
    </div>
  )
}

export default CartPage