"use client";

import { AuthContext } from "@/context/authContext";
import { dateFormater } from "@/utils/helper";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function Home() {

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

    const date = dateFormater(Date.now())

  return (
   <main className="text-white text-[16px] font-semibold">
    Hoşgeldiniz, {date}
   </main>
  )
}
