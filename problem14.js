// Problem 14: Write a factory function that returns two functions that implement an up/down counter.

var counterf = function(count) {
  return {
    inc: function() {
      return ++count;
    },
    dec: function() {
      return --count;
    }
  };
}

// Douglas Crockford doesn't like ++ and --

var counterf2 = function(count) {
  return {
    inc: function() {
      count += 1;
      return count;
    },
    dec: function() {
      count -= 1;
      return count;
    }
  };
}
