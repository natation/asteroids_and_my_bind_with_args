(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

Asteroids.Utils = {};

Asteroids.Utils.inherits = function (child, parent) {
  function Surrogate () {}
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate();
  child.prototype.constructor = child;
  };

  Asteroids.Utils.randomVec = function (maxLength) {
    return [(Math.random()*2-1) * maxLength, (Math.random()*2-1) * maxLength];
  };
})();
