'use client'

import Image from 'next/image'
import {FcInfo} from 'react-icons/fc'

const YoutubeInfo = () => {
  return (
    <div className="relative group">
        <FcInfo size={20} className='cursor-pointer'/>

        <div className='w-[380px] absolute text-white top-6 right-6 bg-primary-lighter z-50 rounded-xl neon-blue hidden group-hover:flex duration-300 p-[15px]'>
            <p className='text-[12px] font-medium text-center'>
                Videonun doğru bir şekilde gösterimi için https://www.youtube.com/embed/ urlsinin sonuna video ID&apos;sini ekleyiniz.
                <br /> Örn: https://www.youtube.com/embed/<b className='text-secondary'>XhP3Xh4LMA8</b> <br />

                Youtube linklerinde video ID&apos;leri: <br />

                <div className='w-full h-[30px] relative overflow-hidden'>
                    <Image src='/images/id.png' alt='' fill quality={100} className='object-contain h-full'/>
                </div>
            </p>
        </div>  
    </div>
  )
}

export default YoutubeInfo