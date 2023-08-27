'use client'
import Card from './Card'
import data from '../sidebarData'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import gameData from '../oyunData'
import useLogoutModal from '@/hooks/useLogout'

const Sidebar = () => {

  const logoutModal = useLogoutModal()

    const pathname = usePathname()
    const [currentData, setCurrentData] = useState()
    useEffect(() => {
        if (pathname.includes('/oyunlar')) {
            setCurrentData(gameData)
        }
      else {
          setCurrentData(data)
        }
    }, [pathname])
    
    const currentPage = currentData?.find((item) => item.href === pathname)

    if(pathname === '/oturum') {
      return null
    }

  return (
    <div className='w-[240px] shrink-0 h-[calc(100vh_-_106px)] bg-primary-lighter px-[10px] py-[20px]'>
            <div className='mb-[30px] text-white text-xl font-medium flex items-center justify-center'>
            {currentPage?.title}
            </div>

            <div className='grid-cols-2 grid content-start  gap-[10px]'>
            {currentData?.map((item,i) =>(
                <Card
                key={i}
                svg={item.icon}
                title={item.title}
                color={item.color}
                href={item.href}
                onClick={() => logoutModal.onOpen()}
            />
            ))}
            </div>
    </div>
  )
}

export default Sidebar