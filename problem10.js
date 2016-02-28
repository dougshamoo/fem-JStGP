// Problem 10: Write a function twice that takes a binary function and returns a unary function that passes its argument to the binary function twice.

function twice(fn) {
  return function(a) {
    return fn(a, a);
  };
}
