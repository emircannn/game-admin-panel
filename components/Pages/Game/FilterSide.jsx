'use client';

import StyledSelect from "@/components/UI & Layout/StyledSelect";
import {categoriesOptions,platformOptions,sortOptions,stockOptions} from './filter.js'
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from 'react';
import Input from "@/components/UI & Layout/Form/Input.jsx";
import Button from "@/components/UI & Layout/Form/Button.jsx";
import tailwindConfig from "@/tailwind.config.js";


const FilterSide = ({
  noSecondAction=false
}) => {

    const {push} = useRouter()
    const search = useSearchParams()

    const sort = search.get('sort')
    const category = search.get('category')
    const platform = search.get('platform')
    const stock = search.get('stock')
    const name = search.get('name')

    const [platformFilter, setPlatformFilter] = useState(platform)
    const [categoryFilter, setCategoryFilter] = useState(category)
    const [sortFilter, setSortFilter] = useState(sort)
    const [stockFilter, setStockFilter] = useState(stock)
    const [searchInput, setSearchInput] = useState(name ? name : '')

    useEffect(() => {
        const updateURLQueryParams = () => {
            const queryParams = [];
            if (sortFilter) {
              queryParams.push(`sort=${sortFilter}`);
            }
            if (categoryFilter) {
              queryParams.push(`category=${categoryFilter}`);
            }
            if (platformFilter) {
              queryParams.push(`platform=${platformFilter}`);
            }
            if (stockFilter) {
              queryParams.push(`stock=${stockFilter}`);
            }
            if (searchInput) {
              queryParams.push(`name=${searchInput}`);
            }
        
            const newURL = `${window.location.pathname}?${queryParams.join('&')}`;
            
            if (categoryFilter || platformFilter || sortFilter || stockFilter || searchInput) {
                window.history.replaceState({}, '', newURL);
                push(newURL)
            }
          };

          updateURLQueryParams()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryFilter, platformFilter, sortFilter, stockFilter, searchInput])

    const clearFilter = () => {
        const newURL = `${window.location.pathname}?`;
        push(newURL)
        setPlatformFilter()
        setSortFilter()
        setCategoryFilter()
        setStockFilter()
        setSearchInput('')
    }

  return (
    <>
      <div className="grid grid-cols-4 gap-[20px] w-full">
            <StyledSelect
                dropdownHeight='150px'
                width='100%'
                options={platformOptions}
                setValue={setPlatformFilter}
                value={platform}
                placeholder='Platform'
            />
            <StyledSelect
                dropdownHeight='250px'
                width='100%'
                options={categoriesOptions}
                setValue={setCategoryFilter}
                value={category}
                placeholder='Kategori'
            />
            <StyledSelect
                dropdownHeight='200px'
                width='100%'
                options={sortOptions}
                setValue={setSortFilter}
                value={sort}
                placeholder='Sırala'
            />
            <StyledSelect
                dropdownHeight='90px'
                width='100%'
                options={stockOptions}
                setValue={setStockFilter}
                value={stock}
                placeholder='Stok Durumu'
            />
      </div>

      <div className="flex items-center justify-between gap-[20px] w-full">
        <div className="w-full">
        <Input
          placeholder='Arama...'
          width='100%'
          minWidth='100%'
          height='55'
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        </div>

        <div className="shrink-0">
        <Button
          width='235px'
          title='Filtreyi Temizle'
          onClick={() => clearFilter()}
        />
        </div>
        {!noSecondAction &&<div className="shrink-0">
        <Button
          width='235px'
          title='Oyun Ekle'
          bgColor='#8585f5'
          hoverv2='hover:bg-[#8585f5]'
          onClick={() => push('/oyunlar/ekle')}
        />
        </div>}
      </div>
    </>
  )
}

export default FilterSide