'use client';



const Heads = () => {
  return (
    <div className="px-[12px] mt-[20px] flex items-center gap-[20px]">
        <div className="w-[76px] flex items-center justify-center text-[14px] font-semibold text-white shrink-0">
            Görsel
        </div>

        <div className="grid grid-cols-5 gap-[20px] w-full">
            <div className="w-full flex items-center text-[14px] font-semibold text-white">
            Kullanıcı Adı
            </div>
            <div className="w-full flex items-center justify-center text-[14px] font-semibold text-white">
            Email
            </div>
            <div className="w-full flex items-center justify-center text-[14px] font-semibold text-white">
            Sepet Tutarı
            </div>
            <div className="w-full flex items-center justify-center text-[14px] font-semibold text-white">
            Sepet Tarihi
            </div>
        </div>
    </div>
  )
}

export default Heads