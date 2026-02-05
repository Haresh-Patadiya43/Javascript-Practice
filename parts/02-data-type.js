// Data types in JavaScript
var myString = "Hello, World!"; // String
var myNumber = 42;              // Number
var myBoolean = true;          // Boolean
var myArray = [1, 2, 3];      // Array
var myObject = {name: "Alice", age: 30}; // Object
var myUndefined;        // Undefined
var myNull = null;             // Null
var symbolVar = Symbol('sym'); // Symbol


console.log('-----------------------');

console.log(myString);   // "string"
console.log(myNumber);   // "number"
console.log(myBoolean);  // "boolean"
console.log(myArray);    // "object"
console.log(myObject);   // "object"
console.log(myUndefined); // "undefined"
console.log(myNull);     // "object" 
console.log(symbolVar);  // "symbol"

console.log('-----------------------');
// Checking data types using typeof operator

console.log(typeof myString);   // "string"
console.log(typeof myNumber);   // "number"
console.log(typeof myBoolean);  // "boolean"
console.log(typeof myArray);    // "object"
console.log(typeof myObject);   // "object"
console.log(typeof myUndefined); // "undefined"
console.log(typeof myNull);     // "object" 
console.log(typeof symbolVar);  // "symbol"

console.log('-----------------------');

console.log('Type Conversion Examples:');
console.log('parseInt and parseFloat');
const myStr = "19";
const myNum = parseInt(myStr); // Converting string to number
console.log(myNum); // 19


const myStr1 = "19.9";
const myNum1 = parseFloat(myStr1); // Converting string to number
console.log(myNum1); // 19.9

console.log('-----------------------');
console.log('When we will not get an output as expected:');
console.log(parseInt('&123')); // NaN
console.log(parseFloat('12.34.56')); // 12.34
console.log(parseInt("abc")); // NaN




