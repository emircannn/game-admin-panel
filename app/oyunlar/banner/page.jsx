'use client';

import ClientOnly from "@/components/ClientOnly";
import BannerPage from "@/components/Pages/Banner";

const Page = () => {
  return (
    <ClientOnly>
    <BannerPage/>
    </ClientOnly>
  )
}

export default Page