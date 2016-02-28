// Problem 5: Write a function that takes a binary function, and makes it callable with two invocations.

module.exports = function applyf(fn) {
  return function(a) {
    return function(b) {
      return fn(a, b);
    };
  };
}
