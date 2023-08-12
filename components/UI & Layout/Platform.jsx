import Steam from '../../public/icons/steam.svg'
import Origin from '../../public/icons/origin.svg'

const Platform = ({platform}) => {
  return (
    <div className='flex items-center gap-[6px]'>
        { platform === 'Steam' && <Steam height='28' width='28'/>}
        { platform === 'Origin' && <Origin height='28' width='28'/>}
        <span className='text-white text-[13px] font-semibold tracking-wider'>{platform}</span>
    </div>
  )
}

export default Platform