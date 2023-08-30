import Button from "@/components/UI & Layout/Form/Button";
import Input from "@/components/UI & Layout/Form/Input"
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from 'react';
import GameSkeleton from "../Game/Skeleton";
import CategoryBox from "./CategoryBox";
import useAddCategory from "@/hooks/useAddCategory";
import axios from "axios";
import { toast } from "react-hot-toast";
import Loading from "@/components/UI & Layout/Loading";
import FilterSide from "./FilterSide";

const CategoryPage = () => {
    const [data, setData] = useState()

  useEffect(() => {
    const getData = async () => {
        try {
            const res = await axios.get(`${process.env.REQUEST}category/getAll`)
            setData(res?.data?.data)
        } catch (error) {
            toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
        }
    }
    getData()
  }, [])

  const handleDelete = (id) => {

  }

  if(!data) {
    return <Loading/>
  }

  return (
    <div className="flex flex-col gap-[30px]">
        <FilterSide/>

        {data.length > 0 ?
        <div className='grid grid-cols-3 gap-[20px] w-full'>
            {data?.map((item, i) => (
                <CategoryBox
                    key={i}
                    data={item}
                />
            ))}
        </div>
        :

        <div className='flex items-center justify-center text-white text-[14px] font-semibold mt-[30px]'>
            Henüz oyun eklemediniz...
        </div>
        }
    </div>
  )
}

export default CategoryPage