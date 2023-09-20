'use client';

import ClientOnly from "@/components/ClientOnly";
import CartPage from "@/components/Pages/Carts/CartPage";
import { AuthContext } from "@/context/authContext";
import { redirect, usePathname, useRouter } from "next/navigation";
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
    <CartPage/>
    </ClientOnly>
  )
}

export default Page