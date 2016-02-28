// Problem 9: Write demethodize, a function that converts a method to a binary function.

function demethodize(method) {
  return function(a, b) {
    return method.call(a, b);
  };
}
