import Image from "next/image"

const CategoryBanner = ({src, title, char, height}) => {
  return (
    <div className={`clip-polygon 1336:h-[550px] 450:h-[400px] ${height ? height : 'h-[300px]'} overflow-hidden w-full top-0 absolute`}>
        <div className='w-full h-full relative'>
        <Image alt='' src={src} width={2500} height={1250} className='w-full h-full object-cover'/>
        <span className='absolute top-0 left-0 h-full w-full bg-black/30'></span>

        <div className='absolute top-0 left-0 h-full w-full 768:w-1/2 flex flex-col items-center justify-center'>
            <span className="heading !text-[40px]">{title}</span>
        </div>

        <div className='absolute top-0 right-0 h-full w-1/2 flex flex-col items-center justify-center max-768:hidden'>
            <Image alt='' src={char} width={2500} height={1250} className='w-full h-full object-contain'/>
        </div>
        </div>
    </div>
  )
}

export default CategoryBanner