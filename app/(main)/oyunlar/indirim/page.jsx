'use client';

import ClientOnly from "@/components/ClientOnly";
import DiscountPage from "@/components/Pages/Discount.jsx";
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
    <DiscountPage/>
    </ClientOnly>
  )
}

export default Page