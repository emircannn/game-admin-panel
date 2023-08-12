import Arrow from '@/public/icons/arrow.svg';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler'

const StyledSelect = ({
    width='100%',
    height='55px',
    borderRadius='12px',
    dropdownHeight ='400px',
    value,
    setValue,
    options,
    placeholder='placeholder'
}) => {

    const [open, setOpen] = useState(false)

    const label = options?.find((option) => String(option.value) === String(value))

  return (
    <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
        <div 
        style={{width}}
        className='relative cursor-pointer'>
            <div
                onClick={() => setOpen(!open)}
                style={{ height, borderRadius}}
                className="bg-primary-dark text-white flex items-center p-[12px] border-2 border-graident-dark 
                duration-300 hover:border-secondary justify-between text-[14px] w-full">
                {label ? label.label : placeholder}

                <button 
                className='shrink-0'>
                    <Arrow fill='#8585f5' height='20' width='20' className={`${open ? 'rotate-[270deg]' : 'rotate-90'} duration-300`}/>
                </button>
            </div>

            
            {open && <ul 
            style={{width, borderRadius, height: dropdownHeight}}
            className='absolute left-0 top-[110%] glass-light border border-secondary-light/50 p-[10px] flex flex-col gap-[5px] overflow-y-auto z-50'>
                    {options?.map((option, i) => (
                        <li 
                        key={i}
                        id=''
                        name='select'
                        className=' relative px-[10px] py-[5px] w-full duration-300 hover:bg-secondary rounded-xl text-white text-[14px] font-semibold'>
                        
                        {option?.label}

                        <input 
                        type="radio" 
                        name="select" 
                        onClick={() => setOpen(false)}
                        id= {option?.value} 
                        value={option?.value}
                        onChange={(e) => setValue(e.target.value)}
                        className='absolute top-0 left-0 w-full h-full cursor-pointer opacity-0'
                        />
                    </li>
                    ))}
            </ul>}
    </div>
    </OutsideClickHandler>
  )
}

export default StyledSelect