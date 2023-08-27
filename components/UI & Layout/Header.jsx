"use client"

import Avatar from "./Avatar"
import { usePathname } from "next/navigation"

const Header = () => {

    const {pathname} = usePathname()

    if(pathname === '/oturum') {
        return null
    }
    
  return (
    <header>
    
    <div className="py-[20px] container flex items-center justify-between">
        <h1 className="text-white font-semibold text-3xl">
            Logo
        </h1>

        <div className="p-[10px] rounded-xl bg-primary-lighter flex items-center gap-5">
            <p className="text-white font-medium">
                Emircan
            </p>

            <Avatar
                width="40"
                height="40"
                iconHeight="20"
                iconWidth="20"
                backgroundColor='#09071d'
            />
        </div>
    </div>

    <div className="w-full h-[6px] bg-gradient-to-r from-graident-dark to-secondary"/>
    </header>
  )
}

export default Header