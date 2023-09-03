'use client';

import StyledSelect from "@/components/UI & Layout/StyledSelect";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from 'react';
import Input from "@/components/UI & Layout/Form/Input.jsx";
import { platformOptions, sortOptions } from "../Pages/Game/filter";
import { getCategory, getGames } from "@/utils/Requests";


const FilterSide = ({
    col='2',
    page,
    setTotalPages,
    setData,
    setPage,
    totalPages
}) => {

  const {push} = useRouter()
  const search = useSearchParams()

  const sort = search.get('sort')
  const category = search.get('category')
  const platform = search.get('platform')
  const stok = search.get('stok')
  const name = search.get('name')

  const [platformFilter, setPlatformFilter] = useState(platform)
  const [categoryFilter, setCategoryFilter] = useState(category)
  const [sortFilter, setSortFilter] = useState(sort)
  const [stokFilter, setStokFilter] = useState(stok)
  const [searchInput, setSearchInput] = useState(name ? name : '')

  const [categories, setCategories] = useState()

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
          if (stokFilter) {
            queryParams.push(`stock=${stokFilter}`);
          }
          if (searchInput) {
            queryParams.push(`name=${searchInput}`);
          }
      
          const newURL = `${window.location.pathname}?${queryParams.join('&')}`;
          
          if (categoryFilter || platformFilter || sortFilter || stokFilter || searchInput) {
              window.history.replaceState({}, '', newURL);
              push(newURL)
          }
        };

        updateURLQueryParams()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryFilter, platformFilter, sortFilter, stokFilter, searchInput])

  const clearFilter = () => {
      const newURL = `${window.location.pathname}?`;
      push(newURL)
      setPlatformFilter()
      setSortFilter()
      setCategoryFilter()
      setStokFilter()
      setSearchInput('')
  }

  useEffect(() => {
    getCategory(setCategories)
  }, [])
  
const categoriesOptions =
    categories?.map((category) => (
      {label: category?.name, value: category?.seo}
    ))

    useEffect(() => {
      getGames(setData,setTotalPages, page, sortFilter, categoryFilter, platformFilter, stokFilter, searchInput)
      if(totalPages === 1) {
        setPage(1)
      }
    }, [categoryFilter, searchInput, page, platformFilter, sortFilter, stokFilter, totalPages, setTotalPages, setPage, setData])


  return (
    <>
      <div className={`grid grid-cols-${col} gap-[10px] w-full`}>
        <StyledSelect
                dropdownHeight='150px'
                width='100%'
                options={platformOptions}
                setValue={setPlatformFilter}
                value={platform}
                placeholder='Platform'
                height="45px"
            />
            <StyledSelect
                dropdownHeight='250px'
                width='100%'
                options={categoriesOptions}
                setValue={setCategoryFilter}
                value={category}
                placeholder='Kategori'
                height="45px"
            />
            <StyledSelect
                dropdownHeight='200px'
                width='100%'
                options={sortOptions}
                setValue={setSortFilter}
                value={sort}
                placeholder='Sırala'
                height="45px"
            />
            <div className="w-full">
                <Input
                placeholder='Arama...'
                width='100%'
                minWidth='100%'
                height="41"
                onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
            />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className='text-secondary font-semibold text-lg'>
            Oyunlar
        </span>
        <button 
        onClick={() => clearFilter()}
        className='text-secondary underline'>
            Filtreyi Temizle
        </button>
      </div>
    </>
  )
}

export default FilterSide