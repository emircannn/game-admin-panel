'use client';

import ClientOnly from "@/components/ClientOnly";
import DiscountPage from "@/components/Pages/Discount.jsx";

const Page = () => {
  return (
    <ClientOnly>
    <DiscountPage/>
    </ClientOnly>
  )
}

export default Page