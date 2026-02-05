const str = "Hello" + " " + "World";
console.log(str); // Output: Hello World

const name = "Alice";
const greeting = "Hi, " + name + "!";
console.log(greeting); // Output: Hi, Alice!

console.log(10 + "20"); // Output: 1020 (number 10 is converted to string)
console.log(9 - "5");  // Output: 4   (string "5" is converted to number)
console.log("java" + "script"); // Output: javascript
console.log("java" - "script"); // Output: NaN (not a number)
console.log(" " + " "); // Output: "  "
console.log(true + true);   // Output: 2 (true is converted to 1)
console.log(true + false);  // Output: 1 (true is 1, false is 0)
console.log(false + false); // Output: 0 (both false are 0)
console.log(false - true); // Output: -1 (false is 0, true is 1)

