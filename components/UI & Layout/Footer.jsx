import Image from 'next/image'
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const Footer = () => {

    const currentYear = new Date().getFullYear()

    
  return (
    <footer className='bg-primary-dark mt-[20px]'>
        <div className='container p-[10px]'>
        <div className='flex flex-col items-center justify-center w-full mb-[12px]'>
        <div className='w-full flex items-center max-md:flex-col justify-between'>
            <div className='450:w-[100px] max-450:max-w-[75px] z-10'>
                <Image alt='' src='/images/logo.png' width={500} height={500} className='w-full h-full object-contain'/>
            </div>

            <ul className='flex items-center gap-[12px] max-md:flex-col max-md:my-[12px] text-[14px] text-white md:text-[16px]'>
                <li className='duration-300 hover:text-secondary'>Gizlilik Sözleşmesi </li>
                <li className='duration-300 hover:text-secondary'>Satış şartları </li>
                <li className='duration-300 hover:text-secondary'>İletişime Geç </li>
                <li className='duration-300 hover:text-secondary'>Sıkça Sorulan Sorular </li>
            </ul>
        </div>

        <div className='flex items-center justify-center gap-[12px]'>
            <div className='text-white p-[10px] bg-graident rounded-full hover:scale-110 duration-300'>
                <BsInstagram/>
            </div>
            <div className='text-white p-[10px] bg-rose-500 rounded-full hover:scale-110 duration-300'>
                <FaFacebookF/>
            </div>
            <div className='text-white p-[10px] bg-graident rounded-full hover:scale-110 duration-300'>
                <AiFillYoutube/>
            </div>
            <div className='text-white p-[10px] bg-graident rounded-full hover:scale-110 duration-300'>
                <AiOutlineTwitter/>
            </div>
        </div>
        </div>

        <div className='py-[12px] text-[14px] border-t border-secondary w-full text-center text-white'>
            <span><span className='text-secondary'>DMN Web Reklam</span> | Tüm Hakları Mahfuzdur. {currentYear}</span>
        </div>
        </div>
    </footer>
  )
}

export default Footer