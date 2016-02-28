// Problem 12: Write a function compseb that takes two binary functions and returns a function that calls both of them.

function composeb(f, g) {
  return function(a, b, c) {
    return g(f(a, b), c);
  };
}
