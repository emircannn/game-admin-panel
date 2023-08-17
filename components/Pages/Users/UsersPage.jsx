'use client';

import FilterSide from "../Game/FilterSide";
import Heads from "./Heads";
import User from "./User";


const UsersPage = () => {
  return (
    <div className="flex flex-col gap-[20px]">
        <FilterSide
            noSecondAction
        />

        <Heads/>

        <div className="flex flex-col gap-[20px]">
            <User/>
            <User/>
            <User/>
        </div>
    </div>
  )
}

export default UsersPage