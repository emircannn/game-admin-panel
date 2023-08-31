'use client'

import Calendar from "@/components/UI & Layout/Form/Calendar"
import Input from "@/components/UI & Layout/Form/Input"

const PreOrderDate = ({
    isChecked,
    selectedRange,
    handleSelect,
    handleCheckboxChange,
    setMinimumSystemRequirements,
    setRecommendedSystemRequirements,
    minimumSystemRequirements,
    recommendedSystemRequirements,
    handleReleaseDate,
    releaseDate,
    data
}) => {
  return (
    <div className="flex flex-col gap-[10px]">
    <h4 className="text-white font-semibold text-[18px]">Minimum Sistem Gereksinimleri</h4>
    <div className="grid grid-cols-3 gap-[20px]">
            <label className="flex flex-col gap-[8px] text-[14px] font-semibold text-white">
            İşletim Sistemi

                <Input
                    wfull
                    placeholder={data?.minimumSystemRequirements?.operatingSystem}
                    onChange={(e) => setMinimumSystemRequirements({ ...minimumSystemRequirements, operatingSystem: e.target.value })}
                    value={minimumSystemRequirements.operatingSystem}
                />
            </label>
            <label className="flex flex-col gap-[8px] text-[14px] font-semibold text-white">
            İşlemci

                <Input
                    wfull
                    placeholder={data?.minimumSystemRequirements?.processor}
                    onChange={(e) => setMinimumSystemRequirements({ ...minimumSystemRequirements, processor: e.target.value })}
                    value={minimumSystemRequirements.processor}
                />
            </label>
            <label className="flex flex-col gap-[8px] text-[14px] font-semibold text-white">
            Bellek

                <Input
                    wfull
                    placeholder={data?.minimumSystemRequirements?.memory}
                    onChange={(e) => setMinimumSystemRequirements({ ...minimumSystemRequirements, memory: e.target.value })}
                    value={minimumSystemRequirements.memory}
                />
            </label>
            <label className="flex flex-col gap-[8px] text-[14px] font-semibold text-white">
            Ekran Kartı

                <Input
                    wfull
                    placeholder={data?.minimumSystemRequirements?.graphicsCard}
                    onChange={(e) => setMinimumSystemRequirements({ ...minimumSystemRequirements, graphicsCard: e.target.value })}
                    value={minimumSystemRequirements.graphicsCard}
                />
            </label>
            <label className="flex flex-col gap-[8px] text-[14px] font-semibold text-white">
            Ağ

                <Input
                    wfull
                    placeholder={data?.minimumSystemRequirements?.network}
                    onChange={(e) => setMinimumSystemRequirements({ ...minimumSystemRequirements, network: e.target.value })}
                    value={minimumSystemRequirements.network}
                />
            </label>
            <label className="flex flex-col gap-[8px] text-[14px] font-semibold text-white">
            Depolama

                <Input
                    wfull
                    placeholder={data?.minimumSystemRequirements?.disk}
                    onChange={(e) => setMinimumSystemRequirements({ ...minimumSystemRequirements, disk: e.target.value })}
                    value={minimumSystemRequirements.disk}
                />
            </label>
    </div>
    <h4 className="text-white font-semibold text-[18px] mt-[20px]">Önerilen Sistem Gereksinimleri</h4>
    <div className="grid grid-cols-3 gap-[20px]">
            <label className="flex flex-col gap-[8px] text-[14px] font-semibold text-white">
            İşletim Sistemi

                <Input
                    wfull
                    placeholder={data?.recommendedSystemRequirements?.operatingSystem}
                    onChange={(e) => setRecommendedSystemRequirements({ ...recommendedSystemRequirements, operatingSystem: e.target.value })}
                    value={recommendedSystemRequirements.operatingSystem}
                />
            </label>
            <label className="flex flex-col gap-[8px] text-[14px] font-semibold text-white">
            İşlemci

                <Input
                    wfull
                    placeholder={data?.recommendedSystemRequirements?.processor}
                    onChange={(e) => setRecommendedSystemRequirements({ ...recommendedSystemRequirements, processor: e.target.value })}
                    value={recommendedSystemRequirements.processor}
                />
            </label>
            <label className="flex flex-col gap-[8px] text-[14px] font-semibold text-white">
            Bellek

                <Input
                    wfull
                    placeholder={data?.recommendedSystemRequirements?.memory}
                    onChange={(e) => setRecommendedSystemRequirements({ ...recommendedSystemRequirements, memory: e.target.value })}
                    value={recommendedSystemRequirements.memory}
                />
            </label>
            <label className="flex flex-col gap-[8px] text-[14px] font-semibold text-white">
            Ekran Kartı

                <Input
                    wfull
                    placeholder={data?.recommendedSystemRequirements?.graphicsCard}
                    onChange={(e) => setRecommendedSystemRequirements({ ...recommendedSystemRequirements, graphicsCard: e.target.value })}
                    value={recommendedSystemRequirements.graphicsCard}
                />
            </label>
            <label className="flex flex-col gap-[8px] text-[14px] font-semibold text-white">
            Ağ

                <Input
                    wfull
                    placeholder={data?.recommendedSystemRequirements?.network}
                    onChange={(e) => setRecommendedSystemRequirements({ ...recommendedSystemRequirements, network: e.target.value })}
                    value={recommendedSystemRequirements.network}
                />
            </label>
            <label className="flex flex-col gap-[8px] text-[14px] font-semibold text-white">
            Depolama

                <Input
                    wfull
                    placeholder={data?.recommendedSystemRequirements?.disk}
                    onChange={(e) => setRecommendedSystemRequirements({ ...recommendedSystemRequirements, disk: e.target.value })}
                    value={recommendedSystemRequirements.disk}
                />
            </label>
        </div>
        <h4 className="text-white font-semibold text-[18px] mt-[20px] flex items-center gap-[10px]">Ön Sipariş & Çıkış Tarihi
           

            <span className="text-[16px] text-secondary">*İkinci Tarih Seçiminiz Kaydedilecektir.</span>
        </h4>
            <div className='w-full gap-[20px] flex'>
                <div className="flex flex-col gap-[10px] w-full">
                    <span className="text-white text-[14px] flex items-center gap-[10px]">
                    Ön Sipariş 
                    <input 
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className='w-[18px] h-[18px] text-secondary'
                    type="checkbox" 
                    name="game"/>
                    </span>
                   
                <Calendar
                    onChange={handleSelect}
                    value={selectedRange}
                    preOrder
                />
                </div>
                <div className="flex flex-col gap-[10px] w-full">
                    <span className="text-white text-[14px]">Çıkış Tarihi *Çıkış Tarihi Zorunludur.*</span>
                <Calendar
                    onChange={handleReleaseDate}
                    value={releaseDate}
                />
                </div>
                
            </div>
      
    </div>
  )
}

export default PreOrderDate