'use client';

import ClientOnly from "@/components/ClientOnly";
import GamePage from "@/components/Pages/Game/GamePage";
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
    <GamePage/>
    </ClientOnly>
  )
}

export default Page