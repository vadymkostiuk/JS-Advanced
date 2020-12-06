// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

// Method 1
function factorialize(num) {
    if (num < 0) {

        return -1;
    } else if (num == 0) {

        return 1;
    } else {

      return (num * factorialize(num - 1));
    }
  }
  
  console.log(factorialize(5));


// Method 2
function factorialize(num) {
    var result = num;

    if (num === 0 || num === 1) {

        return 1; 
    }
    
    while (num > 1) { 
        num--;
        result *= num;
    }

    return result;
  }

  console.log(factorialize(5));