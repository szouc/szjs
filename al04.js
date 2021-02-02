/*
  Make a function that looks though an array of objects (first argument) and returns an array
  of all objects that have matching name and value pairs (second argument).
*/
function whatIsInAName(collection, source) {
  // 1. normal loop
  // var arr = [];
  // const keys = Object.keys(source);
  // for (const obj of collection) {
  //   let hasAllKeyVaulePairs = true;
  //   for (const key of keys) {
  //     if (obj[key] !== source[key]) {
  //       hasAllKeyVaulePairs = false;
  //       break;
  //     }
  //   }
  //   if (hasAllKeyVaulePairs) {
  //     arr.push(obj);
  //   }
  // }

  // 2. use filter method
  // const keys = Object.keys(source);
  // const arr = collection.filter((obj) => {
  //   for (const key of keys) {
  //     if (obj[key] !== source[key]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // });

  // 3. use reduce method
  const keys = Object.keys(source);
  const arr = collection.filter((obj) => {
    return keys.reduce((acc, key) => {
      if (obj[key] !== source[key]) return false;
      else return acc;
    }, true);
  });
  return arr;
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);
console.log(whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }));
