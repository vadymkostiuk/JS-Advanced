// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. 
// For the purpose of this challenge, do not use the built-in .repeat() method.

// Method1

function repeatStringNumTimes(str, num) {
    var newStr = "";

    while (num > 0) {
        newStr += str;
        num--;
    }
    
    return newStr;
  }
  
repeatStringNumTimes("abc", 3);

// Method2

function repeatStringNumTimes(str, num) {
    return num > 0 ? Array(num).fill(str).join("") : "";
  }
  
repeatStringNumTimes("abc", 3);