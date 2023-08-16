'use client'

import { create } from "zustand";

const useAddCategory = create((set) => ({
    isOpen: false,
    onOpen : () => set({isOpen: true}),
    onClose : () => set({isOpen: false}),
}))

export default useAddCategory;