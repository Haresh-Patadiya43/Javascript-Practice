
let rec = document.getElementById('rectangle');
let btn = document.getElementById('btn');

const handelevent1 = () => {
    rec.style.background = "red";
}
const handelevent2 = () => {
    rec.classList.add('translate1');
}
const handelevent3 = () => {
    rec.classList.add('translate2')
}

const handelevent4 = () => {
    rec.classList.add('translate3')
}

btn.addEventListener('click', handelevent1);
rec.addEventListener('mouseover', handelevent2);
rec.addEventListener('mousedown', handelevent3);
rec.addEventListener('dblclick', handelevent4);


