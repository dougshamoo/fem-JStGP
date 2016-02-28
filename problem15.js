// Problem 15: Make a revocable function that takes a nice function, and returns a revoke function that denies access to the nice function, and an invoke function that can invoke the nice function until it’s revoked.

function revocable(fn) {
  var isRevoked = false;
  return {
    invoke: function() {
      if (isRevoked) {
        throw new Error('function has been revoked!');
      }
      return fn.apply(this, arguments);
    },
    revoke: function() {
      isRevoked = true;
    }
  };
}

function revocable2(func) {
  return {
    invoke: function() {
      func.apply(this, arguments);
    },
    revoke: function() {
      func = null;
    }
  };
}
