// Problem 11: Write a function compseu that takes two unary functions and returns a unary function that calls both of them.

function composeu(f, g) {
  return function(a) {
    return g(f(a));
  };
}
