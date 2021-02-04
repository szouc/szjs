const result = document.getElementById('result');

function printSymbol(e) {
  result.value += e.target.textContent;
}

const num0 = document.getElementById('num0');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const num6 = document.getElementById('num6');
const num7 = document.getElementById('num7');
const num8 = document.getElementById('num8');
const num9 = document.getElementById('num9');
const sub = document.getElementById('sub');
const add = document.getElementById('add');
const mul = document.getElementById('mul');
const div = document.getElementById('div');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');
const dot = document.getElementById('dot');
const left = document.getElementById('left');
const right = document.getElementById('right');

num0.addEventListener('click', printSymbol);
num1.addEventListener('click', printSymbol);
num2.addEventListener('click', printSymbol);
num3.addEventListener('click', printSymbol);
num4.addEventListener('click', printSymbol);
num5.addEventListener('click', printSymbol);
num6.addEventListener('click', printSymbol);
num7.addEventListener('click', printSymbol);
num8.addEventListener('click', printSymbol);
num9.addEventListener('click', printSymbol);
sub.addEventListener('click', printSymbol);
add.addEventListener('click', printSymbol);
mul.addEventListener('click', printSymbol);
div.addEventListener('click', printSymbol);
dot.addEventListener('click', printSymbol);
left.addEventListener('click', printSymbol);
right.addEventListener('click', printSymbol);
clear.addEventListener('click', () => { result.value = ''; });
equal.addEventListener('click', () => { result.value = eval(result.value); });
