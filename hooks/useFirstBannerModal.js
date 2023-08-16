'use client'

import { create } from "zustand";

const useFirstModalBanner = create((set) => ({
    isOpen: false,
    onOpen : () => set({isOpen: true}),
    onClose : () => set({isOpen: false}),
}))

export default useFirstModalBanner;