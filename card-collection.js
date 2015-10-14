window.CardCollection = Backbone.Collection.extend({
  model: Card,

  initialize: function(parameters) {
    var scoreboard = parameters.scoreboard;
    this.on('change:state', function(card) {
      var peeked = this.where({ state: 'peeked' });
      if (peeked.length > 2) {
        card.cover();
      } else if (peeked.length == 2) {
        var card1 = peeked[0];
        var card2 = peeked[1];
        if (card1.get('symbol') == card2.get('symbol')) {
          card1.solve();
          card2.solve();
          scoreboard.increaseCurrentPlayerScore();
        } else {
          _.delay(this.hideCards, 1000, scoreboard, card1, card2);
        }
      }
    });
  },

  hideCards: function(scoreboard, card1, card2) {
    card1.cover();
    card2.cover();
    scoreboard.switchPlayers();
  }

});