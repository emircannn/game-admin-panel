import tailwindConfig from "@/tailwind.config"

const Textarea = ({
    name, 
    id,
    height = '200',
    width = '100',
    borderRadius= '18',
    borderColor = tailwindConfig.theme.extend.colors.secondary,
    textColor = tailwindConfig.theme.extend.colors.secondary,
    bgColor = tailwindConfig.theme.extend.colors.primary,
    fontSize = '18', 
    border= '2',
    focusBorder = 'graident',
    minLength,
    remainingChars,
    minLengthBoolean = false,
    onChange,
    placeholder,
    placholderColor = 'secondary'
}) => {

  return (
    <>
    <textarea 
    name={name}
    onChange={onChange} 
    id={id}
    placeholder={placeholder}
    minLength={minLength}
    style={{
        width: `${width}%`, 
        height: `${height}px`, 
        minHeight: `${height}px`, 
        maxHeight: `${height}px`, 
        borderRadius: `${borderRadius}px`,
        resize: `none`,
        color: `${textColor}`,
        fontSize: `${fontSize}px`,
        backgroundColor: `${bgColor}`,
        borderColor: `${borderColor}`,
        border: `${border}px solid`,
    }}

        className={`w-full outline-none focus:!border-${focusBorder} hover:!border-${focusBorder} 
        overflow-y-auto duration-300 p-[8px] tracking-wide leading-6 placeholder:text-secondary`}
    />

       {minLengthBoolean && remainingChars < minLength ? 
        <div className="w-full align-cntr mt-[10px]">
        <span className="text-[14px] text-secondary">
        Minimum Karakter: {remainingChars}/{minLength}
        </span>
        </div> : null
        }
        
    </>
  )
}

export default Textarea