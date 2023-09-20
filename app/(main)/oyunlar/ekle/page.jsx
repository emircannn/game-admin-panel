'use client';

import ClientOnly from '@/components/ClientOnly';
import AddGame from '@/components/Pages/AddGame';
import { AuthContext } from "@/context/authContext";
import { redirect, usePathname } from "next/navigation";
import { useContext, useEffect } from "react";

const Page = () => {
  const {auth} = useContext(AuthContext)
  const pathname = usePathname()

    useEffect(() => {
        if(pathname !== '/oturum') {
            if(!auth) {
              redirect('/oturum')
            }
        }
    }, [auth, pathname])
  return (
    <ClientOnly>
    <AddGame/>
    </ClientOnly>
  )
}

export default Page