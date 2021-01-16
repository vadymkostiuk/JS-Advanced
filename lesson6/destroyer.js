// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments. Remove all elements from the initial array that are of the same value
// as these arguments.
//
//   Note
// You have to use the arguments object.

// function destroyer(arr) {
//   let i, size = arr.length;
//   for (i = 0; i <= size; i += 1) {
//     console.log(arr[i])
//   }
//   // return arr;
//   console.log(arr.length)
// }
//
// destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Method 1

function destroyer(arr) {
  var args = [...arguments];

  args.splice(0,1);

  return arr.filter(function (value){
    return args.indexOf(value) === -1;
  });
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Method 2

function destroyer() {

  let i,
      arr = arguments[0],
      size = arguments.length,
      params = [];

  for (i = 1; i < size; i += 1)
    params.push(arguments[i]);

  return arr.filter(function(item) {
    return params.indexOf(item) < 0;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
