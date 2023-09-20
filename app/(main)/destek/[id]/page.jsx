'use client';

import ClientOnly from "@/components/ClientOnly";
import ChatPage from "@/components/Pages/Request/Chat";
import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const pathname = usePathname()

    useEffect(() => {
        if(pathname !== '/oturum') {
          const token = sessionStorage.getItem('adminToken')
            if(!token) {
              redirect('/oturum')
            }
        }
    }, [ pathname])
  return (
    <ClientOnly>
    <ChatPage/>
    </ClientOnly>
  )
}

export default Page