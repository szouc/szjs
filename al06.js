/*
  Translate the provided string to pig latin.
  Pig Latin takes the first consonant of an English word, moves it to the 
  end of the word and suffixes an "ay".
  If a word begins with a vowel you just add "way" to the end.
  If a word does not contain a vowel, just add "ay" to the end.
*/
function translatePigLatin(str) {
  const VOWEL = ['a', 'e', 'i', 'o', 'u'];
  if (VOWEL.includes(str[0])) {
    return str + 'way';
  }
  // let hasNoVowel = true;
  // for (c of str) {
  //   if (VOWEL.includes(c)) {
  //     hasNoVowel = false;
  //     break;
  //   }
  // }
  // if (hasNoVowel) {
  //   return str + 'ay';
  // }

  // refactor
  if (str.split('').every(c => !VOWEL.includes(c))) {
    return str + 'ay'
  }

  // let consonantCluster = '';
  // let firstVowelIndex = 0;
  // for (let i = 0; i < str.length; i++) {
  //   let c = str[i];
  //   if (VOWEL.includes(c)) {
  //     firstVowelIndex = i;
  //     break;
  //   } else {
  //     consonantCluster += c;
  //   }
  // }
  // return str.substring(firstVowelIndex) + consonantCluster + 'ay';

  // refactor
  const consonantCluster = str.split(/[aeiou]/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + 'ay';
}

console.log(translatePigLatin('california'));
console.log(translatePigLatin('paragraphs'));
console.log(translatePigLatin('algorithm'));
console.log(translatePigLatin('schwartz'));
console.log(translatePigLatin('rhytnm'));
