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
  // const words = [];
  // let word = '';
  // for (const c of str) {
  //   if (c === '_' || c === ' ') {
  //     words.push(word);
  //     word = '';
  //   } else if (c >= 'A' && c <= 'Z' && !word.length) {
  //     word = c.toLowerCase();
  //   } else if (c >= 'A' && c <= 'Z' && word.length) {
  //     words.push(word);
  //     word = c.toLowerCase();
  //   } else {
  //     word += c;
  //   }
  // }
  // if (word.length) {
  //   words.push(word);
  // }
  // return words.join('-');

  // 3.
  return str
    .split('')
    .map((c) => (/[A-Z]/.test(c) ? `-${c.toLowerCase()}` : c))
    .join('')
    .split(/[ _-]+/)
    .filter(word => word.length)
    .join('-')
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('AllThe-small Things'));
console.log(spinalCase('APea'));
