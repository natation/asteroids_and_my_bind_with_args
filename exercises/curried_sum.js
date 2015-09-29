function curriedSum (numArgs) {
  var numbers = [];
  var _curriedSum = function (num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce(function(acc, el) { return acc + el; });
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
}
var sum = curriedSum(4);

// console.log("Should be 56: " + sum(5)(30)(20)(1));

Function.prototype.curry = function (numArgs) {
  var origFunction = this;
  var args = [];
  var _curry = function (arg) {
    args.push(arg);
    if (args.length === numArgs) {
      var fn = origFunction.apply(origFunction, args.slice());
      args = [];
      return fn;
    } else {
      return _curry;
    }
  };
  return _curry;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log("Should be a 'function': " + sumThree.curry(3)(4)(20));
