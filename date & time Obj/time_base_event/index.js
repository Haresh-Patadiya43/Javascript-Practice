// time base event

// setTimeout = (this settime call function one time only)
function delayfunction(x){
    console.log("setTime function",x)
}
setTimeout(delayfunction,2000);         //undefine without perameter
setTimeout(()=>delayfunction(5),2000);  //5 with perameter



//setInterval = (this setinterval call function every 1 sec again and again)
function repetefunction(){
    console.log('this is interval function');
}
setInterval(repetefunction,1000);
 

//this is not important
//clearTimeout (this function work and clean at same time, in short show and clean data at same time)
function delayfunction1(){
    console.log('this is cleat time out');
}
let work = setTimeout(delayfunction1,2000);
clearTimeout(work);


//cleanInterval (this function is use to stop setintreval , after 5 sec function will stop)

const repetefunction1 = ()=>{
    console.log('this is for clearInterval')
}

const intervalID = setInterval(repetefunction1,1000);

setTimeout(()=>{
    clearInterval(intervalID)
},5000);
