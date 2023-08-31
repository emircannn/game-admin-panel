'use client'

const StepHeader = ({
    step
}) => {
  return (
    <div className="w-full h-[80px] bg-primary-lighter rounded-xl flex items-center justify-evenly">
        <div className="flex items-center gap-[10px]">
            <span className={`w-[40px] aspect-square rounded-full bg-secondary flex items-center justify-center text-white font-semibold text-[18px] duration-300 ${step === 0 && 'neon-blue'}`}>
                1
            </span>

            <span className={`text-white font-semibold text-[14px]`}>
                Oyun Bilgileri & Açıklama
            </span>
        </div>
        <div className="flex items-center gap-[10px]">
            <span className={`w-[40px] aspect-square rounded-full bg-secondary flex items-center justify-center text-white font-semibold text-[18px] duration-300 ${step === 1 && 'neon-blue'}`}>
                2
            </span>

            <span className={`text-white font-semibold text-[14px]`}>
                Sistem Gereksinimleri & Ön Sipariş 
            </span>
        </div>
        <div className="flex items-center gap-[10px]">
            <span className={`w-[40px] aspect-square rounded-full bg-secondary flex items-center justify-center text-white font-semibold text-[18px] duration-300 ${step === 2 && 'neon-blue'}`}>
                3
            </span>

            <span className={`text-white font-semibold text-[14px]`}>
                Benzer Oyunlar
            </span>
        </div>
        <div className="flex items-center gap-[10px]">
            <span className={`w-[40px] aspect-square rounded-full bg-secondary flex items-center justify-center text-white font-semibold text-[18px] duration-300 ${step === 3 && 'neon-blue'}`}>
                4
            </span>

            <span className={`text-white font-semibold text-[14px]`}>
                Oyun Medyası
            </span>
        </div>
    </div>
  )
}

export default StepHeader