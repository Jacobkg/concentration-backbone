window.Scoreboard = Backbone.Model.extend({

  initialize: function() {
    this.set('currentPlayer', 1);
    this.set('oneScore', 0);
    this.set('twoScore', 0);
  },

  playerOneScore: function() {
    return this.get('oneScore');
  },

  playerTwoScore: function() {
    return this.get('twoScore');
  },

  currentPlayer: function() {
    return this.get('currentPlayer');
  },

  switchPlayers: function() {
    var newPlayer = this.get('currentPlayer') == 1 ? 2 : 1;
    this.set('currentPlayer', newPlayer);
  },

  increaseCurrentPlayerScore: function() {
    if (this.get('currentPlayer') == 1) {
      this.set('oneScore', this.get('oneScore') + 1);
    } else {
      this.set('twoScore', this.get('twoScore') + 1);
    }
  }

});