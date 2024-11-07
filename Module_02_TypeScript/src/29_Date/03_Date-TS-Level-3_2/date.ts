import { differenceInHours, differenceInSeconds, differenceInYears, format } from "date-fns";

const todaysDate = new Date();
const longAgoDate = new Date("1970-01-01");

const timePassedByYears = differenceInYears(todaysDate, longAgoDate);
const timePassedByHours = differenceInHours(todaysDate, longAgoDate);
const timePassedBySeconds = differenceInSeconds(todaysDate, longAgoDate);

console.log(`Time Passed in Years: `, timePassedByYears);
console.log(`Time Passed in Hours: `, timePassedByHours);
console.log(`Time Passed in Seconds: `, timePassedBySeconds);

const myBday = new Date("1997-06-13 06:50:00");

const howOldAmI = differenceInYears(todaysDate, myBday);

const howOldWasI2007 = differenceInYears(new Date("2007-04-07"), myBday);

console.log(`I am ${howOldAmI} years old`);
console.log(`During 2007, on April the 7th I was ${howOldWasI2007} years old`);

// === different formats with date-fns ===
/* 
"20.12.1979 12:40:00"
"20.12.1979 12:40"
"20.12.79"
"20. Dezember 1979"
"12:40"
"Donnerstag"
"Dezember"
"20 des Dezember im Jahre des Herrn 1979"
*/

const formatBdayType1 = format(myBday, "dd.MM.yyyy kk:mm:ss");
const formatBdayType2 = format(myBday, "dd.MM.yyyy kk:mm");
const formatBdayType3 = format(myBday, "dd.MM.yyyy");
const formatBdayType4 = format(myBday, "dd.MMMM.yyyy");
const formatBdayType5 = format(myBday, "kk:mm");
const formatBdayType6 = format(myBday, "EEEE");
const formatBdayType7 = format(myBday, "LLLL");
const formatBdayType8 = format(myBday, "dd 'of' MMMM 'in year' yyyy");

console.log(formatBdayType1);
console.log(formatBdayType2);
console.log(formatBdayType3);
console.log(formatBdayType4);
console.log(formatBdayType5);
console.log(formatBdayType6);
console.log(formatBdayType7);
console.log(formatBdayType8);
