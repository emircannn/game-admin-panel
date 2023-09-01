'use client'

import { useState } from "react"
import Modal from "./Modal"
import axios from "axios"
import { toast } from "react-hot-toast"

const ConfirmDeleteModal = ({
    isOpen,
    setIsOpen,
    selectedGame,
    setSelectedGame
}) => {

    const [loading, setLoading] = useState(false)

    const body = (
        <div className="text-[16px] w-auto font-semibold text-white min-w-[400px] text-center">
        {selectedGame?.name} oyununu silmek istediğinize emin misiniz?
        </div>
    )

    const handleCancel = () => {
        setSelectedGame()
        setIsOpen(false)
    }

    const handleDelete = async() => {
        try {
            const token = sessionStorage.getItem('adminToken')
            setLoading(true)
            const res = await axios.post(`${process.env.REQUEST}game/delete?id=${selectedGame._id}`,{},{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setLoading(false)
            setIsOpen(false)
            toast.success(res?.data?.message, {position: 'bottom-right'})
            window.location.reload()
        } catch (error) {
            toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
            setLoading(false)
        }
    }

  return (
    <Modal
        title='Oyun Sil'
        width="auto"
        actionLabel='Onayla'
        secondaryActionLabel='İptal'
        secondaryAction={() => handleCancel()}
        onSubmit={() => handleDelete()}
        body={body}
        disabled={loading}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
    />
  )
}

export default ConfirmDeleteModal