// function 
// function expression
// anonymous function (no function name)
// IIFE (Immediately Invoked Function Expression)
// function with default parameter
// Arrow function








// function
function greet(name) {
    return "Hello, " + name;    
}
console.log(greet("Haresh")); // Output: Hello, Alice!
console.log("----------------------------------------------------------------------------------------");


//function expression
const result = function sum(a, b) {
    console.log(a + b);
};
result(5, 7); // Output: 12
console.log("----------------------------------------------------------------------------------------");


// anonymous function (no function name)
const result1  = function(a, b) {
    console.log(a + b);
}
result1(10, 15); // Output: 25
console.log("----------------------------------------------------------------------------------------");


// IIFE (Immediately Invoked Function Expression)
var result2 = (function(a, b) {
    console.log(a + b);
    return a+b;
})(20, 30); // Output: 50

console.log(result2); // Output: 50
console.log("----------------------------------------------------------------------------------------");


// function with default parameter
function greetWithDefault(name = "Guest") {
    return "Hello, " + name;
}
console.log(greetWithDefault()); // Output: Hello, Guest!
console.log(greetWithDefault("Haresh")); // Output: Hello, Haresh!
console.log("----------------------------------------------------------------------------------------");


// Arrow function
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8
console.log("----------------------------------------------------------------------------------------");

