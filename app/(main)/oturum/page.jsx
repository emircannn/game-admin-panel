'use client';

import ClientOnly from "@/components/ClientOnly";
import LoginPage from "@/components/Pages/Auth/LoginPage";
import { AuthContext } from "@/context/authContext";
import { redirect } from "next/navigation";
import { useContext, useEffect } from "react";

const Page = () => {
  const {auth} = useContext(AuthContext)

    useEffect(() => {
        if(auth) {
          redirect('/')
        }
    }, [auth])
    
  return (
    <ClientOnly>
    <LoginPage/>
    </ClientOnly>
  )
}

export default Page