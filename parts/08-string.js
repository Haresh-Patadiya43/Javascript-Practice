
// String Length
let text = "my name is Haresh Patadiya , i am learning JavaScript";
console.log("String Length:", text.length);
console.log("------------------------------");

//use of single quotes('') in string
let text1 = "my name is 'Haresh Patadiya', i am learning JavaScript";
console.log(text1);
console.log("------------------------------");

//use of double quotes("") in string
let text2 = 'my name is "Haresh Patadiya" , i am learning JavaScript';
console.log(text2);
console.log("------------------------------");

//use of backticks(``) in string
let text3 = `my name is "Haresh Patadiya" , i am learning JavaScript`;
console.log(text3);
console.log("------------------------------");

// Escape Character in String
let text4 = "my name is \"Haresh Patadiya\" , i am learning JavaScript";
console.log(text4);
console.log("------------------------------");

// Escape Character in String using backslash(\)
let text5 = 'my name is \'Haresh Patadiya\' , i am learning JavaScript';
console.log(text5);
console.log("------------------------------");

// Escape Character in String using backslash(\) for backticks
let text6 = `my name is \`Haresh Patadiya\` , i am learning JavaScript`;
console.log(text6);
console.log("------------------------------");

// Multi-line String using backslash(\)
let text7 = "my name is Haresh Patadiya , \n\
I am learning JavaScript \n\
and I love coding.";
console.log(text7);
console.log("------------------------------");

// Multi-line String using backticks(``)
let text8 = `my name is Haresh Patadiya ,
I am learning JavaScript
and I love coding.`;
console.log(text8);
console.log("------------------------------");

// String Methods - toUpperCase() and toLowerCase()
let text9 = "Hello World!";
console.log("Uppercase:", text9.toUpperCase());
console.log("Lowercase:", text9.toLowerCase());
console.log("------------------------------");

//use of indexof() and lastindexof() method in string
let name = "Patadiya Haresh, I am the developer Haresh";
console.log(name.indexOf("haresh"));//case sensitive(-1)
console.log(name.indexOf("Haresh"));//(9)
console.log(name.lastIndexOf("Haresh"));//(32)

//string into array
let nameH ="haresh";
let strArr = Array.from(nameH);
console.log(strArr);

let srtmap = strArr.map((element,index) =>
    `${element}-${index}`
); 
console.log(srtmap);

//search in string
let text10 = "Hello JavaScript, welcome to the JavaScript.";
let res = text10.search("JavaScript"); //10
let res1 = text10.search("Javascript"); // -1 (case sensitive)
//or
let res2 = text10.search(/JavaScript/); //10
let res3 = text10.search(/Javascript/i); //10 (case insensitive)
console.log(res);