// Problem 8: Write methodize, a function that converts a binary function to a method.

function methodize(fn) {
  return function(b) {
    return fn(this, b);
  }
}
