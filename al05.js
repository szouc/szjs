/*
  Convert a string to spinal case.
  Spinal case is all-lowercase-words-joined-by-dashes.
*/

/*
  1. all lowercase
  2. _ and " "(spaces) become hypens(-)
  3. Capital case always determin the start of a new word.
*/

function spinalCase(str) {
  // 1. use Regular Express
  // x = new RegExp(/([a-z]|[A-Z])([A-Z])/g);
  // y = new RegExp(/\s+|_/g);
  // return str.replace(x, "$1-$2").replace(y, "-").toLowerCase();

  // 2. 
  // return str;
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("AllThe-small Things"));
console.log(spinalCase("APea"));
