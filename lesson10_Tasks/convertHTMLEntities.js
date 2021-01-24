// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  const strSplit = str.split('');

  for (let i = 0; i < strSplit.length; i++) {

    switch(strSplit[i]) {
      case "&":
        strSplit[i] = "&amp;";
        break;
      case "<":
        strSplit[i] = "&lt;";
        break;
      case ">":
        strSplit[i] = "&gt;";
        break;
      case "'":
        strSplit[i] = "&apos;"
        break;
      case '"':
        strSplit[i] = "&quot;"
        break;
    }

  }

  return strSplit.join('');
}

convertHTML("Dolce & Gabbana");