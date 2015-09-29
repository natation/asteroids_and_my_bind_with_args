(function () {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function () {
    var that = this;
    setInterval (function () {
      that.game.moveObjects();
      // check if collided?
      that.game.draw(that.ctx);
    }, 20);
  };


})(); // end of IIFE
