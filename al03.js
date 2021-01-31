/*
  Remove all elements from the initial array that are of the same values as others arguments
*/

function destoryer(arr) {
  const argsArr = [...arguments].slice(1);

  // 1. use "spread" operatior and Array.slice()
  // const filterArr = [];
  // for (let el of arr) {
  //   if (!argsArr.includes(el)) filterArr.push(el);
  // }

  // 2. use Array.filter()
  const filterArr = arr.filter(el => !argsArr.includes(el));

  return filterArr;
}

console.log(destoryer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destoryer([1, 2, 3, 1, 2, 3], 1, 2, 3));
console.log(destoryer(["tree", "hamburger", 53], "tree", 53));
