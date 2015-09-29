Function.prototype.myBindWithArgs = function () {
  var origFunction = this;
  var args = Array.prototype.slice.call(arguments);
  var cxt = args.shift();
  return function () {
    var args2 = Array.prototype.slice.call(arguments);
    return origFunction.apply(cxt, args.concat(args2));
  };
};


function Cat(name) {
  this.name = name;
}

Cat.prototype.says = function (sound) {
  console.log(this.name + " says " + sound + "!");
};

var markov = new Cat("Markov");
var breakfast = new Cat("Breakfast");

markov.says("meow");
// Markov says meow!

markov.says.myBindWithArgs(breakfast, "meow")();
// Breakfast says meow!

markov.says.myBindWithArgs(breakfast)("meow");
// Breakfast says meow!
