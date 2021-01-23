// Pig Latin is a way of altering English Words. The rules are as follows:
//
//   - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word,
//   and add "ay" to it.
//
// - If a word begins with a vowel, just add "way" at the end.
//
//   Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  let result = '';
  let regex = /[aeiou]/;

  if (!regex.test(str)) {
    result = `${str}ay`;
  } else if (regex.test(str[0])) {
    result = `${str}way`;
  } else {
    let x  = str.indexOf(regex.exec(str)[0]);
    result = `${str.substr(x) + str.substr(0, x)}ay`
  }

  return result;
}

translatePigLatin("consonant")