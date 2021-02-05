const testBtn = document.getElementById('test_btn');

function eventLoop(i) {
  if ((i % 1000 === 0)) {
    console.log('I was called!');
  }
  setTimeout(() => eventLoop(i + 1), 0);
  // setTimeout(function f1() { return eventLoop(i + 10) }, 0);
}

fun = () => eventLoop(0);

testBtn.addEventListener('click', fun, false);
// testBtn.addEventListener('click', () => eventLoop(0), false);