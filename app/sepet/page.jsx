'use client';

import ClientOnly from "@/components/ClientOnly";
import CartPage from "@/components/Pages/Carts/CartPage";

const Page = () => {
  return (
    <ClientOnly>
    <CartPage/>
    </ClientOnly>
  )
}

export default Page