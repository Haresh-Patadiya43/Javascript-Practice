// use of Date() 
const date = new Date();
console.log(date); 

//use of Date(year,month)
const date1 = new Date(2025,2);
console.log(date1)

//use of Date(year,month,day)
const date2 = new Date(2025,2,18);
console.log(date2)

//use of Date(year,month,day,houre)
const date3 = new Date(2025,2,18,10);
console.log(date3)

//use of Date(year,month,day,houre,min)
const date4 = new Date(2025,2,18,10,59);
console.log(date4)

//use of Date(year,month,day,houre,min,sec)
const date5 = new Date(2025,2,18,10,59,10);
console.log(date5)

//use of Date(year,month,day,houre,min,sec,ms)
const date6 = new Date(2025,2,18,10,59,10,5);
console.log(date6)

// to get year,month,date,day
const currentDate =  new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const date7 = currentDate.getDate();
const day = currentDate.getDay();

console.log(year);
console.log(month);
console.log(date7);
console.log(day);


// to set or change year,month
const date8 = new Date();
console.log(date8);

//year
date8.setFullYear(2027);
console.log(date8)
//mmonth
date8.setMonth(2);
console.log(date8)
//date
date8.setDate(3);
console.log(date8)




// js time methodes 
//this is get() method
const currtime = new Date();
const houre = currtime.getHours();
const Minutes = currtime.getMinutes();
const second = currtime.getSeconds();
const time = currtime.getTime();

console.log(houre)
console.log(Minutes)
console.log(second)
console.log(time)



//this is set() method
const date9 = new Date();

//set houre
date9.setHours(12);
console.log(date9)
//set min
date9.setMinutes(50);
console.log(date9)
//set sec
date9.setSeconds(10);
console.log(date9)
//set millisec
date9.setMilliseconds(100);
console.log(date9)


// use of tolocalstring
const date10 = new Date()
const localstring = date10.toLocaleString();
console.log(localstring)

// use of tolocaldate
const date11 = new Date()
const localdate = date10.toLocaleDateString();
console.log(localdate)

// use of tolocaltime
const date12 = new Date()
const localtime = date10.toLocaleTimeString();
console.log(localtime)
