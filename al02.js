/*
  Compare two arrays and return a new array with any items only found in one of the
  two given arrays, but not both. In other words,return the symmetric difference of the
  two arrays.
*/

function diffArray(arr1, arr2) {
  // first calculate union array

  // 1. normal method
  // var union = [];
  // for (let i = 0; i < arr1.length; i++) {
  //   if (!union.includes(arr1[i])) {
  //     union.push(arr1[i]);
  //   }
  // }
  // for (const el of arr2) {
  //   if (!union.includes(el)) {
  //     union.push(el);
  //   }
  // }

  // 2. use "Set" data structure
  // const union = new Set(arr1);
  // for (let el of arr2) {
  //   union.add(el);
  // }

  //3. use "..." operator
  const union = new Set([...arr1, ...arr2]);

  // second symmetric array
  const symmDiff = [];
  for (const currEl of union) {
    if (!(arr1.includes(currEl) && arr2.includes(currEl)))
      symmDiff.push(currEl);
  }

  return symmDiff;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]));
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
