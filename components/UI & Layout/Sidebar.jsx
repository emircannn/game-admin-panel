'use client'
import Card from './Card'
import data from '../sidebarData'

const Sidebar = () => {
  return (
    <div className='w-[240px] shrink-0 h-[calc(100vh_-_106px)] grid-cols-2 grid content-start gap-[10px] bg-primary-lighter px-[10px] py-[20px]'>
        {data?.map((item,i) =>(
            <Card
            key={i}
            svg={item.icon}
            title={item.title}
            color={item.color}
            href={item.href}
        />
        ))}
    </div>
  )
}

export default Sidebar