'use client';

import { DateRange } from 'react-date-range';
import tr from 'date-fns/locale/tr'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Calendar = ({
    value,
    onChange,
    disabledDates,
    preOrder= false
}) => {

  

  return (
    <>
      {preOrder ?<DateRange
      rangeColors={['#8585f5']}
      ranges={value}
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      locale={tr}
      disabledDates={[disabledDates]}
    />
    :
    <DateRange
      rangeColors={['#8585f5']}
      ranges={value}
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      locale={tr}
      disabledDates={[disabledDates]}
    />
    }
    </>
  )
}

export default Calendar