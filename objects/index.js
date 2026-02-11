// object 
const person = {
    name : "haresh",
    age : 20,
    greet : function (){
        console.log('welcome to my site')
    }
};
console.log(person)
console.log(person.name)
console.log(person.age)
// or
console.log(person["name"])
console.log(person["age"])
// or
console.log(person[`name`])
console.log(person[`age`])


// add property in object or change value of property
person.job = "web developer"
person.age = 18
console.log(person)
// or 
person["job"] = "web developer"
person["age"] = 18
console.log(person)


// how to call function in object , using method
console.log(person.greet())




// use of dynamic key in object
let IDtype = "studentID" 
// or 
// let IDtype = "collageID"
const student = {
    [IDtype] : "ABC123",
    name : "haresh",
    age : 20,
    greet: function(){
        console.log(`hey, my ${IDtype} is ${student[IDtype]} and name is ${student.name}`)
    }
}
console.log(student.greet())




// real world example of object
const car = {
    brand : "Toyata",
    model : "Camry",
    year : 2022,
    start : function(){
        console.log("engine start")
    },
};
console.log(car)
console.log(car.start())