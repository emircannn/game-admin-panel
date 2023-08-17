'use client';

import ClientOnly from "@/components/ClientOnly";
import OrdersPage from "@/components/Pages/Orders/OrdersPage";

const Page = () => {
  return (
    <ClientOnly>
    <OrdersPage/>
    </ClientOnly>
  )
}

export default Page