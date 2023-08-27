import moment from 'moment';
require('moment/locale/tr');

export const dateFormater = (date) => {
  const turkishDateFormat = 'D MMMM YYYY';
  moment.locale('tr'); 
  return moment(date).format(turkishDateFormat);
}

export const formatter = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 2,
  });