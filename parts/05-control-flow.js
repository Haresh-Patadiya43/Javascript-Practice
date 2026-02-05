// conditional statements
// if statement
// switch statement
// loops: while, do...while, for, for...in, for...of



// if...else statement
let age = 18;
if (age < 18) {
    console.log("You are a child.");
} else if (age >= 18) {
    console.log("You are just an teenager.");
} else {
    console.log("You are an adult."); 
}

let num = 6;
if (num % 2 === 0) {
    console.log(num + " is an even number.");
} else {
    console.log(num + " is an odd number.");
}
console.log("-------------------------------------------------");


//switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");  
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
console.log("-------------------------------------------------");

// while loop
let i = 1;  
while (i <= 5) {
    console.log("Count is: " + i);
    i++;
}
console.log("-------------------------------------------------");

// do...while loop
let j = 1;
do {
    console.log("Count is: " + j);
    j++;
} while (j <= 5);
console.log("-------------------------------------------------");

// for loop
for (let k = 1; k <= 5; k++) {
    console.log("Count is: " + k);
}
console.log("-------------------------------------------------");

// for...in loop
let person = {fname:"John", lname:"Doe", age:25};
for (let key in person) {
    console.log(key + ": " + person[key]);
}
console.log("-------------------------------------------------");

// for...of loop
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}
