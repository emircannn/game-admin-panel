'use client'

import { toast } from "react-hot-toast"
import Modal from "./Modal"
import axios from "axios"
import { getCategory } from "@/utils/Requests"
import { useState } from "react"


const DeleteCategoryModal = ({
    deleteModal,
    setDeleteModal,
    data,
    setData,
    setAllCategories
}) => {

    const [loading, setLoading] = useState(false)

    const body = (
        <div className="text-[16px] w-auto font-semibold text-white min-w-[400px] text-center">
        {data?.name} kategorisini silmek istediğinize emin misiniz?
        </div>
    )

    const handleCancel = () => {
        setData()
        setDeleteModal(false)
    }

    const handledelete= async () => {
        try {
            const token = sessionStorage.getItem('adminToken');
            const res = await axios.post(`${process.env.REQUEST}category/delete?id=${data?._id}`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
                })
            setData()
            toast.success(res?.data?.message, {position: "bottom-right"})
            setLoading(false)
            setDeleteModal(false)
            getCategory(setAllCategories)
    } catch (error) {
        setLoading(false)
        toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
    }
}

  return (
    <Modal
        title='Kategori Sil'
        width="auto"
        isOpen={deleteModal}
        body={body}
        secondaryAction={() => handleCancel()}
        secondaryActionLabel='İptal'
        actionLabel='Onayla'
        onSubmit={() => handledelete()}
        onClose={() => setDeleteModal(false)}
        disabled={loading}
    />
  )
}

export default DeleteCategoryModal