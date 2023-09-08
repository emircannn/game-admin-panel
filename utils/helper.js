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

  export function messageDate(date) {
    return moment(date).format('DD.MM.YYYY HH:mm');
  }
  
  
  export function calculateRemainingTime(targetDate) {
    const targetDateMilliseconds = new Date(targetDate).getTime();
  
    const currentMilliseconds = new Date().getTime();
  
    const remainingMilliseconds = targetDateMilliseconds - currentMilliseconds;
  
    const seconds = Math.floor(remainingMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
  
    const remainingSeconds = seconds % 60;
    const remainingMinutes = minutes % 60;
    const remainingHours = hours % 24;
    const remainingDays = days % 30;
    const remainingMonths = months % 12;
  
    let remainingTime = "";
  
    if (years > 0) {
      remainingTime += `${years} yıl `;
    }
  
    if (remainingMonths > 0) {
      remainingTime += `${remainingMonths} ay `;
    }
  
    if (remainingDays > 0) {
      remainingTime += `${remainingDays} gün `;
    }
  
    if (remainingHours > 0) {
      remainingTime += `${remainingHours} saat `;
    }
  
    if (remainingMinutes > 0) {
      remainingTime += `${remainingMinutes} dakika `;
    }
  
    remainingTime += `${remainingSeconds} saniye `;
    
    return remainingTime.trim();
  }