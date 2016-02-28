// Problem 6: Write a function that takes a function and an argument, and returns a function that can supply a second argument.

module.exports = function curry(fn, a) {
  return function(b) {
    return fn(a, b);
  };
}
