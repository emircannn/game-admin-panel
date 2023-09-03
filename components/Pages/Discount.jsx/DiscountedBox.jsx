import Button from "@/components/UI & Layout/Form/Button"
import { getDiscountedGames } from "@/utils/Requests"
import { calculateRemainingTime, formatter } from "@/utils/helper"
import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"

const DiscountedBox = ({
    data,
    setData,
    setTotalPages
}) => {

    const discountDateDB = data?.discountDate ? data?.discountDate : null;
    const [loading, setLoading] = useState(false);
    const [remainingDate, setRemainingDate] = useState(calculateRemainingTime(discountDateDB));

    useEffect(() => {
    if(discountDateDB) {
        const timerInterval = setInterval(() => {
            const newRemainingDate = calculateRemainingTime(discountDateDB);
            setRemainingDate(newRemainingDate);
            }, 1000);
        
            return () => {
                clearInterval(timerInterval);
            };
    }
    }, [discountDateDB]);

    const handleFinishDiscount = async () => {
        try {
            setLoading(true)
            const token = sessionStorage.getItem('adminToken');
            const res = await axios.post(`${process.env.REQUEST}admin/finishDiscount?id=${data?._id}`,{}, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        toast.success(res?.data?.message, {position: 'bottom-right'})
        setLoading(false)
        getDiscountedGames(setData, setTotalPages)
        } catch (error) {
            setLoading(false)
            toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
        }
    };

  return (
    <div className="w-full rounded-xl aspect-square bg-primary-lighter overflow-hidden duration-300 hover:neon-blue">
        <div className="w-full h-[50%] relative overflow-hidden shrink-0 group">
            <Image alt={data?.name} src={data?.coverImage} priority fill quality={100} className="object-cover hover:scale-110 duration-300"/>

            {/* <span className="absolute w-full h-full top-0 left-0 bg-black/50 flex cursor-pointer items-center justify-center flex-col 
            gap-[10px] opacity-0 group-hover:opacity-100 duration-300">
                <BsFillEyeFill className="text-white" size={28}/>
                <span className="text-[14px] font-semibold text-white">
                    Önizlemeyi Gör
                </span>
            </span> */}
        </div>

        <div className="p-[10px] w-full h-[50%] flex flex-col gap-[10px] justify-between">
                <h4 className=" font-semibold text-[16px] text-white line-clamp-1">
                    {data?.name}
                </h4>

                <div className="flex items-center justify-between gap-[10px] text-[14px] font-medium text-white">
                    <span className="line-through">
                        {formatter.format(data?.price)}
                    </span>
                    <span>
                        {formatter.format(data?.discountPrice)}
                    </span>
                    <span className="px-[6px] py-[2px] rounded-full bg-secondary">
                    %{data?.discountRate}
                    </span>
                </div>

                <span className="font-semibold text-[13px] text-secondary">
                    Kalan Süre: {data?.discountDate ? remainingDate : 'Süresiz'}
                </span>

                <Button
                    height="40px"
                    wfull
                    title='İndirimi Bitir'
                    disabled={loading}
                    onClick={() => handleFinishDiscount()}
                />
        </div>
    </div>
  )
}

export default DiscountedBox