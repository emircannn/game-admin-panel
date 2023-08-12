import Horizontal from "../GameBox/Horizontal"
import Button from "./Form/Button"

const GameWrapper = ({
    continueBtn,
    showAll,
    title,
    isResponsive,    
}) => {
    return (
      <div className='my-[20px] 768:my-[60px]'>
          <div className='w-full flex items-center justify-between'>
          <h2 className='heading'>{title}</h2>
  
          {showAll === true && <button className='button'>Hepsini Gör</button>}
          </div>
  
          <div className='mt-[30px] grid gap-[10px] 1140:gap-[30px] grid-cols-3 max-768:grid-cols-2'>
              <Horizontal/>
              <Horizontal/>
              <Horizontal/>
              <Horizontal/>
              <Horizontal/>
              <Horizontal/>
          </div>

        {continueBtn === true &&    <div className="mt-[30px] align-cntr">
                <Button
                title='Devamını Gör' 
                textSize={`${ isResponsive ? "13px" : "14px"}`}
                />
            </div>}
      </div>
    )
  }
  
  export default GameWrapper