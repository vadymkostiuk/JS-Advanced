// Find the missing letter in the passed letter range and return it.
//
//   If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  let i, size = str.length;

  for(i = 0; i < size; i += 1) {

    let code = str.charCodeAt(i);

    if (code !== str.charCodeAt(0) + i) {

      return String.fromCharCode(code - 1);
    }

  }

  return undefined;
}

fearNotLetter("abce");