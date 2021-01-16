// Make a function that looks through an array of objects (first argument) and returns an array
// of all objects that have matching name and value pairs (second argument).
// Each name and value pair of the source object has to be present in the object
// from the collection if it is to be included in the returned array.
//
//   For example, if the first argument is [{ first: "Romeo", last: "Montague" },
//   { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
//   and the second argument is { last: "Capulet" }, then you must return the third object from the array
//   (the first argument), because it contains the name and its value, that was passed on as the second argument.

// Method1

function whatIsInAName(collection, source) {
  var keys = Object.keys(source);

  return collection.filter(function(obj) {

    for (var i = 0; i < keys.length; i++) {

      if (
        !obj.hasOwnProperty(keys[i]) ||
        obj[keys[i]] !== source[keys[i]]
      ) {
        return false;
      }

    }

    return true;
  });

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// Method2
function whatIsInAName(collection, source) {
  var arr = [];

for (let i = 0; i < collection.length; i++) {
  const currentObj = collection[i]

  let match = true

  for (let key in source) {

    if (currentObj[key] !== source[key]) {
      match = false
      continue;
    }
  }

  if (match) arr.push(currentObj)
}

return arr
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
