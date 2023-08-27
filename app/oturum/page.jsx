'use client';

import ClientOnly from "@/components/ClientOnly";
import LoginPage from "@/components/Pages/Auth/LoginPage";

const Page = () => {
  return (
    <ClientOnly>
    <LoginPage/>
    </ClientOnly>
  )
}

export default Page