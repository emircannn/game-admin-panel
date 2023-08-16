import Button from "@/components/UI & Layout/Form/Button";
import Input from "@/components/UI & Layout/Form/Input"
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from 'react';
import GameSkeleton from "../Game/Skeleton";
import CategoryBox from "./CategoryBox";
import useAddCategory from "@/hooks/useAddCategory";

const CategoryPage = () => {

    const {push} = useRouter()
    const search = useSearchParams()

    const categoryModal = useAddCategory()

    const name = search.get('name')
    const [searchInput, setSearchInput] = useState(name ? name : '')

    useEffect(() => {
        const updateURLQueryParams = () => {
            const queryParams = [];
            if (searchInput) {
                queryParams.push(`name=${searchInput}`);
            }
            const newURL = `${window.location.pathname}?${queryParams.join('&')}`;
            
            if (searchInput) {
                window.history.replaceState({}, '', newURL);
                push(newURL)
            }
        };

        updateURLQueryParams()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ searchInput])

    const clearFilter = () => {
        const newURL = `${window.location.pathname}?`;
        push(newURL)
        setSearchInput('')
    }

  return (
    <div className="flex flex-col gap-[30px]">
        <div className="grid grid-cols-4 gap-[20px]">
            <div className="col-span-2">
                <Input height='55' placeholder='Arama...' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
            </div>

            <div className="col-span-1">
            <Button
                wfull
                title='Filtreyi Temizle'
                onClick={() => clearFilter()}
            />
            </div>
            <div className="col-span-1">
            <Button
                width='235px'
                title='Kategori Ekle'
                bgColor='#8585f5'
                onClick={() => categoryModal.onOpen()}
            />
            </div>
        </div>

        <div className='grid grid-cols-3 gap-[20px] w-full'>
            <CategoryBox/>
            <CategoryBox/>
            <CategoryBox/>
            <CategoryBox/>
            <CategoryBox/>
            <GameSkeleton/>
        </div>
    </div>
  )
}

export default CategoryPage