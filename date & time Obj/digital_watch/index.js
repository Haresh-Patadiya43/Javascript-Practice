
const currentTime=()=>{
    let curtime = new Date().toLocaleTimeString();
    document.getElementById('clock').innerHTML = curtime;
}


setInterval(() => {
    currentTime();
}, 1000);