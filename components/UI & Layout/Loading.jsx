import Image from "next/image"

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center absolute top-0 left-0 z-[999] bg-gradient-to-tl from-primary-dark via-primary to-primary">
        <div className="w-[150px] aspect-square relative overflow-hidden">
            <Image src='/images/loading.gif' fill quality={100} alt="loading" className="object-contain"/>
        </div>
    </div>
  )
}

export default Loading