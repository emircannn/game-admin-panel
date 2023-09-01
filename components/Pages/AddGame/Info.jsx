'use client'

import Input from "@/components/UI & Layout/Form/Input"
import StyledSelect from "@/components/UI & Layout/StyledSelect"
import { platformOptions } from "../Game/filter"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import axios from "axios"
import YoutubeInfo from "./YoutubeInfo"

const Info = ({
    setName,
    setDeveloper,
    youtubeLink,
    setStok,
    setPrice,
    setCategory,
    setPlatform,
    category,
    platform,
    name,
    developer,
    setYoutubeLink,
    stok,
    price,
    setDiscountRate,
    discountRate
}) => {

    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
      const getData = async () => {
        try {
            const res = await axios.get(`${process.env.REQUEST}category/getAll`)
            setCategoryData(res?.data?.data)
        } catch (error) {
            toast.error(error?.response?.data?.message.split(':')[1], {position: 'bottom-right'})
        }
      }
      getData();
    }, [])

    const categoriesOptions = 
        categoryData?.map((category) => (
            {value: category._id, label: category.name}
        ))
    

  return (
    <div className="w-full flex flex-col gap-[20px]">
        <h4 className="text-lg font-semibold text-white border-b border-secondary">
            Oyun Bilgileri
        </h4>

        <div className="grid grid-cols-3 gap-[20px]">
            <label className="flex flex-col gap-[8px] text-[14px] font-semibold text-white">
                Oyun Adı

                <Input
                    wfull
                    placeholder='Fifa 23'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
            </label>
            <label className="flex flex-col gap-[8px] text-[14px] font-semibold text-white">
                Geliştirici

                <Input
                    wfull
                    placeholder='EA Sports'
                    onChange={(e) => setDeveloper(e.target.value)}
                    value={developer}
                />
            </label>
                <label className="flex flex-col gap-[8px] text-[14px] font-semibold text-white">
                <span className="flex items-center gap-[6px]">
                Youtube Linki
                <YoutubeInfo/>
                </span>

                <Input
                    placeholder='https://www.youtube.com/watch?v=XhP3Xh4LMA8'
                    width='100%'
                    onChange={(e) => setYoutubeLink(e.target.value)}
                    value={youtubeLink}
                />
            </label>
            <div className="flex gap-[10px]">
            <label className="flex flex-col gap-[8px] text-[14px] font-semibold text-white">
                Stok

                <Input
                    wfull
                    placeholder='100'
                    type='number'
                    textCenter
                    onChange={(e) => setStok(e.target.value)}
                    value={stok}
                />
            </label>
            <label className="flex flex-col gap-[8px] text-[14px] font-semibold text-white">
                Fiyat

                <Input
                    wfull
                    placeholder='250 TL'
                    type='number'
                    textCenter
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />
            </label>
            <label className="flex flex-col gap-[8px] text-[14px] font-semibold text-white">
                İndirim Oranı

                <Input
                    wfull
                    placeholder='20%'
                    type='number'
                    textCenter
                    onChange={(e) => setDiscountRate(e.target.value)}
                    value={discountRate}
                />
            </label>
            </div>

            <label className="flex flex-col gap-[8px] text-[14px] font-semibold text-white">
                Kategori

                <StyledSelect
                dropdownHeight='250px'
                width='100%'
                options={categoriesOptions}
                setValue={setCategory}
                value={category}
                placeholder='Kategori'
                height="48px"
                />
            </label>
            <label className="flex flex-col gap-[8px] text-[14px] font-semibold text-white">
                Platform

                <StyledSelect
                dropdownHeight='150px'
                width='100%'
                options={platformOptions}
                setValue={setPlatform}
                value={platform}
                placeholder='Platform'
                height="48px"
            />
            </label>
        </div>
    </div>
  )
}

export default Info