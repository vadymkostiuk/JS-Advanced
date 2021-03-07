// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

// Method 1
function reverseString(str) {
    var reverseStr ='',
    i,
    size = str.length -1;

    for(i = size; i >= 0; i-= 1) {
        reverseStr += str[i];
    }

    return reverseStr;
  }
  
  console.log(reverseString("hello"));

// Method 2
function reverseString(str) {

  return str.split('').reverse().join('');
}

console.log(reverseString("hello"));

// Method 3
function reverseString(str) {

    if (str === "") {

        return "";
    } else {
        
        return reverseString(str.substr(1)) + str.charAt(0);
    }
    
  }
  
  console.log(reverseString("hello"));