'use client'


const Toggle = ({
    setToggle,
    toggle
}) => {
  return (
    <div className="w-[400px] h-[50px] rounded-xl bg-primary-lighter relative flex items-center select-none">
     <span 
     onClick={() => setToggle('all')}
     className={`w-1/3 h-full flex items-center cursor-pointer z-50 justify-center duration-300 text-[13px]  font-semibold ${toggle === 'all' ? 'text-white' : 'text-secondary'}`}>
        Tümü
     </span>
     <span 
     onClick={() => setToggle('answered')}
     className={`w-1/3 h-full flex items-center cursor-pointer z-50 justify-center duration-300 text-[13px]  font-semibold ${toggle === 'answered' ? 'text-white' : 'text-secondary'}`}>
        Cevaplanan
     </span>
     <span
     onClick={() => setToggle('notanswered')} 
     className={`w-1/3 h-full flex items-center cursor-pointer z-50 justify-center duration-300 text-[13px]  font-semibold ${toggle === 'notanswered' ? 'text-white' : 'text-secondary'}`}>
        Cevaplanmayan
     </span>

     <div className={`absolute top-0 w-1/3 h-full p-[5px] duration-300 
     ${toggle === 'all' && 'translate-x-0'}
     ${toggle === 'answered' && 'translate-x-full'}
     ${toggle === 'notanswered' && 'translate-x-[200%]'}
     `}>
        <div className="w-full h-full rounded-xl bg-gradient-to-l from-secondary to-secondary-light"/>
     </div>
    </div>
  )
}

export default Toggle