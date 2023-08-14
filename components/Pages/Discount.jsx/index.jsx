import Button from "@/components/UI & Layout/Form/Button"
import GameSkeleton from "../Game/Skeleton";
import DiscountedBox from "./DiscountedBox";
import useDiscountModal from "@/hooks/useDiscountModal";


const DiscountPage = () => {

    const discountModal = useDiscountModal()

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
            <DiscountedBox/>
            <DiscountedBox/>
            <DiscountedBox/>
            <DiscountedBox/>
            <DiscountedBox/>
            <GameSkeleton/>
        </div>
    </div>
  )
}

export default DiscountPage