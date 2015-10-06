window.CardCollection = Backbone.Collection.extend({
  model: Card,

  initialize: function() {
    this.on('change:state', function(card) {
      var peeked = this.where({ state: 'peeked' });
      if (peeked.length > 2) {
        card.cover();
      } else if (peeked.length == 2) {
        _.delay(this.revealCards, 1000, peeked[0], peeked[1]);
      }
    });
  },

  revealCards: function(card1, card2) {
    if (card1.get('symbol') != card2.get('symbol')) {
      card1.cover();
      card2.cover();
    } else {
      card1.solve();
      card2.solve();
    }
  }
});