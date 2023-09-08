'use client';

import ClientOnly from "@/components/ClientOnly";
import LoginPage from "@/components/Pages/Auth/LoginPage";
import { AuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const Page = () => {
  const {auth} = useContext(AuthContext)
  const {push} = useRouter()

    useEffect(() => {
        if(auth) {
          push('/')
        }
    }, [auth, push])
    
  return (
    <ClientOnly>
    <LoginPage/>
    </ClientOnly>
  )
}

export default Page