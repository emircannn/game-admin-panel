"use client";

import { AuthContext } from "@/context/authContext";
import { dateFormater } from "@/utils/helper";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import {redirect} from 'next/navigation'
export default function Home() {

  const {auth} = useContext(AuthContext)
  const pathname = usePathname()

    useEffect(() => {
        if(pathname !== '/oturum') {
            if(!auth) {
              redirect('/oturum')
            }
        }
    }, [auth, pathname])

    const date = dateFormater(Date.now())

  return (
   <main className="text-white text-[16px] font-semibold">
    Hoşgeldiniz, {date}
   </main>
  )
}
