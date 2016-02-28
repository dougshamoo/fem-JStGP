// Problem 13: Write a function that allows another function to only be called once.

function once(fn) {
  var hasRun = false;
  return function(a, b) {
    if (hasRun) {
      throw new Error('function has already run once!');
    }
    hasRun = true;
    return fn(a, b);
  };
}

// another alternative

function once2(func) {
  return function() {
    var f = func;
    func = null;
    return f.apply(this, arguments);
  }
}
