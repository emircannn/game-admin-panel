'use client';

import ClientOnly from "@/components/ClientOnly";
import UsersPage from "@/components/Pages/Users/UsersPage";

const Page = () => {
  return (
    <ClientOnly>
    <UsersPage/>
    </ClientOnly>
  )
}

export default Page