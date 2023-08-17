'use client';

import ClientOnly from "@/components/ClientOnly";
import ReviewPage from "@/components/Pages/Reviews/ReviewPage";

const Page = () => {
  return (
    <ClientOnly>
    <ReviewPage/>
    </ClientOnly>
  )
}

export default Page