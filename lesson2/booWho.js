// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

// Method1

function booWho(bool) {
  if (typeof bool === "boolean") {
    return true
  } else {
    return false
  }
}

booWho(null);

  // Method2

function booWho(bool) {
  return typeof(bool) === "boolean"
}
  
booWho(null);