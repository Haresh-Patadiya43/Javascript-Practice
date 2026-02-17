//pass by value (original value don't change , after assigining)
let a = 10;
const modefy=(x)=>(x=20)
console.log(modefy(a)); 
console.log(a)



//pass by value (original value change , after assigining)
let obj ={
    id: 5,
    name: "haresh",
}
let obj1 = obj;
obj1.name = "goku"
console.log(obj1)
console.log("original",obj)
// console.log("original "+ obj) // this is wrong 



//if you don't want to change original value use (object.assign)
let person ={
    id: 5,
    name: "haresh",
}
let newObj = Object.assign({},person)
newObj.name = "goku";
console.log(newObj) // here data change , but original data will not change
console.log(person) // data will not change
