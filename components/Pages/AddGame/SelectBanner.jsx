import { handleSelectImage } from "@/utils/selectImage"
import Image from "next/image"
import { IoMdPhotos } from "react-icons/io"

const SelectBanner = ({
    setCoverImage,
    setCoverImagePre,
    setBannerImage,
    setBannerImagePre,
    coverImagePre,
    bannerImagePre
}) => {
  return (
    <div className="w-full flex flex-col gap-[10px]">
        <h4 className="text-lg font-semibold text-white border-b border-secondary">
            Kapak Resmi & Banner
        </h4>
        <div className="grid grid-cols-2 gap-[20px]">
            <div className="w-full aspect-video rounded-xl relative overflow-hidden border-2 border-secondary flex items-center justify-center">
                

                {coverImagePre ? 
                    <Image alt='char' src={coverImagePre} fill quality={100} className='object-cover'/>
                :
                <div className="flex flex-col items-center">
                    <IoMdPhotos size={40} className='text-secondary'/>
                    <span className="text-secondary">
                        Kapak Resmi Ekle
                    </span>
                </div>}

                <input 
                    onChange={(e) => handleSelectImage(e, setCoverImagePre)}
                    type="file" 
                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' />
            </div>

            <div className="w-full aspect-video rounded-xl relative overflow-hidden border-2 border-secondary flex items-center justify-center">
                {bannerImagePre ? 
                    <Image alt='char' src={bannerImagePre} fill quality={100} className='object-cover'/>
                :
                <div className="flex flex-col items-center">
                    <IoMdPhotos size={40} className='text-secondary'/>
                    <span className="text-secondary">
                        Banner Resmi Ekle
                    </span>
                </div>}

                <input 
                    onChange={(e) => handleSelectImage(e, setBannerImagePre)}
                    type="file" 
                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' />
            </div>

        </div>
    </div>
  )
}

export default SelectBanner