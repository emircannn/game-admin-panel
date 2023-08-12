import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {CgClose} from 'react-icons/cg'
import SearchCont from './SearchCont'
import Cart from '../../public/icons/basket.svg'
import User from '../../public/icons/user.svg'
import { useRouter } from 'next/router'
import Logo from './Logo'
import Link from 'next/link'


const Header = () => {
    const [search, setSearch] = useState(false)
    const {push} = useRouter()
  return (
    <header className='w-full flex bg-transparent gap-[8px] items-center justify-between py-[20px] max-768:px-[10px] 768:px-[50px]'>
            {/* <Logo/> */}

            <h1 className='font-bold text-white text-3xl z-40'>
                Logo
            </h1>

            <nav className={`flex items-center z-50 glass ${search ? 'max-768:w-[200px] max-1140:w-[300px] !sticky top-[30px]' : 'relative'} overflow-hidden justify-between 768:p-[8px] rounded-full gap-[20px]`}>
                <ul className='flex items-center max-1140:hidden text-white text-[16px] gap-[20px] pl-[12px]'>
                    <li className='cursor-pointer duration-300 hover:text-secondary'>Trendler</li>
                    <li className='cursor-pointer duration-300 hover:text-secondary'>Ön Sipariş</li>
                    <li className='cursor-pointer duration-300 hover:text-secondary'>Kategortiler</li>
                    <li className='cursor-pointer duration-300 hover:text-secondary'>S.S.S.</li>
                </ul>

                <button onClick={() => setSearch(true)} className='p-[8px] cursor-pointer duration-300 hover:text-primary hover:bg-secondary-light bg-gradient-to-tl 
                from-secondary to-secondary-light text-white rounded-full'>
                <AiOutlineSearch size={24}/>
                </button>

                

                <div className={`absolute top-0 ${search ? 'right-0' : '-right-[100%]'} duration-300 p-[4px] bg-gradient-to-tl from-secondary to-secondary-light 
                w-full h-full flex items-center justify-between`}>
                    <div className='flex items-center w-full gap-[8px]'>
                    <AiOutlineSearch size={24} className='ml-[12px]'/>
                    <input type="text" className='bg-transparent outline-none border-none h-full text-primary w-full placeholder:text-primary-light/75 font-bold text-[14px]'
                     placeholder='Oyun Ara...' />
                    </div>

                    <button onClick={() => setSearch(false)} className='flex items-center justify-center text-primary group h-[36px] rounded-full min-w-[36px]'>
                        <CgClose size={24} className='group-hover:rotate-180 duration-300'/>
                        </button>
                </div>
            </nav>

            {search && <SearchCont/>}

        <div className='flex items-center z-10 768:gap-[18px] text-white'>
        <Link href='/sepet'>
        <button className='768:p-[12px] p-[6px] hover:bg-secondary duration-300 rounded-xl'>
        <Cart width='22' height='22' fill='#fff'/>
        </button>
        </Link>

        <button onClick={() => push('/oturum')} className='768:p-[12px] p-[6px] bg-primary-light hover:border-graident-dark border-2 border-transparent duration-300 rounded-xl'>
        <User width='22' height='22' fill='#b6b6f8'/>
        </button>
        </div>
    </header>
  )
}

export default Header