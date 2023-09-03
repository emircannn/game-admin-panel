'use client'
import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <div className='450:w-[120px] max-450:h-[50px] z-10'>
        <Link href='/'>
            <Image alt='' src='/images/logo.png' width={500} height={500} className='w-full h-full object-contain'/>
        </Link>
        </div>
  )
}

export default Logo