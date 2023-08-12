"use client";

import Button from '@/components/UI & Layout/Form/Button'
import Image from 'next/image'
import { useState } from 'react'
import { FaSadTear } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

const NotFound  = () => {

    const {push} = useRouter()

    const [hover, setHover] = useState(false)

  return (
        <div className='w-full h-screen flex flex-col items-center justify-center gap-[80px] overflow-hidden'>
        <div className='flex flex-col justify-center items-center gap-[20px]'>
            <span className='text-4xl text-secondary font-semibold'>404</span>

            <p className='text-secondary text-xl font-semibold flex items-center gap-3'>
                Sayfa bulunamadı <FaSadTear className='text-secondary'/>
            </p>

            <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            >
            <Button
                mt='0'
                height='h-[55px]'
                title='Yeniden Bağlan'
                onClick={() => push('/')}
            />
            </div>
        </div>

       <div className='flex w-full'>
       <div className='w-1/2 relative h-[30px] 768:h-[50px]'>
            <Image src='/icons/404bottom.svg' alt='' fill className={`object-cover object-right duration-300 transform ${hover ? 'translate-x-4' : '-translate-x-16 768:-translate-x-52'}`}/>
        </div>
       <div className='w-1/2 relative h-[30px] 768:h-[50px]'>
            <Image src='/icons/404top.svg' alt='' fill className={`object-cover object-left duration-300 ${hover ? '-translate-x-[18px]' : 'translate-x-16 768:translate-x-52'}`}/>
        </div>
       </div>
    </div>
  )
}

export default NotFound 