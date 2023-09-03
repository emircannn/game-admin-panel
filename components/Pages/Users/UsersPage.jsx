'use client';

import { useEffect, useState } from "react";
import FilterSide from "../Game/FilterSide";
import Heads from "./Heads";
import User from "./User";
import { getUsers } from "@/utils/Requests";
import Loading from "@/components/UI & Layout/Loading";


const UsersPage = () => {

  const [data, setData] = useState()

  useEffect(() => {
    getUsers(setData)
  }, [])
  
  if(!data) {
    return <Loading/>
  }

  return (
    <div className="flex flex-col gap-[20px]">
        <FilterSide
            noSecondAction
        />

        <Heads/>

        <div className="flex flex-col gap-[20px]">
            {data?.map((user, i) => (
              <User
                key={i}
                data={user}
              />
            ))}
        </div>
    </div>
  )
}

export default UsersPage