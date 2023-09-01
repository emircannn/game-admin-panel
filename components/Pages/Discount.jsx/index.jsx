import Button from "@/components/UI & Layout/Form/Button"
import GameSkeleton from "../Game/Skeleton";
import DiscountedBox from "./DiscountedBox";
import useDiscountModal from "@/hooks/useDiscountModal";
import DiscountModal from "@/components/modals/DiscountModal";
import { useEffect, useState } from "react";
import { getDiscountedGames } from "@/utils/Requests";
import Loading from "@/components/UI & Layout/Loading";


const DiscountPage = () => {

    const discountModal = useDiscountModal()

    const [data, setData] = useState()

    useEffect(() => {
        getDiscountedGames(setData);
    }, [])

    if(!data) {
        return <Loading/>
    }
  return (
    <div className="flex flex-col gap-[20px]">
        <div className="flex items-center justify-between border-b border-secondary pb-[10px]">

            <h4 className="text-xl font-semibold text-white">
                İndirim
            </h4>

            <div className="flex gap-[20px] items-center">
                <Button
                    title='Ekle'
                    height="40px"
                    onClick={() => discountModal.onOpen()}
                />
            </div>
        </div>

        <div className='grid grid-cols-3 gap-[20px] w-full'>
            {data?.map((item,i) => (
                <DiscountedBox
                    key={i}
                    data={item}
                    setData={setData}
                />
            ))}
        </div>

        
        <DiscountModal
            setData={setData}
        />
    </div>
  )
}

export default DiscountPage