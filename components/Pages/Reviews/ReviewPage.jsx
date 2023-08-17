'use client';

import FilterSide from "../Game/FilterSide";
import Heads from "./Heads";
import Review from "./Review";


const ReviewPage = () => {
  return (
    <div className="flex flex-col gap-[20px]">
        <FilterSide
            noSecondAction
        />

        <Heads/>

        <div className="flex flex-col gap-[20px]">
            <Review/>
        </div>
    </div>
  )
}

export default ReviewPage