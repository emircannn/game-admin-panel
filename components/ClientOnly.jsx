"use client";

import { useEffect, useState } from "react"
import NextNProgress from 'nextjs-progressbar';

const ClientOnly = ({children}) => {

    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
      setHasMounted(true)
    }, [])

    if (!hasMounted){
        return null
    }
    

  return (
    <>
    <NextNProgress color="#8585f5" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
        {children}
    </>
  )
}

export default ClientOnly