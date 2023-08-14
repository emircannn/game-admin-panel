'use client'

import { create } from "zustand";

const useDiscountModal = create((set) => ({
    isOpen: false,
    onOpen : () => set({isOpen: true}),
    onClose : () => set({isOpen: false}),
}))

export default useDiscountModal;