'use client';

import ClientOnly from "@/components/ClientOnly";
import ChatPage from "@/components/Pages/Request/Chat";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const {push} = useRouter()
  const pathname = usePathname()

    useEffect(() => {
        if(pathname !== '/oturum') {
          const token = sessionStorage.getItem('adminToken')
            if(!token) {
                push('/oturum')
            }
        }
    }, [ pathname, push])
  return (
    <ClientOnly>
    <ChatPage/>
    </ClientOnly>
  )
}

export default Page