// Problem 7: Without writing any new functions, show three ways to create the inc function.

var addf = require('./problem04');
var applyf = require('./problem05');
var curry = require('./problem06');


var inc1 = addf(1);

var inc2 = applyf(add)(1);

var inc3 = curry(add, 1);
