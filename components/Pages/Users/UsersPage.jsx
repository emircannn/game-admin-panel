'use client';

import { useEffect, useState } from "react";
import Heads from "./Heads";
import User from "./User";
import { getUsers } from "@/utils/Requests";
import Loading from "@/components/UI & Layout/Loading";
import { toast } from "react-hot-toast";
import axios from "axios";
import Pagination from "@/components/UI & Layout/Pagination";


const UsersPage = () => {

  const [data, setData] = useState()
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState()

  useEffect(() => {
    getUsers(setData, page, setTotalPages)
  }, [page])

  const handleDeleteUser = async(id) => {
    try {
      const token = sessionStorage.getItem('adminToken');
      const res = await axios.post(`${process.env.REQUEST}admin/deleteUser?id=${id}`, {}, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      toast.success(res?.data?.message, {position: 'bottom-right'})
    } catch (error) {
      toast.error(error.response?.message?.split(':')[1] || error.response?.message, {position: 'bottom-right'})
    }
  }
  
  if(!data) {
    return <Loading/>
  }

  return (
    <div className="flex flex-col gap-[20px]">
        
        <Heads/>

        <div className="flex flex-col gap-[20px]">
            {data?.map((user, i) => (
              <User
                key={i}
                data={user}
                onDelete={() => handleDeleteUser(user?._id)}
              />
            ))}
        </div>

        <div className='flex justify-end'>
          {totalPages > 1 && <Pagination siblingCount={5} totalPages={totalPages} onPageChange={setPage}/>}
      </div>
    </div>
  )
}

export default UsersPage