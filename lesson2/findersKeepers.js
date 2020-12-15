// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
// This means that given an element x, the 'truth test' is passed if func(x) is true. 
// If no element passes the test, return undefined.

// Method1
function findElement(arr, func) {
  
    newArr = arr.filter(func);

    return newArr[0];

  }
  
  console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

// Method2

function findElement(arr, func) {
    return arr.find(func);
  }
  
  console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));