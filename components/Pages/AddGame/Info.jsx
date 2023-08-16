'use client'

import Input from "@/components/UI & Layout/Form/Input"
import StyledSelect from "@/components/UI & Layout/StyledSelect"
import { categoriesOptions, platformOptions } from "../Game/filter"

const Info = ({
    setPlatformFilter,
    setCategoryFilter,
    platform,
    category
}) => {
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
                />
            </label>
            <label className="flex flex-col gap-[8px] text-[14px] font-semibold text-white">
                Geliştirici

                <Input
                    wfull
                    placeholder='EA Sports'
                />
            </label>
            <label className="flex flex-col gap-[8px] text-[14px] font-semibold text-white">
                Çıkış Tarihi

                <Input
                    wfull
                    placeholder='25 Eylül 2023'
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
                />
            </label>
            <label className="flex flex-col gap-[8px] text-[14px] font-semibold text-white">
                Fiyat

                <Input
                    wfull
                    placeholder='250 TL'
                    type='number'
                    textCenter
                />
            </label>
            </div>

            <label className="flex flex-col gap-[8px] text-[14px] font-semibold text-white">
                Kategori

                <StyledSelect
                dropdownHeight='250px'
                width='100%'
                options={categoriesOptions}
                setValue={setCategoryFilter}
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
                setValue={setPlatformFilter}
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