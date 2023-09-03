'use client'
const Button = ({
  title,
  px= '30',
  py= '15',
  mt= '0',
  bgColor,
  textColor = 'white',
  textSize = '16px',
  fontWeight = 'semibold',
  rounded= 'xl',
  hoverv2,
  wfull= false,
  onClick,
  iconLeft,
  iconRight,
  disabled,
  width,
  height='55px',
  type
}) => {


return (
  <button 
  type={type}
  style={{
      paddingLeft : `${px}px`,
      paddingRight : `${px}px`,
      paddingTop : `${py}px`,
      paddingBottom : `${py}px`,
      marginTop : `${mt}px`,
      fontSize: textSize,
      height,
      width,
      backgroundColor: bgColor
  }}
  onClick={onClick}
  disabled={disabled}
  className={`
  ${!bgColor && `bg-graident`}
  text-${textColor} 
  gap-[6px] 
  align-cntr 
  font-${fontWeight} 
  rounded-${rounded} 
  ${wfull && 'w-full'} 
  duration-300 
  ${hoverv2 ? hoverv2 : `hover:bg-secondary`}
  disabled:opacity-60
  disabled:cursor-not-allowed
  `}>

          {iconLeft}
          {title}
          {iconRight}
  </button>
)
}

export default Button