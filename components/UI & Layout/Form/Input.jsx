import tailwindConfig from "@/tailwind.config"

const Input = ({
    name, 
    id,
    height,
    width,
    borderRadius= '18',
    borderColor = tailwindConfig.theme.extend.colors.secondary,
    textColor = tailwindConfig.theme.extend.colors.secondary,
    bgColor = tailwindConfig.theme.extend.colors.primary,
    fontSize = '18', 
    border= '2',
    minLength,
    onChange,
    onBlur,
    placeholder,
    type,
    labelText,
    labelColor = '#fff',
    labelFontSize = '18px',
    value,
    errors,
    touched,
    textCenter=false
}) => {

  return (
    <label htmlFor={name} className="flex flex-col gap-[4px]">

        <span
        style={{
            color: labelColor,
            fontSize: labelFontSize,

        }}
        className="ml-[10px]">
            {labelText}
        </span>


    <input 
    name={name}
    type={type}
    value={value}
    onChange={onChange} 
    onBlur={onBlur}
    id={id}
    placeholder={placeholder}
    minLength={minLength}
    style={{
        width, 
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

        className={`w-full outline-none focus:!border-graident hover:!border-graident ${textCenter && 'text-center'}
        overflow-y-auto duration-300 py-[8px] px-[14px] tracking-wide leading-6 placeholder:text-secondary/50`}
    />

    { touched && <span className='text-xs font-medium ml-[10px] mt-[2px] text-graident'>{errors}</span>}
        
    </label>
  )
}

export default Input