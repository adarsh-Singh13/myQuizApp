import React from "react";

var monthMapping = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec'
];
var monthMapping1 = [
	'January',
	'Feburary',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

function currentDateStringFormat({ timestamp }: { timestamp: number | undefined }): string {
    if (!timestamp) return '';
    
    const dateObj = new Date(timestamp);
    const date = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
  
    const formattedDate = `${date < 10 ? '0' + date : date}-${month < 10 ? '0' + month : month}-${year}`;
    // console.log("FFF1F", formattedDate);
    return formattedDate;
  }

  function currentDateStringWithDotFormat() {
    
    const dateObj = new Date();
    const date = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
  
    const formattedDate = `${date < 10 ? '0' + date : date}.${month < 10 ? '0' + month : month}.${year}`;
    // console.log("FFF1F", formattedDate);
    return formattedDate;
  }

  const currentDateStringNumFormat = (): string => {
    const today: Date = new Date();
    const dayOfMonth: number = today.getDate();
    const currentMonthIndex: number = today.getMonth();
    const currentMonth: string = monthMapping[currentMonthIndex];
    const currentYear: number = today.getFullYear();
  
    const formattedDate: string = `${dayOfMonth} ${currentMonth} ${currentYear}`;
    // console.log("Formatted Date:", formattedDate);
    return formattedDate;
  };

  const getTodaysDayOfWeek = (): string => {
    const daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today: Date = new Date();
    const dayIndex: number = today.getDay(); 
  
    return daysOfWeek[dayIndex];
  };

  const secToMinConvert = ({ sec }: { sec: number }): number => {
    const totalMin: number = Math.floor(sec / 60);
    // console.log(totalMin);
    
    return totalMin;

};

  

export const HelperService = {
    currentDateStringFormat,
    currentDateStringNumFormat,
    currentDateStringWithDotFormat,
    getTodaysDayOfWeek,
    secToMinConvert,
}