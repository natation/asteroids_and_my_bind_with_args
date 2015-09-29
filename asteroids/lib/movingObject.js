(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

var MovingObject = Asteroids.MovingObject = function (attributes) {
  // attributes = pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00", game: game}

  this.pos = attributes.pos;
  this.vel = attributes.vel;
  this.radius = attributes.radius;
  this.color = attributes.color;
  this.game = attributes.game;
};

// Moving.Object.randomAsteroids = function (maxX, maxY, numAsteroids) {
//
// };

MovingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );
  ctx.fill();
};

MovingObject.prototype.move = function () {
  this.pos = this.game.wrap([this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]]);
};



})(); // end of IIFE
