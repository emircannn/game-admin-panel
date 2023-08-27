'use client';

import ClientOnly from "@/components/ClientOnly";
import UsersPage from "@/components/Pages/Users/UsersPage";
import { AuthContext } from "@/context/authContext";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const Page = () => {
  const {auth} = useContext(AuthContext)
  const {push} = useRouter()
  const pathname = usePathname()

    useEffect(() => {
        if(pathname !== '/oturum') {
            if(!auth) {
                push('/oturum')
            }
        }
    }, [auth, pathname, push])
  return (
    <ClientOnly>
    <UsersPage/>
    </ClientOnly>
  )
}

export default Page