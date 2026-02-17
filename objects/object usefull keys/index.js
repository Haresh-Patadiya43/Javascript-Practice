// usefull object keywords
const product = {
    id: 1,
    name: "laptop",
    catogory: "Computers",
    brand: "Exbrand",
    price: 1000,
    stock: 0,
    decrtiption: "this is good product and very usefull for tech related work.",
}



// this keword show only keys
let key = Object.keys(product)
console.log(key)



// this keword show only values
let value = Object.values(product)
console.log(value)



// this keword show assign value , value don't repate. 
const target = {
    a:1,
    b:2
}
const source = {
    b:3,
    c:4
}
const mergeobj = Object.assign({},target,source)
console.log(mergeobj)



// this keword show data in array formate
let entries = Object.entries(product)
console.log(entries)



// this keword show there is any particular propertie is there in object or not
//  (if there is property in obj it give true, if not then false)
console.log(product.hasOwnProperty("name")) // true
console.log(product.hasOwnProperty("student")) // false



// this keword freeze or stop making changes in object
Object.freeze(product)
product.id = "12";
console.log(product)
