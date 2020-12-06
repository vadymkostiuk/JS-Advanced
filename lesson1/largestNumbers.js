// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// Method 1
function largestOfFour(arr) {

    var answer = [];

        for (var i = 0; i < arr.length; i++) {
          result.push(Math.max(...arr[i]));
        }

    return result;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

  // Method 2
  function largestOfFour(arr) {
    var result = [];

    arr.forEach(function(array) {
        result.push(Math.max(...array));
    });

    return result;
  }

  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));