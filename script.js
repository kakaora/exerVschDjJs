let btnBlue = document.querySelector('#blue');
let btnRed = document.querySelector('#red');
let btnYellow = document.querySelector('#yellow');
let btnGreen = document.querySelector('#green');
let btnOrange = document.querySelector('#orange');

let pressHoldEvent = new CustomEvent("pressHold");
let pressHoldDuration = 5;

btnBlue.addEventListener('mouseover', () => btnBlue.style.backgroundColor = '#0000FF')
btnRed.addEventListener('mouseup', () => btnRed.style.backgroundColor = '#FF0000')
btnYellow.addEventListener('mouseup', () => btnYellow.style.backgroundColor = '#FFFF00')
btnGreen.addEventListener('dblclick', () => btnGreen.style.backgroundColor = '#00FF00')
btnOrange.addEventListener('mouseenter', () => btnOrange.style.backgroundColor = '#FFA500')