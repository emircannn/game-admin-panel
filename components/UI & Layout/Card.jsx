'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cloneElement } from "react"

const Card = ({
    href='/',
    svg,
    title,
    color = '#09071d'
}) => {

    const pathname = usePathname()


    const isHref = href === pathname

  return (
    <Link href={href}>
        <div 
        style={{borderColor: isHref ? color : '#8585f5'}}
        className="w-full aspect-square rounded-xl bg-primary-dark duration-300 hover:scale-105 cursor-pointer flex items-center justify-center border-2 flex-col gap-[4px]">
        {
        cloneElement(svg,
          {
            width: title === "" ? "64px" : "32px",
            height: title === "" ? "64px" : "32px",
            fill: isHref ? color : '#8585f5'
          }
        )
      }

            <span 
            style={{color: isHref ? color : '#8585f5'}}
            className="text-[12px] font-semibold">
                {title}
            </span>
        </div>
    </Link>
  )
}

export default Card