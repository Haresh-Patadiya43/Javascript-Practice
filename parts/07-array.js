//array constructor
//array literal
//access array element
//modify array element
//array length

//array methods:
//push
//pop
//unshift
//shift
//indexOf
//includes
//splice
//slice
//forEach
//map
//filter
//reduce
//find
//reverse








//array constructor
let color = new Array('red','yellow');
console.log(color);
console.log("--------------------------------------------------------------------------------");


//array literal
let fruit = ['banana','mango'];
console.log(fruit);
console.log("--------------------------------------------------------------------------------");


//access array element
console.log(fruit[0]);
console.log(fruit[1]);
console.log("--------------------------------------------------------------------------------");    


//modify array element
fruit[1] = 'orange';
console.log(fruit);
console.log("--------------------------------------------------------------------------------");    


//array length
console.log(fruit.length);
console.log("--------------------------------------------------------------------------------");


//array methods
//push
fruit.push('grapes');
console.log(fruit);
console.log("--------------------------------------------------------------------------------");


//pop
fruit.pop();
console.log(fruit);
console.log("--------------------------------------------------------------------------------");


//unshift
fruit.unshift('apple');
console.log(fruit);
console.log("--------------------------------------------------------------------------------");


//shift
fruit.shift();
console.log(fruit);
console.log("--------------------------------------------------------------------------------");


//indexOf
let index = fruit.indexOf('banana');
console.log(index);
console.log("--------------------------------------------------------------------------------");


//includes
let hasMango = fruit.includes('mango');
console.log(hasMango);
console.log("--------------------------------------------------------------------------------");


//splice
fruit.splice(1,0,'kiwi');
console.log(fruit);
console.log("--------------------------------------------------------------------------------");


//slice
let citrus = fruit.slice(1,3);
console.log(citrus);
console.log("--------------------------------------------------------------------------------");


//forEach
fruit.forEach(function(item,index){
    console.log(index + ": " + item);
});
console.log("--------------------------------------------------------------------------------");


//map
let upperCaseFruit = fruit.map(function(item){
    return item.toUpperCase();
});
console.log(upperCaseFruit);
console.log("--------------------------------------------------------------------------------");

//filter
let longNamedFruit = fruit.filter(function(item){
    return item.length > 5;
});
console.log(longNamedFruit);
console.log("--------------------------------------------------------------------------------");


//reduce
let totalLength = fruit.reduce(function(total,item){
    return total + item.length;
},0);
console.log(totalLength);
console.log("--------------------------------------------------------------------------------");


//find
let foundFruit = fruit.find(function(item){
    return item.length > 5;
});
console.log(foundFruit);
console.log("--------------------------------------------------------------------------------");


//reverse
fruit.reverse();
console.log(fruit);
console.log("--------------------------------------------------------------------------------");

