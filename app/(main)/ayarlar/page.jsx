'use client';

import ClientOnly from "@/components/ClientOnly";
import SettingsPage from "@/components/Pages/Settings";
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
    <SettingsPage/>
    </ClientOnly>
  )
}

export default Page