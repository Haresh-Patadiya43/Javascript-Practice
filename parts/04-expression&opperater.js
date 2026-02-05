// type of operators 

//arathmetic operators
//assignment operators
//comparison operators
//logical operators
//ternary operator
//string operators
//unary operators
//typeof operator




// arithmetic operators + - * / % ++ --
let a = 10;
let b = 3;
let sum = a + b;
console.log("Sum of a and b is: ",sum);
console.log("-------------------------------------------------------");

// assignment operators = += -= *= /= %=
let c = 5;
c += 2; // c = c + 2
console.log("c after += 2:", c);
console.log("-------------------------------------------------------");

// comparison operators == === != !== > < >= <=
console.log(7 == '7');  // true
console.log(7 === '7'); // false
console.log(5 > 2);   // true
console.log(5 < 2);   // false
console.log(5 >= 5);  // true
console.log(5 <= 3);  // false
console.log("-------------------------------------------------------");

// logical operators && || !
console.log((5 > 2) && (3 < 4)); // true
console.log((5 > 2) || (3 > 4)); // true 
console.log(5 > 2); // true
console.log(!(5 > 2)); // false
console.log("-------------------------------------------------------");

// ternary operator
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote:", canVote);
console.log("-------------------------------------------------------");

// string operators +
let str1 = "Hello, ";   
let str2 = "World!";
let greeting = str1 + str2;
console.log("Greeting:", greeting);
console.log("-------------------------------------------------------");

//unary operators
let num = 5;
console.log("++num:", ++num); // pre-increment
console.log("num++:", num++); // post-increment
console.log("num after post-increment:", num);
console.log("--num:", --num); // pre-decrement
console.log("num--:", num--); // post-decrement
console.log("num after post-decrement:", num);
console.log("-------------------------------------------------------");

// typeof operator
console.log("Type of a:", typeof a);
console.log("Type of str1:", typeof str1);
console.log("Type of x:", typeof x);
console.log("Type of greeting:", typeof greeting);
console.log("Type of canVote:", typeof canVote);
console.log("Type of num:", typeof num);
console.log("Type of age:", typeof age);
console.log("Type of undefined variable:", typeof undefinedVar);

