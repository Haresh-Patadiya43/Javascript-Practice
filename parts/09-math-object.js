let pi = Math.pi;
console.log(pi); // Output: undefined
pi = Math.PI;
console.log(pi); // Output: 3.141592653589793

//use of Math.round()
const roundnum = Math.round(4.7);
console.log(roundnum); // Output: 5

//use of Math.ceil()
const ceilnum = Math.ceil(4.2);
console.log(ceilnum); // Output: 5


//floor() and tranc() give same outpurt
//use of Math.floor()
const floornum = Math.floor(4.7);// Output: 4
const floornum1 = Math.floor(-4.7);// Output: -5
console.log(floornum); // Output: 4

//use of Math.trunc()
const truncnum = Math.trunc(4.7);// Output: 4
const truncnum1 = Math.trunc(-4.7);// Output: -4
console.log(truncnum); // Output: 4

//use od Math.pow()
const pownum = Math.pow(2, 3);
console.log(pownum); // Output: 8
//or 
console.log(2**3); // Output: 8

//use of Math.sqrt()
const squarert = Math.sqrt(16);
console.log(squarert); // Output: 4


//generating random number between 1 to 10
const randomnum = Math.random();
console.log(randomnum); // Output: A random number between 0 and 1

//generating random number without decimal 1 to 100
const randomnum1 = Math.floor(Math.random()*10);
console.log(randomnum1); // Output: A random integer between 1 and 100