import Button from "@/components/UI & Layout/Form/Button"
import Image from "next/image"

const CategoryBox = () => {
  return (
    <div className="w-full rounded-xl aspect-square bg-primary-lighter overflow-hidden duration-300 hover:neon-blue">
        <div className="w-full h-[60%] relative overflow-hidden shrink-0 group">
            <Image alt="" src='/images/strategy.webp' priority fill quality={100} className="object-cover group-hover:scale-110 duration-300" />

            <span className="absolute top-0 right-0 w-1/2 h-full">
            <Image alt="" src='/images/suleyman.png' priority fill quality={100} className="object-contain object-bottom group-hover:scale-110 duration-300" />
            </span>
        </div>

        <div className="p-[10px] w-full h-[40%] flex flex-col gap-[10px] justify-between">
                <h4 className=" font-semibold text-[16px] text-white">
                    Strateji
                </h4>
                <span className=" font-semibold text-[14px] text-secondary">
                    Oyun Sayısı: 14
                </span>

            <div className="flex gap-[10px]">
                <Button
                    height="40px"
                    wfull
                    title='Düzenle'
                />
                <Button
                    height="40px"
                    wfull
                    title='Sil'
                    bgColor='#8585f5'
                />
            </div>
        </div>
    </div>
  )
}

export default CategoryBox