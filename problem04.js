// Problem 4: Write a function that adds from two invocations.

module.exports = function addf(a) {
  return function(b) {
    return a + b;
  };
}
