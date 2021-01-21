const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const start = document.querySelector('button[data-action="start"]');
const stop = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let colorInterval = null;

function changeColor() {
  colorInterval = setInterval(() => {
    body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
}

removeColorInterval = () => clearInterval(colorInterval);
// setInterval(colorChange, 1000);
start.addEventListener('click', changeColor);
stop.addEventListener('click', removeColorInterval);
