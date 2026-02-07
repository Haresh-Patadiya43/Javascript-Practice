const countDown = document.getElementById('countdown')
let startCont = 0;
let intervalID;

const startTime = () => {
    intervalID = setInterval(() => {
        countDown.innerHTML = startCont++;
    }, 1000)
}

const stopTime = () => {
    clearInterval(intervalID)
}

const resetTime = () => {
    startCont = 0;
    countDown.innerHTML = startCont;
    clearInterval(intervalID)
}

document.querySelector(".start_btn").addEventListener('click', startTime)
document.querySelector(".stop_btn").addEventListener('click', stopTime)
document.querySelector(".reste_btn").addEventListener('click', resetTime)