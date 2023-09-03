import Button from "@/components/UI & Layout/Form/Button"
import GameSkeleton from "../Game/Skeleton";
import DiscountedBox from "./DiscountedBox";
import useDiscountModal from "@/hooks/useDiscountModal";
import DiscountModal from "@/components/modals/DiscountModal";
import { useEffect, useState } from "react";
import { getDiscountedGames } from "@/utils/Requests";
import Loading from "@/components/UI & Layout/Loading";
import Pagination from "@/components/UI & Layout/Pagination";


const DiscountPage = () => {

    const discountModal = useDiscountModal()
    const [data, setData] = useState()
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState()

    useEffect(() => {
        getDiscountedGames(setData,setTotalPages, page);
    }, [page])

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
                    setTotalPages={setTotalPages}
                />
            ))}
        </div>

        <div className='flex justify-end'>
            {totalPages > 1 && <Pagination siblingCount={5} totalPages={totalPages} onPageChange={setPage}/>}
        </div>

        
        <DiscountModal
            setData={setData}
            setDisTotalPage={setTotalPages}
        />
    </div>
  )
}

export default DiscountPage