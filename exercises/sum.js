function sum () {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function (acc, el) {
    return acc + el;
  });

}

console.log("Should be 10: " + sum(1, 2, 3, 4));
console.log("Should be 15: " + sum(1, 2, 3, 4, 5));
