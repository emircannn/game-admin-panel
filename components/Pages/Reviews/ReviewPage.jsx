'use client';

import { useEffect, useState } from "react";
import Heads from "./Heads";
import Review from "./Review";
import Loading from "@/components/UI & Layout/Loading";
import { getReviews } from "@/utils/Requests";
import Pagination from "@/components/UI & Layout/Pagination";
import GameSkeleton from "../Game/Skeleton";


const ReviewPage = () => {
  const [data, setData] = useState()
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState()

  useEffect(() => {
    getReviews(setData, page, setTotalPages)
  }, [page])

  if(!data) {
    return <Loading/>
  }

  return (
    <div className="flex flex-col gap-[20px]">

        <Heads/>

        <div className="flex flex-col gap-[20px]">
            {data ? 
            data.length > 0 ?
            data.map((item,i ) => (
              <Review
                key={i}
                data={item}
              />
            ))
            : 
            <div className="text-white text-[14px] font-semibold">
                Henüz değerlendirme yapılmadı...
            </div> :
            <>
            </>
            }
        </div>

        <div className='flex justify-end'>
          {totalPages > 1 && <Pagination siblingCount={5} totalPages={totalPages} onPageChange={setPage}/>}
      </div>
    </div>
  )
}

export default ReviewPage