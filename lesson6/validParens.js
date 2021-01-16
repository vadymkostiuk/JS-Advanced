function validParens(s){
  let i, position;
  const arr = [], size = s.length;

  for (i = 0; i < size; i += 1){

    switch(s[i]) {
      case '(': arr.push(')');
        break;
      case '[': arr.push(']');
        break;
      case '{': arr.push('}')
        break;
      default:
        position = arr.pop()
        if (s[i] !== position) return false;
    }
  }
  return arr.length === 0;
}

console.log(validParens('()[]{}')); // true
console.log(validParens('(]')); // false
console.log(validParens('([)]')); // false
console.log(validParens('{[]}')); // true