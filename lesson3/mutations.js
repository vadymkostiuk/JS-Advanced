// Return true if the string in the first element of the array contains all of the letters of the string
// in the second element of the array.
//
// For example, ["hello", "Hello"], should return true because all of the letters in the second string
// are present in the first, ignoring case.
//
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
//
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
  var item1 = arr[1].toLowerCase();
  var item2 = arr[0].toLowerCase();

  for (var i = 0; i < item1.length; i++) {

    if (item2.indexOf(item1[i]) < 0) {
      return false
    }

  }

  return true;
}

mutation(["Hello", "hello"]);