(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

var Asteroid = Asteroids.Asteroid = function (position, game) {
  Asteroids.MovingObject.call(this, {
    pos: position,
    vel: Asteroids.Utils.randomVec(5),
    radius: Asteroid.RADIUS,
    color: Asteroid.COLOR,
    game: game
  });
};

Asteroids.Utils.inherits(Asteroid, Asteroids.MovingObject);

Asteroid.COLOR = "LightGray";
Asteroid.RADIUS = 40;

})(); // end of IIFE
