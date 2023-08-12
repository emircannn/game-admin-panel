import Image from 'next/image'
import User from '../../public/icons/user.svg'

const Avatar = ({
    width = '60',
    height = '60',
    iconWidth = '30',
    iconHeight = '30',
    iconColor = '#8585f5',
    backgroundColor,
    borderRadius = '12',
    classProps,
    src

}) => {
  return (
    <div 
    style={{width: `${width}px`, height: `${height}px`, backgroundColor, borderRadius: `${borderRadius}px`}} 
    className={` ${classProps} border-2 border-transparent align-cntr hover:border-graident-dark duration-300 relative overflow-hidden`}>
        
        {src ? <Image src={src} alt='' fill quality={100} className='object-cover'/> : 
        <User 
        width={iconWidth} 
        height={iconHeight} 
        fill={iconColor}/>}
    </div>
  )
}

export default Avatar