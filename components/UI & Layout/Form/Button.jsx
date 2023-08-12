
const Button = ({
    title,
    px= '30',
    py= '15',
    mt= '20',
    bgColor = 'graident',
    textColor = 'white',
    textSize = '16px',
    fontWeight = 'semibold',
    rounded= 'xl',
    hover= 'secondary',
    hoverv2,
    wfull= false,
    onClick,
    iconLeft,
    iconRight,
    disabled,
    width,
    height,
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
    }}
    onClick={onClick}
    disabled={disabled}
    className={`
    bg-${bgColor} 
    text-${textColor} 
    gap-[6px] 
    align-cntr 
    font-${fontWeight} 
    rounded-${rounded} 
    ${wfull && 'w-full'} 
    duration-300 
    ${hoverv2 ? hoverv2 : `hover:bg-${hover}`}
    disabled:opacity-60
    disabled:cursor-not-allowed
    ${width}
    ${height}
    `}>

            {iconLeft}
            {title}
            {iconRight}
    </button>
  )
}

export default Button