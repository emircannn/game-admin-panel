import Button from "@/components/UI & Layout/Form/Button"
import Arrow from '@/public/icons/arrow.svg';
import { useState } from 'react';


const DiscountPage = () => {

    const [weeklyDis, setWeeklyDis] = useState(false)

  return (
    <div className="flex flex-col gap-[20px]">
        <div className="flex items-center justify-between border-b border-secondary pb-[10px]">
            <h4 className="text-xl font-semibold text-white">
                Süreli İndirim
            </h4>

            <div className="flex gap-[20px] items-center">
                <Button
                    title='İndirim Ekle'
                    height="40px"
                />
                <Button
                    title='Toplu İndirim Ekle'
                    height="40px"
                />

                <button
                onClick={() => setWeeklyDis(!weeklyDis)}
                >
                    <Arrow fill='#8585f5' width='20' height='20' className={`${weeklyDis ? 'rotate-[270deg]' : 'rotate-90'} duration-300`}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default DiscountPage