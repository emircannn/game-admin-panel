import React, { useState, useEffect } from 'react';
import CategoryBox from "./CategoryBox";
import Loading from "@/components/UI & Layout/Loading";
import FilterSide from "./FilterSide";
import EditCategoryModal from "@/components/modals/EditCategoryModal";
import { getCategory } from '@/utils/Requests';
import DeleteCategoryModal from '@/components/modals/DeleteCategoryModal';

const CategoryPage = () => {
    const [data, setData] = useState()
    const [categoryModal, setCategoryModal] = useState(false) 
    const [deleteModal, setDeleteModal] = useState(false) 
    const [currentCategory, setCurrentCategory] = useState()

  useEffect(() => {
    getCategory(setData)
  }, [])

  const handleUpdateCategory =(data) => {
    setCurrentCategory(data)
    setCategoryModal(true)
  }

  const handleDelete = async (data) => {
    setCurrentCategory(data)
    setDeleteModal(true)
  }

  if(!data) {
    return <Loading/>
  }

  return (
    <div className="flex flex-col gap-[30px]">
        <FilterSide
            setData={setData}
        />

        {data.length > 0 ?
        <div className='grid grid-cols-3 gap-[20px] w-full'>
            {data?.map((item, i) => (
                <CategoryBox
                    key={i}
                    data={item}
                    onUpdate={() => handleUpdateCategory(item)}
                    onDelete={() => handleDelete(item)}
                />
            ))}
        </div>
        :

        <div className='flex items-center justify-center text-white text-[14px] font-semibold mt-[30px]'>
            Henüz kategori eklemediniz...
        </div>
        }

        <EditCategoryModal
            setCategoryModal={setCategoryModal}
            categoryModal={categoryModal}
            data={currentCategory}
            setData={setCurrentCategory}
            setAllCategories={setData}
        />

        <DeleteCategoryModal
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
        data={currentCategory}
        setData={setCurrentCategory}
        setAllCategories={setData}
        />
    </div>
  )
}

export default CategoryPage