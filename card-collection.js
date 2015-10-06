window.CardCollection = Backbone.Collection.extend({
  model: Card,

  initialize: function() {
    this.on('change:isHidden', function(a,b,c) {
      var revealedModels = this.where({isHidden: false, isCompleted: false});
      if (revealedModels.length == 2) {
        this.disableCards();
        _.delay(this.revealCards, 1000, this, revealedModels);
      }
    });
  },

  disableCards: function() {
    this.forEach(function(card) {
      card.set('isActive', false);
    })
  },

  enableCards: function() {
    this.forEach(function(card) {
      card.set('isActive', true);
    })
  },

  revealCards: function(collection, cards) {
    if (cards[0].get('symbol') != cards[1].get('symbol')) {
      _.each(cards, function(card) {
        card.set('isHidden', true);
      });
    } else {
      _.each(cards, function(card) {
        card.set('isCompleted', true);
      });
    }
    collection.enableCards();
  }
});