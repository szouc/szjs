/*
 * Return the sum of those two numbers plus the sum of all the numbers between them.
 * The lowest number will not always come first.
 */
function sumAll(arr) {
  // use condition operator

  // const max = arr[0] > arr[1] ? arr[0] : arr[1];
  // const min = arr[0] > arr[1] ? arr[1] : arr[0];
  // let sum = 0;
  // for(let i = min; i <= max; i++)
  // {
  //   sum += i;
  // }

  // use Math
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }

  return sum;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));
console.log(sumAll([4, 4]));
