(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

var Game = Asteroids.Game = function() {
    this.asteroids = [];
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.asteroids.push(this.addAsteroids(this.randomPosition()));
    }
};

Game.NUM_ASTEROIDS = 10;
Game.DIM_X = 800;
Game.DIM_Y = 800;

Game.prototype.addAsteroids = function (pos) {
  return new Asteroids.Asteroid(pos, this);
};

Game.prototype.randomPosition = function () {
  return [Math.random() * Game.DIM_X, Math.random() * Game.DIM_Y];
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  this.asteroids.forEach (function (el) {
    el.draw(ctx);
  });
};

Game.prototype.moveObjects = function () {
  this.asteroids.forEach (function (el) {
    el.move(); });
};

Game.prototype.wrap = function (pos) {
  var x = pos[0];
  var y = pos[1];
  if (x > Game.DIM_X) {
    x = 0;
  } else if (x < 0) {
    x = Game.DIM_X;
  }
  y = y > Game.DIM_Y ? 0 : y;
  y = y < 0 ? Game.DIM_Y : y;
  return [x, y];
};

})(); // end of the IIFE
