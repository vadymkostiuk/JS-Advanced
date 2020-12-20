// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

// Method1

function bouncer(arr) {
  return arr.filter(function(item) {

    if (item) {
      return item;
    }

  });
}

bouncer([7, "ate", "", false, 9]);

// Method2

function bouncer(arr) {
  var newArray = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

bouncer([7, "ate", "", false, 9]);